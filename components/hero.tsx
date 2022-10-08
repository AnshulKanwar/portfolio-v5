import Logo from "../components/logo";
import Contacts from "./contacts";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto">
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
            I am a computer Science undergraduate student interested in
            technology
          </p>
          <div className="mt-10">
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
