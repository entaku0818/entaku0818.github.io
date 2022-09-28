import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/header'
import * as React from 'react'

export const Supports = (): JSX.Element => (
  <div>
    <Head>
      <title>Portfolio - entaku</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={'py-20 my-40 mx-20 lg:mx-20'}>
      <div className={'flex flex-col items-center'}>
        <h1 className="text-6xl  font-bold">VoiLog</h1>
      </div>
      <div className={'flex flex-row'}>
        <img className="w-1/4 " src={`/app_detail_1.png`} />
        <img className="w-1/4 " src={`/app_detail_2.png`} />
        <img className="w-1/4 " src={`/app_detail_3.png`} />
      </div>

      <div>
        This app is a very simple voice diary application. All you have to do is
        press the record button and input your voice.
      </div>
      <div>email: entaku19890818@gmail.com</div>
      <div>
        twitter:
        <a
          href="https://twitter.com/entaku_0818"
          target="_blank"
          rel="noopener noreferrer"
        >
          entaku_0818
        </a>
      </div>
    </main>

    <footer>Powered by entaku</footer>

    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default Supports
