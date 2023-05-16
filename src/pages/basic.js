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
        <h1>Սկսնակ փաթեթ - FRONTEND</h1>
      <div className={styles.descriptions}>
    <Descriptions
      title="Դուք կսովորեք ծրագրավորում զրոյից մինչև վեբ կայք ստեղծելու մակարդակ"
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Ժամանակահատված">12 շաբաթ</Descriptions.Item>
      <Descriptions.Item label="Դասերի քանակ">24 դասաժամ</Descriptions.Item>
      <Descriptions.Item label="1 դասաժամ">1 ժամ 45 րոպե</Descriptions.Item>
      <Descriptions.Item label="Ամսավճար">60.000 դր</Descriptions.Item>
      <Descriptions.Item label="Ընդհանուր դասընթացի արժեք">180.000դր</Descriptions.Item>
      <Descriptions.Item label="Ծրագրեր">HTML, CSS, Bootstrap, Domain and Hosting Management</Descriptions.Item>
      <Descriptions.Item label="1-ին դաս / ծանոթություն">Անվճար</Descriptions.Item>
      <Descriptions.Item label="Շաբաթական">2 դասաժամ</Descriptions.Item>
      <Descriptions.Item label="Տարիքային սահմանափակում">12 տարեկանից բարձր</Descriptions.Item>
      <Descriptions.Item label="Մեկ խմբում">Մինչև 5 հոգի</Descriptions.Item>
      <Descriptions.Item label="2 նախագիծ">1.Պորտֆոլիո վեբ կայք, 2.Կայք-այցեքարտ</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Official">$60.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </Descriptions.Item>
    </Descriptions>
   
  </div> <button className={styles.button}>Primary Button</button>
  
    </div>
  )
}

export default basic
