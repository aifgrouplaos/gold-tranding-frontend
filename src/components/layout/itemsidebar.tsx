"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenusidebar } from "@/types/menusidebartype";
export default function Itemsidebar({ item }: { item: IMenusidebar | any }) {
  const currentPagename = usePathname();
  const [dropdown, setDropdown] = useState(false);
  if (item.type == "link") {
    return (
      <li key={item.id} id={`${item.id}`}>
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
          <span>{item.name}</span>
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
        id={`${item.id}`}
      >
        <Link
          href="#"
          className={`sidebar_item_link ${
            currentPagename.includes(item.link) ? "active" : ""
          }`}
        >
          <i
            className="link-icon"
            dangerouslySetInnerHTML={{ __html: item.icon }}
          ></i>
          <span>
            {item.name}
            <i className="fa-solid fa-angle-down fa-sm btn-toggle"></i>
          </span>
        </Link>
        <ul className="treedropdow" key={item.id} id={`${item.id}`}>
          {item.children.length > 0 &&
            item.children.map((val: IMenusidebar, key: number) => (
              <li key={val.id} id={`${val.id}`}>
                <Link
                  href={val.link}
                  className={`sidebar_child_item_link ${
                    currentPagename.includes(val.link) ? " active" : ""
                  }`}
                >
                  <i
                    className="link-icon"
                    dangerouslySetInnerHTML={{ __html: val.icon }}
                  ></i>
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </li>
    );
  }
}
