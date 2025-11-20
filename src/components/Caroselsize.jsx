import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Portfoliodata } from "../data/Portfoliodata";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
export function CarouselSize() {
  const navigate = useNavigate();

  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <Carousel
        opts={{ align: "start", loop: true, direction: "rtl" }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {Portfoliodata.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 px-4"
            >
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardContent className="p-0 relative group overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-[280px] object-cover transition-opacity duration-300 group-hover:opacity-50 rounded-xl"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
                      <div className="relative flex flex-col gap-y-2 items-start justify-end pb-5 bg-[var(--color-bg4)] bg-opacity-50 px-4 pt-2 rounded-xl w-full h-full">
                        <div className="flex items-center justify-end absolute top-3 left-3">
                          <BiRightTopArrowCircle
                            onClick={() => navigate(`/project/${item.id}`)}
                            className="hover:text-[var(--basic)] cursor-pointer"
                            size={30}
                          />
                        </div>
                        <p className="text-white text-2xl font-semibold">
                          {item.title}
                        </p>
                        <p className="text-[var(--basic)] text-sm">
                          طراحی فرانت اند
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
