import Image from "next/image";
import Navbar from "../components/Navbar";
import NaviMain from "../components/NaviMain";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div>
      <NaviMain />
      <LandingPage />
    </div>
  );
};