"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const { isSignedIn, user } = useUser();
  const active = usePathname();
  return (
    <header className="bg-gray-200 text-black ">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold italic">
          Fe<span className="text-yellow-500">tech</span>
        </Link>
        <menu className="flex items-center gap-6 text-black font-medium text-base">
          {!isSignedIn &&
            routes.map((route) => (
              <li key={route.id}>
                <Link
                  href={route.path}
                  className={` py-2 ${
                    active === route.path
                      ? "text-yellow-500 font-bold border-b border-yellow-500"
                      : ""
                  }`}
                >
                  {route.name}
                </Link>
              </li>
            ))}

          {isSignedIn && user && (
            <li>
              <UserButton />
            </li>
          )}
        </menu>
      </nav>
    </header>
  );
};

export default NavBar;
const routes = [
  {
    name: "sign In",
    path: "/sign-in",
    id: 1,
  },
  {
    name: "Register",
    path: "/sign-up",
    id: 2,
  },
];
