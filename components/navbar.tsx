import Link from "next/link";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-10">
      <div>
        <Link
          href="/"
          className="cursor-pointer"
        >
          <h1 className="text-xl font-bold">Anshul Kanwar</h1>
        </Link>
      </div>
      <div className="flex gap-20 text-gray-300 dark:text-gray-700">
        <a
          href="https://blog.anshulkanwar.tech"
          className="cursor-pointer transition hover:text-black dark:hover:text-white"
        >
          Blog
        </a>
        <a
          href="https://notes.anshulkanwar.tech"
          className="cursor-pointer transition hover:text-black dark:hover:text-white"
        >
          Notes
        </a>
        <span className="transition hover:text-black dark:hover:text-white">
          <ThemeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
