import { useParams } from "react-router-dom";
import NavbarPortfolio from "../components/NavbarPrtfolio";
import Footer from "./Footer";

const images = [
  {
    id: "1",
    title: "تصویر اول",
    src: "/image/Vite-App-03-06-2025_11_16_PM.png",
  },
  {
    id: "2",
    title: "تصویر دوم",
    src: "/image/Vite-React-TS-03-26-2025_08_18_PM.png",
  },
  {
    id: "3",
    title: "تصویر سوم",
    src: "/image/Vite-React-TS-10-20-2025_12_44_AM.png",
  },
  {
    id: "4",
    title: "تصویر چهارم",
    src: "/image/پیتزا-نوشا-05-12-2025_04_19_PM.png",
  },
  {
    id: "5",
    src: "/image/Vite-React-TS-03-11-2025_05_22_PM.png",
    title: "تصویر پنجم",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const image = images.find((p) => p.id === id);

  if (!image) {
    return <div className="text-white p-10">پروژه پیدا نشد</div>;
  }

  return (
    <>
    
      {/* کانتینر اصلی → کل صفحه + بک‌گراند کامل */}
      <div className="min-h-screen flex flex-col  dark:bg-[var(--color-bg1)] text-black dark:text-white px-4">
        {/* محتوای اصلی */}
          <NavbarPortfolio />
        <main className="flex-1 flex flex-col items-center justify-start w-full overflow-x-hidden px-6 pb-20">
          <div className="flex flex-col items-center justify-center border-b-4 border-[var(--basic)] py-3 px-6 w-[250px] md:w-[800px]">
            <h1 className="text-3xl font-bold py-5">{image.title}</h1>
            <p className="pb-2">طراحی فرانت-اند</p>
          </div>

          <div className="w-full  flex flex-col items-center justify-center gap-y-6 md:flex-row md:justify-between md:gap-x-10 md:items-start p-10">
            <img
              src={image.src}
              alt={image.title}
              className="rounded-lg object-cover md:w-[800px] "
            />

            <div className="flex flex-col items-start justify-center gap-y-6">
              <img
                className="rounded-lg w-[350px] h-auto hidden md:block"
                src="/photo15939773167.jpg"
                alt=""
              />

              <div className="flex flex-col items-start gap-y-3 bg-white dark:bg-[var(--color-bg2)] text-black dark:text-white shadow-2xl rounded-lg py-8 px-6">
                <h1 className="font-bold text-xl">جزئیات پروژه</h1>
                <p>طراحی فرانت-اند وبسایت قبلی شرکت پدیده تجارت</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        {/* فوتر در پایین */}
      </div>
    </>
  );
};

export default ProjectDetails;
