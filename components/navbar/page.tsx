"use client";
import Link from "next/link";

import { navItems } from "@/data/nav-items";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <div className="hidden sm:block fixed top-0 z-50">
        <div className="mt-14 ml-14 flex flex-col font-semibold tracking-wide uppercase">
          {navItems?.map((item) => {
            return (
              <Link key={item.name} href={item.href} className="py-2">
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="block sm:hidden fixed top-0 z-50">
        <div className="mt-14 ml-14 flex flex-col ease-in-out duration-500">
          <div
            id="blur"
            className={
              (mobileMenuVisible ? "block" : "hidden") +
              " absolute top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm"
            }
          />
          <GiHamburgerMenu
            onClick={toggleMobileMenu}
            size={30}
            className={"z-20"}
          />
          <div
            className={
              (mobileMenuVisible ? "flex" : "hidden") +
              " z-20 mt-4 flex-col font-semibold tracking-wide uppercase"
            }
          >
            {navItems?.map((item) => {
              return (
                <Link key={item.name} href={item.href} className="py-2">
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
