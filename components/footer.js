import Image from "next/image";
import bluneo from "../public/logo.png";
import { FaDiscord } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { SiOpensea } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center flex-row max-lg:flex-col-reverse max-lg:gap-4 sm:mx-20 mt-20 ">
        <div className="flex justify-center items-center lg:items-start  flex-col lg:w-2/5">
          <span className="text-6xl max-sm:text-3xl font-bold ">Bookies</span>
          <p className="sm:text-2xl">
            "A word after a word after a word is power."
          </p>
          <div className="flex justify-center items-center flex-row gap-6 my-6">
            <span className="h-8 w-8">
              <FaDiscord className="h-full w-full" />
            </span>
            <span className="h-8 w-8">
              <SiTwitter className="h-full w-full" />
            </span>
            <span className="h-8 w-8">
              <AiFillInstagram className="h-full w-full" />
            </span>
            <span className="h-8 w-8">
              <ImLinkedin className="h-full w-full" />
            </span>
            <span className="h-8 w-8">
              <SiOpensea className="h-full w-full" />
            </span>
          </div>
          <div className="flex justify-center items-center flex-row max-sm:flex-col gap-2 ">
            <button class="bg-black hover:bg-red-500 text-white border-2 border-black font-bold p-2 rounded-full h-12 w-40 max-sm:w-72">
              Subscription
            </button>
            <button class="bg-white text-black border-2 border-black font-bold p-2 rounded-full h-12 w-40 max-sm:w-72">
              Community
            </button>
          </div>
          <span className="text-sm mt-6">Agrawal Book Stores </span>
        </div>
        <div className="flex justify-center items-center lg:w-3/5">
          <Image src={bluneo} height={300} width={300} />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <span>Powered by</span>
        <Image src={bluneo} height={25} width={25} />
        <span>BOOKIES</span>
      </div>
    </footer>
  );
};
export default Footer;
