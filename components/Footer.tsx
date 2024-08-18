import React from "react";
import eitaa from "@/public/Eitaa.png";
import { BsTelegram } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-sky-500 h-[300px] mt-10 border-t-2  flex justify-between items-center pl-5 ">
      <div className="flex mr-3 ">
        <p className="pt-1">تمامی حقوق برای قلعه محفوظ است</p>
        <BiCopyright className="h-8 w-8" />
      </div>
      <div className="flex gap-x-2 items-center">
        <Link href={"/"}>
          <Image
            width={35}
            height={35}
            src={eitaa}
            alt="eitaa logo"
            className="text-white"
          />
        </Link>
        <Link href={"/"}>
          <BsTelegram className="text-4xl text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
