import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import b1 from "../../public/surprise.jpg";

const Book5 = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">
        <Image src={b1} alt="Book Cover" className="rounded-t-lg h-96 w-full" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">
            "Surpise de chuke Sanam" by Abode Guards
          </h2>
          <p className="text-gray-700 mb-4 text-sm">
            Even with the best of intentions, surprises can sometimes go awry,
            leaving us feeling disappointed. But true friendship isn't about the
            perfect plan, it's about being there for each other.
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
export default Book5;
