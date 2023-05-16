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
            title="Սկսնակ փաթեթ - FRONTEND"
            description="Ծրագրավորում զրոյից: HTML, CSS, Bootstrap, դոմեյնի կառավարում, 2 նախագիծ"
          />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>12 շաբաթ</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>24 դաս</p>
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
                60.000<sub>դր</sub>
              </span>
              <p>Ամսեկան</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>
                180.000<sub>դր</sub>
                <sup>Bestseller</sup>{" "}
              </span>
              <p>Ընդհանուր արժեք</p>
            </div>
          </div>
<Link href="/basic"><button>
            Իմանալ ավելին <ArrowRightOutlined />
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
            title="Պրեմիում փաթեթ - DEEP FRONTEND"
            description="'Սկսնակ' փաթեթ + JavaScript, SEO, UI/UX, Hosting, Domain, React.js, 4 նախագիծ "
          />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>24 շաբաթ</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>48 դաս</p>
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
                55.000<sub>դր</sub>
              </span>
              <p>Ամսեկան</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>
                330.000<sub>դր</sub>
              </span>
              <p>Ընդհանուր</p>
            </div>
          </div>
<Link href="/deep"><button>
            Իմանալ ավելին <ArrowRightOutlined />
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
            title="Ֆրիլանս զրոյից մինչև պրոֆեսիոնալ"
            description="SEO, SMM, UI/UX, Portfolio, Digital Marketing, Freelance, Google Ads "
          />
          <div className={tutorials.details}>
            <TagsOutlined className={tutorials.icon} />
            <p>8 շաբաթ</p>
            <FolderOpenOutlined className={tutorials.icon} />
            <p>16 դաս</p>
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
                120.000<sub>դր</sub>
              </span>
              <p>Ամսեկան</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>
                240.000<sub>դր</sub>
              </span>
              <p>Ընդհանուր</p>
            </div>
          </div>
          <Link href="/freelance">
            <button>
              Իմանալ ավելին <ArrowRightOutlined />
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Tutorials;
