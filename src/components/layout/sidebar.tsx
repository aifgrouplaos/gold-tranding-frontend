import React from "react";
import { Listmenu } from "@/data/Listmenu";
import Image from "next/image";
import logo from "/public/favicon.png";
import Bannersticky from "./bannersticky";
import Itemsidebar from "./itemsidebar";
import { IMenusidebar } from "@/types/menusidebartype";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menusidebar">
        <div className="list-menu-item">
          <div className="list-menu-logo">
            <Image src={logo} alt="" width={100} height={50} />
          </div>

          <ul>
            {Listmenu.map((item: IMenusidebar, index) => {
              return <Itemsidebar item={item} key={index} />;
            })}
          </ul>
        </div>
        <div className="menu-banner">
          <Bannersticky />
        </div>
      </div>
    </div>
  );
}
