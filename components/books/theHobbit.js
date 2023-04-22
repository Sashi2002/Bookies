import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import b1 from "../../public/book2.jpg";

const Book2 = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">
        <Image src={b1} alt="Book Cover" className="rounded-t-lg h-96 w-full" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">
            The Hobbit" by J.R.R. Tolkien
          </h2>
          <p className="text-gray-700 mb-4 text-sm">
            "The Hobbit" by J.R.R. Tolkien is a beloved fantasy novel about
            Bilbo Baggins, a hobbit who is swept up in an epic adventure to
            reclaim a treasure hoard from a fearsome dragon.
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
export default Book2;
