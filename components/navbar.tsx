import ThemeToggle from "./themeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-10">
      <div>
        <h1 className="text-lg font-bold">Anshul Kanwar</h1>
      </div>
      <div className="flex gap-20 text-neutral-300">
        <a className="cursor-pointer hover:text-black">Blog</a>
        <a className="cursor-pointer hover:text-black">Notes</a>
        <span className="hover:text-black">
          <ThemeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
