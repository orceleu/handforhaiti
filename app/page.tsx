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
export default function Home() {
  return (
    <main className="lg:p-10">
      <Head>
        <title>Hand for Haiti</title>
        <meta
          name="description"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
          key="desc"
        />
      </Head>
      <NavBar />
      <div className="bg-yellow-100  p-5">
        <br />
        <br />
        <br />
        <br />
        <p className="text-center font-extralight text-2xl md:text-4xl ">
          Our Long-Term Response Plan to Support Economic, Social, and
          Humanitarian Relief in Haiti
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
              {" "}
              DE LA POPULATION A BESOIN D&apos;UNE ACTION URGENTE
            </p>
          </div>
          <div className=" my-auto">
            <p className="text-center text-4xl">45%</p>
            <p className="mt-5 text-center">DE LA POPULATION SOUFFRE DE FAIM</p>
          </div>
          <div className="bg-blue-100 w-[300px] mx-auto ">
            <p className="text-4xl font-bold text-center mt-10">530</p>
            <p className="mt-10 text-center">PERSONNES BÉNÉFICIAIRES</p>
            <p className="mt-10 text-center px-3">
              Je fais une donation pour augmenter le nombre de beneficiares
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
        <br />
        <br />
        <br />
        <Separator />

        <div className="grid sm:grid-cols-1 md:grid-cols-3 space-x-4 my-10">
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

            <p className="mt-10 text-center">
              &quot;I am a shopkeeper, I have 3 children. Every day, I wake up
              at 4 a.m. to go to work to feed my family. Often, they go to
              school with just a glass of water in their stomachs. My formal
              education ended in the beginning of high school due to my
              parents&apos; financial constraints, but I will do everything in
              my power to ensure that my children complete their studies and
              have a better future.&quot;
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center">
          <div>
            <p className="text-center font-bold text-4xl my-[100px]">
              CONTEXTE
            </p>
            <Image src={barbecue} alt="barbecue ,alias Jimmy Cherizier" />
            <p className="mt-10 md:text-2xl">
              Depuis début septembre 2022, une dégradation dramatique de la
              sécurité a paralysé le pays. Des gangs criminels ont pris le
              contrôle entier de quartiers et d&apos;installations stratégiques
              vitales, dont le port international de Port-au-Prince et le
              principal terminal pétrolier du pays (Varreux) pendant deux mois.
              Cette situation a dramatiquement impacté le quotidien de la
              population. Ces crises ont été aggravées par la résurgence en
              octobre 2022 de l&apos;épidémie de choléra. La coordination
              humanitaire estimait que 48 % de la population avait besoin
              d&apos;une action urgente. De plus, 45 % de la population
              souffraient de la faim. Le pays présentait l&apos;un des niveaux
              d&apos;insécurité alimentaire chronique les plus élevés au monde.
              La situation était particulièrement critique pour de nombreux
              déplacés internes vivant dans des conditions insalubres à
              Port-au-Prince et les rapatriés forcés, de plus en plus nombreux,
              en provenance de différents pays, notamment de la République
              dominicaine.
            </p>
          </div>
          <div className="bg-red-200 mx-4">
            <p className=" text-[10px] md:text-xl p-1">
              11,84 millions d&apos;habitants 163ème sur 191 pays pour
              l&apos;Indice de Développement Humain
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
      <p className="text-center text-4xl font-bold md:text-4xl my-[100px] ">
        Our program
      </p>
      <div className="flex justify-center">
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          <div className="shadow-md p-2 hover:bg-yellow-100 ">
            <p className="my-5 md:my-10 text-center font-semibold">Education</p>
            <Image src={groupchildren} alt="" className="w-[200px] h-[200px]" />
          </div>
          <div className="shadow-md p-2 hover:bg-yellow-100 ">
            <p className="my-5 md:my-10 text-center font-semibold">Food</p>
            <Image src={duri} alt="" className="w-[200px] h-[200px]" />
          </div>

          <div className="shadow-md p-2 hover:bg-yellow-100 ">
            <p className="my-5 md:my-10 text-center font-semibold">Health</p>
            <Image src={img8} alt="" className="w-[200px] h-[200px]" />
          </div>
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
