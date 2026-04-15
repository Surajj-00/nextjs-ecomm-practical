import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] md:mt-20 pt-16 md:pt-32 pb-10 relative ">
      {/* Newsletter */}
      <div className="md:absolute md:-top-20 md:left-1/2 md:-translate-x-1/2 w-full max-w-7xl px-6">
        <div className="bg-black text-white rounded-2xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold max-w-md leading-tight">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col gap-3 w-full md:w-auto">

            <div className="flex items-center bg-white rounded-full px-4 py-2 w-70">
              <Mail size={16} className="text-gray-400 mr-2" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="outline-none text-sm w-full text-black bg-transparent"
              />
            </div>

            <button className="bg-white text-black rounded-full py-2 text-sm font-medium">
              Subscribe to Newsletter
            </button>

          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-3xl font-heading font-extrabold mb-4 text-black">SHOP.CO</h3>

          <p className="text-gray-600 text-sm mb-5">
            We have clothes that suits your style and which you're proud to wear.
            From women to men.
          </p>

          <div className="flex items-center gap-3">

            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white"
            >
              <Image
                src="/icons/x.svg"
                alt="twitter"
                width={12}
                height={12}
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white"
            >
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={16}
                height={16}
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white"
            >
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={16}
                height={16}
              />
            </a>

            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white"
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                width={16}
                height={16}
              />
            </a>

          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-black">COMPANY</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Works</Link></li>
            <li><Link href="#">Career</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-4 text-black">HELP</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Customer Support</Link></li>
            <li><Link href="#">Delivery Details</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="font-semibold mb-4 text-black">FAQ</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Account</Link></li>
            <li><Link href="#">Manage Deliveries</Link></li>
            <li><Link href="#">Orders</Link></li>
            <li><Link href="#">Payments</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4 text-black">RESOURCES</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="#">Free eBooks</Link></li>
            <li><Link href="#">Development Tutorial</Link></li>
            <li><Link href="#">How to - Blog</Link></li>
            <li><Link href="#">Youtube Playlist</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">

        <p className="text-gray-500">Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="flex gap-3 items-center">
          <Image src="/icons/visa.svg" alt="Visa" width={24} height={24} />
          <Image src="/icons/mastercard.svg" alt="Mastercard" width={24} height={24} />
          <Image src="/icons/paypal.svg" alt="Paypal" width={16} height={16} />
          <Image src="/icons/applepay.svg" alt="Apple Pay" width={24} height={24} />
          <Image src="/icons/googlepay.svg" alt="Google Pay" width={24} height={24} />
        </div>

      </div>
    </footer>
  );
}
