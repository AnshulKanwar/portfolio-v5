import Logo from "../components/logo";
import Contacts from "./contacts";

const Resume = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  );
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-12em)] min-h-[25em] relative">
      <div className="absolute top-[20%] right-0 min-w-[20em] w-2/6">
        <Logo />
      </div>
      <div className="absolute bottom-0">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-gray-300 dark:text-gray-700">
            Hi! I am
            <br />
          </span>
          Anshul Kanwar
        </h1>
        <p className="mt-10">
          I am a computer Science undergraduate student interested in technology
        </p>
        <a
          href="https://drive.google.com/file/d/1Y--y1dNkt2m0ldL2floi1HkF7RlHiMfg/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button
            className="
            mt-5 p-2 flex items-center gap-2 rounded-md border-2
            border-black dark:border-white hover:bg-black
            hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Resume />
            Resume
          </button>
        </a>
        <div className="mt-10">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Hero;
