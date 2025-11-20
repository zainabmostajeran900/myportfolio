import React from "react";
import {Link} from "react-router-dom"
import { CarouselSize } from "../components/Caroselsize";
export default function portfolio() {
  return (
    <div
      id="Portfolio"
      className="h-[610px] sm:py-18 py-8 px-6 flex flex-col gap-y-10"
    >
      <p className="font-bold text-3xl text-[var(--basic)]">
        _____ نمونه کارها
      </p>
      <CarouselSize />
      <div className="flex items-center justify-center">
        <Link to="/archive">
          {" "}
          <button className="px-6 py-2 bg-[var(--basic)] rounded-lg text-black hover:bg-transparent hover:text-[var(--basic)] cursor-pointer hover:border border-[var(--basic)]">
            آرشیو نمونه کارها{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
