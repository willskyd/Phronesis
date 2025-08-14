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
             Piping Line Welding and Fabrication Services
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">
            Piping Line Welding and Fabrication Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited delivers premier piping line welding and fabrication services tailored to the needs
         of the oil and gas, energy, chemical, and industrial sectors. With a commitment to precision, safety, and compliance,
         we provide end-to-end solutions for high-quality piping systems, ensuring durability and efficiency for your projects.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Phronesis Oil and Gas Limited delivers premier piping line welding and fabrication services <br /> tailored to the needs
         of the oil and gas, energy, chemical, and industrial sectors. With a<br /> commitment to precision, safety, and compliance,
         we provide end-to-end solutions for high-<br />quality piping systems, ensuring durability and efficiency for your projects.
        </div>

        <div className="font-semibold text-2xl mt-[2rem] uppercase md:mt-[1rem] text-white">Our Services</div>

        <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp;  Custom Pipe Fabrication</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         We design and fabricate piping systems using materials such as carbon steel, stainless steel, and exotic alloys
         to meet diverse project specifications. Our advanced 2D/3D CAD technology ensures precise pipe spools and components,
         optimizing installation and minimizing downtime.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
         We design and fabricate piping systems using materials such as carbon steel, stainless steel,<br /> and exotic alloys
         to meet diverse project specifications. Our advanced 2D/3D CAD technology <br />ensures precise pipe spools and components,
         optimizing installation and minimizing downtime.
        </div>

         <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Expert Welding Solutions</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
        Our certified welders employ industry-leading techniques, including MIG, TIG, Stick, Flux-Core, and Submerged 
        Arc Welding (SAW), to deliver robust welds for high-pressure, high-temperature, and hazardous material piping. 
        We specialize in process piping compliant with ASME B31.3, API 570, and AWS standards.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
         Our certified welders employ industry-leading techniques, including MIG, TIG, Stick, Flux-Core,<br /> and Submerged 
        Arc Welding (SAW), to deliver robust welds for high-pressure, high-temperature,<br /> and hazardous material piping. 
        We specialize in process piping compliant with ASME B31.3, API 570,<br /> and AWS standards.
        </div>

        <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; On-Site and Shop Fabrication</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         We offer flexible solutions:
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
         We offer flexible solutions:
        </div>
        
        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Shop Fabrication:
          </span>&nbsp;Our state-of-the-art facility ensures controlled, high-quality production of pipe spools and modular skids.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Shop Fabrication:
          </span> &nbsp;  Our state-of-the-art facility ensures controlled, high-quality production of <br /> pipe spools and modular skids.
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">On-Site Welding:
          </span>&nbsp;  Our mobile welding teams provide 24/7 emergency repairs and installations, reducing operational disruptions.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">On-Site Welding:
          </span> &nbsp;   Our mobile welding teams provide 24/7 emergency repairs and installations, <br /> reducing operational disruptions.
        </div>


         <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Quality Assurance and Testing</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
        We prioritize weld integrity and system reliability through:
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
        We prioritize weld integrity and system reliability through:
        </div>
        
        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Non-Destructive Testing (NDT):
          </span>&nbsp; Utilizing X-radiography, Ultrasonic Testing, Magnetic Particle Inspection (MPI), and Dye Penetrant Inspection (DPI).
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Non-Destructive Testing (NDT):
          </span> &nbsp; Utilizing X-radiography, Ultrasonic Testing, Magnetic Particle <br /> Inspection (MPI), and Dye Penetrant Inspection (DPI).
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Certifications:
          </span>&nbsp;  Adherence to BS EN ISO 15614, BS EN ISO 9606, and ASME standards, ensuring compliance and safety.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Certifications:
          </span> &nbsp;  Adherence to BS EN ISO 15614, BS EN ISO 9606, and ASME standards, ensuring <br /> compliance and safety.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Quality Control:
          </span>&nbsp; Dedicated inspectors oversee every project phase, guaranteeing precision and durability.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Quality Control:
          </span> &nbsp;  Dedicated inspectors oversee every project phase, guaranteeing precision and <br /> durability.
        </div>


        <div className="font-semibold text-xl mt-[2rem] uppercase md:mt-[1rem] text-white">
          <span className="font-semibold text-6xl -mt-7 absolute ">.</span>&nbsp; &nbsp; &nbsp; Specialized Applications</div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
         Our services cater to:
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
         Our services cater to:
        </div>
        
        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Oil and Gas:
          </span>&nbsp; Fabrication of pipelines, modular skids, and process piping for upstream and downstream operations.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Oil and Gas:
          </span> &nbsp; Fabrication of pipelines, modular skids, and process piping for upstream and<br /> downstream operations.
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Energy and Chemical:
          </span>&nbsp;  Custom piping for power plants, refineries, and chemical processing facilities.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Energy and Chemical:
          </span> &nbsp;  Custom piping for power plants, refineries, and chemical processing facilities.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Hygienic Piping:
          </span>&nbsp; Purged, fully penetrated welds for food, dairy, and pharmaceutical industries.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Hygienic Piping:
          </span> &nbsp;  Purged, fully penetrated welds for food, dairy, and pharmaceutical industries.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Custom Projects:
          </span>&nbsp;  Bespoke metalwork for unique industrial or architectural designs.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Custom Projects:
          </span> &nbsp;   Bespoke metalwork for unique industrial or architectural designs.
        </div>


      <div className="font-semibold text-2xl mt-[2rem] uppercase md:mt-[1rem] text-white">
        Why Choose Phronesis Oil and Gas Limited?</div>
      
        {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Certified Excellence:
          </span>&nbsp; Compliant with ASME, API, and AWS standards, ensuring top-tier quality.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[0.5rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Certified Excellence:
          </span> &nbsp; Compliant with ASME, API, and AWS standards, ensuring top-tier quality.
        </div>

        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Experienced Team:
          </span>&nbsp; Decades of expertise in complex piping systems for critical applications.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Experienced Team:
          </span> &nbsp; Decades of expertise in complex piping systems for critical applications.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Advanced Technology:
          </span>&nbsp;  Utilization of 3D CAD and laser spooling for unmatched precision.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 
            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Advanced Technology:
          </span> &nbsp;  Utilization of 3D CAD and laser spooling for unmatched precision.
        </div>

         <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">24/7 Support:
          </span>&nbsp;  Rapid-response mobile welding services for urgent repairs and maintenance.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">24/7 Support:
          </span> &nbsp; Rapid-response mobile welding services for urgent repairs and maintenance.

        </div>
        
        <div className="ServicePage2_area_cont md:hidden -mt-[1rem] leading-[0.9rem]">
        <span className="font-semibold text-5xl ">.</span>&nbsp; <span className=" font-semibold text-lg">Tailored Solutions:
          </span>&nbsp;   Customized fabrication to meet your project’s unique requirements.
            {/* <span className="pl-[1.3rem]"></span> */}
        </div> 

            {/* large screen */}
         <div className="ServicePage2_area_cont hidden md:block -mt-[3rem] leading-[0.8rem]">
        <span className="font-semibold text-5xl ">.</span> &nbsp; <span className=" font-semibold text-lg">Tailored Solutions:
          </span> &nbsp;   Customized fabrication to meet your project’s unique requirements.
        </div>

        <div className="font-semibold text-2xl mt-[2rem] uppercase md:mt-[1rem] text-white">Contact Us</div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
        For reliable, high-quality piping solutions, trust Phronesis Oil and Gas Limited. Contact us today for a free 
        consultation or to request a competitive quote tailored to your project needs.
        </div>

        <div className="ServicePage2_area_cont hidden md:block mt-[0.5rem] leading-[1.5rem]">
          For reliable, high-quality piping solutions, trust Phronesis Oil and Gas Limited. Contact us <br /> today for a free 
        consultation or to request a competitive quote tailored to your project needs.
        </div>

          <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
        Phronesis Oil and Gas Limited – Powering Your Projects with Precision and Expertise.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem]">
         Phronesis Oil and Gas Limited – Powering Your Projects with Precision and Expertise.
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
                      src="/img/Piping Line Welding-min.webp"
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
                         Piping Line Welding and Fabrication Services
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