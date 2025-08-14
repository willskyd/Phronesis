import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
// import { transition } from "../../../utils/transition";
import { transition } from "../../utils/transition";
// import { fadeIn, reveal } from "../../../utils/variants";
import { fadeIn } from "../../utils/variants";
// import Scopeslide from "../../Scopeslide";
// import { Swiper } from "swiper/react";
// import Sliding3 from "../../Scopeslide";
class App extends React.Component { 
 
  

  Getservices() {
    return (
      <section className="relative pb-16 px-0 bg-[#1D2723]">
        <div className="container2">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="ServicePage2_area"
          >
            <ul className="  md:ml-[2rem]  mx-auto  gap-4">

                <section className=" md:grid md:grid-col-3">
                  <div className="h-full">
                     

                     <div className="ServicePage2_area md:ml-[15rem] mt-[5rem] ml-[2rem]">
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">
            Civil and Mechanical Engineering Services 
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">
            Civil and Mechanical Engineering Services 
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited delivers comprehensive civil and mechanical engineering services, providing innovative, 
         reliable, and high-quality solutions for the oil and gas, energy, chemical, and industrial sectors. Our multidisciplinary 
         expertise ensures seamless project execution, from design to commissioning, meeting stringent industry standards such as 
         ASME, API, and ISO. We are committed to delivering safe, sustainable, and cost-effective engineering solutions tailored 
         to your project needs.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
        Phronesis Oil and Gas Limited delivers comprehensive civil and mechanical engineering services, providing innovative, 
         reliable, and high-quality solutions for the oil and gas, energy, chemical, and industrial sectors. Our multidisciplinary 
         expertise ensures seamless project execution, from design to commissioning, meeting stringent industry standards such as 
         ASME, API, and ISO. We are committed to delivering safe, sustainable, and cost-effective engineering solutions tailored 
         to your project needs.
        </div>

        <div className="font-semibold text-2xl mt-[2rem] uppercase md:mt-[1rem] text-white">Our Services</div>

        <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Civil Engineering Solutions</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         We design and construct robust infrastructure to support industrial operations, ensuring durability, safety, and 
         compliance with global standards.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem] pr-[14rem]">
          We design and construct robust infrastructure to support industrial operations, ensuring durability, safety, and 
         compliance with global standards.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Structural Design and Construction:
          </span>&nbsp; Engineering of foundations, platforms, and structural steel frameworks for refineries, power plants, 
          and processing facilities, compliant with AISC and EN 1090 standards.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[1.3rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Structural Design and Construction:
          </span> &nbsp;  Engineering of foundations, platforms, and structural steel frameworks for refineries, power plants, 
          and processing facilities, compliant with AISC and EN 1090 standards.
        </div>

        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Site Development:
          </span>&nbsp; Comprehensive site preparation, including grading, drainage systems, and access roads, optimized for
           operational efficiency.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Site Development:
          </span> &nbsp; Comprehensive site preparation, including grading, drainage systems, and access roads, optimized for
           operational efficiency.
        </div>

        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Concrete and Masonry Works:
          </span>&nbsp;Construction of reinforced concrete structures, retaining walls, and equipment foundations for heavy-duty 
          industrial applications.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Concrete and Masonry Works:
          </span> &nbsp; Construction of reinforced concrete structures, retaining walls, and equipment foundations for heavy-duty 
          industrial applications.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Pipeline Infrastructure:
          </span>&nbsp; Design and installation of pipeline supports, anchor blocks, and thrust restraints to ensure system 
          stability and longevity.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Pipeline Infrastructure:
          </span> &nbsp;  Design and installation of pipeline supports, anchor blocks, and thrust restraints to ensure system 
          stability and longevity.
        </div>

         <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp;  Mechanical Engineering Solutions</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
        Our mechanical engineering services focus on the design, fabrication, and installation of critical systems, ensuring 
        performance and reliability in demanding environments.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem] pr-[18rem]">
          Our mechanical engineering services focus on the design, fabrication, and installation of critical systems, ensuring 
        performance and reliability in demanding environments.
        </div>

        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">
        Process Equipment Design and Installation: 
          </span>&nbsp; Custom engineering of pressure vessels, heat exchangers, and storage tanks, compliant with ASME 
          Section VIII and API 650 standards.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">
            Process Equipment Design and Installation: 
          </span> &nbsp;  Custom engineering of pressure vessels, heat exchangers, and storage tanks, compliant with ASME 
          Section VIII and API 650 standards.
        </div>

        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Piping Systems: 
          </span>&nbsp; Design, fabrication, and installation of process piping systems for oil, gas, and chemical 
          applications, utilizing materials like carbon steel, stainless steel, and exotic alloys.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Piping Systems:
          </span> &nbsp;  Design, fabrication, and installation of process piping systems for oil, gas, and chemical 
          applications, utilizing materials like carbon steel, stainless steel, and exotic alloys.
        </div>

        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Rotating Equipment: 
          </span>&nbsp; Installation, alignment, and maintenance of pumps, compressors, and turbines, ensuring optimal 
          performance and minimal downtime.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Rotating Equipment: 
          </span> &nbsp;  Installation, alignment, and maintenance of pumps, compressors, and turbines, ensuring optimal 
          performance and minimal downtime.
        </div>

        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">HVAC and Utility Systems: 
          </span>&nbsp; Engineering of heating, ventilation, air conditioning, and utility systems for industrial facilities, 
          designed for energy efficiency and operational reliability.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">HVAC and Utility Systems:
          </span> &nbsp;  Engineering of heating, ventilation, air conditioning, and utility systems for industrial facilities, 
          designed for energy efficiency and operational reliability.
        </div>

       

        <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Turnkey Project Management</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         We provide end-to-end project execution, integrating civil and mechanical engineering disciplines to deliver 
         projects on time and within budget.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem] pr-[18rem]">
        We provide end-to-end project execution, integrating civil and mechanical engineering disciplines to deliver 
         projects on time and within budget.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Design and Planning: 
          </span>&nbsp; Utilization of 2D/3D CAD and BIM (Building Information Modeling) for precise design, clash detection, 
          and project visualization.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Design and Planning:
          </span> &nbsp;  Utilization of 2D/3D CAD and BIM (Building Information Modeling) for precise design, clash detection, 
          and project visualization.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Fabrication and Installation: 
          </span>&nbsp; In-house fabrication of components in our state-of-the-art facility, complemented by on-site installation 
          and commissioning.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Fabrication and Installation:
          </span> &nbsp;  In-house fabrication of components in our state-of-the-art facility, complemented by on-site installation 
          and commissioning.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Project Oversight:
          </span>&nbsp; Dedicated project managers ensure seamless coordination, quality control, and adherence to 
          safety and regulatory requirements.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Project Oversight:
          </span> &nbsp;  Dedicated project managers ensure seamless coordination, quality control, and adherence to 
          safety and regulatory requirements.
        </div>
        


        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">On-Site Welding:
          </span>&nbsp;  Our mobile welding teams provide 24/7 emergency repairs and installations, reducing operational disruptions.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[10rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">On-Site Welding:
          </span> &nbsp;   Our mobile welding teams provide 24/7 emergency repairs and installations, reducing operational disruptions.
        </div>


         <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Quality Assurance and Testing</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         Our commitment to excellence is backed by rigorous quality control and testing protocols.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem] pr-[18rem]">
         Our commitment to excellence is backed by rigorous quality control and testing protocols.
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Non-Destructive Testing (NDT):
          </span>&nbsp; Advanced testing methods, including Ultrasonic Testing, Radiography, and Magnetic Particle Inspection, to 
          verify structural and weld integrity.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[10rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Non-Destructive Testing (NDT):
          </span> &nbsp; Advanced testing methods, including Ultrasonic Testing, Radiography, and Magnetic Particle Inspection, 
          to verify structural and weld integrity.

        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Certifications:
          </span>&nbsp;  Compliance with BS EN ISO 9001, ASME, API, and other relevant standards, ensuring safety and reliability.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[10rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Certifications:
          </span> &nbsp;   Compliance with BS EN ISO 9001, ASME, API, and other relevant standards, ensuring safety and reliability.
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Inspection and Validation:
          </span>&nbsp;  Thorough inspections at every project stage, from material selection to final commissioning, to 
          guarantee performance and durability.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[10rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Inspection and Validation:
          </span> &nbsp;  Thorough inspections at every project stage, from material selection to final commissioning, to 
          guarantee performance and durability.
        </div>

       
        <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Specialized Applications</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         Our services cater to a wide range of industries and project requirements:
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
        Our services cater to a wide range of industries and project requirements:
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Oil and Gas:
          </span>&nbsp; Civil infrastructure and mechanical systems for upstream, midstream, and downstream operations, 
          including pipelines, refineries, and offshore platforms.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Oil and Gas:
          </span> &nbsp; Civil infrastructure and mechanical systems for upstream, midstream, and downstream operations, 
          including pipelines, refineries, and offshore platforms.
        </div>
        
         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Energy Sector:
          </span>&nbsp; Engineering solutions for power plants, renewable energy facilities, and energy storage systems.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Energy Sector:
          </span> &nbsp;  Engineering solutions for power plants, renewable energy facilities, and energy storage systems.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Industrial and Chemical:
          </span>&nbsp; Design and construction of facilities for chemical processing, manufacturing, and heavy industry.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Industrial and Chemical:
          </span> &nbsp; Design and construction of facilities for chemical processing, manufacturing, and heavy industry.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Custom Projects:
          </span>&nbsp; Bespoke engineering solutions for unique industrial or architectural challenges, delivering innovative 
          and practical designs.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Custom Projects:
          </span> &nbsp; Bespoke engineering solutions for unique industrial or architectural challenges, delivering innovative 
          and practical designs.
        </div>

         <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Maintenance and Support</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         We offer ongoing maintenance and emergency services to ensure operational continuity.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
         We offer ongoing maintenance and emergency services to ensure operational continuity.
        </div>

         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Preventive Maintenance:
          </span>&nbsp; Scheduled inspections and servicing of mechanical systems and infrastructure to extend service life.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Preventive Maintenance:
          </span> &nbsp; Scheduled inspections and servicing of mechanical systems and infrastructure to extend service life.
        </div>
        
         {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">24/7 Emergency Response:
          </span>&nbsp; Rapid-response teams for repairs, retrofits, and modifications, minimizing downtime in critical operations.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[14rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">24/7 Emergency Response:
          </span> &nbsp;  Rapid-response teams for repairs, retrofits, and modifications, minimizing downtime in critical operations.
        </div>



      <div className="font-semibold text-2xl mt-[2rem] uppercase md:mt-[1rem] text-white">
        Why Choose Phronesis Oil and Gas Limited?</div>
      
        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Certified Expertise:
          </span>&nbsp;  Adherence to ASME, API, AISC, and ISO standards, ensuring top-tier quality and safety.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[0.5rem] leading-[0.8rem] pr-[15rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Certified Expertise:
          </span> &nbsp;  Adherence to ASME, API, AISC, and ISO standards, ensuring top-tier quality and safety.
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Integrated Solutions:
          </span>&nbsp; Seamless coordination of civil and mechanical engineering disciplines for streamlined project delivery.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[15rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Integrated Solutions:
          </span> &nbsp; Seamless coordination of civil and mechanical engineering disciplines for streamlined project delivery.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Advanced Technology:
          </span>&nbsp; Utilization of 3D CAD, BIM, and laser scanning for precision design and execution.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 
            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[15rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Advanced Technology:
          </span> &nbsp;  Utilization of 3D CAD, BIM, and laser scanning for precision design and execution.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Experienced Team:
          </span>&nbsp;  Decades of experience in delivering complex projects for the oil and gas, energy, and industrial sectors.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[15rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Experienced Team:
          </span> &nbsp; Decades of experience in delivering complex projects for the oil and gas, energy, and industrial sectors.
        </div>
        
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Client-Centric Approach:
          </span>&nbsp;  Tailored solutions, competitive pricing, and 24/7 support to meet your unique project needs.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem] pr-[15rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Client-Centric Approach:
          </span> &nbsp;  Tailored solutions, competitive pricing, and 24/7 support to meet your unique project needs.
        </div>

        <div className="font-semibold text-2xl mt-[2rem] uppercase md:mt-[1rem] text-white">Contact Us</div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       Partner with Phronesis Oil and Gas Limited for innovative and reliable civil and mechanical engineering solutions. 
       Contact us today for a free consultation or to request a competitive quote tailored to your project requirements.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem] pr-[14rem]">
         Partner with Phronesis Oil and Gas Limited for innovative and reliable civil and mechanical engineering solutions. 
       Contact us today for a free consultation or to request a competitive quote tailored to your project requirements.
        </div>

          <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
        Phronesis Oil and Gas Limited – Engineering Excellence for a Sustainable Future.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem]">
         Phronesis Oil and Gas Limited – Engineering Excellence for a Sustainable Future.
        </div>
        

        </div>
      

                  </div>
                </section>
             
            </ul>

         
          </motion.div>
        </div>
      </section>
    );
   }
  
    Scope() {
        return (
          <div className=" bg-[#1D2723] servicePageDiv  ">
            <section className="relative bg-[#1D2723] lg:py-32 pt-32 pb-8 px-0">
              <div className="container2">
                <div className="ServicePage_area">
                  <div className="dash_home_products_swiper_slide_img_divb">
                    <img
                      src="/img/Civil and Mechanical-min.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab">
                    <div className="home_div_section1_area_div">
                      <div className="home_div_section1_area_div_area1">
                        <div className="home_div_section1_area_div_area1_txt1">
                          Phronesis
                        </div>
                        <motion.div
                          variants={fadeIn("Up")}
                          transition={transition()}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                          className="home_div_section1_area_div_area1_txt2b_abt"
                        >
                         Civil and Mechanical Engineering Services 
                        </motion.div>

                        <div className="home_div_section1_area_div_area1_button_div">
                          <div className="home_div_section1_area_div_area1_button_div_icon_div">
                            <ArrowForwardIcon className="home_div_section1_area_div_area1_button_div_icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {this.Getservices()}
          </div>
        );
  }
  
  render() {
    return (
      <div>
        {this.Scope()}
      </div>
    )
  }
}



export default App;