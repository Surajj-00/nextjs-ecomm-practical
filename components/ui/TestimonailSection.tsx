"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    name: "Alex K.",
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co."`,
  },
  {
    name: "Michael D.",
    text: `"Amazing collection and super comfortable fabrics. Definitely my go-to fashion store now."`,
  },
];

export default function TestimonialSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="py-20 scrollbar-hide">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className=" text-3xl md:text-6xl font-extrabold text-black font-heading">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex gap-4 text-black">
            <button
              onClick={scrollLeft}
              className="text-2xl font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              className="text-2xl font-bold"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] md:min-w-87 border rounded-2xl p-6 bg-white"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Name */}
                <h4 className="font-semibold mb-2 text-black">{item.name}</h4>

                {/* Text */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Blur Effect
          <div className="hidden md:flex pointer-events-none absolute right-0 top-0 h-full w-32 backdrop-blur-xs"></div> */}


        </div>

      </div>
    </section>
  );
}
