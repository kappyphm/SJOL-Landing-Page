import { NavData } from "@/lib/type";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  data: NavData;
}

const NavItem = ({ data }: NavItemProps) => {
  return <Link href={data.href}>{data.name}</Link>;
};
interface NavBarProps {
  list: NavData[];
}
const NavBar = ({ list }: NavBarProps) => {
  return (
    <div>
      {list.map((item, index) => (
        <NavItem key={index} data={item} />
      ))}
    </div>
  );
};

export default NavBar;
