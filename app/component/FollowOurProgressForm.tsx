"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoReturnDownBack } from "react-icons/io5";

import { useForm } from "react-hook-form";
import { sendEmail } from "../send-email";
export type FormData = {
  name: string;
  email: string;
  message: string;
};
export default function FollowOurProgressForm() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      message: "a client want to subscribe",
    },
  });

  function onSubmit(data: FormData) {
    sendEmail(data);
    setTimeout(() => {
      reset();
    }, 5000);
  }

  return (
    <>
      <p className="text-center text-xl font-semibold" id="getupdate">
        Follow our progress
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-10">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadow-md"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-500 focus:shadow-md"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-gray-400 py-3 px-8 text-base font-semibold hover:bg-gray-500 text-white outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
