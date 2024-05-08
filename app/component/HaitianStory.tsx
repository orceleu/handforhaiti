"use client";

import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";

export default function HaitianStory() {
  const [setEnglish, setthetextinenglish] = useState(false);

  function translante() {
    setthetextinenglish(!setEnglish);
    console.log("translanted!");
  }
  return (
    <>
      {setEnglish ? (
        <>
          <p>
            &quot;I am a shopkeeper, I have 3 children. Every day, I wake up at
            4 a.m. to go to work to feed my family. Often, they go to school
            with just a glass of water in their stomachs. My formal education
            ended in the beginning of high school due to my parents&apos;
            financial constraints, but I will do everything in my power to
            ensure that my children complete their studies and have a better
            future.&quot;
          </p>
        </>
      ) : (
        <>
          <p>
            &quot;mwen se yon komèsan,mwen gen 3 timoun ,chak jou mwen leve a 4
            h di maten poum al chache lavi pou m bay pitit mwen yo manje. anpil
            fwa yo konn al lekòl jis ak yon vè dlo nan vant .edid klasik mwen
            kanpe nan segondè akòz paranm pat gen ase moyen ekonomik ,men map fè
            tout efò m pou piti mwen yo fini etid klasik yo epi al nan inivèsite
            pou yo ka gen yon avni miyò .&quot;
          </p>
        </>
      )}
      <div className="flex items-center mt-5">
        <button onClick={translante} className="text-center  underline mx-1">
          translante
        </button>
        <BiWorld />
      </div>
    </>
  );
}
