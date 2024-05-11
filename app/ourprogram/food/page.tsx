import React from "react";
import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/Navbar";
import groupchildren from "../../../public/childrensss.jpg";
import carryrice from "../../../public/duriz.jpg";
import eating from "../../../public/eating.jpg";
import kits from "../../../public/fooddistribution.jpg";
import foodeating from "../../../public/foofchildeating.jpg";

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
        In impoverished neighborhoods in Haiti, many children attend school on
        empty stomachs. We provide food kits to these kids, packed with
        essentials like rice, beans, canned goods, and hot meals . Additionally,
        we extend support to their families, offering food kits containing
        similar items to ensure they have enough to eat at home. With the
        assistance of donors and volunteers, we ensure that these children and
        their families receive nourishment, both at school and in their
        households, every day.
      </p>
      <div className="flex justify-center p-10">
        <Image src={groupchildren} alt="education" />
      </div>
      <div className="flex justify-center p-10">
        <Image src={eating} alt="education" />
      </div>
      <div className="flex justify-center p-10">
        <Image src={foodeating} alt="education" />
      </div>
      <div className="flex justify-center p-10">
        <Image src={kits} alt="education" />
      </div>
      <div className="h-3 bg-gray-700 my-16"></div>
      <Footer />
    </>
  );
}
