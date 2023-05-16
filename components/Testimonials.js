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
          <h2>Մասնագիտական կարծիքներ</h2>
          <p>
            Մեզ մոտ ուսանում են 12-43 տարեկան աշակերտներ։ Ֆրիլանս և IT ոլորտում կարևորը միայն ցանկությունն է։
          </p>

          {/* <button className={styles.button}>Learn more</button> */}
        </div>

        <div className={testimonials.blocks}>
          <figure className={testimonials.snip1192}>
            <blockquote>
              Արդեն ունեի HTML, CSS որոշ գիտելիքներ։ Ցանկանում էի խորացնել փորձս։ Այս դպրոցում վերցրեցի DEEP FRONTEND դասընթացներ, որոնց ընթացքում իրականացրեցինք մի քանի լուրջ նախագծեր React.js ով, ինչի արդյունքում ստացա պրակտիկ գիտելիքներ։ Շնորհակալ եմ։<p>Karen Aharonyan</p>{" "}
              <span>React.js Developer</span>
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
              В сентябре 2022 года переехала в Армению. Моя профессия копирайтер. Увидела рекламу Алгошколы в соц. сетях, взяла курс по фрилансу. От написания инвойса на английском до создания своего портфолио-сайта и его правильной раскрутки в интернете меня научили. За что крайне благодарна команде школы.<p>Наталья Бондаренко </p>
              <span>Копирайтер</span>
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
