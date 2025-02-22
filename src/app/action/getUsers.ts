"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getUsers = async () => {
  const user = await auth();
  if (!user.userId) return redirect("/sign-in");
  try {
    const data = await db
      .select()
      .from(users)
      .where(eq(users.user_id, user.userId))
      .orderBy(desc(users.created_at));
    if (!data) return { message: "No data found", suceess: false };
    return {
      success: true,
      message: "Users Fetched Successfully",
      data,
    };
  } catch (error: unknown) {
    if (error) {
      return { message: (error as Error).message, suceess: false };
    }
  }
};
