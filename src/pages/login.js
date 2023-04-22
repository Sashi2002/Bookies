import React from "react";
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center items-center mb-4">
            <img src="/logo.png" alt="" className="w-24 h-24 mr-2" />
          </div>
          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="p-1.5 mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-red-500 focus:ring-red-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="email">
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                placeholder="Enter a user name"
                className="p-1.5 mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-red-500 focus:ring-red-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="p-1.5 mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-red-500 focus:ring-red-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="p-1.5 mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-red-500 focus:ring-red-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password again"
                className="p-1.5 mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-red-500 focus:ring-red-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-500  text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Join Now
              </button>
              <Link href="/login">
                <h2 className="mt-2 text-center">Already have an account</h2>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
