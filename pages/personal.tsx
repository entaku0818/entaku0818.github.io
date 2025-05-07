import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '../components/header'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export const Personal = (): JSX.Element => {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/entaku0818/entaku0818/main/personal.md'
        )
        const text = await response.text()
        setContent(text)
      } catch (error) {
        console.error('Error fetching content:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Portfolio - entaku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {loading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-16">
            <article className="bg-white rounded-2xl shadow-lg p-8">
              <div className="markdown-content">
                <ReactMarkdown
                  components={{
                    h1: ({ _node, ...props }: any) => (
                      <h1
                        className="text-3xl font-bold mb-6 text-gray-900"
                        {...props}
                      />
                    ),
                    h2: ({ _node, ...props }: any) => (
                      <h2
                        className="text-2xl font-bold mb-4 text-gray-800"
                        {...props}
                      />
                    ),
                    h3: ({ _node, ...props }: any) => (
                      <h3
                        className="text-xl font-bold mb-3 text-gray-800"
                        {...props}
                      />
                    ),
                    p: ({ _node, ...props }: any) => (
                      <p
                        className="mb-4 text-gray-700 leading-relaxed"
                        {...props}
                      />
                    ),
                    ul: ({ _node, ...props }: any) => (
                      <ul
                        className="list-disc list-inside mb-4 text-gray-700"
                        {...props}
                      />
                    ),
                    ol: ({ _node, ...props }: any) => (
                      <ol
                        className="list-decimal list-inside mb-4 text-gray-700"
                        {...props}
                      />
                    ),
                    li: ({ _node, ...props }: any) => (
                      <li className="mb-2 text-gray-700" {...props} />
                    ),
                    blockquote: ({ _node, ...props }: any) => (
                      <blockquote
                        className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600"
                        {...props}
                      />
                    ),
                    a: ({ _node, ...props }: any) => (
                      <a
                        className="text-blue-600 hover:text-blue-800 underline"
                        {...props}
                      />
                    ),
                    code: ({ _node, inline, ...props }: any) =>
                      inline ? (
                        <code
                          className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono"
                          {...props}
                        />
                      ) : (
                        <code
                          className="block bg-gray-100 rounded p-4 my-4 text-sm font-mono overflow-x-auto"
                          {...props}
                        />
                      ),
                    pre: ({ _node, ...props }: any) => (
                      <pre
                        className="bg-gray-100 rounded p-4 my-4 overflow-x-auto"
                        {...props}
                      />
                    ),
                    img: ({ _node, ...props }) => (
                      <img
                        className="rounded-lg shadow-md my-8 max-w-full"
                        {...props}
                      />
                    ),
                    hr: ({ _node, ...props }) => (
                      <hr className="border-gray-200 my-8" {...props} />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </article>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-2 border-gray-100">
                登壇経験
              </h2>
              <ul className="space-y-8">
                <li className="flex flex-col space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📱</span>
                    <a
                      href="https://iosdc.jp/2020/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-blue-600 hover:underline"
                    >
                      iOSDC Japan 2020
                    </a>
                  </div>
                  <a
                    href="https://speakerdeck.com/entaku/droidkaigifalsegong-shi-ahuriteshi-meru-iosahuriosskomitutahefalsedao"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-blue-600 ml-7 flex items-center space-x-2"
                  >
                    <span>📊</span>
                    <span>Speaker Deck</span>
                  </a>
                </li>
                <li className="flex flex-col space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">🔄</span>
                    <a
                      href="https://cw-engineers.connpass.com/event/146975/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-blue-600 hover:underline"
                    >
                      【増枠】Vue.jsアーキテクチャリング勉強会
                    </a>
                  </div>
                  <a
                    href="https://speakerdeck.com/entaku/vue-vuex-falseakitekutiyawan-quan-nili-jie-sita"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-blue-600 ml-7 flex items-center space-x-2"
                  >
                    <span>📊</span>
                    <span>Speaker Deck</span>
                  </a>
                </li>
                <li className="flex flex-col space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📱</span>
                    <a
                      href="https://iosdc.jp/2021/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-blue-600 hover:underline"
                    >
                      iOSDC Japan 2021
                    </a>
                  </div>
                  <a
                    href="https://speakerdeck.com/entaku/pickgo-for-partnerfalseyi-xing-fang-fa-karaxue-hu-ji-cun-falseneiteihuahuriwoflutterherihureisusurufang-fa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-blue-600 ml-7 flex items-center space-x-2"
                  >
                    <span>📊</span>
                    <span>Speaker Deck</span>
                  </a>
                </li>
                <li className="flex flex-col space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">📱</span>
                    <a
                      href="https://iosdc.jp/2022/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-medium text-blue-600 hover:underline"
                    >
                      iOSDC Japan 2022
                    </a>
                  </div>
                  <a
                    href="https://fortee.jp/iosdc-japan-2022/proposal/ee2ab807-9053-4779-84f9-ec9951f7cfc0"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-blue-600 ml-7 flex items-center space-x-2"
                  >
                    <span>👤</span>
                    <span>Speaker Profile</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Powered by entaku
        </div>
      </footer>
    </div>
  )
}

export default Personal
