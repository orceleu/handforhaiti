import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import Head from "next/head";

export default function page() {
  return (
    <>
      <NavBar />

      <p className="text-2xl text-center my-10">Related topics</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        <a href="/blog/topic1">
          <p className="underline text-blue-700 hover:text-blue-800">
            How many gangs there are in haiti?
          </p>
        </a>
        <a href="/blog/topic1">
          <p className="underline text-blue-700 hover:text-blue-800">
            Who is Jimmy cherizier?
          </p>
        </a>

        <p className="underline  text-blue-700 hover:text-blue-800">
          How people live in Haiti?
        </p>
        <p className="underline   text-blue-700 hover:text-blue-800">
          Why Haiti facing this situation & how cope with that?
        </p>
        <p className="underline   text-blue-700 hover:text-blue-800">
          Humanitarian program/biden{" "}
        </p>
        <p className="underline  text-blue-700 hover:text-blue-800">
          does Haiti is really poor country?
        </p>
        <p className="underline  text-blue-700 hover:text-blue-800">
          ou est letat haitien,que fais son gouvernement?
        </p>
      </div>
      <div className="h-3 bg-gray-700 my-16"></div>

      <Footer />
    </>
  );
}
