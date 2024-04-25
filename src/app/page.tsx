import Image from "next/image";
import { SignupForm } from "@/components/SignupForm";
import { MultiStepLoader } from "@/components/MultiStepLoader";
import { NavbarMain } from "@/components/NavbarMain";
import { GlobeDemo } from "@/components/GlobeDemo";
export default function Home() {
  return (
    <div className="bg-slate-950" >
      <div className="flex justify-center mb-8 mt-8">
      {/* <SignupForm/> */}
      {/* <MultiStepLoader/> */}
      {/* <NavbarMain/> */}
      <GlobeDemo/>
      </div>
    </div>
  );
}
