import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 28, paddingBottom: 60 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
