
import Script from "next/script";

export const GoogleTagManager = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-975370317"/>
        <Script id="google-tag-manager">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-975370317');
                `}
        </Script>
    </>
 );
}