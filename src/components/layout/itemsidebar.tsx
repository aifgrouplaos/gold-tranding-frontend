"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenusidebar } from "@/types/menusidebartype";
import { Listmenu } from "@/data/Listmenu";
export default function Itemsidebar({ item }: { item: IMenusidebar }) {
  const currentPagename = usePathname();
  const [dropdown, setDropdown] = useState(false);
  if (item.type == "link") {
    return (
      <li key={item.id}>
        <Link
          href={item.link}
          className={`sidebar_item_link ${
            currentPagename.includes(item.link) ? "active" : ""
          }`}
        >
          <i
            className="link-icon"
            dangerouslySetInnerHTML={{ __html: item.icon }}
          ></i>
          <span>
            {item.name} {item.id}
          </span>
        </Link>
      </li>
    );
  } else if (item.type == "subMenu") {
    return (
      <li
        className={`${dropdown ? " open " : ""} ${
          currentPagename.includes(item.link) ? " open" : ""
        }`}
        onClick={() => setDropdown(!dropdown)}
        key={item.id}
      >
        <Link
          href="#"
          className={`sidebar_item_link ${
            currentPagename.includes(item.link) ? "active" : ""
          }`}
        >
          <b
            className="link-icon"
            dangerouslySetInnerHTML={{ __html: item.icon }}
          ></b>
          <span>
            {item.name} {item.id}
            <i className="fa-solid fa-angle-down fa-sm btn-toggle"></i>
          </span>
        </Link>
        <ul className="treedropdow">
          {item.children.length > 0 &&
            item.children.map((val: any, key: number) => {
              return (
                <li key={val.id}>
                  <Link
                    href={val.link}
                    className={`sidebar_child_item_link ${
                      currentPagename.includes(val.link) ? " active" : ""
                    }`}
                  >
                    <b
                      className="link-icon"
                      dangerouslySetInnerHTML={{ __html: val.icon }}
                    ></b>
                    <span>
                      {val.name} {val.id}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </li>
    );
  }
}
