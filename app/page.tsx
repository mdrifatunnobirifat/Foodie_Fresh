import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Searchbar/>
      <Features />
      <Footer />
      
    </div>
  );
}
