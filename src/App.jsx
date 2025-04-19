import React from "react";
import ImageGallery from "./ImageGallery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ServicesPage from "./Services";
import Message from "./message";
import Product from "./product";
import _Pricing from "./pricing";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col h-auto items-center text-center p-2">
        <h1 className="text-white tracking-wider  text-6xl font-light">
          nzaEazy
        </h1>
        <h2 className="text-orange-500 tracking-wider text-[14px] font-light ">
          BETTER IN TECHNOLOGY
        </h2>
        <p className="text-white text-[9px]">
          inspiring innovative mindset among youths
        </p>
      </section>

      {/* Our Team Section */}
      <section className="px-1 py-1 w-3/4 rounded-r-x shadow-sm border-white-300 ">
        <h2 className="text-orange-500 text-3xl font-bold mb-2">Our team</h2>
        <p className="text-white">
          Benjamin Manjolo founder, is a graphic designer, software engineer and
          also a photographer who is currently staying in Blantyre.
        </p>
      </section>

      {/* Our Goal Section */}
      <section className="px-3 pl-22 rounded-l-x shadow-sm py-6 flex flex-col items-end text-right ">
        <h2 className="text-orange-500 text-3xl font-bold mb-2">Our goal</h2>
        <p className="text-white max-w-xs">
          nzaEazy aims at promoting youths in Malawi to embrace technology and
          how they can make a good life out of it
        </p>
      </section>

      {/* Join Us Section */}
      <section className="px-4 py-6">
        <h2 className="text-orange-500 text-3xl font-bold mb-4">Hire us</h2>
        <button
          onClick={() => navigate("/message")}
          className="bg-orange-500 text-white px-4 py-2 uppercase font-medium"
        >
          Message
        </button>
      </section>

      {/* Explore Section */}
      <section className="py-8">
        <ImageGallery />
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-orange-800 text-white p-4">
        <p className="text-center">&copy; 2025 nzaEazy</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navigation */}
        <nav className="flex justify-between drop-shadow-sm items-center p-4 bg-orange-400">
          <Link to="/" className="text-white">
            Home
          </Link>
          <div className="flex space-x-4">
            <Link to="/services" className="text-white hover:underline">
              Services
            </Link>
            <Link to="/product" className="text-white hover:underline">
              Products
            </Link>
            <Link to="/pricing " className="text-white hover:underline">
              Pricing
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<_Pricing />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
