import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ServicePage from "./Components/Home/ServicesPages/ServicePage";
import Gallery from "./Components/Home/Gallery";
import About from "./Components/Home/About";
import NewHome from "./Components/Home/NewHome/NewHome";
import Scope from "./Components/Home/Scope/Scope";
import Eletric_cal from "./Components/Newscope/Eletric_cal";
import Oilgas from "./Components/Newscope/Oilgas";
import Wellinstall from "./Components/Newscope/Wellinstall";
import Hydraulic from "./Components/Newscope/Hydraulic";
import Pumping from "./Components/Newscope/Pumping";
import Openhole from "./Components/Newscope/Openhole";
import Bolt from "./Components/Newscope/Bolt";
import Hydraulictorqueing from "./Components/Newscope/Hydraulictorqueing";
import Casing from "./Components/Newscope/Casing";
import Chemical from "./Components/Newscope/Chemical";
import Rental from "./Components/Newscope/Rental";
import Piping from "./Components/Newscope/Piping";
import Logistic from "./Components/Newscope/Logistic";
import Location from "./Components/Newscope/Location";
import Enviroment from "./Components/Newscope/Enviroment";
import Construction from "./Components/Newscope/Construction";
import Civil from "./Components/Newscope/Civil";
import Services from "./Components/Services";








function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NewHome />} />
 
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/services/:id/:title" element={<ServicePage />} />
        <Route path="/Electrical/Calibration_Service" element={<Eletric_cal />} />
        <Route path="/Oil_&_Gas_Drilling_Services" element={<Oilgas />} />
        <Route path="/Wellhead_Installation_&_Maintainance_Service" element={<Wellinstall/>} />
        <Route path="/Hydraulic_Stimulation_CoiledTubing_&_Nitrogen_Services" element={<Hydraulic />} />
        <Route path="/Pumping_Services" element={<Pumping />} />
        <Route path="/OpenHole_CasedHole_&_SlimHole_Services" element={<Openhole />} />
        <Route path="/Bolt_Tensioning_Services" element={<Bolt />} />
        <Route path="/Hydraulic_Torqueing_Services" element={<Hydraulictorqueing />} />
        <Route path="/Casing_Cutting_Services" element={<Casing />} />
        <Route path="/ChemicalCold_Explosive_&_Field_Maintenance_Services" element={<Chemical />} />
        <Route path="/Rental_of_Drill_Cutting_Skips_Services" element={<Rental />} />
        <Route path="/Piping_Line_Welding_Fabrication_Services" element={<Piping />} />
        <Route path="/Logistics_Services" element={<Logistic />} />
        <Route path="/Location_Preparations_Services" element={<Location />} />
        <Route path="/Environmental_Consultancy_Services" element={<Enviroment />} />
        <Route path="/Construction_Services_&_Civil_Works" element={<Construction />} />
        <Route path="/Civil_&_Mechanical_Engineering_Services" element={<Civil />} />
        <Route path="/Services" element={<Services />} />




      </Routes>
      <Footer />
    </div>
  );
}

export default App;
