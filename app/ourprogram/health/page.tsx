import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/Navbar";
import React from "react";
import groupchildren from "../../../public//lavemain.jpg";
import groupchildren2 from "../../../public//lavemain2.jpg";

import Image from "next/image";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center p-10">
        <Image src={groupchildren} alt="education" />
      </div>
      <div className="flex justify-center p-10">
        <Image src={groupchildren2} alt="education" />
      </div>
      <p className="text-center text-3xl my-5">Health</p>
      <p className="p-10">
        In Haiti, access to healthcare is often limited, especially in poor
        communities. We work to improve health by providing medical assistance
        and resources. We also focus on prevention, teaching about hygiene and
        healthy habits. With the support of donors and volunteers, we strive to
        ensure that everyone in Haiti has access to the healthcare they need to
        stay healthy and thrive.
      </p>

      <div className="h-3 bg-gray-700 my-16"></div>
      <Footer />
    </>
  );
}
