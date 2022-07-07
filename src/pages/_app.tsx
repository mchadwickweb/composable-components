import MainLayout from "../layouts/mainLayout";
import "../styles/globals.css";

function Website({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default Website;
