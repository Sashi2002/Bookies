import Image from "next/image";
import bluneo from "../../public/logo.png";
import mukta from "../../public/Mukta.webp";
const Mukta = () => {
  return (
    <div>
      <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
        <div className="flex justify-center mt-4">
          <Image
            src={mukta}
            height={100}
            width={100}
            className="rounded-full border-solid border-white border-2"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-white text-sm bold font-sans">Mukta Thakur</h3>
          <p className="mt-2 font-sans font-light text-white">
            Hello, i'm out from you ERA
          </p>
        </div>
        <div class="flex justify-center pb-3 text-white">
          <div class="text-center mr-3 border-r pr-3">
            <h2>1.1M</h2>
            <span>Followers</span>
          </div>
          <div class="text-center">
            <h2>616</h2>
            <span>Books Read</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mukta;
