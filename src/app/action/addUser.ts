"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
export const addUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!name || !email || !password) {
    return;
  }

  const data = await db.insert(users).values({
    name,
    email,
    password,
    id: uuidv4(),
  });

  if (!data) {
    return;
  }
  revalidatePath("/");
};
