"use client";
import { addUser } from "@/app/action/addUser";
import React from "react";

const AddUser = () => {
  return (
    <form
      className="flex flex-col space-y-4 w-[400px] bg-white p-4 rounded-md shadow-md sticky top-0"
      action={addUser}
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
        className="bg-gray-500 p-3 text-white border-none outline-none placeholder:text-white rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        className="bg-gray-500 p-3 text-white border-none outline-none placeholder:text-white rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        className="bg-gray-500 p-3 text-white border-none outline-none placeholder:text-white rounded-md"
      />
      <button className="bg-black text-white py-2 px-4 rounded-md">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
