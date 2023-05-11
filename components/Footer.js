import React from "react";
import footerStyles from "@/styles/Footer.module.css";
import Link from "next/link";
import {
  PhoneOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  MailOutlined,
  WhatsAppOutlined
} from "@ant-design/icons";

function Footer() {
  return (
    <div>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.phoneCall}>
          <a href="tel:+37493007110">
            <PhoneOutlined className={footerStyles.phoneIcon} />
          </a>
        </div>

        <div className={footerStyles.row}>
          <div className={footerStyles.footerBlock}>
            <h6>Codinvest</h6>
            <p className={footerStyles.footerDescription}>EdxWeb is a web design & SEO Agency in Yerevan and New York. Specializing in website design, e-commerce, digital strategy & Search Engine Optimization</p>

            <div className={footerStyles.socialMedia}>
              <a href="https://www.instagram.com/edxweb/">
                <InstagramOutlined className={footerStyles.Insta} />
              </a>

              <a href="https://www.linkedin.com/company/edxweb/">
                <LinkedinOutlined className={footerStyles.Linkedin} />
              </a>

              <a href="https://www.facebook.com/Edgarweb.site/">
                <FacebookOutlined className={footerStyles.Facebook} />
              </a>

              <a href="https://twitter.com/Edxweb1">
                <TwitterOutlined className={footerStyles.Twitter} />
              </a>

              <a href="#">
                <YoutubeOutlined className={footerStyles.Youtube} />
              </a>
            </div>
          </div>

          <div className={footerStyles.footerBlock}>
            <h6>MENU</h6>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              {/* <li>
                <Link href="/pricing">Pricing</Link>
              </li> */}

              <li>
                <Link href="/work">Work</Link>
              </li>

             

              {/* <li>
                <Link href="/products">Products</Link>
              </li> */}

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={footerStyles.footerBlock}>
            <h6>Useful Links</h6>

            <Link href="/privacyPolicy">Privacy Policy</Link>
            <Link href="/contact">
              Hire a Specialist
            </Link>
            <Link href="/contact">
              Investor Relations
            </Link>
          </div>

          <div className={footerStyles.footerBlock}>
            <h6>VIA</h6>
            <a href="mailto:info@edxweb.com">
            <MailOutlined />  Email
            </a>
            <a href="https://wa.me/+79253807313">
            <WhatsAppOutlined /> Whatsapp
            </a>
          </div>
        </div>

        <div className={footerStyles.copyright}>
          <p className={footerStyles.copyrightText}>
            {" "}
            Copyright © 2023 <a href="https://www.edxweb.com/">Codinvest</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
