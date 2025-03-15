import Link from "next/link";

const components = [
  {
    title: "Home",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "About",
    href: "/about",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Blogs",
    href: "/blog",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    description: "Visually or semantically separates content.",
  },
];

function Header() {
  return (
    <nav>
      <ul>
        {components.map((item) => (
          <Link key={item.title} href={item.href}>
            {" "}
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export { Header };
