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
        <h2 className={'text-3xl font-bold'}>βοΈ Contact information</h2>
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
        <h2 className={'text-3xl font-bold'}>π©π»βπ»Work</h2>
        <ul className={'mt-4 timeline'}>
          <li>
            <p className="timeline-date">2019/05γ2021/11</p>
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
                γγͺγΌγ©γ³γΉγγ©γ€γγΌγ¨θ·δΈ»γε³ζγ«γ€γͺγιιγγγγ³γ°γγ©γγγγ©γΌγ γζδΎγγγ
                ζεγ―γ’γγ€γ«γ¨γ³γΈγγ’γ¨γγ¦εη»γγWebγγ­γ³γγγ΅γΌγγΌγ΅γ€γγͺγ©γη΅ι¨γγͺγγPMγ¨γγ¦γιηΊζ½η­γ?η­ε?γζ½η­γ«γγ£γ¦γ―ζ©θ½ιηΊγΎγ§ε?ζ½γγ
              </p>
              <ul className="list-disc m-6">
                <li>δΈθ¬θ²¨η©ιιδΊζ₯­θεγγ?Saasγ§γγSmaRyuTruckιηΊ</li>
                <li>δΈθ¬θ²¨η©εγιιδΎι Όη»ι’γ?γͺγͺγΌγΉ 2019/11</li>
                <li>θ²·γη©γ’γγͺγͺγͺγΌγΉ - 2020/4 γ 2020/5</li>
                <li>PickGo Business/PartnerιηΊ - 2020/10-11γ</li>
                <li>JALθͺη©ΊδΎΏι£ζΊ 2021/3</li>
                <li>Flutterγͺγγ¬γ€γΉ 2021/4</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="timeline-date">2018/03γ2019/04</p>
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
                δ»δΊγ¨θͺε?γ?εΎεΎ©γγγ¦γθΎγζζγ«γεδΊΊγγγγ΅γ«γ¨γγγγ³γΌγγ§γγγγγιγΎγ£γ¦γγγγ΅γ«γγγγ¨γγγ€γγ³γγθ¦γ€γιγ£γ¦γγΎγγγ
                γγ?γγγγ΅γ«γ?ιγΎγγγ¨γ¦γε±εΏε°γγγγγγ?η΅ι¨γγγγγͺε ΄ζγγγ£γ¨ε’γγγ¦γγγγγ?γ§γΉγγΌγδΊζ₯­γ«γ¨γ³γΈγγ’γ¨γγ¦ι’γγ£γ¦γΏγγγ¨θγγγ©γ€γγΉγγΌγγΈθ»’θ·γ
                δΈ»γ«γ¦γΌγΆγΌζ°γε’γγγγγͺζ’ε­ζ©θ½γ?δΏ?ζ­£γγ³γγ₯γγγ£ζ©θ½γ?θ¨­θ¨ε?θ£γε?ζ½γγγ
              </p>
            </div>
          </li>
          <li>
            <p className="timeline-date">2013/09γ2018/02</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>
                ζ ͺεΌδΌη€Ύγ¨γΌγγΌγ³γγ₯γγ±γΌγ·γ§γ³γΊ
              </h3>
              <a
                href="https://www.ap-com.co.jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ap-com.co.jp
              </a>
              <h4>γγγγ―γΌγ―γ¨γ³γΈγγ’ (2013/09γ2016/02)</h4>
              <p>
                ε€§ζNWδΊζ₯­δΌη€Ύ
                NWγ΅γΌγγΉγ?θͺθ¨Όγ·γΉγγ γ?ιηΊγ¨ζ°γγͺγ·γΉγγ γΈγ?γͺγγ¬γ€γΉδ½ζ₯­γε?ζ½γ
                δΈ»γ«ζ°γγNWγ΅γΌγγΉγε°ε₯γγιγ?γ·γΉγγ θ¨­θ¨/ιηΊ/ζ€θ¨Ό/ε°ε₯γΎγ§γ?NW/γ΅γΌγγΌθ¨­θ¨γγ‘γ€γ³γ§ζε½γ
              </p>
              <h4 className={'mt-2'}>
                γ’γγͺγ±γΌγ·γ§γ³γ¨γ³γΈγγ’ (2016/03γ2018/02)
              </h4>
              <p>
                δΈ»γ«ζθ²δΊζ₯­δΌη€Ύγε¨―ζ₯½δΊζ₯­γ?γ΅γΌγγΉδΏε?γ·γΉγγ γͺγγ¬γ€γΉγͺγ©γε?ζ½
                CakePHP/Laravel/Spring/MySQL
              </p>
            </div>
          </li>
          <li>
            <p className="timeline-date">2010/04γ2013/08</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>
                ζ₯ζ¬γ¦γγ’γ³γγ½γγγ―
              </h3>
              <a
                href="https://www.sonic-square.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sonic-square.co.jp/
              </a>
              <p>γ¬γ³γΏγ«δΊζ₯­δΌη€ΎγΈζ΄Ύι£γγγγ·γΉγγ ιηΊγεΎδΊ</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold'}>π£ Languages</h2>
        <p>ζ₯ζ¬θͺ</p>
      </section>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold'}>πEducation</h2>
        <p>
          <a href="https://bbt.ac/" rel="noopener noreferrer">
            γγΈγγΉγγ¬γ€γ―γΉγ«γΌε€§ε­¦
          </a>
          (2021εΉ΄εζ₯­)
        </p>
        <p>ζ₯ζ¬ε·₯ε­¦ι’ε«ηε­ε°ιε­¦ζ ‘ (2010εΉ΄εζ₯­)</p>
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
