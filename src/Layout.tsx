import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <section className="max-w-5xl mx-auto flex flex-col min-h-screen pb-8 pt-4">
      <Header />
      <div className="flex-1 py-8">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
