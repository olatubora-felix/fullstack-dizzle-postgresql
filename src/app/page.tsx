"only server";

import AddUser from "@/components/AddUser";

import { getUsers } from "./action/getUsers";
import UserLists from "@/components/UserLists";

export default async function Home() {
  const data = (await getUsers()) as User[];
  return (
    <main className="flex py-10 mx-auto container relative space-x-4">
      <UserLists users={data} />
      <AddUser />
    </main>
  );
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
