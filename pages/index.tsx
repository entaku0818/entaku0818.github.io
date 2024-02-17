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
    <main className={'py-20 my-40 mx-6 lg:mx-24'}>
      <div className={'text-center'}>
        <h1 className="text-6xl font-extrabold text-gray-900">entaku</h1>
        <p className="text-lg text-gray-600 mt-2">Mobile App Developer</p>
      </div>

      <section className={'mt-16'}>
        <h2 className={'text-3xl font-bold text-gray-800 mb-4'}>
          ☎️ Contact Information
        </h2>
        <p className="flex gap-4">
          <a
            href="https://twitter.com/entaku_0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faTwitter}
              className="text-blue-500"
            />
          </a>
          <a
            href="https://github.com/entaku_0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faGithub}
              className="text-gray-700"
            />
          </a>
        </p>
      </section>

      <section className={'mt-16'}>
        <h2 className={'text-3xl font-bold text-gray-800 mb-4'}>
          👩🏻‍💻 Work Experience
        </h2>
        <ul className={'mt-4'}>
          <li className={'mb-8'}>
            <p className="timeline-date text-gray-600">2021/12~</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-4 text-blue-700'}>
                株式会社Voicy
              </h3>
              <a
                href="https://voicy.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://voicy.jp/
              </a>
              <p className="text-gray-700 mt-2">
                音声配信プラットフォームを提供。iOSエンジニアとして音声配信するパーソナリティアプリの開発を担当。また、スクラムマスターとしてスクラム開発を主導。
              </p>
            </div>
          </li>
          <li className={'mb-8'}>
            <p className="timeline-date text-gray-600">2019/05〜2021/11</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-4 text-blue-700'}>
                CBCloud
              </h3>
              <a
                href="https://cb-cloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://cb-cloud.com/
              </a>
              <p className="text-gray-700 mt-2">
                配送マッチングプラットフォームを提供。モバイルエンジニアとして参画し、Webフロントエンドやサーバーサイドを経験。その後PMとして開発施策の策定や機能開発を実施。
              </p>
            </div>
          </li>
          <li className={'mb-8'}>
            <p className="timeline-date text-gray-600">2018/03〜2019/04</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-4 text-blue-700'}>
                LifeSports
              </h3>
              <a
                href="https://lifesports.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://lifesports.jp
              </a>
              <p className="text-gray-700 mt-2">
                スポーツ事業にエンジニアとして関わり、ユーザー数を増やす既存機能の修正やコミュニティ機能の設計・実装を担当。
              </p>
            </div>
          </li>
          <li className={'mb-8'}>
            <p className="timeline-date text-gray-600">2013/09〜2018/02</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-4 text-blue-700'}>
                中小SIer
              </h3>
              <a
                href="https://www.ap-com.co.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://www.ap-com.co.jp
              </a>
              <p className="text-gray-700 mt-2">
                ネットワークエンジニアとして、認証システムの開発や新しいNWサービスの導入を担当。その後、アプリケーションエンジニアとして教育事業会社や娯楽事業の保守システムリプレイスを経験。
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className={'mt-16'}>
        <h2 className={'text-3xl font-bold text-gray-800 mb-4'}>
          🤝 Side Projects
        </h2>
        <ul>
          <li className={'mb-8'}>
            <p className="timeline-date text-gray-600">2023/03~</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-4 text-blue-700'}>
                linq社 iOSエンジニア
              </h3>
              <a
                href="https://linq.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://linq.co.jp/
              </a>
              <p className="text-gray-700 mt-2">
                位置情報共有アプリwhooのSwiftUI化を実施。
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className={'mt-16'}>
        <h2 className={'text-3xl font-bold text-gray-800 mb-4'}>🗣 Languages</h2>
        <p className="text-gray-700">日本語</p>
      </section>

      <section className={'mt-16'}>
        <h2 className={'text-3xl font-bold text-gray-800 mb-4'}>
          📚 Education
        </h2>
        <p className="text-gray-700">
          <a
            href="https://bbt.ac/"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            ビジネスブレイクスルー大学
          </a>{' '}
          (2021年卒業)
        </p>
        <p className="text-gray-700">日本工学院八王子専門学校 (2010年卒業)</p>
      </section>
    </main>

    <footer className="bg-gray-100 py-4 text-center">
      Powered by <span className="font-bold">entaku</span>
    </footer>

    <style jsx>{`
      .timeline-date {
        color: var(--color-primary);
        font-size: 1rem;
        font-weight: bold;
      }
      .timeline-content {
        border-left: 4px solid #55acee;
        padding-left: 1rem;
      }
    `}</style>
  </div>
)

export default Home
