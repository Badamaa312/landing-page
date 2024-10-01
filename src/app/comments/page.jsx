import { CustomerCard } from "@/components/customers/Card";

const UserPage = async () => {
  let data = await fetch("https://randomuser.me/api/?results=20");
  let users = await data.json();

  return (
    <main className="flex justify-center w-full pt-[20px] mt-50px">
      <div className="container h-[650px] items-center">
        <div className="flex justify-center flex-wrap gap-4 mt-[50px]">
          {users?.results?.map((user) => (
            <CustomerCard user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default UserPage;
