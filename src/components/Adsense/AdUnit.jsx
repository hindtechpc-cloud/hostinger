import React, { useEffect, useRef } from "react";
import AdPlaceholder from "../UI/AdPlaceholder";

const AdUnit = ({
  slotId,
  format = "auto",
  responsive = true,
  layoutKey = null, // 🔥 NEW: Fluid ads ke liye required
}) => {
  const isProduction = import.meta.env.PROD;
  const adRef = useRef(null);

  useEffect(() => {
    if (!isProduction) return;

    try {
      if (adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdsbyGoogle push error:", e);
    }
  }, [isProduction]);

  if (!isProduction) {
    return <AdPlaceholder slotId={slotId} />;
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})} // 🔥 ADD THIS
    ></ins>
  );
};

export default AdUnit;

export const initializeAds = () => {
  try {
    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  } catch (e) {
    console.warn("AdSense error:", e);
  }
};



