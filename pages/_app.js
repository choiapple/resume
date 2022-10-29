import "../styles/globals.css";
import Header from "../src/component/layout/Header";
import Footer from "../src/component/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
