import React from "react";
import tutorials from "@/styles/Tutorials.module.css";
import Image from "next/image";
import tut from "../src/pages/images/htmlcssjs.jpg";
import Link from "next/link";
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
  ArrowRightOutlined,
  ReadOutlined,
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
        <ReadOutlined className={tutorials.bookIcon} /> Դասընթացներ
      </h2>
      <div className={tutorials.container} id="#courses">
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
          <Meta
            title="Beginner package - FRONTEND"
            description="Programming from scratch: HTML, CSS, Bootstrap, Domain management, 2 Projects"
          />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>12 weeks</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>24 course hours</p>
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
              <span>
                150<sub>$</sub>
              </span>
              <p>Monthly</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>
                400<sub>$</sub>
                <sup>Bestseller</sup>{" "}
              </span>
              <p>Total price</p>
            </div>
          </div>
<Link href="/courses"><button>
            Learn more <ArrowRightOutlined />
          </button>
</Link>
          
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
          <Meta
            title="Premium package - DEEP FRONTEND"
            description="'Beginner' package + JavaScript, SEO, UI/UX, Hosting, Domain, React.js, 4 Projects "
          />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>24 weeks</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>48 course hours</p>
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
              <span>
                150<sub>$</sub>
              </span>
              <p>Monthly</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>
                800<sub>$</sub>
              </span>
              <p>Total price</p>
            </div>
          </div>
<Link href="/courses"><button>
            Learn more <ArrowRightOutlined />
          </button>
</Link>
          
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
          <Meta
            title="Freelance from scratch to professional"
            description="SEO, SMM, UI/UX, Portfolio, Digital Marketing, Freelance, Google Ads "
          />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>8 weeks</p>
            <FolderOpenOutlined className={tutorials.icon} />
            <p>16 course hours</p>
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
              <span>
                300<sub>$</sub>
              </span>
              <p>Monthly</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>
               600<sub>$</sub>
              </span>
              <p>Total price</p>
            </div>
          </div>
          <Link href="/courses">
            <button>
              Learn more <ArrowRightOutlined />
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Tutorials;
