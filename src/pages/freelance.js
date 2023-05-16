import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import heroImage from "../pages/images/stud.png";
import { EditOutlined, StarOutlined, RightOutlined } from "@ant-design/icons";
import { Descriptions } from 'antd';
import { Button, Space } from 'antd';

function freelance() {
  return (
    <div className={styles.basic}>
        <h1>Ֆրիլանս` զրոյից մինչև պրոֆեսիոնալ</h1>
      <div className={styles.descriptions}>
    <Descriptions 
      title="Դուք կսովորեք կազմել ճիշտ պորտֆոլիո, ֆրիլանս և մարքեթինգ"
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
      <Descriptions.Item label="Ժամանակահատված">8 շաբաթ</Descriptions.Item>
      <Descriptions.Item label="Դասերի քանակ">16 դասաժամ</Descriptions.Item>
      <Descriptions.Item label="1 դասաժամ">1 ժամ 45 րոպե</Descriptions.Item>
      <Descriptions.Item label="Ամսավճար">120.000 դր</Descriptions.Item>
      <Descriptions.Item label="Ընդհանուր դասընթացի արժեք">240.000դր</Descriptions.Item>
      <Descriptions.Item label="Ծրագրեր">SEO, SMM, UI/UX, Portfolio, Digital Marketing, Freelance, Google Ads</Descriptions.Item>
      <Descriptions.Item label="1-ին դաս / ծանոթություն">Անվճար</Descriptions.Item>
      <Descriptions.Item label="Շաբաթական">2 դասաժամ</Descriptions.Item>
      <Descriptions.Item label="Տարիքային սահմանափակում">22 տարեկանից բարձր</Descriptions.Item>
      <Descriptions.Item label="Մեկ խմբում">Մինչև 5 հոգի</Descriptions.Item>
      <Descriptions.Item label="Արդյունք՝ 3 նախագիծ">1.Պորտֆոլիո (ռեզյումե, անձնական վեբ-կայք) 2.Գովազդային արշավ 3.Ֆրիլանս և հեռակա աշխատանքային շփումներ</Descriptions.Item>
      <Descriptions.Item label="Սերտիֆիկատ">Քննության արդյունքներով</Descriptions.Item>
      {/* <Descriptions.Item label="1 ամիս աջակցություն"> դասընթացներն ավարտելուց հետո</Descriptions.Item> */}
      {/* <Descriptions.Item label="Բոնուս 1">
       Ծրագրավորման բառարան հայերեն անգլերեն լեզուներով։
      </Descriptions.Item>
      <Descriptions.Item label="Բոնուս 2">
       Վեբ կայքերի օպտիմալացում (SEO)
      </Descriptions.Item> */}
    </Descriptions>
   
  </div> <button className={styles.button}>Primary Button</button>
  
    </div>
  )
}

export default freelance
