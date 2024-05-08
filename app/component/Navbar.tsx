"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import sante1 from "../../public/logodonation.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiChevronsDown } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredpopup, setIsHoveredpopup] = useState(false);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHoveredpopup1, setIsHoveredpopup1] = useState(false);

  const [isHovered2, setIsHovered2] = useState(false);
  const [isHoveredpopup2, setIsHoveredpopup2] = useState(false);

  const router = useRouter();
  /*
<div className=" border-4 border-red-700 mx-auto  h-[67px] w-[187px]">
            <button className=" h-[60px] w-[180px] mx-auto my-auto hover:bg-blue-200 bg-transparent  font-bold text-black">
              <div className="flex items-center ml-5">
                <IoMdHeartEmpty className="h-10 w-10 " />
                donate
              </div>
            </button>
          </div>
*/
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white w-full  p-4  left-0 right-0 z-50 shadow-sm">
      <nav className="container px-1 md:px-6 mx-auto flex items-center justify-between">
        <div className="flex items-center ">
          <Image
            width={60}
            height={60}
            src={sante1}
            alt=""
            className=" mx-2 my-auto "
          />
          <p className="font-bold text-[14px] md:text-2xl ">Handforhaiti</p>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/">
            <p className=" hover:text-yellow-700 font-semibold ">Home</p>
          </Link>

          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                if (!isHoveredpopup) {
                  setIsHovered(false);
                }
              }, 90)
            }
          >
            <div className="flex items-center">
              <p className=" hover:text-yellow-700 font-semibold mx-1">
                Our work
              </p>
              <BsChevronDown className="mt-1" />
            </div>
            {isHovered && (
              <div
                className="absolute z-10 -ml-4 mt-2 px-2 w-48 bg-white shadow-lg rounded"
                onMouseEnter={() => setIsHoveredpopup(true)}
                onMouseLeave={() => {
                  setIsHoveredpopup(false);
                  setIsHovered(false);
                }}
              >
                <ul>
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setIsHovered(false);
                      router.push("/ourprogram/education");
                    }}
                  >
                    Education
                  </li>
                  <Separator />
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setIsHovered(false);
                      router.push("/ourprogram/health");
                    }}
                  >
                    Health
                  </li>
                  <Separator />
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setIsHovered(false);
                      router.push("/ourprogram/food");
                    }}
                  >
                    Food
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                if (!isHoveredpopup1) {
                  setIsHovered1(false);
                }
              }, 90)
            }
          >
            <div className="flex items-center">
              <p className=" hover:text-yellow-700 font-semibold mx-1">
                About us
              </p>
              <BsChevronDown className="mt-1" />
            </div>
            {isHovered1 && (
              <div
                className="absolute z-10 -ml-4 mt-2 px-2 w-48 bg-white shadow-lg rounded"
                onMouseEnter={() => setIsHoveredpopup1(true)}
                onMouseLeave={() => {
                  setIsHoveredpopup1(false);
                  setIsHovered1(false);
                }}
              >
                <ul>
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setIsHovered1(false)}
                  >
                    Our team
                  </li>
                  <Separator />
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setIsHovered1(false)}
                  >
                    Who we are
                  </li>
                  <Separator />
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setIsHovered1(false);
                    }}
                  >
                    <a href="/document">Document</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                if (!isHoveredpopup2) {
                  setIsHovered2(false);
                }
              }, 90)
            }
          >
            <div className="flex items-center">
              <p className="text-yellow-700 underline font-semibold mx-1">
                Get involved
              </p>
              <BsChevronDown className="mt-1" />
            </div>
            {isHovered2 && (
              <div
                className="absolute z-10 -ml-4 mt-2 px-2 w-48 bg-white shadow-lg rounded"
                onMouseEnter={() => setIsHoveredpopup2(true)}
                onMouseLeave={() => {
                  setIsHoveredpopup2(false);
                  setIsHovered2(false);
                }}
              >
                <ul>
                  <a href="#getupdate">
                    {" "}
                    <li
                      className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                      onClick={() => setIsHovered2(false)}
                    >
                      Get update
                    </li>
                  </a>

                  <Separator />
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setIsHovered2(false)}
                  >
                    Contact us
                  </li>
                  <Separator />
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setIsHovered2(false);
                      router.push("/blog");
                    }}
                  >
                    Blog
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link
            href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
            target="_blank"
          >
            <Button variant="destructive">
              <div className="flex items-center mx-4  ">
                <IoMdHeartEmpty className="h-5 w-5 " />
                donate
              </div>
            </Button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <Link
            href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
            target="_blank"
          >
            <Button variant="destructive" asChild>
              <div className="flex items-center   ">
                <p>Donate</p>
              </div>
            </Button>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-black mx-3 hover:text-yellow-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 ">
          <a href="/" className="block px-10 py-2 hover:text-yellow-700">
            Home
          </a>
          <Separator />

          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                if (!isHoveredpopup2) {
                  setIsHovered2(false);
                }
              }, 90)
            }
          >
            <div className="flex items-center">
              <p className="text-yellow-700 underline font-semibold mx-1">
                Get involved
              </p>
              <BsChevronDown className="mt-1" />
            </div>
            {isHovered2 && (
              <div
                className="absolute z-10 -ml-4 mt-2 px-2 w-48 bg-white shadow-lg rounded"
                onMouseEnter={() => setIsHoveredpopup2(true)}
                onMouseLeave={() => {
                  setIsHoveredpopup2(false);
                  setIsHovered2(false);
                }}
              >
                <ul>
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setIsHovered2(false)}
                  >
                    Get update
                  </li>
                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setIsHovered2(false)}
                  >
                    Contact us
                  </li>

                  <li
                    className="py-2 px-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setIsHovered2(false);
                      router.push("/blog");
                    }}
                  >
                    Blog
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/pages/contactUs">
            <p className="block px-10 py-2 hover:text-yellow-700">Our work</p>
          </Link>
          <Separator />

          <Link href="#">
            <p className="block px-10 py-2 hover:text-yellow-700">About</p>
          </Link>
          <Separator />

          <Link href="/pages/joinUs">
            {" "}
            <p className="text-yellow-700 ml-5 underline hover:text-yellow-800 ">
              Get involved
            </p>
          </Link>
        </div>
      )}
    </header>
  );
}
