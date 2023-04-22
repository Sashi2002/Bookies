import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import Landing from "../../components/landing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Footer />
    </main>
  );
}
