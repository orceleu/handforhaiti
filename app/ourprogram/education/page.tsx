import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/Navbar";
import React from "react";
import trainprof from "../../../public/profaccompagnement.jpg";
import educationchildren from "../../../public/topchildren.jpg";
import schoolstuff from "../../../public/schoolfuniture.jpg";

import Image from "next/image";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center p-10">
        <Image src={educationchildren} alt="education" />
      </div>
      <div className="flex justify-center p-10">
        <Image src={schoolstuff} alt="education" />
      </div>
      <p className="text-center text-3xl my-5">Education</p>
      <p className="p-5">
        In a country where access to education is often limited by financial,
        geographical, and socio-cultural obstacles, our mission is to break down
        these barriers and offer every child the opportunity to learn and
        thrive.
      </p>
      <p className="p-5">
        We firmly believe that education is the key to transforming lives and
        entire communities. By investing in the education of Haitian children,
        we not only provide them with future opportunities but also contribute
        to strengthening the social and economic fabric of their country.
      </p>
      <div className="flex justify-center p-10">
        <Image src={trainprof} alt="education" />
      </div>
      <p className="p-5">
        Our approach to education goes beyond simple classrooms. We work closely
        with local schools to provide educational resources, train teachers, and
        create an inclusive and stimulating learning environment. We also
        emphasize non-formal education by organizing workshops, mentoring
        programs, and extracurricular activities to enrich the educational
        experience of children and youth.
      </p>
      <p className="p-5">
        Additionally, we recognize the importance of promoting gender equality
        in education. By encouraging the schooling of girls and combating gender
        stereotypes, we contribute to building a more just and equitable
        society.
      </p>
      <p className="p-5">
        Together, with the support of our donors, partners, and dedicated
        volunteers, we continue to strive for a future where every Haitian child
        has access to quality education and can realize their full potential.
        Because we believe that every child deserves to dream big and aim high,
        regardless of their background or circumstances.
      </p>
      <div className="h-3 bg-gray-700 my-16"></div>
      <Footer />
    </>
  );
}
