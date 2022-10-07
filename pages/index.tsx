import type { NextPage } from "next";
import Layout from "../components/layout";
import Logo from "../components/logo";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="absolute bottom-[15%] left-[10%]">
        <h1 className="text-6xl font-bold">
          <span className="text-zinc-300 dark:text-zinc-700">
            Hi! I am
            <br />
          </span>
          Anshul Kanwar
        </h1>
        <p className="mt-10">
          I am a computer Science undergraduate student interested in technology
        </p>
      </div>
      {/* <div className="absolute right-28 top-56 w-96"> */}
      <div className="absolute top-[25%] right-[15%] min-w-[20em] w-2/6">
        <Logo />
      </div>
    </Layout>
  );
};

export default Home;
