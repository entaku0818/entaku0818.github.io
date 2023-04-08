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
    <main className={'py-20 my-40 mx-10 lg:mx-10'}>
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
            <p className="timeline-date">2021/12~</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>新しい会社 </h3>
              <a
                href="https://cb-cloud.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://cb-cloud.com/
              </a>
              <p>新しい会社の職務内容をここに記入してください。</p>
            </div>
          </li>
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
                フリーランスドライバーと荷主をつなぐ配送マッチングプラットフォームを提供しています。最初はモバイルエンジニアとして参画し、Webフロントエンドやサーバーサイドなどを経験し、その後PMとして開発施策の策定を行い、時には機能開発まで実施しました。
                当社では、一般貨物運送事業者向けのSaaS「SmaRyuTruck」を開発し、一般貨物向けの配送依頼画面を2019年11月にリリースしました。また、2020年4月から5月にかけて買い物アプリをリリースし、2020年10月から11月にかけてPickGo
                Business/Partnerを開発しました。2021年3月にはJAL航空便との連携を実現し、2021年4月にはFlutterのリプレースを行いました。
              </p>
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
                仕事と自宅の往復をしてた辛い時期に、個人フットサルという、コートでそれぞれが集まってフットサルをするという
                そのフットサルの集まりがとても居心地がよく、その経験からそんな場所をもっと増やしていきたいのでスポーツ事業にエンジニアとして関わってみたいと考え、ライフスポーツへ転職。
                主にユーザー数を増やすような既存機能の修正やコミュニティ機能の設計実装を実施した。
              </p>
            </div>
          </li>
          <li>
            <p className="timeline-date">2013/09〜2018/02</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>中小SIer</h3>
              <a
                href="https://www.ap-com.co.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ap-com.co.jp
              </a>
              <p>
                2010年から2018年まで、株式会社エーピーコミュニケーションズで、ネットワークエンジニアとして業務に従事しました。大手NW事業会社の認証システムの開発や新しいNWサービスの導入に関するシステム設計、開発、検証、導入までのNW/サーバー設計を担当し、顧客から高い評価を得ました。また、アプリケーションエンジニアとして、教育事業会社や娯楽事業のサービス保守システムリプレイスなど、さまざまなプロジェクトを担当し、高い技術力とプロジェクトマネジメント能力を発揮しました。
                ネットワークエンジニアとしての経験から、幅広い業務を担当できるスキルを持ち合わせています。その一方で、アプリケーションエンジニアとしての経験もあり、技術力とプロジェクトマネジメント能力の両面で高い成果を上げました。加えて、CakePHP、Laravel、Spring、MySQLなど、幅広い技術スタックを扱うことができます。
              </p>
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
      /* 色 */
      :root {
        --color-primary: #55acee;
        --color-secondary: #f0f0f0;
        --color-background: #55acee;
        --color-text: #ffffff;
        --color-link: #0070f3;
      }

      body {
        background-color: var(--color-background);
        color: var(--color-text);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
      }

      /* ヘッダー */
      header {
        background-color: var(--color-background);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-between;
        padding: 16px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
      }

      .header-title {
        font-size: 32px;
        font-weight: bold;
      }

      nav {
        margin-left: auto;
      }

      nav a {
        color: var(--color-text);
        font-weight: bold;
        margin-left: 16px;
        text-decoration: none;
      }

      nav a:hover {
        color: var(--color-link);
      }

      /* メインコンテンツ */
      main {
        margin-top: 72px;
        padding: 0 16px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: bold;
      }

      h1 {
        font-size: 48px;
        margin-top: 48px;
      }

      h2 {
        font-size: 36px;
        margin-top: 32px;
      }

      h3 {
        font-size: 24px;
        margin-top: 24px;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin-top: 16px;
      }

      a {
        color: var(--color-link);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .timeline-date {
        color: var(--color-primary);
        font-size: 16px;
        font-weight: bold;
        margin-right: 16px;
      }

      .timeline-content {
        border-left: 4px solid var(--color-primary);
        margin-left: 24px;
        padding-left: 16px;
      }

      .timeline-content h3 {
        margin-top: 0;
      }

      .timeline-content p {
        margin-bottom: 8px;
      }

      /* フッター */
      footer {
        background-color: var(--color-secondary);
        bottom: 0;
        color: var(--color-text);
        display: flex;
        font-size: 14px;
        height: 48px;
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;
      }

      footer a {
        color: var(--color-link);
      }

      footer a:hover {
        text-decoration: underline;
      }
    `}</style>

    <style jsx global>{``}</style>
  </div>
)

export default Home
