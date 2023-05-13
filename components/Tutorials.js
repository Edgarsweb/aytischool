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
  DashOutlined
} from "@ant-design/icons";

function Tutorials() {
  const { Meta } = Card;
  return (
    <div>
        <div className={tutorials.marqueeCont}>
           <div className={tutorials.marquee}>
  <div className={tutorials.track}>
    <div className={tutorials.content}><h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur unde molestiae deserunt aliquam asperiores? Maxime quam similique maiores enim voluptatum vero praesentium, eum delectus obcaecati. Blanditiis neque soluta nemo magnam.</h2></div>
  </div>
</div>   
        </div>
      
      <h1>Latest Courses</h1>
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
            <p>20 weeks</p>
            <FolderOpenOutlined className={tutorials.icon} /> <p>40 classes</p>
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
              <p>Month</p>
            </div>

            <div className={tutorials.priceCourse}>
              <span>150$</span>
              <p>Course</p>
            </div>
          </div>

          <button>Enroll</button>
          {/* <TrophyOutlined /> <p>bestseller</p> */}
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
          <Meta title="HTML CSS JS" description="www.instagram.com" />
          <span>50$</span>
          <button>Enroll</button>
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
          <Meta title="HTML CSS JS" description="www.instagram.com" />
          <span>50$</span>
          <button>Enroll</button>
        </Card>
      </div>
    </div>
  );
}

export default Tutorials;
