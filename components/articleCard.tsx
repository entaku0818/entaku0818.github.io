import '@fortawesome/fontawesome-svg-core/styles.css'
import Article from '../data_class/article'
import * as React from 'react'
import Link from 'next/link'
type Props = {
  article: Article
}
class ArticleCard extends React.Component<Props> {
  render() {
    return (
      <Link href={this.props.article.url}>
        <div className="cursor-pointer shadow-lg flex items-stretch">
          <div className="w-10 flex-none flex justify-center items-center">
            <IconImage articleType={this.props.article.type} />
          </div>
          <div className="">
            <p className="font-medium text-lg">{this.props.article.name}</p>
          </div>
        </div>
      </Link>
    )
  }
}

function IconImage(articleType) {
  switch (articleType.articleType) {
    case '1':
      return <QiitaIcon />
      break
    case '2':
      return <ZennIcon />
      break
    case '3':
      return <NoteIcon />
      break
    default:
      return <QiitaIcon />
      break
  }
}
function QiitaIcon() {
  return <img className={'h-6 w-6'} src={`/qiita.png`} />
}
function ZennIcon() {
  return <img className={'h-6 w-6'} src={`/zenn.svg`} />
}
function NoteIcon() {
  return <img className={'h-10 w-10'} src={`/note.svg`} />
}

export default ArticleCard
