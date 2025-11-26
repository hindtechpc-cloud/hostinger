import { useEffect, useRef } from 'react';

const useAds = () => {
  const adsInitialized = useRef(false);

  useEffect(() => {
    // Initialize AdSense script only once
    if (!adsInitialized.current && import.meta.env.PROD) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
      
      adsInitialized.current = true;
      console.log(script)
    }
  }, []);

  const displayAd = (slotId, containerId) => {
    if (!import.meta.env.PROD) {
      console.log(`Ad would be displayed: ${slotId} in ${containerId}`);
      return;
    }

    // Wait for AdSense script to load
    if (window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error('Error displaying ad:', error);
      }
    } else {
      console.warn('AdSense script not loaded yet');
      
      // Retry after a delay
      setTimeout(() => {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      }, 1000);
    }
  };

  const createAdUnit = (slotId, format = 'auto', responsive = true) => {
    if (!import.meta.env.PROD) {
      return (
        <div 
          className="border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 text-sm"
          style={{ width: '300px', height: '250px' }}
        >
          <div>Ad Unit: {slotId}</div>
        </div>
      );
    }

    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    );
  };

  return {
    displayAd,
    createAdUnit
  };
};

export default useAds;