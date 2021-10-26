import '@fortawesome/fontawesome-svg-core/styles.css'

export const Header = (): JSX.Element => (
  <header>
    <h1 className="text-xl">
      <a className="header-title" href="/">
        ENTAKU
      </a>
    </h1>
    <nav className="pc-nav">
      <a href="/">home</a>
      <a className={'ml-4'} href="/articles">
        articles
      </a>
    </nav>
    <style jsx>{`
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
    `}</style>
  </header>
)

export default Header
