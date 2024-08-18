"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.jpg";
import { FaSearch } from "react-icons/fa";
const NavBar = () => {
  const [searching, setSearching] = useState<boolean>(false);
  return (
    <>
      <nav className=" backdrop-blur-sm bg-white/10 h-20"></nav>
      <div className="absolute top-0 flex w-full items-center justify-between">
        <div className="flex items-center">
          <Image
            width={60}
            height={60}
            src={Logo.src}
            alt="logo that is castel"
            className="rounded-full m-4"
          />
          <Link href={"/"} className="text-3xl text-white">
            قلعه
          </Link>
        </div>
        <div>
          {searching ? (
            <input
              onBlur={() => setSearching((prev) => !prev)}
              autoFocus
              className="h-fit rounded-full bg-transparent pr-2 "
              type="text"
            ></input>
          ) : (
            <FaSearch
              onClick={() => setSearching((prev) => !prev)}
              className=" hover:cursor-pointer text-white   hover:animate-spin hover:scale-110  pt-1 w-5 h-5"
            />
          )}
        </div>
        <Link href={"/"} className="ml-4 text-white">
          درباره ما
        </Link>
      </div>
    </>
  );
};

export default NavBar;
