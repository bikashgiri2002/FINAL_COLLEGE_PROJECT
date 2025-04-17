import React from "react";

const Resources = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen p-5">
      <h1 className="text-center text-2xl font-bold mb-5">Resources</h1>
      <div className="get-stated flex flex-col gap-5 md:flex-row">
        <div className="image md:w-2/5 w-full md:h-[18rem] p-1">
          <img
            src="/get-stated.png"
            alt="get-started page"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center gap-2 p-2">
          <h2 className="text-2xl font-bold text-black">Get Started</h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl">
            Registering your shop on Stokemate is a quick and hassle-free
            process designed to help you get started in no time. With just a few
            simple steps, you can create your store, list your products, and
            begin selling to a wide audience. The platform offers a
            user-friendly interface, making it easy for both new and experienced
            sellers to manage their business efficiently. Stokemate also
            provides helpful tools for inventory management, order tracking, and
            customer engagement, ensuring a smooth selling experience. Whether
            you're a small business or an individual seller, Stokemate offers a
            convenient way to grow your online presence and reach more customers
            effortlessly. Start selling today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
