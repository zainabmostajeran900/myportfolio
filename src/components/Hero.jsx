import React from "react";
export function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex md:flex-row md:justify-between md:items-center md:w-full h-fit sm:h-[610px] sm:py-20 py-8 px-6"
    >
      <img
        className="hidden sm:block  w-[280px] h-[600px] rounded-b-lg object-cover pt-24 rounded-r-[180px] rounded-l-lg"
        src="/hero-2.jpg"
        alt=""
      />
      <div className="flex flex-col gap-y-3 items-center p-6 rounded-2xl">
        <p className="py-4 rounded-md px-3 text-sm text-nowrap bg-white shadow-sm dark:bg-[var(--color-bg2)] transition-colors duration-500">
          بهترین ها از بهترین تصمیم حاصل می شود
        </p>
        <h2 className="text-lg text-nowrap sm:text-3xl font-bold">
          سلام من زینب مستاجران هستم
        </h2>
        <h2 className="text md:text-2xl">برنامه نویس وتوسعه دهنده فرانت اند</h2>
        <p className="text-sm text-black dark:text-white">
          به وب سایت من خوش آمدین
        </p>
        <p className="text-sm text-center pb-4 text-black dark:text-white">
          توی این وب سایت می تونید بخشی از مهارت ها ، خدمات و نمونه کارهای
          منوببینید
        </p>
        <button className="px-14 text-lg py-2 text-white hover:text-[var(--basic)] bg-[var(--basic)] rounded-lg dark:text-black hover:bg-transparent dark:hover:text-[var(--basic)]  cursor-pointer hover:border border-[var(--basic)]">
          دانلود رزومه
        </button>
      </div>
      <img
        className="w-full sm:w-[280px] h-[600px] rounded-b-lg object-cover rounded-r-[200px] rounded-l-lg  md:pt-36"
        src="/hero-1.jpg"
        alt=""
      />
    </div>
  );
}
