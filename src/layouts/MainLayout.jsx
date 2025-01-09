
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <div className="font-roboto ">
      <nav className="bg-black sticky top-0 z-10 backdrop-blur bg-opacity-85">
        <Navbar></Navbar>
      </nav>
      <main className="bg-gray-300">
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#262626]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
