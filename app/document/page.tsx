"use client";
import React, { useState } from "react";
import NavBar from "../component/Navbar";
import { Button } from "@/components/ui/button";

export default function page() {
  const [value, setvalue] = useState("");
  const [error, seterror] = useState(false);
  const [isempty, setempty] = useState(false);

  function submitPassword() {
    if (value !== "") {
      seterror(true);
    } else {
      setempty(true);
    }
  }
  return (
    <>
      <NavBar />
      <div className="flex justify-center p-16">
        <div>
          {error ? (
            <>
              <p className="text-red-500">Wong password, please contact us. </p>
            </>
          ) : null}
          {isempty ? (
            <>
              <p className="text-red-500">Empty </p>
            </>
          ) : null}

          <div className="my-3">
            <label htmlFor="lastName" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="lastName"
              name="lastName"
              value={value}
              onChange={(e: any) => {
                setvalue(e.target.value);
                seterror(false);
                setempty(false);
              }}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              required
            />
            <Button
              className="bg-gray-500 hover:bg-gray-600 mt-10"
              onClick={submitPassword}
            >
              submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
