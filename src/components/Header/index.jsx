import useMediaQuery from "@mui/material/useMediaQuery";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../ assets/logo.svg";
import { MenuMobile } from "../MenuMobile";
import Styles from "./styles.module.scss";

export const Header = ({open}) => {
  const isWide = useMediaQuery("(min-width:600px)");
  return isWide ? (
    <>
    {open?(<br></br>):(
      <header className={Styles.headerContainer}>
      <div className={Styles.headerContent}>
        <Link href="#">
          <Image
            style={{
              cursor: "pointer",
            }}
            alt="logo"
            href="/"
            src={logo}
          ></Image>
        </Link>
        <nav>
          <Link className={Styles.active} href="#home">
            Home
          </Link>
          <Link className={Styles.active} href="#about">
            About
          </Link>
          <Link className={Styles.active} href="#skills">
            Skills
          </Link>
          <Link className={Styles.active} href="#projects">
            Projects
          </Link>
        </nav>
      </div>
    </header>
    )}
    </>
  ) : (
    <header className={Styles.headerContainer}>
      <div className={Styles.headerContent}>
        <div className={Styles.hamburger}>
          <MenuMobile></MenuMobile>
        </div>
      </div>
    </header>
  );
};
