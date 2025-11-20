import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  return (
    <div
      id="Contact"
      className=" h-fit sm:h-[480px] sm:py-18 py-8 sm:px-6 flex flex-col items-center justify-center"
    >
      <div className=" bg-white shadow-xl dark:bg-[var(--color-bg2)] text-black dark:text-white  sm:w-full p-11 rounded-lg">
        <h1 className="sm:text-2xl font-bold text-center text-nowrap">
          ساده ترین راه های ارتباطی من و شما
        </h1>
        <div className="flex flex-col items-end py-4 gap-y-4">
          <a className="flex gap-x-2 items-end" href="https://t.me/zmo11m">
            {" "}
            <p>Telegram : zmo11m</p>
            <FaTelegram className="hover:text-[var(--basic)] size-6" />
          </a>

          <a
            className="flex items-end gap-x-2 "
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          >
            <p className="text-nowrap">Gmail : zainab1372m@gmail.com</p>
            <CgMail className="hover:text-[var(--basic)] size-6" />
          </a>
          <a
            className="flex items-end gap-x-2"
            href="https://www.instagram.com/zainabmo1111/?hl=en"
          >
            {" "}
            <p>Instagram : zainabmo1111</p>
            <FaInstagram className="hover:text-[var(--basic)] size-6" />
          </a>
          <a
            className="flex items-end gap-x-2"
            href="https://www.linkedin.com/in/zeinab-mostajeran-b750241a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            {" "}
            <p>Linkedin : zeinab-mostajeran</p>
            <FaLinkedin className="hover:text-[var(--basic)] size-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
