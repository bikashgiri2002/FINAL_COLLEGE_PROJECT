# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 

 # Responsive Breakpoints:
Mobile (<640px):
The default settings apply, like text-3xl, mt-[80px], px-8, etc.

Small Screens (sm:): This applies when the screen width is greater than or equal to 640px. It adjusts the text to 4xl and increases the margins to ensure everything still fits and looks good.

Medium Screens (md:): This applies when the screen width is greater than or equal to 768px (tablets and up). The text size becomes 5xl, and larger margins are used for proper spacing.

Large Screens (lg: and above): We could add additional tweaks if needed for large desktop screens, though in this case, the layout already looks good.


Welcome Page Documentation for StockMate
Overview
This Welcome page is a landing page for StockMate, an intelligent inventory management solution. The page includes several sections such as a hero section, tagline, features, customer testimonials, automated alerts, and an FAQ section. It is designed with responsiveness in mind, leveraging Tailwind CSS to adapt across various screen sizes.

Components Overview
1. FAQItem Component
The FAQItem component is used to display each frequently asked question. It manages the open/close state for the answer, ensuring a collapsible FAQ section.

Code for FAQItem:
jsx
Copy
Edit
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 border-b pb-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg text-gray-700">{question}</h4>
        <span className="text-gray-800">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 break-words max-w-full">{answer}</p>
      )}
    </div>
  );
};
Props: question, answer

State: isOpen – toggles the visibility of the answer.

Styling: Uses Tailwind CSS classes to ensure responsiveness.

2. Welcome Page (Main Component)
The Welcome component acts as the main container for the page, organizing various sections such as the hero section, features, customer testimonial, and more.

Code for Welcome:
jsx
Copy
Edit
const Welcome = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => navigate("/login");

  const faqData = [
    {
      question: "What is StockMate?",
      answer: "StockMate is an intelligent inventory management solution...",
    },
    // Other FAQ data
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20 text-black">
            Empowering Your Business with Intelligent Inventory Solutions
          </h1>
          <h2 className="mt-6 text-lg sm:text-xl text-black">
            Manage your stock, orders, and business growth with ease...
          </h2>
          <div className="mt-8">
            <button
              onClick={handleLoginClick}
              className="px-8 py-4 bg-yellow-500 text-black rounded-md hover:bg-blue-400 text-lg"
            >
              Begin Exploring
            </button>
          </div>
          <img
            className="mt-12 mx-auto rounded-2xl w-full max-w-[1200px]"
            src="/dashboard.png"
            alt="Dashboard Preview"
          />
        </div>

        {/* Tagline */}
        <div className="text-center mt-50">
          <h2 className="text-3xl md:text-3xl font-bold text-orange-800">
            StockMate simplifies inventory management...
          </h2>
        </div>

        {/* Features */}
        {/* Each Feature Block */}
        <div className="mt-50 space-y-20">
          {[
            {
              img: "/multi.jpg",
              title: "Multi-location management",
              text: "Effortlessly manage inventory across multiple locations...",
            },
            // Other feature objects
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={feature.img}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-[40%] xl:w-[30%] rounded-xl"
                alt={feature.alt}
              />
              <div className="text-black text-center md:text-left max-w-xl">
                <h2 className="text-2xl font-bold">{feature.title}</h2>
                <p className="text-base text-gray-600 mt-5">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div className="text-center mt-20">
          <img
            src="/alert.jpg"
            className="w-40 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 object-cover mx-auto rounded-full"
            alt="Alerts"
          />
          <h2 className="text-2xl font-bold text-black mt-8">Automated Alerts</h2>
          <p className="text-base text-gray-600 mt-5">
            Automated alerts in StockMate inventory provide real-time notifications...
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-yellow-700">
            Our customers love using StockMate inventory
          </h2>
          <p className="text-xl text-black mt-10 font-semibold">Amit Sharma, Owner of FreshMart Grocery Store</p>
          <p className="text-base text-black mt-5 max-w-3xl mx-auto">
            "StockMate has been a game-changer for my grocery shop..."
          </p>
          <img
            src="/stockmate_icon.png"
            className="w-30 h-30 mt-10 rounded-full mx-auto"
            alt="Customer"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-green-800">
            Upgrade to an All-in-One Inventory Management Solution
          </h2>
          <button
            onClick={handleLoginClick}
            className="px-16 py-4 bg-red-700 text-white rounded-md hover:bg-green-400 text-lg mt-9"
          >
            Let's Check it!
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
Key Sections of the Page
Hero Section:

This section features a prominent heading and subheading, explaining StockMate’s value proposition.

It includes a button leading to the login page (Begin Exploring).

The hero section also contains a dashboard preview image.

Tagline:

A succinct sentence that emphasizes StockMate’s capability in simplifying inventory management.

Features Section:

This section is dedicated to showcasing StockMate’s key features like multi-location management, bundle offerings, sales history tracking, role-based access control, and reports & analytics.

Each feature is displayed with an image and a short description.

Automated Alerts:

This section highlights the benefit of automated alerts for stock management, making inventory updates timely and efficient.

Customer Testimonial:

A testimonial from a real user adds social proof and credibility to the product, helping potential customers relate to the product’s value.

Call to Action (CTA):

A strong CTA urging visitors to check out the product and consider upgrading their inventory management system.

FAQ Section:

A collapsible FAQ section powered by the FAQItem component, allowing users to toggle and view answers to common questions.

Footer Section
The footer contains:

Company Information: A brief description of StockMate.

Quick Links: Links to the About Us, Privacy Policy, Terms of Service, and FAQ pages.

Social Media Links: Links to Facebook, Twitter, LinkedIn, and Instagram.

Contact Information: Provides an email and phone number for support.

Newsletter Signup: Allows users to subscribe to updates from StockMate.

Legal Information: A copyright statement.

Key Libraries Used
React: The main framework for building the UI.

React Router: For navigation between pages (used for login).

Tailwind CSS: For styling the page with a mobile-first approach and responsive design.

Font Awesome: For displaying social media icons.

Conclusion
This Welcome page serves as a comprehensive introduction to StockMate, providing users with essential information, features, and a smooth navigation experience. The use of interactive components like the collapsible FAQ and visually appealing elements like testimonials and the hero section creates an engaging and user-friendly experience.