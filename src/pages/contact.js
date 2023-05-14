import React from "react";
import Head from "next/head";

import contactStyles from "../styles/Contact.module.css";
import Image from "next/image";
// import mainImage from "./images/mainImage.jpg";
import {
  ArrowRightOutlined,
  SendOutlined,
  CompassOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function contact() {
  return (
    <div>
      <Head>
        <title>Contact - Get in touch | EdxWeb: High Quality Digital</title>
        <meta
          name="keywords"
          content="web design, order website, software, Wordpress, Landing Page, SEO, marketing"
        />
        <link rel="canonical" href="https://edxweb.com/contact" />
        <meta
          name="description"
          content="EdxWeb is a web design & SEO Agency in Yerevan and New York. Specializing in website design, e-commerce, digital strategy & Search Engine Optimization"
        />
      </Head>
      <div className={contactStyles.containerBody}>
        <h1 className={contactStyles.title}>
         Let’s discuss Your great project
        </h1>
        <div className={contactStyles.contactBlock}>
          <div className={contactStyles.textBlock}>
            <h2>Reach Out</h2>
            <p>We are here to help You 24/7</p>
            <p><CompassOutlined /> Tigran Mets 31 Ave.</p>
          <p>Yerevan, Armenia, 0018</p>
         
            <a href="tel:+37493007110">
              <PhoneOutlined className={contactStyles.icon} /> +374 93 007 110
            </a>
       
            <a href="mailto:info@edxweb.com">
              <MailOutlined className={contactStyles.icon} /> info@edxweb.com
            </a>
          </div>
          {/* <div className={contactStyles.textBlock}>
          <h3>New York</h3>
          <p> 8744 Lawrence Dr.</p>
          <p>Brooklyn, NY 11201</p>
          <a href="tel:+1 716 221 86 86">+1 716 221 86 86</a> <br />
          <a href="mailto:edx126@gmail.com">edx126@gmail.com</a>
        </div> */}
          <form
            action="https://formsubmit.co/b071c9e73c69d54b3c9bd12f595dc586"
            method="POST"
            className={contactStyles.form}
          >
            <h3>Get in touch</h3>
            <input
              className={contactStyles.input}
              type="text"
              name="name"
              placeholder="Name *"
              required
            />
            <input
              className={contactStyles.input}
              type="email"
              name="email"
              placeholder="Email *"
              required
            />

          
            <textarea
              className={contactStyles.textarea}
              name=""
              placeholder="Your Message  "
              id=""
            ></textarea>
            <button className={contactStyles.button} type="submit">
              Send <SendOutlined />
            </button>
            <p className={contactStyles.privacyLink}>
              By clicking submit you agree to our
              <Link href="/privacyPolicy">
                <span> Terms of Service and Privacy Policy.</span>
                
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
