import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/header'
import Article, { ArticleType } from '../data_class/article'
import ArticleCard from '../components/articleCard'

type Props = {
  articles: Article[]
  zenns: Article[]
}

export const Articles = ({ articles, zenns }: Props): JSX.Element => (
  <div className="min-h-screen bg-gray-50">
    <Head>
      <title>Portfolio - entaku</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="text-2xl">👩🏻‍💻</span>
            Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...articles, ...zenns].map((article, index) => (
              <ArticleCard article={article} key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>

    <footer className="bg-white border-t border-gray-200 py-8 mt-16">
      <div className="container mx-auto px-4 text-center text-gray-600">
        Powered by entaku
      </div>
    </footer>
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
