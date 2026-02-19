import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import Searchbar from "@/app/components/Searchbar";
import WhoweAre from "./components/WhoweAre";
import WeAlwaysProvide from "./components/WeAlwaysProvide";
import OrganicFoods from "./components/OrganicFoods";
import WeAlways from "./components/WeAlways";
import LetsWorkTogether from "./components/LetsWorkTogether";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoweAre/>
      <WeAlwaysProvide/>
      <OrganicFoods/>
      <WeAlways/>
      <LetsWorkTogether/>
      <Footer />
      
    </div>
  );
}
