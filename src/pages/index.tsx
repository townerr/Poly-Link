import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { LinkIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Poly Link</title>
        <meta name="description" content="Poly Link Home and Signin Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex flex-col items-center justify-center mt-48 pt-4 max-w-md bg-gray-200 rounded-2xl">
        <h1 className="text-7xl font-semibold pt-4 flex gap-4">
            Poly
            <LinkIcon className="w-12 text-pink-400"/>
            Link
          </h1>
        <div className="flex gap-2 py-8">
          <button className="bg-pink-300 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded">Login</button>
          <button className="bg-pink-300 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded">Register</button>
        </div>
      </main>
    </>
  );
};

export default Home;
