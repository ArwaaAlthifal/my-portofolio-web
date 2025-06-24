import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
