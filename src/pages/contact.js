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
  HomeOutlined,
  FolderOpenOutlined ,
  BankOutlined 
} from "@ant-design/icons";
import Link from "next/link";

function contact() {
  return (
    <div>
      <Head>
        <title>Contact - Get in touch | Algoschool: High Quality Digital</title>
        <meta
          name="keywords"
          content="web design, order website, software, Wordpress, Landing Page, SEO, marketing"
        />
        <link rel="canonical" href="https://algoschool.co/contact" />
        <meta
          name="description"
          content="Algoschool is a web design & SEO Agency in Yerevan and New York. Specializing in website design, e-commerce, digital strategy & Search Engine Optimization"
        />
      </Head>
      <div className={contactStyles.containerBody}>
        <h1 className={contactStyles.title}><MailOutlined className={contactStyles.mail}/> Գրանցվիր այսօր</h1>
        <div className={contactStyles.contactBlock}>
        <form
            action="https://formsubmit.co/d72e77a0d8c0aa06adcc73b29c16148e"
            method="POST"
            className={contactStyles.form}
          >
            {/* <h3>Get in touch</h3> */}
            <input
              className={contactStyles.input}
              type="text"
              name="name"
              placeholder="Անուն Ազգանուն*"
              required
            />
            <input
              className={contactStyles.input}
              type="tel"
              name="name"
              placeholder="Հեռախոսահամար *"
              required
            />
            <input
              className={contactStyles.input}
              type="email"
              name="email"
              placeholder="Էլ․ փոստի հասցե"
            />
            <input
              className={contactStyles.input}
              type="text"
              name="text"
              placeholder="Նշել փաթեթը*"
              required
            />
            <textarea
              className={contactStyles.textarea}
              name=""
              placeholder="Նամակ  "
            ></textarea>
            <button className={contactStyles.button} type="submit">
              Ուղարկել <SendOutlined />
            </button>{" "}
            <br />
            {/* <p className={contactStyles.privacyLink}>
              By clicking submit you agree to our
              <Link href="/privacyPolicy">
                <span> Terms of Service and Privacy Policy.</span>
              </Link>
            </p> */}
          </form>
          <div className={contactStyles.textBlock}>
           
            <p>
              Մեր մասնագետները կպատասխանեն Ձեզ հնարավորինս շուտ
            </p>
            
            <p><CompassOutlined className={contactStyles.icon}/> Երևան, Հայաստան, 0018</p>
            <p><FolderOpenOutlined className={contactStyles.icon}/>  ԱՁ <b>"Էդգար Հովհաննիսյան Խաչիկի"</b> </p>
            <p><BankOutlined className={contactStyles.icon}/> Բանկ - <b>Ամերիաբանկ ՓԲԸ</b>  <br />
Հաշվեհամար - <b>1570064780750100 </b> <br /> Նպատակ (պարտադիր է լրացման համար) - <b>Ուսման վարձ</b>  </p>
            <p> <HomeOutlined className={contactStyles.icon}/> Իրավաբանական հասցե՝ <b>Տիգրան Մեծ 31-84</b> 
            </p>
            <a href="tel:+37493007110">
              <PhoneOutlined className={contactStyles.icon} /> +374 93 007 110
            </a>

            {/* <a href="mailto:info@Algoschool.com">
              <MailOutlined className={contactStyles.icon} /> info@Algoschool.com
            </a> */}
          </div>
          {/* <div className={contactStyles.textBlock}>
          <h3>New York</h3>
          <p> 8744 Lawrence Dr.</p>
          <p>Brooklyn, NY 11201</p>
          <a href="tel:+1 716 221 86 86">+1 716 221 86 86</a> <br />
          <a href="mailto:edx126@gmail.com">edx126@gmail.com</a>
        </div> */}
         
        </div>
      </div>
    </div>
  );
}

export default contact;
