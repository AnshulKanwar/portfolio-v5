import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-10">
      <div>
        <h1 className="text-lg font-bold">Anshul Kanwar</h1>
      </div>
      <div className="flex gap-20 text-neutral-300 dark:text-neutral-700">
        <a className="cursor-pointer hover:text-black dark:hover:text-white">Blog</a>
        <a className="cursor-pointer hover:text-black dark:hover:text-white">Notes</a>
        <span className="hover:text-black dark:hover:text-white">
          <ThemeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
