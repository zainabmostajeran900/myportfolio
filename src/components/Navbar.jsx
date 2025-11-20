import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Toggledemo } from "./Toggledemo";
import { ModeToggle } from "../components/mode-toggle";
import { FaLinkedin, FaTelegram, FaYoutube, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { ToggledemoMobile } from "./Toggledemomobile";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenus = () => {
    setIsSidebarOpen(false);
    setIsMobileMenuOpen(false);
  };
  const goToSection = (section) => {
    if (location.pathname !== "/") {
      navigate("/#" + section); // اگر در صفحه دیگر هستیم → برو به "/" + اسکرول
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full overflow-x-hidden">
      {/* Overlay */}
      {(isSidebarOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 bg-[var(--color-bg4)] bg-opacity-50 z-40"
          onClick={closeMenus}
        />
      )}
      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl dark:bg-[var(--color-bg2)] text-black dark:text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out p-6 overflow-y-auto`}
      >
        <div className="flex justify-start mb-6">
          <button
            onClick={toggleSidebar}
            className=" text-sm hover:text-[var(--basic)] cursor-pointer"
          >
            ✕
          </button>
        </div>
        <h2 className="font-bold text-xl text-center">زینب مستاجران</h2>
        <div className="flex flex-col gap-y-5 py-8">
          <p className="text-center max-w-xs mx-auto text-sm leading-6">
            متولد سال 1372 ساکن شهر اصفهان من همیشه به طراحی سایت و اپلیکیشن
            علاقه داشتم و خوشحالم در سال 1397 در مسیر علاقه ام قدم برداشتم.
            کدنویسی استاندارد با یک متخصص Front-End مسؤلیت پذیر نیاز تمام
            کارفرمایان و شرکت هاست پس خوشحال میشم با شما همکاری داشته باشم{" "}
          </p>
          <h1 className="text-[var(--basic)] font-bold text-lg">
            اطلاعات تماس
          </h1>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            className="flex items-center gap-x-2"
          >
            <CgMail className="text-[var(--basic)] size-6" />
            <p>zainabmo1372@gmail.com</p>
          </a>
          <a href="https://t.me/zmo11m" className="flex items-center gap-x-2">
            <FaTelegram className="text-[var(--basic)] size-6" />
            <p>@zeinabmostajeran</p>
          </a>
          <h1 className="text-[var(--basic)] font-bold text-lg">
            شبکه‌های اجتماعی
          </h1>
          <div className="flex gap-x-12 items-center">
            <a
              className="flex items-end gap-x-2"
              href="https://www.instagram.com/zainabmo1111/?hl=en"
            >
              {" "}
              <FaInstagram className="hover:text-[var(--basic)] size-6" />
            </a>{" "}
            <a className="flex gap-x-2 items-end" href="https://t.me/zmo11m">
              {" "}
              <FaTelegram className="hover:text-[var(--basic)] size-6" />
            </a>{" "}
            <a
              className="flex items-end gap-x-2"
              href="https://www.linkedin.com/in/zeinab-mostajeran-b750241a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              {" "}
              <FaLinkedin className="hover:text-[var(--basic)] size-6" />
            </a>{" "}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-3 right-0 left-0 container mx-auto max-w-[1200px] transition-opacity duration-300 px-4 sm:px-8 rounded-lg 
  ${
    isSidebarOpen ? "opacity-50 z-30" : "opacity-100 z-40"
  } bg-white  dark:bg-[var(--color-bg2)] shadow-md `}
      >
        <header className="flex items-center justify-between py-4 max-w-screen-xl mx-auto">
          {/* Left side (دارک مود و منوی موبایل) */}
          <div className="flex items-center gap-4 order-1 sm:order-none">
            <div className="flex sm:hidden">
              <ModeToggle />
            </div>
            <button onClick={toggleMobileMenu} className="text-white md:hidden">
              <GiHamburgerMenu size={20} />
            </button>
          </div>

          {/* Logo */}
          <div className="text-black dark:text-white font-bold text-xl order-2 sm:order-none text-center">
            زینب مستاجران
          </div>

          {/* Right side (سه نقطه موبایل) */}
          <div className="flex items-center gap-2 order-3 sm:order-none">
            <button onClick={toggleSidebar} className="text-white md:hidden">
              <BsThreeDotsVertical size={20} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Toggledemo
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              goToSection={goToSection}
            />
          </div>

          {/* دارک مود برای دسکتاپ */}
          <div className="hidden sm:flex">
            <ModeToggle />
          </div>
        </header>
      </div>

      {/* Mobile Sidebar (Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-32 bg-white dark:bg-[var(--color-bg2)] dark:text-white text-black z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMobileMenu} className="text-white text-xl">
            ✕
          </button>
        </div>
        <div className="py-10">
          <ToggledemoMobile
            closeMenu={closeMenus}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            goToSection={goToSection}
          />
        </div>
      </div>

      {/* Desktop Sidebar Trigger */}
      <button
        onClick={toggleSidebar}
        className="hidden sm:block fixed   left-6 top-8 cursor-pointer"
      >
        <BsThreeDotsVertical className="size-6 text-black dark:text-white hover:text-[var(--basic)]" />
      </button>

      {/* Spacer for fixed navbar */}
      <div className="h-12" />
    </div>
  );
}

export default Navbar;
