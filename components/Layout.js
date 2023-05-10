import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import React from 'react'
import styles from '../styles/Layout.module.css'
import Footer from "../components/Footer";

import Script from 'next/script'

function layout({children}) {
  return (
    <>


  
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11056913591"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11056913591');
        `}
      </Script>


 
    <Meta />
    <Nav />
    <div className='styles.container'>
    {/* <Header /> */}
        <main className={styles.main}>
            {children}
        </main>      
    </div>
    <Footer />
    
    </>
  )
}

export default layout
