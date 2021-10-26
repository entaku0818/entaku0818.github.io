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
        <div className="cursor-pointer shadow-lg">
          <div>
            <IconImage articleType={this.props.article.type} />
          </div>
          <div>
            <h3 className=" text-lg ">{this.props.article.name}</h3>
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

export default ArticleCard
