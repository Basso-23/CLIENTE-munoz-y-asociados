import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const App = ({ Component, pageProps, router }) => {
  return (
    <div className="outfit">
      <Navbar />
      <div className="pt-[80px]">
        <Component key={router.pathname} {...pageProps} />
      </div>
    </div>
  );
};

export default App;
