import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import b1 from "../../public/Arnabya.jpg";

const Book6 = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">
        <Image src={b1} alt="Book Cover" className="rounded-t-lg h-96 w-full" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">
            "Kahani ek baniye ki" by Harsh & Sashi
          </h2>
          <p className="text-gray-700 mb-4 text-sm">
            A Baniya friend having shrewd business skills, with a sharp mind for
            deals and negotiations that can leave others in awe. Always willing
            to lend a helping hand whenever you need it.
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
export default Book6;
