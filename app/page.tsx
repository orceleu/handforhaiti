import Image from "next/image";
import haitihelp1 from "../public/childsimgdonation.jpg";

import img8 from "../public/img88.jpg";
import img9 from "../public/img9.jpg";
import duri from "../public/durizpired2.jpg";
import groupchildren from "../public/groupchildrend2.jpg";
import barbecue from "../public/barbecue.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import Head from "next/head";
import img11 from "../public/img11.jpg";
import logohkot from "../public/Logohkot1.png";
import logopihighservice from "../public/pihighservice.png";

import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import FollowOurProgressForm from "./component/FollowOurProgressForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HaitianStory from "./component/HaitianStory";
export default function Home() {
  /*
   <div className="mt-[50px] mx-auto">
          <div className="flex justify-center">
            <p className="text-center font-semibold">Our main sponsors</p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <div>
                <Image
                  src={logohkot}
                  alt="haitianknowledgeoftech"
                  className="size-10 md:size-[100px]"
                />
                <p className="text-[6px] md:text-[12px] text-center text-gray-300">
                  haitianknowledgeoftech.tech
                </p>
              </div>
              <Image
                src={logopihighservice}
                alt="pihighservice"
                className="size-10 md:size-[100px]"
              />
            </div>
          </div>
        </div>
  */
  return (
    <main className="lg:p-10">
      <NavBar />
      <div className="bg-yellow-100  p-5">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="text-center font-extralight text-2xl md:text-4xl ">
          Our Enduring Commitment to Foster Economic,Social,and Humanitarian
          Support for Haiti
        </p>
        <a href="/learnmore">
          <div className=" flex items-center sm:mt-10">
            <div className=" border-2 lg:border-4 border-gray-700 mx-auto mt-10 h-[65px] w-[185px]">
              <button className=" h-[60px] w-[180px] mx-auto my-auto hover:bg-blue-200 bg-transparent  font-bold text-black">
                learn more
              </button>
            </div>
          </div>
        </a>

        <p className="text-center text-[10px] md:text-sm  my-5 underline">
          Humanitarism is the school of the highest justice,where charity
          prevails over the laws of men.
        </p>
        <br />
      </div>

      <Image src={haitihelp1} alt="" />
      <div className="mx-7  mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className=" my-auto">
            <p className="text-center text-4xl">48%</p>
            <p className="mt-5 text-center">
              OF THE POPULATION NEEDS URGENT ACTION.
            </p>
          </div>
          <div className=" my-auto">
            <p className="text-center text-4xl">45%</p>
            <p className="mt-5 text-center">
              {" "}
              OF THE POPULATION IS SUFFERING FROM HUNGER.
            </p>
          </div>
          <div className="bg-blue-100 w-[300px] mx-auto ">
            <p className="text-4xl font-bold text-center mt-10">3100+</p>
            <p className="mt-10 text-center">BENEFICIARIES</p>
            <p className="mt-10 text-center px-3">
              I&apos;m making a donation to increase the number of
              beneficiaries.
            </p>
            <div className="flex justify-center mt-3">
              <Link
                href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
                target="_blank"
              >
                <Button variant="destructive">
                  <IoMdHeartEmpty className="h-5 w-5 " />
                  Donate
                </Button>
              </Link>
            </div>
            <br />
            <br />
          </div>
        </div>

        <br />
        <br />
        <br />
        <Separator />

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="mt-10 text-center font-bold">Anonymous donator</p>

            <p className="mt-10 text-center">
              &quot;We often forget the luck we have to be born in a country
              with a stable situation, both socially, economically, and
              politically, and I feel grateful just thinking about it. May God
              come to their aid and preserve them.&quot;
            </p>
          </div>
          <div>
            <p className="mt-10 text-center font-bold">
              William O&apos;Neill (ONU)
            </p>
            <p className="mt-10 text-center">
              &quot;The humanitarian conditions in this country are
              deteriorating rapidly and could become like Somalia at its worst.
              The difference in Haiti is that the state is practically absent.
              [...] It&apos;s almost like a Hobbesian world where the strongest
              survive [...] and unfortunately, the strongest right now are the
              gangs…&quot;
            </p>
          </div>
          <div>
            <p className="mt-10 text-center font-bold">Haitian citizen</p>

            <HaitianStory />
            <br />
          </div>
        </div>
        <Separator />
        <div className="flex items-center">
          <div>
            <p className="text-center font-bold text-4xl my-[100px]">CONTEXT</p>
            <Image src={barbecue} alt="barbecue ,alias Jimmy Cherizier" />
            <p className="mt-10 md:text-2xl">
              Since early September 2022, a dramatic deterioration in security
              has paralyzed the country. Criminal gangs have taken complete
              control of neighborhoods and vital strategic facilities, including
              the international port of Port-au-Prince and the country&apos;s
              main oil terminal (Varreux) for two months. This situation has
              dramatically impacted the daily lives of the population. These
              crises were exacerbated by the resurgence of the cholera epidemic
              in October 2022. Humanitarian coordination estimated that 48% of
              the population needed urgent action. Additionally, 45% of the
              population suffered from hunger. The country had one of the
              highest levels of chronic food insecurity in the world. The
              situation was particularly critical for many internally displaced
              persons living in unsanitary conditions in Port-au-Prince and for
              the increasing number of forced returnees from various countries,
              including the Dominican Republic.
            </p>
          </div>
          <div className="bg-red-200 mx-4">
            <p className=" text-[10px] md:text-xl p-1">
              11.84 million inhabitants, ranked 163rd out of 191 countries for
              the Human Development Index.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6">
        <p className="my-10 text-3xl">
          MYTH: It&apos;s a hopeless situation in Haiti
        </p>
        <p className="text-xl my-6">
          FACT: Positive change is possible and happening…
        </p>
        <p>
          In Haiti — and around the world — there&apos;s a growing movement to
          support child protection reform and the process of
          deinstitutionalizing children toward family and community-based care.
          This year, LFBS is participating in a historic, government initiative
          to evaluate — and take action — against abusive Haitian orphanages.
        </p>
        <p className="my-10 text-center text-4xl font-bold">Our Vision</p>
        <p className="text-center">
          Our Vision Every child in Haiti grows up in a safe, loving and
          self-sustaining family, supported by empowered, informed and secure
          communities.
        </p>
      </div>
      <p
        className="text-center text-4xl font-bold md:text-4xl my-[100px] "
        id="ourwork"
      >
        Our program
      </p>
      <div className="flex justify-center">
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          <a href="/ourprogram/education">
            <div className="shadow-md p-2 hover:bg-yellow-100 ">
              <p className="my-5 md:my-10 text-center font-semibold">
                Education
              </p>
              <Image
                src={groupchildren}
                alt=""
                className="w-[200px] h-[200px]"
              />
            </div>
          </a>
          <a href="/ourprogram/food">
            <div className="shadow-md p-2 hover:bg-yellow-100 ">
              <p className="my-5 md:my-10 text-center font-semibold">Food</p>
              <Image src={duri} alt="" className="w-[200px] h-[200px]" />
            </div>
          </a>
          <a href="/ourprogram/health">
            <div className="shadow-md p-2 hover:bg-yellow-100 ">
              <p className="my-5 md:my-10 text-center font-semibold">Health</p>
              <Image src={img8} alt="" className="w-[200px] h-[200px]" />
            </div>
          </a>
        </div>
      </div>
      <div className="h-1 bg-gray-700 my-16"></div>

      <div className="my-[100px]">
        <FollowOurProgressForm />
      </div>
      <div className="h-3 bg-gray-700 my-16"></div>
      <Footer />
    </main>
  );
}
