import React from 'react'
import Head from 'next/head'

export default () => <div>
  <Head>
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
    `}</style>
  </Head>
  <main>
    <h1>Amanda Kruk</h1>
    <p>Classically trained Mezzo-Soprano for Wedding Ceremonies, Baptisms, Anniversaries and Events.</p>
    <p>
      <a href='mailto:info@amandakruk.com'>info@amandakruk.com</a>
    </p>
  </main>
</div>
