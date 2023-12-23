import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import heroImage from "../pages/images/stud.png";
import { EditOutlined, StarOutlined, RightOutlined, FormOutlined } from "@ant-design/icons";
import { Descriptions } from 'antd';
import { Button, Space } from 'antd';
import Link from 'next/link';


function courses() {
  return (
    <div>
      <Link href="/contact"><button className={styles.buttonReg}><FormOutlined /></button></Link>
      <div className={styles.basic}>
        <h1>Beginner Package - FRONTEND</h1>
        <p>You will learn programming from scratch to the level of building a website</p> <br />
      <div className={styles.descriptions}>
    <Descriptions
      title=""
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
      className={styles.descriptions}>
      <Descriptions.Item label="Period">12 weeks</Descriptions.Item>
      <Descriptions.Item label="Courses">24 course hours</Descriptions.Item>
      <Descriptions.Item label="1 course hour">1 hour 45 min</Descriptions.Item>
      <Descriptions.Item label="Monthly">150$</Descriptions.Item>
      <Descriptions.Item label="Total price">400$</Descriptions.Item>
      <Descriptions.Item label="Programs">HTML, CSS, Bootstrap, Domain and Hosting Management</Descriptions.Item>
      <Descriptions.Item label="1st course">For free</Descriptions.Item>
      <Descriptions.Item label="Weekly">2 course hours</Descriptions.Item>
      <Descriptions.Item label="In 1 group">Up to 5 students</Descriptions.Item>
      <Descriptions.Item label="Result - 2 projects">1.Portfolio Website, 2.Landing Page</Descriptions.Item>
      <Descriptions.Item label="Certificate">By the exam results</Descriptions.Item>
      <Descriptions.Item label="1 ամիս տեխ․ աջակցություն"> After completing the courses</Descriptions.Item>
      <Descriptions.Item label="Bonus 1">
      Programming dictionary in English language.
      </Descriptions.Item>
      <Descriptions.Item label="Bonus 2">
      Search Engine Optimization course (SEO)
      </Descriptions.Item>
    </Descriptions>
   
  </div> 
  
    </div>

    <div className={styles.basic}>
        <h1>Premium Package - DEEP FRONTEND</h1>
        <p>You will learn programming from scratch to the level of creating websites and applications</p> <br />
      <div className={styles.descriptions}>
    <Descriptions 
      title=""
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    className={styles.descriptions}>
      <Descriptions.Item label="Period">24 weeks</Descriptions.Item>
      <Descriptions.Item label="Courses">48 course hour</Descriptions.Item>
      <Descriptions.Item label="1 course hour">1 hour 45 min</Descriptions.Item>
      <Descriptions.Item label="Monthly">150$</Descriptions.Item>
      <Descriptions.Item label="Total price">800$</Descriptions.Item>
      <Descriptions.Item label="Programs">HTML, CSS, Bootstrap, JavaScript, React.js, SEO, UI/UX, Domain and Hosting Management</Descriptions.Item>
      <Descriptions.Item label="1st course">For free</Descriptions.Item>
      <Descriptions.Item label="Weeks">2 course hour</Descriptions.Item>
      <Descriptions.Item label="A group">Up to 5 students</Descriptions.Item>
      <Descriptions.Item label="Result - 2 projects">1.Portfolio website, 2.Landing page, 3.Multilanguage website, 4.Web application</Descriptions.Item>
      <Descriptions.Item label="Certificate">By the exam results</Descriptions.Item>
      <Descriptions.Item label="2 months support">After completing the courses</Descriptions.Item>
      <Descriptions.Item label="Bonus 1">
      Programming dictionary in English language.
      </Descriptions.Item>
      <Descriptions.Item label="Bonus 2">
       Search Engine Optimization course (SEO)
      </Descriptions.Item>
    </Descriptions>
   
  </div>
  
    </div>

    <div className={styles.basic}>
        <h1>Freelance Package - from scratch to professional</h1>
        <p>You will leran to create proper portfolio, make profitable freelance and digital marketing</p> <br />
      <div className={styles.descriptions}>
    <Descriptions 
      title=""
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
      className={styles.descriptions} >
      <Descriptions.Item label="Period">8 weeks</Descriptions.Item>
      <Descriptions.Item label="Course hours">16 course hour</Descriptions.Item>
      <Descriptions.Item label="1 course hour">1 hour 45 min</Descriptions.Item>
      <Descriptions.Item label="Monthly">300$</Descriptions.Item>
      <Descriptions.Item label="Total price">600$</Descriptions.Item>
      <Descriptions.Item label="Programms">SEO, SMM, UI/UX, Portfolio, Digital Marketing, Freelance, Google Ads</Descriptions.Item>
      <Descriptions.Item label="1st course">For free</Descriptions.Item>
      <Descriptions.Item label="Weekly">2 course hours</Descriptions.Item>
      <Descriptions.Item label="In 1 Group">Up to 5 students</Descriptions.Item>
      <Descriptions.Item label="Result - 3 projects">1.Portfolio Website 2.Ad Campaign 3.Freelance and Real project Internship</Descriptions.Item>
      <Descriptions.Item label="Certificate">By the exam results</Descriptions.Item>
    </Descriptions>
   
  </div> 
  
    </div>
    </div>
  )
}

export default courses
