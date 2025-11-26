import React from 'react'
import { Helmet } from 'react-helmet-async'

const AutoAdsScript = () => {
  const isProduction = import.meta.env.PROD
  const adsenseClientId = import.meta.env.VITE_ADSENSE_CLIENT_ID

  if (!isProduction || !adsenseClientId) {
    return null
  }

  return (
    <Helmet>
      <script 
        async 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544`}
        crossOrigin="anonymous"
      />
    </Helmet>
  )
}

export default AutoAdsScript