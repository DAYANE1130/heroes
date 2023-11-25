import HeroProvider from "@/context/HeroProvider";
import Home from ".";

function MyApp({ pageProps }) {
  return (

    <HeroProvider>
      < Home {...pageProps} />
    </HeroProvider>

  );
}

export default MyApp;
