"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/src/app/_utils/cn";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string | StaticImageData;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mx-auto mb-0 grid h-full w-full grid-cols-1 px-10 pb-0 pt-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            "relative m-3 rounded-lg hover:cursor-pointer",
            loaded && "transition duration-300 hover:scale-[1.025]  hover:shadow-lg",
          )}
        >
          <Image
            src={card.thumbnail}
            height="500"
            width="500"
            onLoad={() => setLoaded(true)}
            className={cn(
              "inset-0 h-full w-full rounded-lg object-cover object-center transition duration-200",
              loaded ? "blur-none" : "blur-md",
            )}
            alt={card.content as string}
          />
          <div
            className={cn(
              "bottom-0 w-full rounded-b-lg bg-gray-500/50 px-4 py-1 lg:py-3",
              loaded ? "absolute" : "hidden",
            )}
          >
            <p className="text-lg font-semibold text-white lg:text-xl">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
