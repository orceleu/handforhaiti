import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import Head from "next/head";

export default function page() {
  return (
    <>
      <NavBar />

      <p className="text-2xl text-center my-10">Related topics</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-10 p-10">
        <p className="my-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum
          culpa itaque laborum ullam dignissimos possimus magni consequuntur
          voluptate vero nulla perspiciatis ipsa est, quidem quisquam ipsam
          mollitia odio asperiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum
          culpa itaque laborum ullam dignissimos possimus magni consequuntur
          voluptate vero nulla perspiciatis ipsa est, quidem quisquam ipsam
          mollitia odio asperiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          nostrum non repellat pariatur voluptatibus atque quidem ad labore
          dolore reprehenderit assumenda esse incidunt fugit quo sapiente,
          nesciunt eum mollitia eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum
          distinctio aliquam sunt vel quae perferendis, ullam temporibus quis
          ab? Nam quaerat rerum voluptatem quis sequi nemo quasi, in veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          distinctio laboriosam aliquam! Ex nulla quod debitis, nam fugit
          quisquam omnis excepturi alias a corporis laboriosam, quae aut
          nesciunt quasi vero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ut,
          sit temporibus ipsum officia sed alias est in, distinctio quis nihil
          veritatis. Ea accusamus eaque aliquam voluptatum alias corrupti
          blanditiis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          atque quidem asperiores voluptatem corrupti nam, non cupiditate optio
          quas cumque blanditiis! Quo quos nesciunt est tempora facere quam
          culpa natus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae
          dolorem nobis. Voluptatum quas voluptate ad nobis maiores, dolore,
          quia iste officia incidunt laudantium reprehenderit molestiae ex
          pariatur excepturi deleniti!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          temporibus mollitia dolorem doloribus? Sit ducimus fugiat nesciunt
          eos? Maiores, distinctio. Iste fuga eveniet quos reprehenderit
          possimus sapiente voluptates odio placeat?
        </p>
      </div>
      <div className="h-3 bg-gray-700 my-16"></div>

      <Footer />
    </>
  );
}
