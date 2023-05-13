import React, { useState }  from 'react'
import styles from "@/styles/Home.module.css";
import courses from "@/styles/Courses.module.css";
import Link from "next/link";

function Courses() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    // <div className={courses.container}>
    //   <div className={courses.sidebar}>Filter</div>
    //   <div>Courses</div>
    // </div>
    <div>
    <div className={courses.container}>
      <div className={courses.blockTabs}>
        <button
          className={
            toggleState === 1
              ? courses.tabs + courses.activeTabs
              : courses.tabs
          }
          onClick={() => toggleTab(1)}
        >
          Web Design
        </button>
        <button
          className={
            toggleState === 2
              ? courses.tabs + courses.activeTabs
              : courses.tabs
          }
          onClick={() => toggleTab(2)}
        >
          SEO and Marketing
        </button>
        <button
          className={
            toggleState === 3
              ? courses.tabs + courses.activeTabs
              : courses.tabs
          }
          onClick={() => toggleTab(3)}
        >
          Web Development
        </button>

        <button
          className={
            toggleState === 4
              ? courses.tabs + courses.activeTabs
              : courses.tabs
          }
          onClick={() => toggleTab(4)}
        >
          Maintenance
        </button>

        <button
          className={
            toggleState === 5
              ? courses.tabs + courses.activeTabs
              : courses.tabs
          }
          onClick={() => toggleTab(5)}
        >
          E-Commerce
        </button>
      </div>

      <div className={courses.contentTabs}>
        <div
          className={
            toggleState === 1
              ? courses.content + courses.activeContent
              : courses.content
          }
        >
          <h2>Web Design Services</h2>
          <hr />
          <div className={courses.tabTextImg}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni architecto voluptates voluptatibus nostrum quaerat ab accusamus tempore facilis dolores doloremque? Provident magnam sequi consectetur ratione dolorum natus consequuntur aut rem.
              <Link href="/contact">
                <button className={courses.button}>
                  Free Consulting
                </button> 
              </Link>
            </p>
           
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? courses.content + courses.activeContent
              : courses.content
          }
        >
          <h2>Search Engine Optimization and Digital MArketing</h2>
          <hr />
          <div className={courses.tabTextImg}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni architecto voluptates voluptatibus nostrum quaerat ab accusamus tempore facilis dolores doloremque? Provident magnam sequi consectetur ratione dolorum natus consequuntur aut rem.
              <Link href="/contact">
                <button className={courses.button}>Get started</button> 
              </Link>
            </p>
           
          </div>
        </div>

        <div
          className={
            toggleState === 3
              ? courses.content + courses.activeContent
              : courses.content
          }
        >
          <h2>HandCoded and Wordpress Websites</h2>
          <hr />
          <div className={courses.tabTextImg}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni architecto voluptates voluptatibus nostrum quaerat ab accusamus tempore facilis dolores doloremque? Provident magnam sequi consectetur ratione dolorum natus consequuntur aut rem.
              <Link href="/contact">
                <button className={courses.button}>Contact Us</button> 
              </Link>
            </p>

          
          </div>
        </div>

        <div
          className={
            toggleState === 4
              ? courses.content + courses.activeContent
              : courses.content
          }
        >
          <h2>We Host and Support</h2>
          <hr />
          <div className={courses.tabTextImg}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni architecto voluptates voluptatibus nostrum quaerat ab accusamus tempore facilis dolores doloremque? Provident magnam sequi consectetur ratione dolorum natus consequuntur aut rem.
              <Link href="/contact">
                <button className={courses.button}>Contact Us</button> 
              </Link>
            </p>
           
         
          </div>
        </div>

        <div
          className={
            toggleState === 5
              ? courses.content + courses.activeContent
              : courses.content
          }
        >
          <h2>E-Commerce</h2>
          <hr />
          <div className={courses.tabTextImg}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni architecto voluptates voluptatibus nostrum quaerat ab accusamus tempore facilis dolores doloremque? Provident magnam sequi consectetur ratione dolorum natus consequuntur aut rem.
              <Link href="/contact">
                <button className={courses.button}>Get a proposal</button> 
              </Link>
            </p>
           
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Courses

// -----------------




 

  


