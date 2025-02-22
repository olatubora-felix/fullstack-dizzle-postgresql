"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const Provider = ({ children }: ProviderProps) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Provider;
interface ProviderProps {
  children: ReactNode;
}
