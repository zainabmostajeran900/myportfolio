import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWindowDesktop } from "react-icons/bs";
import { BiLogoGit } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";

export default function Services() {
    // تبدیل عدد به فارسی
const toPersianNumber = (number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
};
  return (
    <div
      id="Services"
      className=" h-fit sm:h-[680px] sm:py-18 py-8 px-6 flex flex-col gap-y-10"
    >
      <p className="font-bold text-3xl text-[var(--basic)]">
        _____ خدمات و مزایا
      </p>
      <div className=" flex flex-col gap-y-4 sm:flex sm:flex-row sm:gap-x-4">
        <div className="sm:w-3/4 flex flex-col gap-4">
          <div className=" grid  gap-y-4 sm:grid sm:grid-cols-2 sm:gap-x-4">
            <div className="flex flex-col bg-white shadow-lg  text-black dark:bg-[var(--color-bg2)] dark:text-white rounded-lg p-7 gap-y-4">
              <div className="flex items-center gap-x-5">
                <div className="bg-[var(--basic)] rounded-full p-5">
                  <IoCodeSlash size={30} />
                </div>{" "}
                <p className="font-bold text-2xl">کد تمیز</p>
              </div>
              <p>
                طراحی های Front-end با اصول و استانداردهای تعیین شده. و همچنین
                کدها مرتب، تمیز و قابل فهم با کمترین و بهینه ترین استایل دهی
                کدنویسی می شوند
              </p>
            </div>
            <div className="flex flex-col bg-white shadow-lg  text-black dark:bg-[var(--color-bg2)] dark:text-white rounded-lg p-7 gap-y-4">
              <div className="flex gap-x-5 items-center">
                <div className="bg-[var(--basic)] rounded-full p-5">
                  <BsWindowDesktop size={30} />
                </div>{" "}
                <p className="font-bold text-2xl"> واکنش گرا</p>
              </div>
              <p>
                کدنویسی واکنش گرا یا ریسپانسیوسازی برای تمام deviceها از سایز
                {toPersianNumber(320)}px  بالا انجام می شود
              </p>
            </div>
          </div>
          <div className="grid gap-y-4 sm:grid sm:grid-cols-2 sm:gap-x-4">
            <div className="flex flex-col bg-white shadow-lg  text-black dark:bg-[var(--color-bg2)] dark:text-white rounded-lg p-7 gap-y-4">
              <div className="flex gap-x-5 items-center">
                <div className="bg-[var(--basic)] rounded-full p-5">
                  <BiLogoGit size={30} />
                </div>
                <p className="font-bold text-2xl"> پشتیبانی</p>
              </div>
              <p>
                به مدت {toPersianNumber(2)}  ماه بعد از اتمام قرارداد و یا تسویه حساب، راهنمایی،
                باگها و مشکلاتی که ممکن است سهوا بوجود آمده باشند رایگان و
                همچنین تغییرات جزئی در فرانت رایگان و یا با کمترین هزینه انجام
                می شود.
              </p>
            </div>
            <div className="flex flex-col bg-white shadow-lg  text-black dark:bg-[var(--color-bg2)] dark:text-white rounded-lg p-7 gap-y-4">
              <div className="flex gap-x-5 items-center">
                <div className="bg-[var(--basic)] rounded-full p-5">
                  <BsGraphUpArrow size={30} />
                </div>{" "}
                <p className="font-bold text-2xl"> ابزار مناسب</p>
              </div>
              <p>
                استفاده از فریمورک مناسب با نوع وب سایت و یا وب اپلیکیشن شما
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/3 flex flex-col text-center items-center bg-white shadow-xl dark:bg-[var(--color-bg2)] rounded-lg px-6 py-10 gap-y-5 ">
          <img
            className="rounded-full w-[150px] h-[150px]"
            src="/photo15939773167.jpg"
            alt=""
          />
          <p className="font-bold text-xl">من زینب مستاجران هستم</p>
          <p className="text-base">
            متولد سال {toPersianNumber(1372)}  ساکن شهر اصفهان من همیشه به طراحی سایت و اپلیکیشن
            علاقه داشتم و خوشحالم در سال {toPersianNumber(1397)}  در مسیر علاقه ام قدم برداشتم.
           <br/>
            کدنویسی استاندارد با یک متخصص Front-End مسؤلیت پذیر نیاز تمام
            کارفرمایان و شرکت هاست پس خوشحال میشم با شما همکاری داشته باشم
          </p>
          <div className="flex gap-x-5 items-center">
          <FaInstagram  size={30}/>
          <FaYoutube  size={30}/>
          <FaTelegram  size={30}/>
          <FaLinkedin  size={30}/>
          </div>
        </div>
      </div>
    </div>
  );
}
