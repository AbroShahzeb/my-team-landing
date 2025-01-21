import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

export const Layout = () => {
  return (
    <main className="bg-primary-midnight-green min-h-screen w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
