import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container mx-auto px-3 base_color_sete 1xl:max-w-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
