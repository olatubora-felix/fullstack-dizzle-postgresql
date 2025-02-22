"only server";

import AddUser from "@/components/AddUser";

import { getUsers } from "./action/getUsers";
import UserLists from "@/components/UserLists";

export default async function Home() {
  try {
    const data = (await getUsers()) as {
      success: boolean;
      message: string;
      data: User[];
    };
    return (
      <>
        <main className="flex py-10 mx-auto container relative md:flex-row flex-col-reverse gap-5 px-3">
          <UserLists users={data?.data} />
          <AddUser />
        </main>{" "}
      </>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return (
      <main className="flex py-10 mx-auto container relative space-x-4">
        <h4>Something went wrong, {errorMessage}</h4>
      </main>
    );
  }
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
