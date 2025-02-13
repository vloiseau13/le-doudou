import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
