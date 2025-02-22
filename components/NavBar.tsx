import { NavData } from "@/lib/type";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  data: NavData;
}

const NavItem = ({ data }: NavItemProps) => {
  return (
    <Link href={data.href} className="font-bold text-black ">
      {data.name}
    </Link>
  );
};
interface NavBarProps {
  className?: string;
  list: NavData[];
}
const NavBar = ({ list, className }: NavBarProps) => {
  return (
    <div className={`${className} flex justify-evenly py-5`}>
      {list.map((item, index) => (
        <NavItem key={index} data={item} />
      ))}
    </div>
  );
};

export default NavBar;
