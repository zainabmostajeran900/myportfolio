import React from "react";
import { BsWindowDesktop } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import CustomProgressBar from "../components/Customprogressbar";

export default function About() {
  // تبدیل عدد به فارسی
  const toPersianNumber = (number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
  };
  return (
    <div
      id="about"
      className="h-fit sm:h-[1200px] sm:py-18 py-8 px-6 flex flex-col gap-y-10"
    >
      <p className="font-bold text-3xl text-[var(--basic)]">_____ درباره من</p>
      <div className="flex flex-col gap-y-4 sm:flex sm:flex-row items-center sm:gap-x-8">
        <div className="flex flex-col  gap-y-8">
          <div className="flex flex-col gap-y-4 sm:flex sm:flex-row sm:gap-x-6">
            <div className="bg-[var(--basic)] rounded-lg sm:w-[300px] -mt-4 h-[280px] flex items-center justify-center px-2 py-1 transition duration-500 ease-in-out transform hover:-translate-y-2  animate-in">
              <img src="/web.png" alt="" />
            </div>
            <div className="flex flex-col bg-white shadow-2xl dark:bg-[var(--color-bg2)] p-4 sm:w-[300px] h-[280px]  items-center justify-center rounded-lg text-center gap-y-3 transition duration-500 ease-in-out transform hover:-translate-y-2  animate-in">
              <IoCodeSlashOutline size={50} />

              <h1 className="font-bold text-2xl">کد تمیز</h1>
              <p>
                <p class="text-sm">
                  طراحی های Front-end با اصول و استانداردهای تعیین شده. و همچنین
                  کدها مرتب، تمیز و قابل فهم با کمترین و بهینه ترین استایل دهی
                  کدنویسی می شوند
                </p>
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-y-4 sm:flex sm:flex-row sm:gap-x-6">
            <div className="flex flex-col bg-white shadow-2xl dark:bg-[var(--color-bg2)] p-4 sm:w-[300px] h-[280px] -mt-4  items-center justify-center rounded-lg text-center gap-y-3 transition duration-500 ease-in-out transform hover:-translate-y-2  animate-in">
              <BsWindowDesktop size={50} />
              <h1 className="font-bold text-2xl">واکنش گرا </h1>
              <p>
                <p class="text-sm">
                  کدنویسی واکنش گرا یا ریسپانسیوسازی برای تمام deviceها از سایز
                  320px به بالا انجام می شود
                </p>
              </p>
            </div>{" "}
            <div className="bg-[var(--basic)] rounded-lg sm:w-[300px] h-[280px] flex items-center justify-center px-2 py-1 transition duration-500 ease-in-out transform hover:-translate-y-2  animate-in">
              {" "}
              <img src="/mobile.png" alt="" />
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-y-4">
          <p className="font-bold text-3xl">مهارت های من</p>
          <div className="flex flex-col gap-y-4 ">
            <div>
              <label className="font-bold" htmlFor="">
                HTML
              </label>
              <CustomProgressBar value={89} completed={95} />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                CSS
              </label>
              <CustomProgressBar value={93} completed={95} />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                BOOTSTRAP
              </label>
              <CustomProgressBar value={95} completed={85} />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                JAVASCRIPT
              </label>
              <CustomProgressBar value={60} completed={80} />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                TYPESCRIPT
              </label>
              <CustomProgressBar value={50} completed={75} />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                REACT.JS
              </label>
              <CustomProgressBar value={75} completed={65} />
            </div>
            <div>
              <label className="font-bold" htmlFor="">
                NEXT.JS
              </label>
              <CustomProgressBar value={65} completed={55} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-4 sm:flex sm:flex-row items-start sm:gap-x-6">
        <div className="flex flex-col rounded-lg bg-white dark:bg-[var(--color-bg2)] shadow-lg px-4 py-8">
          <h1 className="text-[var(--basic)] font-bold text-lg">تجربه</h1>
          <div className="border-b-1 py-4 border-black dark:border-white">
            <div className="flex items-center justify-between py-2">
              <h2 className="font-bold text-base sm:text-xl">
                {toPersianNumber(2)} سال تجربه کار فریلنسری
              </h2>
              <p className="text-[var(--basic)] text-sm">
                {toPersianNumber(1400)} - {toPersianNumber(1398)}
              </p>
            </div>
            <p className="text-sm">
              از طریق پیج اینستاگرام پروژه های متعدد از شرکت هایی مثل مخابرات
              استان اصفهان، شرکت پدیده تجارت، شرکت PMDsoft و... دریافت و طراحی
              کردم
            </p>
          </div>
          <div className="border-b-1 py-4 border-black dark:border-white">
            <div className="flex items-center justify-between py-2">
              <h2 className="font-bold text-base sm:text-xl">
                {toPersianNumber(1)} سال تجربه همکاری با شرکت پدیده تجارت اصفهان
              </h2>
              <p className="text-[var(--basic)] text-sm text-nowrap">
                {toPersianNumber(1401)} - {toPersianNumber(1400)}
              </p>
            </div>
            <p className="text-sm">
              از مهرماه سال {toPersianNumber(1400)} تا مهرماه سال{" "}
              {toPersianNumber(1401)} در شرکت پدیده تجارت فرانت کار ارشد بودم و
              بعد از یکسال قرارداد کارمندی من به اتمام رسید و بصورت فریلنسری کار
              میکنم.
            </p>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between py-2">
              <h2 className="font-bold text-base sm:text-xl">
                {" "}
                {toPersianNumber(1)} سال تجربه آموزش Front-end{" "}
              </h2>
              <p className="text-[var(--basic)] text-sm text-nowrap">
                {toPersianNumber(1401)} - {toPersianNumber(1400)}
              </p>
            </div>
            <p className="text-sm">
              تجربه یکسال آموزش آنلاین از طریق درخواست پیچ اینستاگرام و آموزش
              حضوری در شرکت پدیده تجارت اصفهان
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-[var(--color-bg2)] px-4 py-6">
          <h1 className="text-[var(--basic)] font-bold text-lg">تحصیلات</h1>
          <div className="border-b-1 py-4 border-black dark:border-white">
            <div className="flex items-center justify-between py-2">
              <h2 className="font-bold text-base sm:text-xl">
                {" "}
                یادگیری Front-End{" "}
              </h2>
              <p className="text-[var(--basic)] text-sm">
                ... - {toPersianNumber(1397)}
              </p>
            </div>
            <p className="text-sm">
              از اواسط سال {toPersianNumber(1397)} شروع به یادگیری و تخصصی
              فرانت-اند از طریق آموزش های آنلاین سایت هایی مثل کلیک سایت ،
              آموزشتک ، وی لرن ، 7لرن ، راکت و ... کردم
            </p>
          </div>
          <div className="border-b-1 py-4 border-black dark:border-white ">
            <div className="flex items-center justify-between py-2">
              <h2 className="font-bold text-base sm:text-xl">
                کارشناسی ارشد نرم افزار کامپیوتر{" "}
              </h2>
              <p className="text-[var(--basic)] text-sm">
                {toPersianNumber(1395)} - {toPersianNumber(1393)}
              </p>
            </div>
            <p className="text-sm">
              از سال{toPersianNumber(1396)} تا {toPersianNumber(1398)} در
              دانشگاه غیرانتفاعی اشرفی اصفهان تحصیل میکردم و با معدل{" "}
              {toPersianNumber(17)}/{toPersianNumber(50)}در مقطع کارشناسی ارشد
              فارغ التحصیل شدم
            </p>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between py-2">
              <h2 className="font-bold text-base sm:text-xl">
                {" "}
                کارشناسی نرم افزار کامپیوتر
              </h2>
              <p className="text-[var(--basic)] text-sm">
                {" "}
                {toPersianNumber(1392)} - {toPersianNumber(1390)}{" "}
              </p>
            </div>
            <p className="text-sm">
              {" "}
              از سال{toPersianNumber(1390)} تا {toPersianNumber(1394)} در
              دانشگاه پیام نور اصفهان تحصیل میکردم و با معدل{" "}
              {toPersianNumber(16)}/{toPersianNumber(14)}در مقطع کارشناسی فارغ
              التحصیل شدم{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
