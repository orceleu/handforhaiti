"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import img9 from "../../public/logodonation.png";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Footer() {
  const notify = () =>
    toast.success(
      "Even a function, given you return something that can be rendered",
      {
        icon: ({ theme, type }) => (
          <Image
            width={30}
            height={30}
            src={img9}
            alt=""
            className="w-[30px] h-[30px] rounded-[30px]  "
          />
        ),
      }
    );
  // const { toast }: any = useToast();
  console.log("hello");
  function randomFunctionCaller() {
    // Définition de la fonction à appeler aléatoirement
    function myFunction() {
      const numbersArray: number[] = [5, 10, 15, 20, 25];

      // Sélection aléatoire d'un index dans le tableau
      const randomIndex = Math.floor(Math.random() * numbersArray.length);

      // Retourner le nombre correspondant à l'index sélectionné
      const montant = Math.floor(Math.random() * (30 - 5 + 1)) + 5;

      toast.success(
        `anonymous:
       Give ${numbersArray[randomIndex]}$`,
        {
          icon: ({ theme, type }) => (
            <Image
              width={30}
              height={30}
              src={img9}
              alt=""
              className="w-[30px] h-[30px] rounded-[30px]  "
            />
          ),
        }
      );
    }

    // Fonction pour appeler la fonction de manière aléatoire
    function callRandomFunction() {
      // Générer un délai aléatoire entre 15 secondes et 10 minutes (en millisecondes)
      const delay = Math.random() * (100000 - 15000) + 15000; // 600000 ms = 10 minutes, 15000 ms = 15 secondes
      setTimeout(() => {
        myFunction(); // Appeler la fonction
        callRandomFunction(); // Appeler de nouveau la fonction aléatoirement après un nouveau délai aléatoire
      }, delay);
    }

    // Démarrer l'appel de la fonction aléatoire
    callRandomFunction();
  }

  // Appeler la fonction principale
  useEffect(() => {
    //randomFunctionCaller();
    console.log("started");
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto px-4 my-10">
        <div className="flex justify-center my-5">
          <Link
            href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
            target="_blank"
          >
            <Button variant="destructive" size="lg" asChild>
              <div className="flex items-center   ">
                <IoMdHeartEmpty className="h-5 w-5 " />

                <p>Donate</p>
              </div>
            </Button>
          </Link>
        </div>
        <footer className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 lg:order-2 md:max-w-[300px]">
            &copy; Hand for Haiti is a 501c3 non-profit charity, with federal
            EIN number 26-0498705 . © Hand for Haiti 2021 | Donor Privacy Policy
          </p>
          <div className="flex lg:order-1 lg:justify-center lg:mt-0 mt-4">
            <Link href="/" className="text-sm hover:text-yellow-700 ">
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-yellow-700  ml-4"
            >
              Contact us
            </Link>
            <Link
              href="#ourwork"
              className="text-sm hover:text-yellow-700  ml-4"
            >
              Our work
            </Link>
          </div>
        </footer>
      </div>
      <div className="my-16">
        <div className="flex justify-center items-center mt-5">
          <div className="flex">
            <Link
              href="https://www.facebook.com/profile.php?id=100085541012699"
              target="_blank"
            >
              <FaFacebook className="w-10 h-10" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="w-10 h-10 mx-10" />
            </Link>
            <Link href="https://www.x.com" target="_blank">
              <BsTwitterX className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
