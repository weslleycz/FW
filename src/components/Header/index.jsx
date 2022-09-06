import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import logo from "../../ assets/logo.svg";
import Styles from "./styles.module.scss";
import { useState } from "react";
import Hamburger from 'hamburger-react'

export const Header = () => {
  const isWide = useMediaQuery("(min-width:600px)");
  const [isOpen, setOpen] = useState(false)
  return isWide ? (
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
          <Link className={Styles.active} href="/">
            Home
          </Link>
          <Link className={Styles.active} href="#skills">
            Skills
          </Link>
          <Link className={Styles.active} href="#projects">
            Projects
          </Link>
          <Link className={Styles.active} href="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  ) : (
    <header className={Styles.headerContainer}>
      <div className={Styles.headerContent}>
        <div className={Styles.hamburger}>
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </header>
  );
};
