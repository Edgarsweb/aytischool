import React from "react";
import tutorials from "@/styles/Tutorials.module.css";
import Image from "next/image";
import tut from "../src/pages/images/htmlcssjs.jpg";
import { Card } from "antd";
import {
  EditOutlined,
  StarOutlined,
  TrophyOutlined,
  RightOutlined,
  FolderOpenOutlined,
  FileDoneOutlined,
  CopyOutlined,
  TagsOutlined,
  DashOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import Anime from "./Anime";

function Tutorials() {
  const { Meta } = Card;
  return (
    <div>
      <div className={tutorials.marqueeCont}>
        <div className={tutorials.marquee}>
          <div className={tutorials.track}>
            <div className={tutorials.content}>
              <h2>
                <DashOutlined /> Frontend / Backend / FullStack / HTML / CSS /
                Bootstrap / Email marketing / Javascript / React.js / Next.js
                /WordPress / SEO / Google Ads / Digital Marketing / GoDaddy /
                cPanel / Cloudflare / SSL / Freelance / Website maintenance{" "}
                <DashOutlined />
              </h2>
            </div>
          </div>
        </div>
      </div>

      <h2 className={tutorials.title}>
        <Anime /> Դասընթացներ
      </h2>
      <div className={tutorials.container}>
        <Card
          className={tutorials.card}
          hoverable
          cover={
            <Image
              src={tut}
              alt="HTML CSS image"
              width="100%"
              height="100%"
              priority
            />
          }
        >
          <Meta title="Programming from scratch" description="HTML CSS JS" />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>20 շաբաթ</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>40 դաս</p>
          </div>

          <div className={tutorials.stars}>
            4.9
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
          </div>

          <div className={tutorials.prices}>
            <div className={tutorials.priceMonth}>
              <span>50$</span>
              <p>Ամսեկան</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>150$</span>
              <p>Ընդհանուր</p>
            </div>
          </div>

          <button>Մանրամասներ <ArrowRightOutlined /></button>
        </Card>
        <Card
          className={tutorials.card}
          hoverable
          cover={
            <Image
              src={tut}
              alt="HTML CSS image"
              width="100%"
              height="100%"
              priority
            />
          }
        >
          <Meta title="Programming from scratch" description="HTML CSS JS" />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>20 շաբաթ</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>40 դաս</p>
          </div>

          <div className={tutorials.stars}>
            4.9
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
          </div>

          <div className={tutorials.prices}>
            <div className={tutorials.priceMonth}>
              <span>50$</span>
              <p>Ամսեկան</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>150$</span>
              <p>Ընդհանուր</p>
            </div>
          </div>

          <button>Մանրամասներ <ArrowRightOutlined /></button>
        </Card>
        <Card
          className={tutorials.card}
          hoverable
          cover={
            <Image
              src={tut}
              alt="HTML CSS image"
              width="100%"
              height="100%"
              priority
            />
          }
        >
          <Meta title="Programming from scratch" description="HTML CSS JS" />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>20 շաբաթ</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>40 դաս</p>
            {/* <EditOutlined />  */}
          </div>

          <div className={tutorials.stars}>
            4.9
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
            <StarOutlined className={tutorials.star} />
          </div>

          <div className={tutorials.prices}>
            <div className={tutorials.priceMonth}>
              <span>50$</span>
              <p>Ամսեկան</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>150$</span>
              <p>Ընդհանուր</p>
            </div>
          </div>

          <button>Մանրամասներ <ArrowRightOutlined /></button>
        </Card>
      </div>
    </div>
  );
}

export default Tutorials;
