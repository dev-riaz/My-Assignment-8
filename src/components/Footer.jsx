import imag1 from "@/assets/icons8-location-pin-48.png";
import imag2 from "@/assets/icons8-call-64.png";
import imag3 from "@/assets/icons8-gmail-48.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0c4532] text-gray-200 mt-10">
      <div className="w-11/12 mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#e7b84b] mb-3">
            About Us
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Bangladesh s most trusted livestock marketplace for Qurbani animals.
            Find healthy cows, goats & sheep from verified farmers.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-[#e7b84b] mb-3">
            Contact Info
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Image src={imag1} width={20} height={20} alt="location"></Image>{" "}
              Rangpur, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Image src={imag2} width={20} height={20} alt="location"></Image>{" "}
              +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <Image src={imag3} width={20} height={20} alt="location"></Image>{" "}
              support@example.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-[#e7b84b] mb-3">
            Follow Us
          </h2>
          <div className="flex gap-4 text-gray-400">
            <Link
              className="hover:text-white transition"
              href={"https://www.facebook.com/"}
            >
              Facebook
            </Link>
            <Link
              className="hover:text-white transition"
              href={"https://www.instagram.com/"}
            >
              Instagram
            </Link>
            <Link
              className="hover:text-white transition"
              href={"https://x.com/"}
            >
              Twitter
            </Link>
            <Link
              className="hover:text-white transition"
              href={"https://www.linkedin.com/"}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
