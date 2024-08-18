import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className={"w-full mx-auto content-center flex flex-col items-center"}>
            <h1 className={"text-6xl text-sky-600"}>MOViES APP</h1>
          </div>

          <div
              className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
                className="rounded-full w-full h-auto"
                src="/LogoDog.png"
                alt="MovieApp Logo"
                width={300}
                height={300}
            />
          </div>

          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <Link href="/"
                className="grouphttps rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Home{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                  </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
               Main Page for authorization and another information about Movies App product.
              </p>
            </Link>

            <Link href={"/movies"}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Movies{" "}
                  <span
                      className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                  </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Discover the movies world! <br/> All films on this page.
              </p>
            </Link>

            <Link href={"/genres"}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_self"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Genres{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Choose your favourite genre then search the best movie. Enjoy it!
              </p>
            </Link>

            <Link href={"/search"}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Search{" "}
                <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                If your don`t remember the movies title. Don`t worry, search on this page. Write only words and looking for your result. Good luck!
              </p>
            </Link>
          </div>
      </main>
);
}
