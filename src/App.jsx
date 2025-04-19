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
    <React.Fragment>
      {/* Hero Section */}
      <section className="flex flex-col justify-center h-[22vh] items-center  bg-[url(./images/back.jpg)]    p-4">
        <h1 className="text-white tracking-wider  text-6xl font-light">
          nzaEazy
        </h1>
        <h2 className="text-orange-500 tracking-wider text-[14px] font-sans ">
          BETTER IN TECHNOLOGY
        </h2>
        <p className="text-white text-[9px]">
          inspiring innovative mindset among youths
        </p>
      </section>

      {/* Our Team Section */}
      <div className="bg-[url(./images/backn.jpg)]">
        <section className="px-1 p-4 ml-4 w-1/2 h-[22vh] ">
          <h2 className="text-orange-500 text-3xl font-light ">Our team</h2>
          <p className="text-white font-sans font-extralight text-[22px]">
            Benjamin Manjolo, the founder, is a graphic designer, software
            engineer, and photographer currently residing in Blantyre.
          </p>
        </section>
      </div>
      {/* Our Goal Section */}
      <section className="px-3 pl-22 p-4 mr-4 h-[22vh] rounded-l-x  flex flex-col items-end text-right ">
        <h2 className="text-orange-500 text-3xl font-light ">Our goal</h2>
        <p className="text-white  font-sans font-extralight text-[22px] max-w-xs">
          nzaEazy aims to promote youth in Malawi to embrace technology and
          explore how they can build a better life through it.
        </p>
      </section>

      {/* Join Us Section */}
      <section className="p-4 ml-4  ">
        <h2 className="text-orange-500 text-3xl font-light mb-4 ">Hire us</h2>
        <button
          onClick={() => navigate("/message")}
          className="bg-orange-500 rounded-3xl h-[50px] text-white px-4  uppercase font-light"
        >
          Message
        </button>
      </section>

      {/* Explore Section */}
      <section className="">
        <ImageGallery />
      </section>

      {/* Footer */}
      <footer className="  text-white p-4">
        <p className="text-center">&copy; 2025 nzaEazy</p>
      </footer>
    </React.Fragment>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <div className="flex justify-around space-x-4">
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
