import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import { wrapper } from "../store/store";

function MyApp({ Component, ...pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
