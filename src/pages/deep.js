import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import heroImage from "../pages/images/stud.png";
import { EditOutlined, StarOutlined, RightOutlined } from "@ant-design/icons";
import { Descriptions } from 'antd';
import { Button, Space } from 'antd';

function basic() {
  return (
    <div className={styles.basic}>
        <h1>Պրեմիում փաթեթ - DEEP FRONTEND</h1>
      <div className={styles.descriptions}>
    <Descriptions 
      title="Դուք կսովորեք ծրագրավորում՝ զրոյից մինչև վեբ կայքեր և հավելվածներ ստեղծելու մակարդակ"
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
      <Descriptions.Item label="Ժամանակահատված">24 շաբաթ</Descriptions.Item>
      <Descriptions.Item label="Դասերի քանակ">48 դասաժամ</Descriptions.Item>
      <Descriptions.Item label="1 դասաժամ">1 ժամ 45 րոպե</Descriptions.Item>
      <Descriptions.Item label="Ամսավճար">55.000 դր</Descriptions.Item>
      <Descriptions.Item label="Ընդհանուր դասընթացի արժեք">330.000դր</Descriptions.Item>
      <Descriptions.Item label="Ծրագրեր">HTML, CSS, Bootstrap, JavaScript, React.js, SEO, UI/UX, Domain and Hosting Management</Descriptions.Item>
      <Descriptions.Item label="1-ին դաս / ծանոթություն">Անվճար</Descriptions.Item>
      <Descriptions.Item label="Շաբաթական">2 դասաժամ</Descriptions.Item>
      <Descriptions.Item label="Տարիքային սահմանափակում">18 տարեկանից բարձր</Descriptions.Item>
      <Descriptions.Item label="Մեկ խմբում">Մինչև 5 հոգի</Descriptions.Item>
      <Descriptions.Item label="Արդյունք՝ 2 նախագիծ">1.Պորտֆոլիո վեբ կայք, 2.Կայք-այցեքարտ, 3.Բազմալեզու վեբ-կայք, 4.Վեբ հավելված</Descriptions.Item>
      <Descriptions.Item label="Սերտիֆիկատ">Քննության արդյունքներով</Descriptions.Item>
      <Descriptions.Item label="2 ամիս տեխ․ աջակցություն"> դասընթացներն ավարտելուց հետո</Descriptions.Item>
      <Descriptions.Item label="Բոնուս 1">
       Ծրագրավորման բառարան հայերեն անգլերեն լեզուներով։
      </Descriptions.Item>
      <Descriptions.Item label="Բոնուս 2">
       Վեբ կայքերի օպտիմալացում (SEO)
      </Descriptions.Item>
    </Descriptions>
   
  </div> <button className={styles.button}>Primary Button</button>
  
    </div>
  )
}

export default basic
