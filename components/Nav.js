import Link from "next/link";
import React from "react";
import navStyles from "@/styles/Nav.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../src/pages/images/Algologo.png";
// import en from '../locales/en';
// import hy from '../locales/hy';
import {
  TwitterOutlined ,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
// import {coinPic} from "../public/coin.png"

const Nav = () => {
  const router = useRouter();
  const { locale } = router;
  // const t = locale === 'en' ? en : hy;
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
 
  const currentRoute = router.pathname;
  
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navbar}>
        <Link href="/">
          {/* <span className={navStyles.navLogo}>
            GELD<span className={navStyles.web}>COIN</span> */}
            <Image src={logo} alt="Algo Logo" width={124} height={124} />
          {/* </span> */}
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
            <Link href="/">
              <span
                className={
                  currentRoute === "/"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                Գլխավոր
                {/* Coins */}
                {/* {t.coins} */}
              </span>
            </Link>
          </li>

         

          {/* <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="/courses">
            <span
                className={
                  currentRoute === "/courses"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                Դասընթանցեր
                
              </span>
            </Link>
          </li> */}


          <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="/contact">
            <span
                className={
                  currentRoute === "/contact"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                Կապ
                {/* {t.contact} */}
                {/* Contact */}
              </span>
            </Link>
          </li>
        </ul>

    
        {/* <a href="https://twitter.com/edgarsblog">
          <span>
            <span className={navStyles.navButton}><TwitterOutlined /></span>
          </span>
        </a>


        <a href="mailto:edgarwyn@gmail.com">
          <span>
            <span className={navStyles.navButton}><MailOutlined/></span>
          </span>
        </a>

        <a href="tel:+37493007110">
          <span>
            <span className={navStyles.navButton}><PhoneOutlined/></span>
          </span>
        </a> */}
        {/* <select 
            onChange={changeLanguage}
            defaultValue={locale}
            className={navStyles.check}
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="hy">ՀՅ</option>
          </select> */}

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
