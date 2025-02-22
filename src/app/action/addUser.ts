"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const addUser = async (
  prevState: { success: boolean; message: string } | null | undefined,
  formData: FormData
) => {
  const user = await auth();
  if (!user.userId) return redirect("/si");
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!name || !email || !password) {
    return {
      success: false,
      message: "Fields cannot be empty",
    };
  }

  const data = await db
    .insert(users)
    .values({
      name,
      email,
      password,
      user_id: user.userId,
    })
    .returning();

  if (!data) {
    return {
      success: false,
      message: "Failed to add user",
    };
  }
  revalidatePath("/");
};
