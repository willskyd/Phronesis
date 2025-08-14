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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Oil and Gas Drilling Services 
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Oil and Gas Drilling Services 
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited provides comprehensive oil and gas drilling services, delivering safe, efficient, and 
         high-quality solutions to meet the demands of both onshore and offshore exploration and production projects. Our drilling
         operations adhere to Nigeria’s regulatory requirements and international industry standards, ensuring operational excellence
         and environmental responsibility.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited provides comprehensive oil and gas drilling services, <br /> delivering safe, efficient, and 
         high-quality solutions to meet the demands of both <br />onshore and offshore exploration and production projects. Our drilling
         operations<br /> adhere to Nigeria’s regulatory requirements and international industry standards,<br /> ensuring operational excellence
         and environmental responsibility.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our team of highly skilled drilling professionals, supported by state-of-the-art equipment and advanced technologies,
         brings extensive experience to every project. We specialize in a range of drilling activities, including exploration,
         development, and workover operations, tailored to optimize well performance and maximize resource recovery. From planning
         to execution, we prioritize precision, safety, and cost-effectiveness to meet our clients’ timelines and budgetary needs.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Our team of highly skilled drilling professionals, supported by state-of-the-art equipment <br /> and advanced technologies,
         brings extensive experience to every project. We specialize<br /> in a range of drilling activities, including exploration,
         development, and workover operations,<br /> tailored to optimize well performance and maximize resource recovery. From planning
         to execution, <br />we prioritize precision, safety, and cost-effectiveness to meet our clients’ timelines and budgetary needs.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited employs rigorous safety protocols, with all personnel trained in accordance with the 
         standards of the Nigerian Institute of Safety Professionals and other relevant industry bodies. Our fleet of modern 
         drilling rigs and auxiliary equipment is meticulously maintained to ensure reliability and efficiency in challenging
         operational environments. We also integrate environmentally conscious practices, including effective waste management
         and minimization strategies, to reduce the environmental footprint of our drilling operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited employs rigorous safety protocols, with all personnel trained <br /> in accordance with the 
         standards of the Nigerian Institute of Safety Professionals and other<br /> relevant industry bodies. Our fleet of modern 
         drilling rigs and auxiliary equipment is meticulously <br />maintained to ensure reliability and efficiency in challenging
         operational environments. We <br />also integrate environmentally conscious practices, including effective waste management<br />
         and minimization strategies, to reduce the environmental footprint of our drilling operations.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         With a proven track record of serving leading oil and gas companies, Phronesis Oil and Gas Limited is committed to 
         delivering innovative and reliable drilling solutions. Our client-focused approach and dedication to quality position
         us as a trusted partner in the oil and gas industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        With a proven track record of serving leading oil and gas companies, Phronesis Oil and Gas<br /> Limited is committed to 
         delivering innovative and reliable drilling solutions. Our client-focused <br />approach and dedication to quality position
         us as a trusted partner in the oil and gas industry.
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
                      src="/img/Oil and Gas Drilling Services-min.webp"
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
                          className="home_div_section1_area_div_area1_txt2b_abt md:ml-[8rem]"
                        >
                          Oil and Gas Drilling Services 
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