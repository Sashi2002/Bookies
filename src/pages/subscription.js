import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";

const SubscriptionPage = () => {
  return (
    <main>
      <Navbar />
      <div className="md:h-screen ">
        <header className="bg-black p-2">
          <h1 className="text-white text-2xl font-bold text-center py-6">
            Subscription
          </h1>
        </header>
        <div className="flex flex-col md:flex-row justify-center gap-6 py-8 px-4">
          <div className="flex-1 md:w-1/4 border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Basic</h2>
            <ul className="list-disc list-inside">
              <li>Access to 100+ books</li>
              <li>24/7 support</li>
              <li>1 device only</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Get Started
            </button>
          </div>
          <div className="flex-1 md:w-1/4 border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Pro</h2>
            <ul className="list-disc list-inside">
              <li>Access to 200+ books</li>
              <li>24/7 support</li>
              <li>Personalized learning plan</li>
              <li>₹ 299 / Year</li>
              <li>₹ 179 / 6 Months</li>
              <li>₹ 99 / 3 Months</li>
              <li>2 device only</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Get Started
            </button>
          </div>
          <div className="flex-1 md:w-1/4 border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Student</h2>
            <ul className="list-disc list-inside">
              <li>1 Month free on Student ID</li>
              <li>₹ 199 / Year</li>
              <li>₹ 99 / 6 Months</li>
              <li>Single User</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              Get Started
            </button>
          </div>
          <div className="flex-1 md:w-1/4 border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-medium mb-4">Premium</h2>
            <ul className="list-disc list-inside">
              <li>Access to 300+ books</li>
              <li>Certificate of completion</li>
              <li>24/7 support</li>
              <li>Personalized learning plan</li>
              <li>₹ 599 / Year</li>
              <li>₹ 299 / 6 Months</li>
              <li>5 device only</li>
            </ul>
            <button className="bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default SubscriptionPage;
