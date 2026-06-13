// import React from "react";
// import Head from "next/head";

// import contactStyles from "../styles/Contact.module.css";
// import Image from "next/image";
// // import mainImage from "./images/mainImage.jpg";
// import {
//   ArrowRightOutlined,
//   SendOutlined,
//   CompassOutlined,
//   PhoneOutlined,
//   MailOutlined,
//   HomeOutlined,
//   FolderOpenOutlined ,
//   BankOutlined 
// } from "@ant-design/icons";
// import Link from "next/link";

// function contact() {
//   return (
//     <div>
//       <Head>
//         <title>Contact - Get in touch | Algoschool: High Quality Digital</title>
//         <meta
//           name="keywords"
//           content="web design, order website, software, Wordpress, Landing Page, SEO, marketing"
//         />
//         <link rel="canonical" href="https://algoschool.co/contact" />
//         <meta
//           name="description"
//           content="Algoschool is a web design & SEO Agency in Yerevan and New York. Specializing in website design, e-commerce, digital strategy & Search Engine Optimization"
//         />
//       </Head>
//       <div className={contactStyles.containerBody}>
//         <h1 className={contactStyles.title}><MailOutlined className={contactStyles.mail}/> Enroll today</h1>
//         <div className={contactStyles.contactBlock}>
//         <form
//             action="https://formsubmit.co/d72e77a0d8c0aa06adcc73b29c16148e"
//             method="POST"
//             className={contactStyles.form}
//           >
//             {/* <h3>Get in touch</h3> */}
//             <input
//               className={contactStyles.input}
//               type="text"
//               name="name"
//               placeholder="Full name *"
//               required
//             />
//             <input
//               className={contactStyles.input}
//               type="tel"
//               name="name"
//               placeholder="Phone *"
//               required
//             />
//             <input
//               className={contactStyles.input}
//               type="email"
//               name="email"
//               placeholder="Email"
//             />
//             {/* <input
//               className={contactStyles.input}
//               type="text"
//               name="text"
//               placeholder="Նշել փաթեթը*"
//               required
//             /> */}
//             <textarea
//               className={contactStyles.textarea}
//               name=""
//               placeholder="Message  "
//             ></textarea>
//             <button className={contactStyles.button} type="submit">
//               Send <SendOutlined />
//             </button>{" "}
//             <br />
//             {/* <p className={contactStyles.privacyLink}>
//               By clicking submit you agree to our
//               <Link href="/privacyPolicy">
//                 <span> Terms of Service and Privacy Policy.</span>
//               </Link>
//             </p> */}
//           </form>
//           {/* <div className={contactStyles.textBlock}>
           
//             <p>
//               Our specialists will reply shortly.
//             </p>
            
//             <p><CompassOutlined className={contactStyles.icon}/> Երևան, Հայաստան, 0018</p>
//             <p><FolderOpenOutlined className={contactStyles.icon}/>  ԱՁ <b>"Էդգար Հովհաննիսյան Խաչիկի"</b> </p>
//             <p><BankOutlined className={contactStyles.icon}/> Բանկ - <b>Ամերիաբանկ ՓԲԸ</b>  <br />
// Հաշվեհամար - <b>1570064780750100 </b> <br /> Նպատակ (պարտադիր է լրացման համար) - <b>Ուսման վարձ</b>  </p>
//             <p> <HomeOutlined className={contactStyles.icon}/> Իրավաբանական հասցե՝ <b>Տիգրան Մեծ 31-84</b> 
//             </p>
//             <a href="tel:+37493007110">
//               <PhoneOutlined className={contactStyles.icon} /> +374 93 007 110
//             </a>

//             <a href="mailto:info@Algoschool.com">
//               <MailOutlined className={contactStyles.icon} /> info@Algoschool.com
//             </a>
//           </div> */}
//           {/* <div className={contactStyles.textBlock}>
//           <h3>New York</h3>
//           <p> 8744 Lawrence Dr.</p>
//           <p>Brooklyn, NY 11201</p>
//           <a href="tel:+1 716 221 86 86">+1 716 221 86 86</a> <br />
//           <a href="mailto:edx126@gmail.com">edx126@gmail.com</a>
//         </div> */}
         
//         </div>
//       </div>
//     </div>
//   );
// }

// export default contact;


import React from "react";
import Head from "next/head";
import contactStyles from "@/styles/Contact.module.css";
import { MailOutlined, SendOutlined } from "@ant-design/icons";
import { useT } from "@/hooks/useT";

export default function Contact() {
  const { t } = useT();

  return (
    <div>
      <Head>
        <title>{t("contactPage.metaTitle")}</title>
        <meta
          name="keywords"
          content="IT project management, Jira, Kanban, Scrum, Agile, Meta Ads, Facebook Ads, digital marketing courses, online course, Yerevan"
        />
        <link rel="canonical" href="https://fullsmart.academy/contact" />
        <meta name="description" content={t("contactPage.metaDescription")} />
      </Head>

      <div className={contactStyles.containerBody}>
        <h1 className={contactStyles.title}>
          <MailOutlined className={contactStyles.mail} /> {t("contactPage.title")}
        </h1>
        <div className={contactStyles.contactBlock}>
          <form
            action="https://formsubmit.co/fullsmartacademy@gmail.com"
            method="POST"
            className={contactStyles.form}
          >
            <input
              className={contactStyles.input}
              type="text"
              name="name"
              placeholder={t("contactPage.form.name")}
              required
            />
            <input
              className={contactStyles.input}
              type="tel"
              name="phone"
              placeholder={t("contactPage.form.phone")}
              required
            />
            <input
              className={contactStyles.input}
              type="email"
              name="email"
              placeholder={t("contactPage.form.email")}
            />
            <textarea
              className={contactStyles.textarea}
              name="message"
              placeholder={t("contactPage.form.message")}
            ></textarea>
            <button className={contactStyles.button} type="submit">
              {t("contactPage.form.send")} <SendOutlined />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}