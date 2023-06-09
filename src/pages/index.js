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
        <title>Սովորիր ծրագրավորում, մարքեթինգ և ֆրիլանս</title>
        <meta name="description" content=" Ձեռք բերեք պրակտիկ գիտելիքներ՝ միջազգային հարթակներում աշխատանք գտնելու և տվապորիչ պորտֆոլիո ունենալու համար։" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          <div className={styles.firstBlock}>
            <div className={styles.block}>
              <h1>Սովորիր ծրագրավորում, մարքեթինգ և ֆրիլանս</h1>
              <p>
                Ձեռք բերեք պրակտիկ գիտելիքներ՝ միջազգային հարթակներում աշխատանք գտնելու և տվապորիչ պորտֆոլիո ունենալու համար։
              </p>
              <Link href="/courses"><button className={styles.button}>
                <EditOutlined className={styles.icon} />  Դասընթանցեր
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
                    <p>Հետևորդներ</p>
                  </div>

                  <div className={styles.chunk}>
                    <span>
                      4.8 <StarOutlined className={styles.star} />
                    </span>
                    <p>Վարկանիշ</p>
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
              <h2>Դասընթացներին գրանցվելու ընթացակարգ</h2>
              <p>
                Ընթացակարգ՝ ընտրում եք դասընթացը, եթե կան հարցեր կապնվում եք մեր մասնագետի հետ, իսկ եթե ամեն-ինչ պարզ է կարող էք կոնտակ էջում լրացնել ձեր տվյալները և դասընթացի փաթեթը, որի համար ուզում եք գրանցվել։ Այնուհետև մեր մասնագետները կկապնվեն Ձեզ հետ և կքննարկեն հետագա քայլերը։
              </p>
              <Link href="/contact">  <button className={styles.button}>
                <MailOutlined className={styles.icon} /> Կապ մեզ հետ
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
