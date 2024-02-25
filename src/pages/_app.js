import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const App = ({ Component, pageProps, router }) => {
  return (
    <div className="poppins-light ">
      <Navbar />
      <div className="pt-[80px]">
        <Component key={router.pathname} {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
