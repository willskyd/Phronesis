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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Bolt Tensioning Services
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Bolt Tensioning Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited provides specialized bolt tensioning services, delivering precise and reliable 
         solutions for critical applications in the oil and gas industry. Our services ensure secure and accurate fastening
         for equipment and infrastructure, meeting the stringent safety and performance standards required for both onshore
         and offshore operations in Nigeria and aligning with international best practices.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited provides specialized bolt tensioning services, delivering<br /> precise and reliable 
         solutions for critical applications in the oil and gas industry. Our services<br /> ensure secure and accurate fastening
         for equipment and infrastructure, meeting the stringent<br /> safety and performance standards required for both onshore
         and offshore operations in Nigeria <br />and aligning with international best practices.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our team of highly trained technicians utilizes advanced hydraulic bolt tensioning equipment and cutting-edge 
         technology to achieve consistent and uniform bolt load application. This ensures the integrity of flanged connections,
          pressure vessels, pipelines, and other critical components, minimizing the risk of leaks or mechanical failures. We 
          offer comprehensive bolt tensioning services, including installation, maintenance, and inspection, tailored to meet 
          the specific needs of each project.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Our team of highly trained technicians utilizes advanced hydraulic bolt tensioning<br /> equipment and cutting-edge 
         technology to achieve consistent and uniform bolt load<br /> application. This ensures the integrity of flanged connections,
          pressure vessels, pipelines,<br /> and other critical components, minimizing the risk of leaks or mechanical failures. We 
          offer <br />comprehensive bolt tensioning services, including installation, maintenance, and inspection, <br />tailored to meet 
          the specific needs of each project.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety and quality are paramount in our operations. All personnel are trained in accordance with the Nigerian
          Institute of Safety Professionals and other relevant industry standards, ensuring safe and efficient execution 
          of bolt tensioning tasks. Our equipment is meticulously maintained and regularly inspected to guarantee reliability
         in demanding environments, providing clients with confidence in the durability and performance of our services.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Safety and quality are paramount in our operations. All personnel are trained in accordance<br /> with the Nigerian
          Institute of Safety Professionals and other relevant industry standards, ensuring<br /> safe and efficient execution 
          of bolt tensioning tasks. Our equipment is meticulously maintained and <br />regularly inspected to guarantee reliability
         in demanding environments, providing clients with confidence<br /> in the durability and performance of our services.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited works closely with clients to deliver customized bolt tensioning solutions that 
         adhere to project timelines and budgets. With a proven track record of serving leading oil and gas companies, we
         are committed to providing high-quality, dependable services that enhance operational safety and efficiency, 
         solidifying our position as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited works closely with clients to deliver customized bolt tensioning<br /> solutions that 
         adhere to project timelines and budgets. With a proven track record of serving<br /> leading oil and gas companies, we
         are committed to providing high-quality, dependable services<br /> that enhance operational safety and efficiency, 
         solidifying our position as a trusted partner in the industry.

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
                      src="/img/Bolt Tensioning Services-min.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab ml-[13rem]">
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
                          Bolt Tensioning Services
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