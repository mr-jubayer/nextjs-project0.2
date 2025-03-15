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

const User = async ({ params }) => {
  const { id } = await params;

  const currentUser = usersArr.find((user) => user.id === id);

  return (
    <div>
      <h2>User</h2>
      <hr />
      <p>Id: {id}</p>
      <p>Name: {currentUser.name}</p>
      <p>Role: {currentUser.role}</p>
    </div>
  );
};

export default User;
