"use client";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/app/_utils/cn";
import { HeroSectionImageSliderProps } from "@/typings/hero-section-image-slider-props";
import { Skeleton } from "@chakra-ui/react";

export const PackagesImageSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
}: HeroSectionImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    loadImages();

    // autoplay
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  const slideVariants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  const areImagesLoaded = loading || loadedImages.length > 0;

  return (
    <div
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", className)}
      style={{
        perspective: "1000px",
      }}
    >
      {loading && (
        <Skeleton className="aspect-video w-full">
          <NextImage
            src=""
            alt="img"
            height={250}
            width={100}
            className="h-full w-full"
          />
        </Skeleton>
      )}
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && <div className={cn("absolute inset-0 z-40 bg-black/60", overlayClassName)} />}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={"fadeOut"}
            variants={slideVariants}
            className={"image absolute inset-0 aspect-square h-full w-full object-fill object-center"}
          />
        </AnimatePresence>
      )}
    </div>
  );
};
