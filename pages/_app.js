import React from 'react'

import usePageView from '../hocks/usePageView'
import GoogleAnalytics from '../components/GoogleAnalytics'

const App = ({ Component, pageProps }) => {
    usePageView()

    return (
        <>
            <GoogleAnalytics />
            <Component {...pageProps} />
        </>
    )
}

export default App