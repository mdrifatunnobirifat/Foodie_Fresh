import Footer from "@/app/components/Footer";
import Searchbar from "@/app/components/Searchbar";
import WhoweAre from "./components/WhoweAre";
import WeAlwaysProvide from "./components/WeAlwaysProvide";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OrganicFood from "./components/OrganicFoods";
import WeAlways from "./components/WeAlways";
import LetsWorkTogether from "./components/LetsWorkTogether";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <WhoweAre/>
      <WeAlwaysProvide/>
      <OrganicFood/>
      <WeAlways/>
      <LetsWorkTogether/>
      <Footer/>

    </div>
  );
}
