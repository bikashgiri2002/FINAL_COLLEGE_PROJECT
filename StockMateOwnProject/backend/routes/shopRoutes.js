import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import validator from "validator"; // add this at the top
import Shop from "../models/shopModel.js";
import protect from "../middleware/authMiddleware.js";
import {
  sendConfirmationEmail,
  sendPasswordResetEmail,
} from "../utils/emailService.js";

const router = express.Router();

// Register Shop

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const existingShop = await Shop.findOne({ email });
    if (existingShop) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const shop = await Shop.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    try {
      await sendConfirmationEmail(email, name);
      return res.status(201).json({
        message: "Shop registered and confirmation email sent.",
      });
    } catch (emailError) {
      console.warn("⚠️ Failed to send email:", emailError.message);
      return res.status(201).json({
        message:
          "Shop registered successfully, but failed to send confirmation email.",
        emailError: emailError.message,
      });
    }
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

// Login Shop
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const shop = await Shop.findOne({ email });

    if (!shop || !(await bcrypt.compare(password, shop.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: shop._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      shop: { id: shop._id, name: shop.name, email: shop.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Get Shop Profile
router.get("/profile", protect, async (req, res) => {
  try {
    const shop = await Shop.findById(req.shop.id).select("-password");
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }
    res.json(shop);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Request Password Reset (Send Token via Email)
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const shop = await Shop.findOne({ email });
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    shop.resetPasswordToken = resetTokenHash;
    shop.resetPasswordExpires = Date.now() + 1000 * 60 * 15; // 15 mins
    await shop.save();

    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;
    await sendPasswordResetEmail(shop.email, shop.name, resetURL);

    res.json({ message: "Reset password link sent to email." });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Reset Password using Token
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  try {
    const shop = await Shop.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!shop) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    shop.password = await bcrypt.hash(newPassword, 10);
    shop.resetPasswordToken = undefined;
    shop.resetPasswordExpires = undefined;

    await shop.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
