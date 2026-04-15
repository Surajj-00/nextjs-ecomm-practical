"use client";

import Image from "next/image";

type StyleCard = {
  title: string;
  image: string;
};

const styles: StyleCard[] = [
  {
    title: "Casual",
    image: "/casual.png",
  },
  {
    title: "Formal",
    image: "/formal.png",
  },
  {
    title: "Party",
    image: "/party.png",
  },
  {
    title: "Gym",
    image: "/gym.png",
  },
];

export default function BrowseByStyle() {
  return (
    <section className="max-w-7xl mx-auto px-12 bg-[#F0F0F0] py-16 rounded-3xl">
      <div className="">

        {/* Heading */}
        <h2 className="text-center text-black font-heading text-4xl md:text-6xl font-bold mb-10">
          BROWSE BY DRESS STYLE
        </h2>

        {/* Grid */}
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Casual */}
          <div className="relative col-span-2 md:col-span-1 h-30 md:h-55 rounded-2xl overflow-hidden bg-white">
            <Image
              src="/casual.png"
              alt="Casual"
              fill
              className="object-cover scale-x-[-1]"
            />
            <p className="absolute top-5 left-5 text-xl font-semibold text-black">
              Casual
            </p>
          </div>

          {/* Formal (Wide) */}
          <div className="relative col-span-2 h-30 md:h-55 rounded-2xl overflow-hidden bg-white">
            <Image
              src="/formal.png"
              alt="Formal"
              fill
              className="object-cover scale-x-[-1]"
            />
            <p className="absolute top-5 left-5 text-xl font-semibold text-black">
              Formal
            </p>
          </div>

          {/* Party (Wide) */}
          <div className="relative col-span-2 h-30 md:h-55 rounded-2xl overflow-hidden bg-white">
            <Image
              src="/party.png"
              alt="Party"
              fill
              className="object-cover"
            />
            <p className="absolute top-5 left-5 text-xl font-semibold text-black">
              Party
            </p>
          </div>

          {/* Gym */}
          <div className="relative col-span-2 md:col-span-1 h-30 md:h-55 rounded-2xl overflow-hidden bg-white">
            <Image
              src="/gym.png"
              alt="Gym"
              fill
              className="object-cover"
            />
            <p className="absolute top-5 left-5 text-xl font-semibold text-black">
              Gym
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
