import React from "react";
import NavBar from "../component/Navbar";

export default function page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="my-auto">
          <label htmlFor="lastName" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="lastName"
            name="lastName"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
          <button className="bg-blue-500 mt-10">submit</button>
        </div>
      </div>
    </>
  );
}
