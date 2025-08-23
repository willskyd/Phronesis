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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Location Preparations Services 
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Location Preparations Services 
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Phronesis Oil and Gas Limited provides comprehensive location preparation services, delivering tailored solutions to
        ensure safe, efficient, and compliant site readiness for oil and gas operations. Our services are designed to meet
        Nigeria’s regulatory requirements and adhere to international best practices, supporting both onshore and offshore 
        projects with precision and professionalism.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
        Phronesis Oil and Gas Limited provides comprehensive location preparation services, delivering tailored solutions to
        ensure safe, efficient, and compliant site readiness for oil and gas operations. Our services are designed to meet
        Nigeria’s regulatory requirements and adhere to international best practices, supporting both onshore and offshore 
        projects with precision and professionalism.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our experienced team specializes in preparing drilling and production sites, offering services such as site surveying, 
         clearing, grading, and infrastructure development. We ensure optimal site conditions through the construction of access 
         roads, drilling pads, and support facilities, as well as the implementation of erosion control and environmental 
         protection measures. Our meticulous planning and execution minimize operational delays and ensure seamless project startups.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
          Our experienced team specializes in preparing drilling and production sites, offering services such as site surveying, 
         clearing, grading, and infrastructure development. We ensure optimal site conditions through the construction of access 
         roads, drilling pads, and support facilities, as well as the implementation of erosion control and environmental 
         protection measures. Our meticulous planning and execution minimize operational delays and ensure seamless project startups.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety and environmental responsibility are central to our approach. All personnel are trained in accordance with the 
         Nigerian Institute of Safety Professionals and other relevant industry standards, ensuring safe and proficient site 
         preparation activities. We utilize advanced equipment and techniques, rigorously maintained to guarantee reliability
         in challenging environments, while integrating sustainable practices to minimize ecological impact.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
         Safety and environmental responsibility are central to our approach. All personnel are trained in accordance with the 
         Nigerian Institute of Safety Professionals and other relevant industry standards, ensuring safe and proficient site 
         preparation activities. We utilize advanced equipment and techniques, rigorously maintained to guarantee reliability
         in challenging environments, while integrating sustainable practices to minimize ecological impact.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
          Phronesis Oil and Gas Limited collaborates closely with clients to deliver customized location preparation solutions
          that align with project specifications, timelines, and budgets. With a proven track record of serving leading oil 
          and gas companies, we are committed to providing high-quality, dependable services that lay a solid foundation for 
          successful operations, reinforcing our position as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
          Phronesis Oil and Gas Limited collaborates closely with clients to deliver customized location preparation solutions
          that align with project specifications, timelines, and budgets. With a proven track record of serving leading oil 
          and gas companies, we are committed to providing high-quality, dependable services that lay a solid foundation for 
          successful operations, reinforcing our position as a trusted partner in the industry.
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
                      src="/img/Location Preparations Services-min.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab md:ml-[6rem]">
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
                          Location Preparations Services 
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