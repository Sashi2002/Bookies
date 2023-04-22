import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import b1 from "../../public/book1.jpg";

const Book1 = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">
        <Image src={b1} alt="Book Cover" className="rounded-t-lg h-96 w-full" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">1984" by George Orwell</h2>
          <p className="text-gray-700 mb-4 text-sm">
            "1984" by George Orwell is a dystopian novel set in a totalitarian
            society where the government exercises complete control over its
            citizens and their thoughts.
          </p>
          <div className="flex justify-end">
            <button className="bg-black text-white py-1.5 px-8 rounded-md hover:bg-red-500 ">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book1;
