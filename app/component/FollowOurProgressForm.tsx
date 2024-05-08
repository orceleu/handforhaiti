"use client";
import React from "react";
import { useState } from "react";

export default function FollowOurProgressForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Envoyer les données du formulaire (formData) vers votre backend ou faire toute autre opération nécessaire
    console.log(formData);
    // Réinitialiser le formulaire après soumission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto px-6">
        <h2 id="getupdate" className="text-2xl font-bold mb-4">
          Follow our progress
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
