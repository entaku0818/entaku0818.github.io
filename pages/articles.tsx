import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/header'
import Article, { ArticleType } from '../data_class/article'
import ArticleCard from '../components/articleCard'
import History from '../components/history'

type Props = {
  articles: Article[]
  zenns: Article[]
}

export const Articles = ({ articles, zenns }: Props): JSX.Element => (
  <div>
    <Head>
      <title>Portfolio - entaku</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header></Header>
    <main>
      <h2 className={'text-xl font-bold '}>👩🏻‍💻Zenn</h2>
      <History articles={zenns} />
      <h2 className={'text-xl font-bold '}>👩🏻‍💻Articles</h2>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-x-8 gap-y-4">
        {articles.map((article, index) => (
          <ArticleCard article={article} key={index}></ArticleCard>
        ))}
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

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export async function getStaticProps() {
  const res = await fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/1S286LYrmDHOPjvZHQh8d2pSg_MVaZOb_Znr9zUahd2M/values/article?key=AIzaSyAxzVLiIMLhFGrQUeU0JH8sL-7-0o4iXxY'
  )
  const json = await res.json()

  const x = await json.values.flatMap((elm) => {
    const type: ArticleType = elm[1]
    const obj = {
      name: elm[0],
      type: type,
      url: elm[2],
    }
    const article = new Article(obj)
    return article
  })

  const y = await json.values.flatMap((elm) => {
    const type: ArticleType = elm[1]
    const obj = {
      name: elm[0],
      type: type,
      url: elm[2],
      created: elm[3],
    }
    const article = new Article(obj)
    return article
  })
  return {
    props: {
      articles: JSON.parse(JSON.stringify(x)),
      zenns: JSON.parse(JSON.stringify(y)),
    },
  }
}

export default Articles
