import { deleteUser } from "@/app/action/deleteUser";
import { User } from "@/app/page";
import React, { Suspense } from "react";

const UserLists = ({ users }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex-1 space-y-4 lg:h-auto  overflow-y-auto h-[500px]">
        {users?.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-md shadow-md space-y-2 flex items-center justify-between "
          >
            <div>
              <p className="text-lg font-bold text-black">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">
                Created at: {new Date(user.created_at).toDateString()}
              </p>
            </div>
            <form action={deleteUser} method="post">
              <input type="hidden" name="id" value={user.id} />
              <button className="bg-red-500 text-white py-2 px-3 rounded-xl">
                delete
              </button>
            </form>
          </div>
        ))}
      </section>
    </Suspense>
  );
};

export default UserLists;
interface Props {
  users: User[];
}
