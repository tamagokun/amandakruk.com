import React from 'react'
import Head from 'next/head'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'

export default () => <div>
  <Head>
    <title>Amanda Kruk</title>
    <style>{`
      html {
        height: 100%;
      }

      body {
        background: url('/static/amandakruk.jpg') no-repeat center top;
        background-size: cover;
        color: white;
        font-family: Helvetica, sans-serif;
        font-size: 150%;
        font-weight: 100;
        line-height: 1.3;
      }

      main {
        padding: 15%;
        max-width: 450px;
      }

      h1 {
        font-size: 1.25em;
        font-weight: 400;
      }

      a:link, a:visited {
        color: white;
        border-bottom: 1px solid;
        text-decoration: none;
      }

      a:hover {
        color: #d6d6d6;
      }

      a.icon {
        border: 0;
      }
    `}</style>
  </Head>
  <main>
    <h1>Amanda Kruk</h1>
    <p>Classically trained Mezzo-Soprano</p>
    <p>
      <a href='mailto:info@amandakruk.com'>info@amandakruk.com</a>
    </p>
    <p>
      <a href='https://www.facebook.com/amandakrukmezzo/' target='_blank' className='icon'>
        <FacebookIcon />
      </a>
    </p>
  </main>
</div>
