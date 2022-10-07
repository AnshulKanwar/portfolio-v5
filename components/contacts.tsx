import React from "react";

const Contacts = () => {
  return (
    <div className="flex justify-between text-gray-300 dark:text-gray-700">
      <a
        href="mailto:me@anshulkanwar.tech"
        className="transition hover:text-black dark:hover:text-white"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="icon icon-tabler icon-tabler-mail"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <rect width="18" height="14" x="3" y="5" rx="2"></rect>
          <path d="M3 7L12 13 21 7"></path>
        </svg>
      </a>
      <a
        href="https://github.com/AnshulKanwar"
        className="transition hover:text-black dark:hover:text-white"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="icon icon-tabler icon-tabler-brand-github"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/anshul-kanwar/"
        className="transition hover:text-black dark:hover:text-white"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="icon icon-tabler icon-tabler-brand-linkedin"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <path d="M8 11L8 16"></path>
          <path d="M8 8L8 8.01"></path>
          <path d="M12 16L12 11"></path>
          <path d="M16 16v-3a2 2 0 00-4 0"></path>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/_0xanshul/"
        className="transition hover:text-black dark:hover:text-white"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="icon icon-tabler icon-tabler-brand-instagram"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <rect width="16" height="16" x="4" y="4" rx="4"></rect>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M16.5 7.5L16.5 7.501"></path>
        </svg>
      </a>
    </div>
  );
};

export default Contacts;
