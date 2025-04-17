import React from "react";

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen">
      <div className="flex flex-row gap-10 ml-18">
        <img
          src="/multi.jpg"
          alt="multi"
          className="h-[350px] w-[550px] m-8 inset-shadow-blue-950 rounded-lg"
        ></img>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-blue-950 mt-20">
            Multi-location management
          </h1>
          <p className="h-[300px] w-[700px] font-medium mt-10 text-xl text-blue-950">
            Efficiently manage inventory across multiple locations with
            Stockmate's seamless multi-location tracking. Keep stock levels
            updated in real time, transfer items between branches effortlessly,
            and receive location-specific alerts to prevent shortages. Generate
            insightful reports for each warehouse or store, ensuring balanced
            inventory distribution. Simplify operations by assigning
            location-based managers and automating stock adjustments for optimal
            efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-10 ml-23">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-blue-950 mt-20">
            Bundle Offerings
          </h1>
          <p className="h-[300px] w-[700px] font-medium mt-10 text-xl text-blue-950">
            Enhance sales and streamline inventory with Stockmate’s Bundle
            Offering feature. Effortlessly group related products into
            attractive bundles, ensuring better value for customers while
            optimizing stock management. Track bundle sales, automate stock
            deductions, and adjust pricing dynamically to boost profitability.
            Improve customer engagement with curated package deals and maintain
            seamless inventory control across multiple locations. Simplify
            operations and maximize revenue effortlessly!
          </p>
        </div>
        <img
          src="/MARKET.png"
          alt="market"
          className="h-[350px] w-[550px] m-8 inset-shadow-blue-950 rounded-lg"
        ></img>
      </div>
      <div className="flex flex-row gap-10 ml-18">
        <img
          src="/istockphoto.jpg"
          alt="istock"
          className="h-[350px] w-[550px] m-8 inset-shadow-blue-950 rounded-lg"
        ></img>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-blue-950 mt-20">
            History Made Simple
          </h1>
          <p className="h-[300px] w-[700px] font-medium mt-10 text-xl text-blue-950">
            Effortlessly track past transactions and inventory changes with
            Stockmate’s History Made Simple feature. Instantly access detailed
            records of stock movements, sales, and adjustments across multiple
            locations. Generate reports with just a click, ensuring transparency
            and accuracy. Simplify audits, improve decision-making, and maintain
            a reliable inventory history—all in an easy-to-navigate interface
            designed for efficiency. Stay organized and in control at all times!
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-10 ml-23">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-blue-950 mt-20">
            Reports & Analytics
          </h1>
          <p className="h-[300px] w-[700px] font-medium mt-10 text-xl text-blue-950">
            Gain valuable insights into your inventory with Stockmate’s Reports
            & Analytics feature. Track sales trends, monitor stock movements,
            and analyze performance across multiple locations in real time.
            Generate detailed reports with ease, helping you optimize purchasing
            decisions and reduce waste. Make data-driven choices, improve
            efficiency, and stay ahead in inventory management with smart,
            automated analytics tailored for your business success.
          </p>
        </div>
        <img
          src="/report.png"
          alt="market"
          className="h-[350px] w-[550px] m-8 inset-shadow-blue-950 rounded-lg"
        ></img>
      </div>
      <div className="flex flex-row gap-10 ml-18">
        <img
          src="/email-varification.webp"
          alt="email-verification"
          className="h-[350px] w-[550px] m-8 inset-shadow-blue-950 rounded-lg"
        ></img>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-blue-950 mt-20">
            Email Verification
          </h1>
          <p className="h-[300px] w-[700px] font-medium mt-10 text-xl text-blue-950">
            Ensure secure access and reliable communication with Stockmate’s
            Email Verification feature. Verify user emails to prevent
            unauthorized access, protect sensitive inventory data, and enhance
            platform security. Email verification helps reduce fraud, ensures
            legitimate user registration, and improves account recovery.
            Strengthen trust and safeguard business operations by confirming
            user identities before granting system access. A secure inventory
            starts with verified users!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
