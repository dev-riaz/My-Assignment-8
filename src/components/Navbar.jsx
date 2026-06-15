"use client";
import image1 from "@/assets/icons8-cow-48 (1).png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const NavLink = (
    <>
      <li>
        <Link
          href={"/"}
          className={`${
            pathname === "/"
              ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
              : "text-white"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/allAnimal"}
          className={`${
            pathname === "/allAnimal"
              ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
              : "text-white"
          }`}
        >
          All Animals
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#14532D] text-white">
      <div className="navbar max-w-full md:max-w-11/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavLink}
            </ul>
          </div>
          <a className="text-xl flex justify-center items-center gap-2 font-bold">
            <Image
              className="bg-yellow-500 p-1 rounded-2xl"
              src={image1}
              width={40}
              height={40}
              alt="logo"
            ></Image>
            QurbaniHat
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLink}</ul>
        </div>
        <div className="navbar-end gap-4">
          <Link href={"/logIn"}>
            <button className="btn bg-[#14532D] text-white hover:border-yellow-500">
              LogIn
            </button>
          </Link>
          <Link href={"/register"}>
            <button className="btn bg-yellow-500 hover:border-[#14532D] ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
