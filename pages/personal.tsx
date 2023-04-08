import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/header'

export const Personal = (): JSX.Element => (
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
        <h2 className={'text-3xl font-bold'}>このページは？</h2>
        <p>このページでは私entakuが大切にしていることが書かれています。</p>
        <h2 className={'text-3xl font-bold'}>職場選びで大事にしたいこと</h2>
        <h3>事業内容</h3>
        <p>自分が利用しているサービスであること</p>
        <h3>技術</h3>
        <p>大きくこだわりないですが、</p>
        <h3>働く人</h3>
        <p>お互いにリスペクトできる関係性であること</p>
        <p>相手の話に耳を傾ける心の余裕があること</p>
        <h3>文化</h3>
        <p>それぞれのメンバーのオーナーシップを大切にする文化であること </p>
        <p> オープンな文化であること </p>

        <h3>労働環境</h3>
        <p>
          問題解決の手段として筋が通ってない解決策を労働環境で提示されないこと
        </p>
        <h3>給料</h3>
        <p>
          大きくこだわりないですが、給料に対して交渉できる環境があることを期待しています
        </p>
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
  </div>
)

export default Personal
