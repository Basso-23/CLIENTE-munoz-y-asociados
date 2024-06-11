import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
  return (
    <div className="poppins-light ">
      <Head>
        <title>Muñoz y Asociados</title>
        <meta
          name="description"
          content="Asesoramos a clientes de forma integral de acuerdo con sus necesidades. Actualmente ofrecemos servicios de auditoría, contables, legales, y de outsorcing, bajo altos estandares de calidad."
        />
      </Head>
      <Navbar />
      <div className="pt-[80px]">
        <Component key={router.pathname} {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
