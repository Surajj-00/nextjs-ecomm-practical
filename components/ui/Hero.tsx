import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  const brands = [
    { name: "versace", src: "/brands/versace.png" },
    { name: "zara", src: "/brands/zara.png" },
    { name: "gucci", src: "/brands/gucci.png" },
    { name: "prada", src: "/brands/prada.png" },
    { name: "calvin-klein", src: "/brands/celvin-klein.png" },
  ];


  return (
    <section>
      {/* Hero */}
      <div className="bg-[#F2F0F1]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 md:gap-8 pb-0 items-end">
          {/* Left */}
          <div className="flex flex-col justify-center md:pb-16">
            <h1 className="font-heading text-5xl lg:text-8xl font-black uppercase leading-none tracking-tight text-black mt-8">
              Find Clothes That Matches Your Style
            </h1>
            <p className="text-gray-500 text-xs lg:text-base my-5 leading-4 lg:leading-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="flex items-center gap-4 mb-12 text-center">
              <Link
                href="/#new-arrivals"
                className=" w-full md:w-fit bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 active:scale-95 transition"
              >
                Shop Now
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-0 divide-x divide-gray-300">
              <div className="pr-4">
                <p className="font-heading text-3xl font-black text-gray-900">
                  200+
                </p>
                <p className="text-gray-500 text-xs mt-1">International Brands</p>
              </div>
              <div className="px-6">
                <p className="font-heading text-3xl font-black text-gray-900">
                  2,000+
                </p>
                <p className="text-gray-500 text-xs mt-1">High-Quality Products</p>
              </div>
              <div className="pl-4">
                <p className="font-heading text-3xl font-black text-gray-900">
                  30,000+
                </p>
                <p className="text-gray-500 text-xs mt-1">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right — model image */}
          <div className="relative h-150 md:h-162.5 flex items-end justify-center overflow-hidden">
            {/* Decorative stars */}
            <Image
              src='/icons/sm-star.png'
              alt="sm-star"
              className="absolute top-80 left-12 right-6 z-10"
              width={48}
              height={48}
            />

            <Image
              src="/images/heroImg.jpg"
              alt="Model wearing Shop.co clothing"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <Image
              src='/icons/big-star.png'
              alt="big-star"
              className="absolute top-28 right-6 z-10"
              width={84}
              height={84}
            />
          </div>
        </div>
      </div>

      {/* Brand logos strip */}
      <div className="bg-black py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-6 w-28">
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
