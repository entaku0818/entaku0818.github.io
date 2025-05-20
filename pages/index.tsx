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

      {/* Overview Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">概要</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            IT専門学校を卒業後、10年以上にわたりソフトウェア開発の幅広い経験を積んできました。SIerではインフラからフロントエンドまでのシステム開発に携わり、その後モバイルアプリ開発に特化。iOS/Android両プラットフォームで複数のアプリをリリースし、特に音声配信やリアルタイム通信を活用したアプリ開発で実績を重ねてきました。
          </p>
          <p className="mb-4">
            直近では株式会社VoicyでiOSエンジニア兼チームリーダーとして、外注主体だったアプリ開発を内製化。マルチモジュール化を進め、新規モジュールではテストカバレッジ80%以上を達成。また、アジャイル開発を導入してパーソナリティ向け施策の開発を主導し、コラボ収録機能などの新機能開発からアーキテクチャ刷新まで行い、新たに100名のパーソナリティへコラボ収録をしていただくことができました。
          </p>
          <p className="mb-4">
            2025年1月より株式会社TVerでiOSのリードエンジニアとして働いています。
          </p>
          <p>
            iOSDC JAPAN
            2024での登壇やSwift愛好会の運営など、技術コミュニティへの貢献にも力を入れています。
          </p>
        </div>
      </section>

      {/* Technical Background Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">技術略歴</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            SIer時代に培ったインフラ、バックエンド、フロントエンドの幅広い開発経験
          </li>
          <li>
            iOS/Androidのモバイルアプリ開発に精通し、両プラットフォームに対応可能
          </li>
          <li>
            アジャイル開発の導入と運用により、開発プロジェクトの推進とチームの成長に貢献
          </li>
          <li>
            プロジェクトマネジメントの経験を活かし、ステークホルダーとの調整や優先順位付けを円滑に行う能力
          </li>
        </ul>
      </section>

      {/* Specialties Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">得意なこと</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>モバイルアプリの開発、アーキテクチャ設計</li>
          <li>音声配信 / ライブ配信の仕組み作り</li>
        </ul>
      </section>

      {/* Main Outputs Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          主なアウトプット
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              iOSDC JAPAN 2024
            </h3>
            <p className="text-gray-700">
              「Core Audio」について登壇
              <a
                href="https://fortee.jp/iosdc-japan-2024/proposal/8c6f01d9-8fd3-4d5e-afef-f29d561f3c39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                詳細を見る →
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              iOSDC JAPAN 2022
            </h3>
            <p className="text-gray-700">
              「音声配信アプリにおけるiOSを使った音声配信の全てと裏側」について登壇
              <a
                href="https://fortee.jp/iosdc-japan-2022/proposal/ee2ab807-9053-4779-84f9-ec9951f7cfc0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                詳細を見る →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">職歴</h2>
        <div className="space-y-12">
          {/* Voicy */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">Voicy</h3>
                <p className="text-gray-600">2021/12 - 2024/12</p>
              </div>
              <a
                href="https://voicy.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  プロジェクト概要
                </h4>
                <p className="text-gray-700">
                  音声配信プラットフォームを提供する企業で、主に音声配信ユーザー向けのパーソナリティの収録アプリの開発を担当。Agoraを利用した生放送機能の開発や、パーソナリティが収録・音声発信しやすい体験を提供するための様々な改善を行う。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  実績・取り組み
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    外注中心だったアプリ開発の内製化し、テスタブルな設計へ徐々に変更
                  </li>
                  <li>
                    マルチモジュールを導入し、モジュール単位でテスタブルな設計を保証
                  </li>
                  <li>生放送やコラボ収録などの新たな収録方法の開発</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  利用技術
                </h4>
                <p className="text-gray-700">
                  SwiftUI / Agora / AVFoundation / RxSwift / Jetpack Compose /
                  ExoPlayer
                </p>
              </div>
            </div>
          </div>

          {/* CBCloud */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">CBCloud</h3>
                <p className="text-gray-600">2019/04 - 2021/11</p>
              </div>
              <a
                href="https://cb-cloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  プロジェクト
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://smaryu.town/truck/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      SmaRyuTruck
                    </a>
                    の新規開発
                  </li>
                  <li>
                    <a
                      href="https://pickgo.town/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      PickGo
                    </a>
                    の開発・運用
                  </li>
                  <li>
                    <a
                      href="https://press.jal.co.jp/ja/release/202103/005969.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      JAL航空便連携
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  利用技術
                </h4>
                <p className="text-gray-700">Swift / Kotlin / Nuxt.js</p>
              </div>
            </div>
          </div>

          {/* LifeSports */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">Lifesports</h3>
                <p className="text-gray-600">2018/02 - 2019/03</p>
              </div>
              <a
                href="https://lifesports.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                スポーツ事業に関わる企業で、エンジニアとしてユーザー数を増やすための既存機能の修正やコミュニティ機能の設計・実装を行い、ユーザーの利用体験を向上させた。
              </p>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  利用技術
                </h4>
                <p className="text-gray-700">Swift / Kotlin / Laravel</p>
              </div>
            </div>
          </div>

          {/* AP Communications */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">
                  エーピーコミュニケーションズ
                </h3>
                <p className="text-gray-600">2013/09 - 2018/02</p>
              </div>
              <a
                href="https://www.ap-com.co.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                ネットワーク系SIerで、ネットワークエンジニアとして国内大手ネットワーク認証システムの運用やシステムリプレイスを担当。開発部門に異動後は、教育事業会社や娯楽事業のサービス保守システムリプレイスなど、様々なプロジェクトに携わった。
              </p>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  利用技術
                </h4>
                <p className="text-gray-700">
                  Java (Spring) / PHP (Laravel) / MySQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Side Projects</h2>
        <div className="space-y-8">
          {/* linq */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">
                  linq社 iOSエンジニア
                </h3>
                <p className="text-gray-600">2022/11 - 2023/03</p>
              </div>
              <a
                href="https://linq.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <p className="text-gray-700 mb-4">
              位置情報共有アプリwhooのSwiftUI化や利用ユーザー増加のためのMap上でスタンプを送る機能ややフレンドメッセージ機能を開発しました。
              また、マップ上のユーザーインタラクティブなアニメーションなどを対応しました。
            </p>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                利用技術
              </h4>
              <p className="text-gray-700">
                SwiftUI / UIKit / MapKit / CoreLocation / Core Animation
              </p>
            </div>
          </div>

          {/* Healthcare App */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">
                  ヘルスケアアプリ モバイルエンジニア
                </h3>
                <p className="text-gray-600">2022/11 - 2023/03</p>
              </div>
              <a
                href="https://soxai.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <p className="text-gray-700 mb-4">
              quasarというマルチプラットフォーム開発技術で開発した。主に新アプリの画面リプレイスでヘルス画面というグラフを書く画面などを担当した。
            </p>
          </div>

          {/* nossa360 */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-700">
                  nossa360 Androidエンジニア
                </h3>
                <p className="text-gray-600">2020/04 - 2021/03</p>
              </div>
              <a
                href="https://lp.nossa360biz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Website →
              </a>
            </div>
            <p className="text-gray-700">
              nossa360という建築会社向けのカメラアプリを開発保守。主にAndroidのCameraAPI開発した。
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 text-center">
      <p className="text-lg">
        Crafted with ❤️ by <span className="font-bold">entaku</span>
      </p>
    </footer>
  </div>
)

export default Home
