import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import heroImage from "../pages/images/stud.png";
import register from "../pages/images/register.png";

import { EditOutlined, StarOutlined, RightOutlined,  MailOutlined, } from "@ant-design/icons";
import Testimonials from "../../components/Testimonials";
import Courses from "../../components/Courses";
import Tutorials from "../../components/Tutorials";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn programming, marketing and freelance</title>
        <meta name="description" content=" Ձեռք բերեք պրակտիկ գիտելիքներ՝ միջազգային հարթակներում աշխատանք գտնելու և տվապորիչ պորտֆոլիո ունենալու համար։" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          <div className={styles.firstBlock}>
            <div className={styles.block}>
              <h1>Learn programming, marketing and freelance</h1>
              <p>
              Gain practical knowledge to find work on international platforms and have an impressive portfolio.              </p>
              <Link href="/courses"><button className={styles.button}>
                <EditOutlined className={styles.icon} />  Courses
              </button>
              </Link>
              
            </div>

            <div className={styles.block}>
              <div className={styles.imageText}>
                <div className={styles.chunks}>
                  <div className={styles.chunk}>
                    <span>
                      4.000 <RightOutlined />
                    </span>
                    <p>Followers</p>
                  </div>

                  <div className={styles.chunk}>
                    <span>
                      4.8 <StarOutlined className={styles.star} />
                    </span>
                    <p>Reviews</p>
                  </div>
                </div>

                <div className={styles.chunks}>
                  <Image
                    src={heroImage}
                    alt="Hero image"
                    width="100%"
                    height="100%"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Tutorials />

        <div className={styles.whyUs}>
          <div className={styles.chunks}>
            {" "}
            <Image
              src={register}
              alt="Hero image"
              width="100%"
              height="100%"
              priority
            />
          </div>
          <div>
            <div className={styles.block}>
              <h2>
Course enrollment procedure</h2>
              <p>
              Procedure: you choose the course, if you have any questions, contact our specialist, and if everything is clear, you can fill in your data and the course package for which you want to register on the contact page. Then our specialists will contact you and discuss further steps.              </p>
              <Link href="/contact">  <button className={styles.button}>
                <MailOutlined className={styles.icon} /> Get in touch
              </button>
              </Link>
            
            </div>
          </div>
        </div>
        <div className={styles.dottedArea}></div>
        <Testimonials />
      </main>
    </>
  );
}
