import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/header'

export const Home = (): JSX.Element => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <Head>
      <title>Portfolio - entaku</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    {/* Hero Section */}
    <main className="container mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 mb-20">
        <div className="relative z-10">
          <h1 className="text-7xl font-extrabold mb-4">entaku</h1>
          <p className="text-2xl font-light text-blue-100 mb-8">
            Mobile App Developer
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com/entaku_0818"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <FontAwesomeIcon size="2x" icon={faTwitter} />
            </a>
            <a
              href="https://github.com/entaku_0818"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path
              fill="currentColor"
              d="M45,-78.1C58.3,-71.2,69.1,-58.4,77.8,-43.7C86.5,-29,93.2,-12.5,89.8,2.2C86.4,16.8,73,29.6,61.3,41.6C49.7,53.6,39.8,64.8,27.4,69.9C15,75,-0,74,-13.2,69.7C-26.4,65.4,-37.8,57.8,-47.6,48.2C-57.4,38.6,-65.7,27,-70.1,13.7C-74.5,0.4,-75,-14.6,-69.8,-27.3C-64.6,-40,-53.7,-50.4,-41.4,-57.8C-29.1,-65.2,-15.5,-69.6,0.6,-70.6C16.8,-71.6,33.6,-69.2,45,-78.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="mr-4">👩🏻‍💻</span>
          Work Experience
        </h2>
        <div className="grid gap-8">
          {/* Work items */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">
                  株式会社Voicy
                </h3>
                <p className="text-gray-600">2021/12 ~ Present</p>
              </div>
              <a
                href="https://voicy.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Visit →
              </a>
            </div>
            <p className="text-gray-700">
              音声配信プラットフォームを提供。iOSエンジニアとして音声配信するパーソナリティアプリの開発を担当。また、スクラムマスターとしてスクラム開発を主導。
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">CBCloud</h3>
                <p className="text-gray-600">2019/05 ~ 2021/11</p>
              </div>
              <a
                href="https://cb-cloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Visit →
              </a>
            </div>
            <p className="text-gray-700">
              配送マッチングプラットフォームを提供。モバイルエンジニアとして参画し、Webフロントエンドやサーバーサイドを経験。その後PMとして開発施策の策定や機能開発を実施。
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">LifeSports</h3>
                <p className="text-gray-600">2018/03 ~ 2019/04</p>
              </div>
              <a
                href="https://lifesports.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Visit →
              </a>
            </div>
            <p className="text-gray-700">
              スポーツ事業にエンジニアとして関わり、ユーザー数を増やす既存機能の修正やコミュニティ機能の設計・実装を担当。
            </p>
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <span className="mr-4">🤝</span>
          Side Projects
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                linq社 iOSエンジニア
              </h3>
              <p className="text-gray-600">2023/03 ~ Present</p>
            </div>
            <a
              href="https://linq.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Visit →
            </a>
          </div>
          <p className="text-gray-700">
            位置情報共有アプリwhooのSwiftUI化を実施。
          </p>
        </div>
      </section>

      {/* Education & Languages Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-4">📚</span>
            Education
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-blue-700">
                ビジネスブレイクスルー大学
              </h3>
              <p className="text-gray-600">2021年卒業</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                日本工学院八王子専門学校
              </h3>
              <p className="text-gray-600">2010年卒業</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="mr-4">🗣</span>
            Languages
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-xl text-gray-700">日本語</p>
          </div>
        </section>
      </div>
    </main>

    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 text-center">
      <p className="text-lg">
        Crafted with ❤️ by <span className="font-bold">entaku</span>
      </p>
    </footer>
  </div>
)

export default Home
