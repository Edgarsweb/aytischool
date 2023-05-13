import Link from "next/link";
import React from "react";
// import Image from "next/image";
import navStyles from "@/styles/Nav.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  PhoneOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  MailOutlined,
  WhatsAppOutlined,
  SendOutlined
} from "@ant-design/icons";
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
            IT<span className={navStyles.web}>Gym</span>{" "}
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

          <div className={navStyles.links}>
          <li>
          <Link href="tel:+37493007110">
          <span>
          <PhoneOutlined /> 
          
          </span>
        </Link>
          </li>
        
        <li>
          <Link href="mailto:edgarwyn@gmail.com"> 
          <span>
          <MailOutlined />
          </span>
          </Link>
        </li>

        <li>
          <Link href="https://wa.me/79253807313"> 
          <span>
          <WhatsAppOutlined/>
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


        </div>

          
        

          

         

         
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
