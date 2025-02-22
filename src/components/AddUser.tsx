"use client";
import { addUser } from "@/app/action/addUser";
import React, { useActionState } from "react";

const AddUser = () => {
  const [state, action, isLoading] = useActionState(addUser, null);

  return (
    <form
      className="flex flex-col space-y-4 md:w-[400px] bg-white p-4 rounded-md shadow-md sticky top-0 w-full"
      action={action}
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="bg-gray-500 p-3 text-white border-none outline-none placeholder:text-white rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="bg-gray-500 p-3 text-white border-none outline-none placeholder:text-white rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="bg-gray-500 p-3 text-white border-none outline-none placeholder:text-white rounded-md"
      />
      <button
        className="bg-black text-white py-2 px-4 rounded-md"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : " Add User"}
      </button>

      {!state?.success && state?.message && (
        <p className="text-red-500">{state.message}</p>
      )}
    </form>
  );
};

export default AddUser;
