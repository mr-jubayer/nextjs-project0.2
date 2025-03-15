const { default: Link } = require("next/link");

const DashboardLayout = ({ children }) => {
  return (
    <main>
      <div className="my-5">
        <Link href={"/dashboard/users"}>
          <li>Users</li>
        </Link>
        <li>Statistics</li>
      </div>

      {children}
    </main>
  );
};

export default DashboardLayout;
