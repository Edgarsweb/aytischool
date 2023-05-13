import React from "react";
import tutorials from "@/styles/Tutorials.module.css";
import Image from "next/image";
import tut from "../src/pages/images/htmlcssjs.jpg";
import { Card } from "antd";

function Tutorials() {
  const { Meta } = Card;
  return (
    <div>
           <h1>Latest Courses</h1>
      <div className={tutorials.container}>
        {/* <div className={tutorials.card}>
          <Image
            src={tut}
            alt="Hero image"
            width="100%"
            height="100%"
            priority
          />
          <h2>HTML | CSS | JAVASCRIPT - BASICS COURSE</h2>
          <hr />
          25$
          <button>GRancvel</button>
        </div> */}

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
