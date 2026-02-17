import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import Searchbar from "@/app/components/Searchbar";
import WhoweAre from "./components/WhoweAre";
import WeAlwaysProvide from "./components/WeAlwaysProvide";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoweAre/>
      <WeAlwaysProvide/>
      <Footer />
      
    </div>
  );
}
