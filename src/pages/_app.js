import HeroProvider from "@/context/HeroProvider";
import Home from ".";
// import { Global } from "@emotion/react";
// import GlobalStyle from "../styles/GlobalStyle.js";


function MyApp({ pageProps }) {
  return (
    
 
    <HeroProvider>
      < Home {...pageProps} />
    </HeroProvider>
    
  );
}

export default MyApp;
