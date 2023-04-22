import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import b1 from "../public/Arnabya.jpg";
import Book1 from "./books/1984";
import Book2 from "./books/theHobbit";
import Book3 from "./books/book3";
import Book4 from "./books/book4";
import Book5 from "./books/book5";
import Book6 from "./books/book6";

const Landing = () => {
  return (
    <div className="">
      <nav className="flex items-start justify-evenly sm:items-center sm:flex-row flex-col-reverse gap-4 my-4 lg:mx-20 md:mx-10">
        <span className="font-semibold text-5xl tracking-tight ml-4 sm:w-1/2">
          Suggestions
        </span>
        <div className="flex justify-center sm:justify-end items-center w-1/2 max-sm:w-full mt-2">
          <div className="flex items-center justify-between text-gray-600 border-2 border-gray-300 rounded-lg p-2">
            <input
              className=" bg-white h-6 text-sm focus:outline-none pl-1.5 pr-1 w-60 lg:w-96 md:w-72"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="mr-1">
              <FiSearch />
            </button>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-4 sm:mx-6 md:mx-10">
        <Book1 />
        <Book6 />
        <Book3 />
        <Book4 />
        <Book2 />
        <Book5 />
      </div>
    </div>
  );
};
export default Landing;
