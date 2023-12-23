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
  WhatsAppOutlined,
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
            <h6>Algoschool</h6>
            <p className={footerStyles.footerDescription}>
            We will help you learn a new profession or improve it. You will gain practical knowledge to find work on international platforms and have an impressive portfolio.
            </p>
          </div>

          <div className={footerStyles.footerBlock}>
            <h6>Menu</h6>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/courses"> Courses</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* <div className={footerStyles.footerBlock}>
            <h6>Useful Links</h6>

            <Link href="/privacyPolicy">Privacy Policy</Link>
            <Link href="/contact">
              Hire a Specialist
            </Link>
            <Link href="/contact">
              Investor Relations
            </Link>
          </div> */}

          <div className={footerStyles.footerBlock}>
            <h6>Other</h6>
            <a href="mailto:algoschoolco@gmail.com">
              <MailOutlined /> Email
            </a>
            <a href="https://wa.me/+79253807313">
              <WhatsAppOutlined /> Whatsapp
            </a>
            <div className={footerStyles.socialMedia}>
              <a href="https://instagram.com/algoschool.co?igshid=MzRlODBiNWFlZA==/">
                <InstagramOutlined className={footerStyles.Insta} />
              </a>

              {/* <a href="https://www.linkedin.com/company/edxweb/">
                <LinkedinOutlined className={footerStyles.Linkedin} />
              </a> */}

              <a href="https://www.facebook.com/profile.php?id=100057426047883&mibextid=LQQJ4d/">
                <FacebookOutlined className={footerStyles.Facebook} />
              </a>

              {/* <a href="https://twitter.com/Edxweb1">
                <TwitterOutlined className={footerStyles.Twitter} />
              </a> */}

              {/* <a href="#">
                <YoutubeOutlined className={footerStyles.Youtube} />
              </a> */}
            </div>
          </div>
        </div>

        <div className={footerStyles.copyright}>
          <p className={footerStyles.copyrightText}>
            {" "}
            Copyright © 2023 <a href="https://www.algoschool.co/">Algoschool</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
