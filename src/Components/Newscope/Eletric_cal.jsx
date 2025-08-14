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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Electrical Logging and Calibration Services
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Electrical Logging and Calibration Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited offers specialized electrical logging and calibration services, providing accurate 
         and reliable solutions to support exploration, drilling, and production operations in the oil and gas industry.
          Our services are designed to meet Nigeria’s regulatory standards and align with international best practices, 
          ensuring precision and operational efficiency for both onshore and offshore projects.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Phronesis Oil and Gas Limited offers specialized electrical logging and calibration services, <br /> providing accurate 
         and reliable solutions to support exploration, drilling, and production<br /> operations in the oil and gas industry.
          Our services are designed to meet Nigeria’s regulatory<br /> standards and align with international best practices, 
          ensuring precision and operational efficiency<br /> for both onshore and offshore projects.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our team of skilled engineers and technicians utilizes advanced electrical logging tools and state-of-the-art
          calibration equipment to deliver high-quality data and maintain the integrity of critical systems. Our electrical
           logging services include wireline logging, logging-while-drilling (LWD), and formation evaluation, providing 
           essential data for reservoir characterization and well optimization. Our calibration services ensure that 
           instrumentation and control systems operate within specified parameters, enhancing safety and performance 
           across operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Our team of skilled engineers and technicians utilizes advanced electrical logging tools and<br /> state-of-the-art
          calibration equipment to deliver high-quality data and maintain the integrity<br /> of critical systems. Our electrical
           logging services include wireline logging, logging-while-drilling<br /> (LWD), and formation evaluation, providing 
           essential data for reservoir characterization and<br /> well optimization. Our calibration services ensure that 
           instrumentation and control systems<br /> operate within specified parameters, enhancing safety and performance 
           across operations.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety and accuracy are central to our approach. All personnel are trained in accordance with the Nigerian Institute
          of Safety Professionals and other relevant industry standards, ensuring safe and precise execution of logging and 
          calibration tasks. Our equipment is meticulously maintained and regularly tested to guarantee reliability in demanding
           environments. We also employ rigorous quality control measures to deliver consistent and dependable results.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
       Safety and accuracy are central to our approach. All personnel are trained in accordance with the<br /> Nigerian Institute
          of Safety Professionals and other relevant industry standards, ensuring safe and<br /> precise execution of logging and 
          calibration tasks. Our equipment is meticulously maintained and<br /> regularly tested to guarantee reliability in demanding
           environments. We also employ rigorous quality<br /> control measures to deliver consistent and dependable results.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited works closely with clients to provide customized electrical logging and calibration 
       solutions that meet project-specific requirements, timelines, and budgets. With a proven track record of serving 
       leading oil and gas companies, we are committed to delivering high-quality, innovative services that enhance 
       operational success and reinforce our position as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
       Phronesis Oil and Gas Limited works closely with clients to provide customized electrical logging and<br /> calibration 
       solutions that meet project-specific requirements, timelines, and budgets. With a proven <br />track record of serving 
       leading oil and gas companies, we are committed to delivering high-quality, <br />innovative services that enhance 
       operational success and reinforce our position as a trusted partner in<br /> the industry.
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
                      src="/img/Electrical Logging and Calibration-min.webp"
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
                          Electrical Logging and Calibration Services
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