import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/Navbar";
import React from "react";
import groupchildren from "../../../public/groupchildrend2.jpg";
import Image from "next/image";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center p-10">
        <Image src={groupchildren} alt="education" />
      </div>
      <p className="text-center text-3xl my-5">Health</p>
      <p className="p-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        officia ipsa minima, rem ea aliquam fugiat eos consequuntur minus
        similique error a voluptate veritatis repellendus, cumque at beatae.
        Nostrum, aliquam.
      </p>

      <div className="h-3 bg-gray-700 my-16"></div>
      <Footer />
    </>
  );
}
