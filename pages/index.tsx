import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/header'

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Portfolio - entaku</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={'py-20 my-40 mx-20 lg:mx-20'}>
      <div className={'text-center'}>
        <h1 className="text-6xl  font-bold">entaku</h1>
        <p className="text-lg description">Mobile App Developer</p>
      </div>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold'}>☎️ Contact information</h2>
        <p>
          <a
            href="https://twitter.com/entaku_0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </a>
          <a
            href="https://twitter.com/entaku_0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a>
        </p>
      </section>

      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold'}>👩🏻‍💻Work</h2>
        <ul className={'mt-4 timeline'}>
          <li>
            <p className="timeline-date">2019/05〜2021/11</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>CBCloud </h3>
              <a
                href="https://cb-cloud.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://cb-cloud.com/
              </a>
              <p>
                フリーランスドライバーと荷主を即時につなぐ配送マッチングプラットフォームを提供する。
                最初はモバイルエンジニアとして参画し、Webフロントやサーバーサイドなども経験しながらPMとして、開発施策の策定や施策によっては機能開発まで実施する
              </p>
              <ul className="list-disc m-6">
                <li>一般貨物運送事業者向けのSaasであるSmaRyuTruck開発</li>
                <li>一般貨物向け配送依頼画面のリリース 2019/11</li>
                <li>買い物アプリリリース - 2020/4 〜 2020/5</li>
                <li>PickGo Business/Partner開発 - 2020/10-11〜</li>
                <li>JAL航空便連携 2021/3</li>
                <li>Flutterリプレイス 2021/4</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="timeline-date">2018/03〜2019/04</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>LifeSports</h3>
              <a
                href="https://lifesports.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://lifesports.jp
              </a>
              <p>
                仕事と自宅の往復をしてた辛い時期に、個人フットサルという、コートでそれぞれが集まってフットサルをするというイベントを見つけ通っていました。
                そのフットサルの集まりがとても居心地がよく、その経験からそんな場所をもっと増やしていきたいのでスポーツ事業にエンジニアとして関わってみたいと考え、ライフスポーツへ転職。
                主にユーザー数を増やすような既存機能の修正やコミュニティ機能の設計実装を実施した。
              </p>
            </div>
          </li>
          <li>
            <p className="timeline-date">2013/09〜2018/02</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>
                株式会社エーピーコミュニケーションズ
              </h3>
              <a
                href="https://www.ap-com.co.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ap-com.co.jp
              </a>
              <h4>ネットワークエンジニア (2013/09〜2016/02)</h4>
              <p>
                大手NW事業会社
                NWサービスの認証システムの開発と新たなシステムへのリプレイス作業を実施。
                主に新しいNWサービスを導入する際のシステム設計/開発/検証/導入までのNW/サーバー設計をメインで担当。
              </p>
              <h4 className={'mt-2'}>
                アプリケーションエンジニア (2016/03〜2018/02)
              </h4>
              <p>
                主に教育事業会社や娯楽事業のサービス保守システムリプレイスなどを実施
                CakePHP/Laravel/Spring/MySQL
              </p>
            </div>
          </li>
          <li>
            <p className="timeline-date">2010/04〜2013/08</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>
                日本ユニアンドソニック
              </h3>
              <a
                href="https://www.sonic-square.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sonic-square.co.jp/
              </a>
              <p>レンタル事業会社へ派遣され、システム開発を従事</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold'}>🗣 Languages</h2>
        <p>日本語</p>
      </section>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold'}>📚Education</h2>
        <p>
          <a href="https://bbt.ac/" rel="noopener noreferrer">
            ビジネスブレイクスルー大学
          </a>
          (2021年卒業)
        </p>
        <p>日本工学院八王子専門学校 (2010年卒業)</p>
      </section>
    </main>

    <footer>Powered by entaku</footer>

    <style jsx>{`
      .header-title {
        font-family: Arial, cursive;
        font-size: 36px;
        height: min-content;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

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

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .a:hover,
      .a:focus,
      .a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      header {
        padding: 10px 4%;
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        background: #fff;
      }

      nav {
        margin: 0 0 0 auto;
      }

      .timeline {
        list-style: none;
      }

      .timeline > li {
        margin-bottom: 60px;
      }

      /* for Desktop */
      @media (min-width: 640px) {
        .timeline > li {
          overflow: hidden;
          margin: 0;
          position: relative;
        }

        .timeline-date {
          width: 110px;
          float: left;
          margin-top: 20px;
        }

        .timeline-content {
          width: 75%;
          float: left;
          border-left: 3px #e5e5d1 solid;
          padding-left: 30px;
        }

        .timeline-content:before {
          content: '';
          width: 12px;
          height: 12px;
          background: #6f86c1;
          position: absolute;
          left: 106px;
          top: 36px;
          border-radius: 100%;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
