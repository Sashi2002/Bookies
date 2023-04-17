import Link from "next/link";
import Image from "next/image";
import bluneo from "../../public/logo.png";
import { RxCross1 } from "react-icons/rx";
const MobileNav = (props) => {
  return (
    <div className="flex flex-col justify-start items-start p-4 right-[-16px] top-[-12px] text-black bg-white w-screen gap-4 rounded-sm font-semibold absolute ">
      <div className="flex justify-between items-center flex-row w-full mr-6">
        <Image src={bluneo} height={60} width={50} />
        <span onClick={props.handler}>
          <RxCross1 />
        </span>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 rounded-sm font-semibold w-full p-4 border">

        <ul>Home</ul>

        <Link href="/recommendation">
          <ul>Recommendation</ul>
          </Link>

          <Link href="/subscription">
          <ul>Subscription</ul>
          </Link>

        <ul>Community</ul>

        <ul>Review</ul>

        <div className="flex justify-center items-center w-full mt-4">
          <Link href="/login">
              <button class="bg-black hover:bg-red-500  text-white font-bold p-1 rounded-full h-10 w-44">
                Login
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
