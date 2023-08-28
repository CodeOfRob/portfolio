import Link from "next/link";

import { navItems } from "@/data/nav-items";

export default function NavBar() {
  return (
    <div className="fixed top-0 z-50">
      <div className="mt-14 ml-14 flex flex-col font-semibold tracking-wide uppercase">
        {navItems?.map((item, idx) => {
          return (
            <Link key={idx} href={item.href} className="py-2">
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
