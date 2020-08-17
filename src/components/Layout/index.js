import React from "react"
import PropTypes from "prop-types"

import Footer from "../Footer"
import Header from "../Header"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

function addHotMart() {
  const text =
    "(function(l,a,u,n,c,h,e,r){l['HotmartLauncherObject']=c;l[c]=l[c]||function(){(l[c].q=l[c].q||[]).push(arguments)},l[c].l=1*new Date();h=a.createElement(u),e=a.getElementsByTagName(u)[0];h.async=1;h.src=n;e.parentNode.insertBefore(h,e)})(window,document,'script','//launcher.hotmart.com/launcher.js','hot');hot('account', '8fd69c75-8b5e-39d1-acc8-b7be4f3c396a');";
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.innerText = text;
  script.setAttribute("id", `hotmart_launcher_script`);
  document.getElementsByTagName("head")[0].appendChild(script);

}
function addActiveCampaign() {
  const text =
    '!function(i,e,t,s,l,o,a){i.visitorGlobalObjectAlias="vgo",i[i.visitorGlobalObjectAlias]=i[i.visitorGlobalObjectAlias]||function(){(i[i.visitorGlobalObjectAlias].q=i[i.visitorGlobalObjectAlias].q||[]).push(arguments)},i[i.visitorGlobalObjectAlias].l=(new Date).getTime(),(o=e.createElement("script")).src="https://diffuser-cdn.app-us1.com/diffuser/diffuser.js",o.async=!0,(a=e.getElementsByTagName("script")[0]).parentNode.insertBefore(o,a)}(window,document);vgo("setAccount", "252789019"); vgo("setTrackByDefault", true); vgo("process");';
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.innerText = text;
  document.getElementsByTagName("head")[0].appendChild(script);

  
}
function addFbPixel() {
  const text =
    "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '203603320735809');fbq('track', 'PageView');";
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.innerText = text;
  document.getElementsByTagName("head")[0].appendChild(script);
  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.setAttribute('height', 1)
  img.setAttribute('width', 1)
  img.setAttribute('style', 'display:none')
  img.setAttribute('src', 'https://www.facebook.com/tr?id=203603320735809&ev=PageView&noscript=1')
  noscript.appendChild(img)
  document.getElementsByTagName("head")[0].appendChild(noscript);

}

const Layout = ({ children }) => {
  addActiveCampaign()
  addFbPixel()
  addHotMart()

  return (
    <>
      <GlobalStyles />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
