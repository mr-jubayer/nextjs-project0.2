import Link from "next/link";

const usersArr = [
  {
    id: "1",
    name: "John Doe",
    role: "admin",
  },
  {
    id: "2",
    name: "Elon Mask",
    role: "customer",
  },
  {
    id: "3",
    name: "Bill Gets",
    role: "customer",
  },
];

const Users = () => {
  return (
    <div>
      <h2 className="my-4 text-4xl">All users</h2>
      <div>
        {usersArr.map((user) => {
          return (
            <div
              key={user.id}
              className="p-4 bg-white shadow-md rounded-lg m-3 border"
            >
              <h2> Name: {user.name} </h2>
              <Link href={`/dashboard/users/${user.id}`}>
                <button className="bg-black text-white rounded shadow-sm my-2">
                  View User
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
