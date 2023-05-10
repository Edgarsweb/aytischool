import Link from "next/link";
import React from "react";
// import Image from "next/image";
import navStyles from "@/styles/Nav.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
// import logo from "../pages/images/3.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navbar}>
        <Link href="/">
        {/* <Image
            src={logo}
            alt="CEO image"
            width="84"
            height="84"
          /> */}
          <span className={navStyles.navLogo}>
            Cod<span className={navStyles.web}>invest</span>{" "}
          </span>
        </Link>
        {/* </li> */}
        <ul
          className={
            isOpen === false
              ? navStyles.navMenu
              : navStyles.navMenu + " " + navStyles.active
          }
        >
          <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="/" className={navStyles.navItem}>
            <span
                className={
                  currentRoute === "/"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                Մեր մասին
              </span>
            </Link>
          </li>

          <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="/courses">
              <span
                className={
                  currentRoute === "/courses"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                Դասընթացներ
              </span>
            </Link>
          </li>

          

          <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="/contact">
            <span
                className={
                  currentRoute === "/contact"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                Contact
              </span>
            </Link>
          </li>

          {/* <li>
          <a href="mailto:info@edxweb.com ">
          <span>
            <span className={navStyles.navButton}>Start your project</span>
          </span>
        </a>
          </li> */}
        </ul>

       

        <button
          className={
            isOpen === false
              ? navStyles.hamburger
              : navStyles.hamburger + " " + navStyles.active
          }
          onClick={openMenu}
        >
          <span className={navStyles.bar}></span>
          <span className={navStyles.bar}></span>
          <span className={navStyles.bar}></span>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
