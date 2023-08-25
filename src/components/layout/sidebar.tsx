 import React from "react";
import { Listmenu } from "@/data/Listmenu";
import Itemsidebar from "./itemsidebar";
import Image from "next/image";
 import logo from "/public/favicon.png";
import Bannersticky from "./bannersticky";
 
export default function Sidebar() {
  return ( 
    <div className="sidebar">
      <div className="menusidebar">
        <ul className="list-menu-item">
          <div className="list-menu-logo">
            <Image src={logo} alt="" width={100} height={50} />
          </div>
          {Listmenu.map((item, key) => (<Itemsidebar item={item} keyId={item.id} />))}
        </ul>
        <div className="menu-banner">
          <Bannersticky />
        </div>
      </div>
    </div>  
  );
}
