"use server";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  if (!id) {
    return;
  }

  // delete user with id
  const deletedData = await db.delete(users).where(eq(users.id, id));
  if (!deletedData) {
    return;
  }

  revalidatePath("/");
};
