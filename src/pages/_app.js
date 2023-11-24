import HeroProvider from "@/context/HeroProvider";
import Home from ".";
import Combat from "./Combat";


function MyApp({ pageProps }) {
  return (
    <HeroProvider>
      < Home {...pageProps} />
      {/* <Combat {...pageProps}/> */}
    </HeroProvider>
  );
}

export default MyApp;
