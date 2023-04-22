import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import Image from "next/image";
import bg from "../../public/gg.jpg";
import { RiStarSFill } from "react-icons/ri";
const Review = () => {
  return (
    <div>
      <Navbar />
      {/* <Image src={bg} className="absolute h-screen w-screen" /> */}
      <div class="flex flex-row justify-center items-center min-h-screen bg-app bg-center bg-no-repeat bg-cover bg-[url('../../public/gg.jpg')]">
        <main class="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
          <div class="flex-1 p-4 lg:p-6">
            <div class="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
              <div class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 px-6 flex flex-col relative undefined pb-6">
                <div className="flex flex-row justify-between items-center mb-2 mt-4">
                  <div class="text-white text-lg font-medium ">
                    Sashikanta Mohanty
                  </div>
                  <div class="text-white right-2 flex">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
                <div class="text-white font-normal">
                  "Atomic Habits" is a practical guide to building good habits
                  and breaking bad ones, using a four-step model and real-life
                  examples. The writing is clear and engaging, making it an easy
                  and highly recommended read for anyone looking to make
                  positive changes in their life.
                </div>
              </div>
              <div class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 px-6 flex flex-col relative undefined pb-6">
                <div className="flex flex-row justify-between items-center mb-2 mt-4">
                  <div class="text-white text-lg font-medium ">Ashi Gupta</div>
                  <div class="text-white right-2 flex">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
                <div class="text-white font-normal">
                  "The Alchemist" is a beautiful and inspiring novel that blends
                  spirituality, philosophy, and adventure into a compelling
                  narrative. Its themes of following your heart and staying true
                  to yourself are timeless and make it a must-read for anyone
                  seeking inspiration and guidance on their own journey of
                  self-discovery.
                </div>
              </div>
              <div class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 px-6 flex flex-col relative undefined pb-6">
                <div className="flex flex-row justify-between items-center mb-2 mt-4">
                  <div class="text-white text-lg font-medium ">Aakash Sahu</div>
                  <div class="text-white right-2 flex">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
                <div class="text-white font-normal">
                  "1984" is a haunting and prophetic novel that imagines a world
                  in which totalitarianism has triumphed and individual freedom
                  has been abolished. The writing is stark and powerful, and the
                  themes of government surveillance, censorship, and propaganda
                  are as relevant today as they were when the book was first
                  published over 70 years ago.
                </div>
              </div>
              <div class="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 px-6 flex flex-col relative undefined pb-6">
                <div className="flex flex-row justify-between items-center mb-2 mt-4">
                  <div class="text-white text-lg font-medium ">
                    Silky-Milky-DarkChoclate
                  </div>
                  <div class="text-white right-2 flex">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
                <div class="text-white font-normal">
                  "To Kill a Mockingbird" is a powerful and thought-provoking
                  novel that explores themes of racism, prejudice, and justice
                  in the American South during the 1930s. The writing is
                  masterful and the characters are deeply human and memorable,
                  making it a classic and timeless work of literature.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Review;
