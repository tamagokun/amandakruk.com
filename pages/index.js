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
      }
    `}</style>
  </Head>
</div>
