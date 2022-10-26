import type { NextPage } from "next";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
};

export default Home;
