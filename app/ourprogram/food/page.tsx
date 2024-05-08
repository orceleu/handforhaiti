import React from "react";
import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/Navbar";
import groupchildren from "../../../public/childrensss.jpg";
import carryrice from "../../../public/duriz.jpg";
import eating from "../../../public/eating.jpg";

import Image from "next/image";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center p-10">
        <Image src={carryrice} alt="education" />
      </div>
      <p className="text-center text-3xl my-5">Food</p>
      <p className="p-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        officia ipsa minima, rem ea aliquam fugiat eos consequuntur minus
        similique error a voluptate veritatis repellendus, cumque at beatae.
        Nostrum, aliquam.
      </p>
      <div className="flex justify-center p-10">
        <Image src={groupchildren} alt="education" />
      </div>
      <div className="flex justify-center p-10">
        <Image src={eating} alt="education" />
      </div>

      <div className="h-3 bg-gray-700 my-16"></div>
      <Footer />
    </>
  );
}
