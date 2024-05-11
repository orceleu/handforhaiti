import React from "react";
import NavBar from "../component/Navbar";
import Image from "next/image";
import img1 from "../../public/separationplat3.jpg";
import img6 from "../../public/fooddistribution2.jpg";
import img2 from "../../public/realchair2.jpg";
import img5 from "../../public/schoolfuniture2.jpg";
import img3 from "../../public/uniform.jpg";
import img7 from "../../public/santepackage.jpg";
import { Button } from "@/components/ui/button";
import Footer from "../component/Footer";
import { BsBack } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { IoReturnDownBack } from "react-icons/io5";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <>
      <a href="/">
        <Button variant="secondary" className="hover:bg-gray-300 mt-10 ml-10">
          <IoReturnDownBack />
        </Button>
      </a>

      <div className="mx-10">
        <p className="text-3xl font-semibold my-10">
          Here is a selection of in-kind donations.
        </p>
        <p className="font-semibold">Hot meal</p>
        <div className="flex items-center space-x-2">
          <Image src={img1} alt="" className="size-[100px]" />
          <p className="my-10 mx-2">
            In Haiti, a plate of rice costs about 400 gourdes, which is
            equivalent to $3, and the beverage, depending on the type, costs
            about $1.
          </p>
        </div>
        <p>filling an empty stomach would cost $5.</p>
        <br />
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
          target="_blank"
        >
          <Button variant="secondary">Donate</Button>
        </Link>

        <br />
        <Separator className="my-4" />
        <br />
        <p className="font-semibold">Chair</p>
        <div className="flex items-center space-x-2">
          <Image src={img2} alt="" className="size-[100px]" />
          <p className="my-10 mx-2">
            There are enough poor schools in Haiti. We are following the path of
            a globally recognized and sustainable Montessori education. Here,
            the highest quality standards are applied and consistently
            monitored. Classroom chairs are mandatory for opening a class.
          </p>
        </div>
        <p>Donate a chair for $10.</p>
        <br />
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
          target="_blank"
        >
          <Button variant="secondary">Donate</Button>
        </Link>
        <br />
        <Separator className="my-4" />

        <br />
        <p className="font-semibold">Uniform</p>
        <div className="flex items-center space-x-2">
          <Image src={img3} alt="" className="size-[100px]" />
          <p className="my-10 mx-2">
            The mandatory school uniform prevents many parents from sending
            their children to school. They simply cannot afford to buy uniforms
            for their children, even if they can manage the (small) school fees.
            Each school has its own uniform, usually very beautiful, which the
            children proudly wear because it gives them the chance for a better
            future. Your child&apos;s school uniform is a wonderful gift and
            brings happiness to an entire family.
          </p>
        </div>
        <p>Donate a uniform for $25.</p>
        <br />
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
          target="_blank"
        >
          <Button variant="secondary">Donate</Button>
        </Link>

        <br />
        <Separator className="my-4" />

        <br />
        <p className="font-semibold"> educational materials</p>
        <div className="flex items-center space-x-2">
          <Image src={img5} alt="" className="size-[100px]" />
          <p className="my-10 mx-2">
            Books, pens, and notebooks are simply part of it. You can provide a
            child with the &apos;Annual Material Package.&apos; Our educational
            work requires a lot of very high-quality materials. Your donation
            for educational materials forms an important foundation for the
            future of our children.
          </p>
        </div>
        <p>Make a donation of educational materials for $30.</p>
        <br />
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
          target="_blank"
        >
          <Button variant="secondary">Donate</Button>
        </Link>
        <br />
        <Separator className="my-4" />

        <br />
        <p className="font-semibold">survival kit</p>
        <div className="flex items-center space-x-2">
          <Image src={img6} alt="" className="size-[100px]" />
          <div>
            <p className="my-1 mx-2">
              We help the poorest families in the region to live a dignified
              life despite poverty. Throughout the year, we assist the neediest
              who live below the minimum standard set by the UN and cannot
              participate in our project with survival packages. These packages
              are aimed at families in desperate poverty.{" "}
            </p>

            <p className="my-1">
              The contents of the packages consist of valuable food items such
              as rice, oil, beans, powdered milk, and high-quality protein
              products, as well as everyday items such as soap, toothpaste,
              toilet paper, etc. - many things that are lacking for these
              desperately poor families. Your survival package is a blessing for
              an entire impoverished family.
            </p>
          </div>
        </div>
        <p>Donate a survival kit for $30.</p>
        <br />
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=UW6KVE5SQGQ98"
          target="_blank"
        >
          <Button variant="secondary">Donate</Button>
        </Link>
        <br />
        <Separator className="my-4" />

        <br />
        <p className="font-semibold">medical package </p>
        <div className="flex items-center space-x-2">
          <Image src={img7} alt="" className="size-[100px]" />
          <div>
            <p className="my-1 mx-2">
              Poor children attending our school are in poor health, not only
              due to widespread malnutrition. With a package of medicines, we
              provide not only our students but also their siblings with the
              chance to lead a healthy life.
            </p>

            <p className="my-1">
              A package of medicines includes the following benefits for one
              year:
            </p>
            <br />
            <ul>
              <li>.Comprehensive medical examination</li>
              <li>.Deworming</li>
              <li>.HIV testing</li>
              <li>.Medical treatment</li>
              <li>.Necessary medications</li>
              <li>.Vaccinations</li>
              <li>.Hygiene education and information</li>
              <li>.HIV education and prevention</li>
              <li>
                .For the elderly, education and prevention In a country where
                the poor lack access to medical care, your medical kit is
                essential for survival.
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p>Donate a one-year medical package for $90.</p>
        <br />
        <Button variant="secondary">Donate</Button>
        <br />
      </div>
      <div className="h-3 bg-gray-700 my-16"></div>

      <Footer />
    </>
  );
}
