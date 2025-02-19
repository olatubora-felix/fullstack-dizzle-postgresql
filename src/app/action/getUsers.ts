"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { desc } from "drizzle-orm";

export const getUsers = async () => {
  const data = await db.select().from(users).orderBy(desc(users.created_at));
  if (!data) return { message: "No data found" };
  return data;
};
