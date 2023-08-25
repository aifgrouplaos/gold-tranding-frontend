"use client";
import React, { useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
 import Sidebar from "./sidebar"; 
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';import Link from "next/link";
import Menuprofile from "../menunavbar/menuprofile";
import Notification from "../menunavbar/notification";
import Menutranslate from "../menunavbar/menutranslate";
 export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menutogle, setMenutogle] = useState(true);
  return (
    <main className={menutogle ? "open" : "close"}>
      {/* ໃຊ້ເພື່ອເປັນ Backdrop ໃຫ້ menu sidebar  */}
      <div
        className={menutogle ? "" : "backdrop"}
        onClick={() => setMenutogle(!menutogle)}
      ></div>{" "}
      {/* ---------- Menu sidebar */}
      <Sidebar />
      <div className="content">
        {/*------------ muenu navbar  */}
        <div className="nav">
          <div className="nav__left">
            <button
              className="menu-togle"
              onClick={() => {
                setMenutogle(!menutogle);
              }}
            >
              <MenuRoundedIcon fontSize="medium" />
            </button> 
            <a href="#">AIF Gold Trading</a>
          </div>
          <div className="nav__right">
            <ul className="flex gap-3">
              <li className="nav-item-link"> 
                 <Notification/>
              </li>
              <li className="nav-item-link"> 
                 <Menutranslate/>
              </li>
              <li className="nav-item-link"> 
                 <Menuprofile/>
              </li>
            </ul>
          </div>
        </div> 
        {/* body of main content */}
        <div className="main">{children}</div>
      </div>
    </main>
  );
}
