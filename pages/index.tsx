import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'

export const Home = (): JSX.Element => (
    <div className="container">

        <Head>
            <title>Portfoilo - entaku</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1>
                <a className="header-title" href="/">ENTAKU</a>
            </h1>
            <nav className="pc-nav">
                <a href="/">home</a>
            </nav>
        </header>
        <main>

            <h1 className="title">
                entaku
            </h1>

            <p className="description">
                Mobile App Developer
            </p>
            <h2>☎️ Contact information</h2>
            <p>
                <a
                    href="https://twitter.com/entaku_0818"
                    target="_blank"
                    rel="noopener noreferrer">
                 <FontAwesomeIcon size="lg" icon={faTwitter} />
                </a>
                <a
                    href="https://twitter.com/entaku_0818"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon size="lg" icon={faGithub} />
                </a>
            </p>
            <h2>👩🏻‍💻Work</h2>

            <h3>CBCloud　（2019/05〜）</h3>
            <a
                href="https://cb-cloud.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://cb-cloud.com/
            </a>
            <p>
                フリーランスドライバーと荷主を即時につなぐ配送マッチングプラットフォームを提供する。
                最初はモバイルエンジニアとして参画し、webフロントやサーバーサイドなども経験しながらPMとして、開発施策の策定や施策によっては機能開発まで実施する
            </p>
            <ul>
                <li>
                    一般貨物運送事業者向けのSaasであるSmaRyuTruck開発
                </li>
                <li>
                    一般貨物向け配送依頼画面のリリース  2019/11
                </li>
                <li>
                    買い物アプリリリース - 2020/4 〜 2020/5
                </li>
                <li>
                    PickGo Business/Partner開発 - 2020/10-11〜
                </li>
                <li>
                    JAL航空便連携 2021/3
                </li>
                <li>
                    Flutterリプレイス 2021/3
                </li>
            </ul>

            <h3>LifeSports　（2018/03〜2019/04）</h3>
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

            <h3>株式会社エーピーコミュニケーションズ　（2013/09〜2018/02）</h3>
            <a
                href="https://www.ap-com.co.jp"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.ap-com.co.jp
            </a>
            <h4>ネットワークエンジニア （2013/09〜2016/02）</h4>
            <p>
                大手NW事業会社 　NWサービスの認証システムの開発と新たなシステムへのリプレイス作業を実施。
                主に新しいNWサービスを導入する際のシステム設計/開発/検証/導入までのNW/サーバー設計をメインで担当。
            </p>
            <h4>アプリケーションエンジニア （2016/03〜2018/02）</h4>
            <p>
                主に教育事業会社や娯楽事業のサービス保守システムリプレイスなどを実施
                CakePHP/Laravel/Spring/MySQL
            </p>

            <h3>日本ユニアンドソニック（2010/04〜2013/08）</h3>
            <a
                href="https://www.sonic-square.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://www.sonic-square.co.jp/
            </a>
            <p>レンタル事業会社へ派遣され、システム開発を従事</p>

            <h2>🗣 Languages</h2>
            <p>日本語</p>
            <h2>📚Education</h2>
            <p>
                <a
                    href="https://bbt.ac/"
                    rel="noopener noreferrer"
                >
                    ビジネスブレイクスルー大学
                </a>
                (2018年卒業)
            </p>
            <p>
                日本工学院八王子専門学校 (2010年卒業)
            </p>

        </main>

        <footer>
            Powered by entaku
        </footer>

        <style jsx>{`
      .header-title{
        font-family: Arial, cursive;
        font-size: 36px;
        height: min-content;
      }

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10%;
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
        text-dec  oration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 100%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
      * {
     box-sizing: border-box;
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
