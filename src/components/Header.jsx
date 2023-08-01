import React, { useState, useEffect } from "react";

import { Collapse } from "@material-tailwind/react";

import {
  Navbar,

  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="container flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center text-orange-300">
          HOME
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Product
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Content
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="container mx-auto max-w-screen-xl bg-inherit border-none shadow-none">
      <div className="mx-auto flex items-center justify-between text-white-900">
        <Typography
          as="a"
          href="#"
          className="mr-8 cursor-pointer py-1.5 font-bold text-orange-300 text-[25px]"
        >
          BAN
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 hidden lg:block"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
  
<Collapse open={openNav}>
  <div className="container mx-auto">{navList}</div>
</Collapse>
    </Navbar>
  );
}
