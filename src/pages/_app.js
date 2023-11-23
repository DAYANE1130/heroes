import HeroProvider from './context/HeroProvider';

function MyApp({ Component, pageProps }) {
  return (
    <HeroProvider>
      <Component {...pageProps} />
    </HeroProvider>
  );
}

export default MyApp;
