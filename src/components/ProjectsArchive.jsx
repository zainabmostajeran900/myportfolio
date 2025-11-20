import React from "react";
import NavbarPortfolio from "../components/NavbarPrtfolio";
import Footer from "./Footer";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { Portfoliodata } from "../data/Portfoliodata";
import { useNavigate } from "react-router-dom"; // اضافه کردن useNavigate

export default function ProjectsArchive() {
  const navigate = useNavigate(); // استفاده از useNavigate برای هدایت
  return (
    <div>
      <NavbarPortfolio />
      <div className="dark:text-white text-black w-full  overflow-x-hidden  flex flex-col items-center justify-center px-6 pb-10">
        <div className="flex flex-col items-center justify-center border-b-3 border-[var(--basic)] py-3 px-6 w-[250px] md:w-[800px]">
          <h1 className="text-3xl font-bold py-5">نمونه کار های من</h1>
          <p className="pb-2">
            با توجه به اینکه پروژه ها برای اشخاص و یا شرکت ها بصورت اختصاصی
            طراحی شده اند متأسفانه از نمایش دادن سورس کد معذورم و ناچارا مجبورم
            فقط تصاویر فرانت های کدنویسی شده را به شما نمایش بدهم
          </p>
        </div>
        <div className="grid grid-cols-1 md:gird md:grid-cols-3 gap-6 py-20">
          {Portfoliodata.map((item, index) => (
            <div key={index} className="p-0 relative group rounded-xl">
              {/* تصویر با افکت هاور */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50 rounded-xl"
              />
              {/* عنوان تصویر در هاور */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
                <div className="relative flex flex-col gap-y-2 items-start justify-end pb-5 bg-[var(--color-bg4)] bg-opacity-50 px-4 pt-2 rounded-xl w-full h-full">
                  <div className="flex items-center justify-end absolute top-3 left-3">
                    {/* لینک به صفحه جزئیات پروژه */}
                    <BiRightTopArrowCircle
                      onClick={() => navigate(`/project/${item.id}`)} // هدایت به صفحه پروژه
                      className="hover:text-[var(--basic)] cursor-pointer"
                      size={30}
                    />
                  </div>
                  <p className="text-white text-2xl font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[var(--basic)] text-sm">طراحی فرانت اند</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
