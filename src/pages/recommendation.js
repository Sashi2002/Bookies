import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";

const RecommendationPage = () => {
  return (
    <div className="">
      <Navbar />
      <header className="bg-black px-4 h-20 flex items-center">
        <h1 className="text-white text-3xl font-bold mb-2">Recommendations</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/book4.jpg"
            alt="Book Cover"
            className="rounded-t-lg h-96 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">Book 4</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-red-500"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/book5.jpg"
            alt="Book Cover"
            className="rounded-t-lg h-96 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">Book 5</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-red-500"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/book6.jpg"
            alt="Book Cover"
            className="rounded-t-lg h-96 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">Book 6</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-red-500"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/book1.jpg"
            alt="Book Cover"
            className="rounded-t-lg h-96 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">Book 1</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-red-500"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/book2.jpg"
            alt="Book Cover"
            className="rounded-t-lg h-96 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">Book 2</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-red-500"
            >
              Buy Now
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img
            src="/book3.jpg"
            alt="Book Cover"
            className="rounded-t-lg h-96 w-full"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium mb-2">Book 3</h2>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a
              href="#"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-red-500"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecommendationPage;
