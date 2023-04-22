import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import Image from "next/image";
import bluneo from "../../public/logo.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import Arnabya from "../../components/profiles/arnabya";
import Mukta from "../../components/profiles/mukta";

const Community = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#f4f5f4]">
        <div className="px-[5%] bg-white">
          <div className="flex justify-center items-center flex-row max-sm:flex-col max-sm:ml-[10px] border-4 border-black w-full h-full rounded-3xl">
            <div className="flex justify-center items-center w-1/2 p-2 max-sm:w-11/12">
              <Image src={bluneo} height={300} width={300} />
            </div>
            <div className="flex justify-center items-center flex-col w-1/2 p-6 lg:p-16 max-sm:w-11/12 ">
              <h1 className="text-3xl max-md:text-xl font-bold w-full">
                WHAT DOES OUR Community DO ??
              </h1>
              <p className="my-6 max-sm:my-4 text-xl max-md:text-sm w-full">
                Our Bookies recommend book for the user according to the genres
                ...whatever the user wants or like to read. All the genres are
                provided as per user choice. It provides the user to review the
                book according to thier interest and also can take the
                subscription for thier book.
              </p>
              <p className="mb-10 max-sm:mb-4 text-xl max-md:text-sm w-full">
                The books are available at the least cost from the
                outside libraries.
              </p>

              <div className="flex justify-start items-center flex-row max-sm:flex-col gap-2 w-full">
                <button class="bg-black hover:bg-red-500 text-white border-2 border-black font-bold py-2 px-4 rounded-full h-14 w-52 max-sm:w-60">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-row max-md:flex-col my-10 mx-20">
        <span className="text-2xl font-bold max-md:mb-6">
          Looking to Join our Community !
        </span>
        <div className="flex justify-center items-center gap-4">
          <span className="text-xl flex justify-center items-center gap-2">
            Click here to Join <HiOutlineArrowRight className="mt-1.5" />
          </span>
          <button class="text-black font-bold py-2 px-4 rounded-full border-2 border-black w-40 h-14 ml-2">
            Join
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold">
          Founders of our Community
        </h1>
        <div className="flex flex-wrap justify-evenly items-center py-8">
          <Arnabya />
          <Mukta />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Community;
