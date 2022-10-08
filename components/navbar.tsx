import Link from "next/link";
import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-10">
      <div>
        <h1 className="text-xl font-bold">
          <Link href="/">Anshul Kanwar</Link>
        </h1>
      </div>
      <div className="flex gap-5 md:gap-20 text-gray-300 dark:text-gray-700">
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
