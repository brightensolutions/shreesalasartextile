import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import OurProducts from "./components/OurProducts/OurProducts";
import EventTradeShow from "./components/EventTradeShow/EventTradeShow";
import Blogs from "./components/Blogs/Blogs";
import Careers from "./components/Careers/Careers";
import ContactUs from "./components/ContactUs/ContactUs";
import FabricFunctions from "./components/FabricFunctions/FabricFunctions";
import PhotoFrame from "./components/PhotoFrame/PhotoFrame";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<OurProducts />} />
        {/* <Route path="/events" element={<EventTradeShow />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/career" element={<Careers />}/> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/fabricfunctions" element={<FabricFunctions />} />
        <Route path="/PhotoFrame" element={<PhotoFrame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
