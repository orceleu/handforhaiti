import React from "react";
import Footer from "../component/Footer";
import Image from "next/image";
import sante1 from "../../public/logodonation.png";
export default function page() {
  return (
    <>
      <p className="p-10 text-xl font-semibold"> Who we are</p>
      <Image
        width={60}
        height={60}
        src={sante1}
        alt=""
        className=" ml-10 my-auto "
      />
      <div className="p-10">
        <p>
          HandforHaiti, an organization dedicated to providing the necessary
          assistance and support to those most in need in Haiti. Our mission is
          rooted in the desire to create a positive and sustainable impact in
          the most vulnerable communities in our country. Our Commitment We
          believe in the power of solidarity and collective action to transform
          lives and build a better future. Since our inception, we have been
          committed to:
        </p>
        <p className="font-semibold my-1"> Providing humanitarian aid: </p>
        <p>
          {" "}
          We work tirelessly to address urgent needs in health, education,
          housing, and food security.
        </p>

        <p className="font-semibold my-1">Promoting sustainable development:</p>

        <p>
          We are committed to investing in projects and initiatives that promote
          long-term economic and social development in our communities.
        </p>

        <p className="font-semibold my-1">Empowering individuals:</p>
        <p>
          We believe in empowering individuals and communities by equipping them
          with the tools, resources, and skills necessary to take charge of
          their own future.
        </p>
        <p className="my-3 ">
          The founders of the small association have been involved with Haiti
          since 2016. Barbara and Michael Kaasch have been privately assisting
          since 2016. HandforHaiti has officially existed since 2016 and is
          built on many years of volunteer experience in the country! We can be
          proud of this! We cover administrative costs privately, out of our own
          pockets. This is possible because we are a small club without
          hydraulic administration. There is no salary for volunteers. Our goal:
          to make young people independent of external aid so that they can
          later stand on their own feet and have a future perspective. We
          don&apos;t just help in case of disaster. We create sustainable
          long-term prospects for children and young people. This way, we
          prevent refugee movements. Helping in the country makes much more
          sense!
        </p>
        <p className="underline my-1">
          Our Impact Thanks to the generous support of our donors, partners, and
          volunteers, we have been able to make significant progress in the
          fight against poverty, injustice, and inequality in Haiti.
        </p>
        <p>
          Among our recent achievements: Providing Haitian children with access
          to quality education. Implementing community health programs aimed at
          preventing malnutrition and providing essential medical care to the
          most vulnerable populations. Organizing training workshops and
          employment programs aimed at empowering young people and women by
          offering them opportunities for professional and economic development.
        </p>
        <p className="my-5 font-semibold">Join Us </p>
        <p>
          Do you want to join us in creating a positive impact in Haiti?
          <a href="/contact" className="underline ">
            Join the HandforHaiti family today
          </a>{" "}
          and contribute to building a better future for all. Together, we can
          make a difference.
        </p>
      </div>
      <div className="h-3 bg-gray-700 my-16"></div>

      <Footer />
    </>
  );
}
