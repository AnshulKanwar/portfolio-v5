import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

interface AppProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AppProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black pb-20">
      <Head>
        <title>Anshul Kanwar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5">
        <Navbar />
        <div className="max-w-4xl mx-auto mb-48">
          <div className="flex flex-col gap-24">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
