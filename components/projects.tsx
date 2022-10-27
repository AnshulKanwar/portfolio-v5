import { triggerAsyncId } from "async_hooks";
import Image from "next/image";

const projects = [
  {
    name: "Trading Bot",
    description: "A cli trading bot using Binance API built using rust",
    image: "trading-bot.png",
    githubLink: "https://github.com/AnshulKanwar/trading-bot",
    tags: ["rust"],
  },
  {
    name: "Blockchain Visual Demo",
    description: "A webapp to show the concepts of blockchain",
    image: "blockchain.png",
    link: "https://anshulkanwar.github.io/blockchain-demo/",
    githubLink: "https://github.com/AnshulKanwar/blockchain-demo",
    tags: ["react"],
  },
  {
    name: "Track",
    description: "A cli to track your diet",
    image: "track.png",
    githubLink: "https://github.com/AnshulKanwar/track",
    tags: ["rust"],
  },
  {
    name: "Planetary Motion",
    description:
      "Planetary motion simulation following Newtons Gravitation Law in OpenGL",
    image: "planetary-motion.gif",
    githubLink: "https://github.com/AnshulKanwar/Planetary-Motion",
    tags: ["C++", "OpenGL"],
  },
  {
    name: "Anya",
    description: "A HTTP webserver written in C++",
    image: "anya.png",
    githubLink: "https://github.com/AnshulKanwar/Anya",
    tags: ["C++"],
  },
  {
    name: "8 Puzzle Problem Solver",
    description:
      "A react app to solve 8 puzzle problems using algorithms like Breadth First Search, Best First Search and Simple Hill Climbing",
    image: "8-puzzle.png",
    link: "https://anshulkanwar.github.io/8-puzzle-problem/",
    githubLink: "https://github.com/AnshulKanwar/8-puzzle-problem",
    tags: ["react", "typescript"],
  },
  {
    name: "4chan clone",
    description: "A 4chan clone built on MERN stack",
    image: "4chan.png",
    githubLink: "https://github.com/AnshulKanwar/4chan",
    tags: ["react", "express", "mongodb", "nodejs"],
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-gray-300 dark:text-gray-700 font-bold">
        Projects
      </h1>
      <div className="mt-10 p-10 bg-gray-100 dark:bg-gray-900 rounded-3xl">
        <div className="flex overflow-x-scroll snap-x snap-mandatory">
          {/* TODO: Move to Grid */}
          {projects.map(
            ({ name, description, image, link, githubLink, tags }) => (
              <div key={name} className="w-full shrink-0 snap-start">
                <div>
                  <h2 className="text-center text-2xl font-bold hover:underline">
                    <a href={link || githubLink}>{name}</a>
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-5 items-center">
                  <div className="relative h-96">
                    <Image
                      src={`/projects/${image}`}
                      className="object-contain"
                      alt="screenshot"
                      fill
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <p>{description}</p>
                    <span className="flex items-center">
                      <a
                        href={githubLink}
                        className="font-bold hover:underline"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        github
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="flex gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm bg-sky-200 text-sky-600 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
          <div className="w-full shrink-0 snap-start grid place-items-center">
            <span className="text-3xl font-bold">
              And many more on my{" "}
              <a
                href="https://github.com/AnshulKanwar"
                className="underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                github
              </a>{" "}
              🚀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
