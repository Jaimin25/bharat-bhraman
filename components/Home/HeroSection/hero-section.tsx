"use client";
import { motion } from "framer-motion";

import { HeroSectionImageSlider } from "@/components/Home/HeroSection/images-slider";

const bgImages = [
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jantar_Mantar_at_Jaipur.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/10/Somanath_mandir_%28cropped%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/ff/Shimla_Mall.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Auli%2C_India.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Rumtek_Monastery_04.jpg",
];

const bounceTransition = {
  y: {
    repeat: Infinity,
    duration: 2,
    ease: "easeOut",
  },
};

export default function HeroSection() {
  return (
    <HeroSectionImageSlider
      images={bgImages}
      className="h-screen flex-1"
      overlay={true}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        <motion.p className="flex-1 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-xl font-bold text-transparent md:text-6xl">
          Travel the horizons of India
        </motion.p>

        <motion.button
          animate={{
            y: ["5%", "-5%", "5%"],
          }}
          transition={bounceTransition}
          className="relative mx-auto mt-4 rounded-full border border-sky-500/20 bg-sky-300/10 px-4 py-2 text-center text-white backdrop-blur-sm"
        >
          <span>Explore now →</span>
          <div className="absolute inset-x-0  -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        </motion.button>
      </motion.div>
    </HeroSectionImageSlider>
  );
}
