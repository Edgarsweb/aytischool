import React from "react";
import testimonials from "@/styles/Testimonials.module.css";
import man from "../src/pages/images/karen.jpg";
import woman from "../src/pages/images/natalie.jpg";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Testimonials() {
  return (
    <div>
      <div className={testimonials.testimonials}>
        

        <div className={testimonials.blocks}>
          {" "}
          <h2>What Our students say</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            obcaecati pariatur odit doloremque veritatis cum, ipsum aliquid
            harum libero, aperiam officia esse architecto quidem quod culpa!
            Voluptatum asperiores laudantium distinctio.
          </p>

          <button className={styles.button}>Learn more</button>
        </div>

        <div className={testimonials.blocks}>
          <figure className={testimonials.snip1192}>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nostrum error obcaecati, eaque et architecto dolores, nobis dolor
              nulla, excepturi ipsum? Veritatis iure fugit atque saepe veniam
              ipsa earum debitis. <p>Karen Aharonyan</p>{" "}
              <span>Fullstack Developer</span>
            </blockquote>

            <div className={testimonials.author}>
              <Image
                src={man}
                alt="testimonial image"
                width="100%"
                height="100%"
              />
            </div>
          </figure>
          <figure className={testimonials.snip1192}>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nostrum error obcaecati, eaque et architecto dolores, nobis dolor
              nulla, excepturi ipsum? Veritatis iure fugit atque saepe veniam
              ipsa earum debitis. <p>Natalie Kowalska </p>
              <span>UI / UX designer</span>
            </blockquote>
            <div className={testimonials.author}>
              <Image
                src={woman}
                alt="testimonial image"
                width="100%"
                height="100%"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
