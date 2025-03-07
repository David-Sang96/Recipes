import { Outlet, useNavigation } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <section className="max-w-5xl mx-auto flex flex-col min-h-screen pb-8 pt-4">
      <Header />
      <div className="flex-1 py-8">
        {navigation.state === "loading" ? (
          <p className="flex min-h-screen items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              stroke="#00BCFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-loader animate-spin size-12"
            >
              <path d="M12 2v4" />
              <path d="m16.2 7.8 2.9-2.9" />
              <path d="M18 12h4" />
              <path d="m16.2 16.2 2.9 2.9" />
              <path d="M12 18v4" />
              <path d="m4.9 19.1 2.9-2.9" />
              <path d="M2 12h4" />
              <path d="m4.9 4.9 2.9 2.9" />
            </svg>
            Loading...
          </p>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
