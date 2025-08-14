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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Casing Cutting Services 
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Casing Cutting Services 
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited provides specialized casing cutting services, delivering precise and efficient solutions
         for well intervention, decommissioning, and abandonment operations in the oil and gas industry. Our services are 
         designed to meet Nigeria’s stringent regulatory standards and align with international best practices, ensuring safety
         and operational excellence for both onshore and offshore projects.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited provides specialized casing cutting services, <br /> delivering precise and efficient solutions
         for well intervention, decommissioning,<br /> and abandonment operations in the oil and gas industry. Our services are 
         designed<br /> to meet Nigeria’s stringent regulatory standards and align with international best <br />practices, ensuring safety
         and operational excellence for both onshore and offshore projects.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
           Our team of highly skilled technicians employs advanced casing cutting technologies, including mechanical,
           abrasive, and chemical cutting methods, to achieve accurate and clean cuts on casing strings of various sizes
           and materials. These services support a range of applications, such as well abandonment, sidetracking, and 
           section milling, tailored to meet the specific requirements of each project. We prioritize precision to minimize
           operational risks and ensure seamless integration with subsequent well operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
           Our team of highly skilled technicians employs advanced casing cutting technologies,<br /> including mechanical,
           abrasive, and chemical cutting methods, to achieve accurate<br /> and clean cuts on casing strings of various sizes
           and materials. These services support<br /> a range of applications, such as well abandonment, sidetracking, and 
           section milling,<br /> tailored to meet the specific requirements of each project. We prioritize precision to<br /> minimize
           operational risks and ensure seamless integration with subsequent well operations.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety is paramount in our casing cutting operations. All personnel are trained in accordance with the Nigerian
         Institute of Safety Professionals and other relevant industry standards, ensuring safe and proficient execution
         in high-risk environments. Our state-of-the-art equipment is meticulously maintained and regularly inspected to
         guarantee reliability and performance under demanding conditions. Additionally, we incorporate environmentally 
         conscious practices to reduce ecological impact during cutting operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Safety is paramount in our casing cutting operations. All personnel are trained in<br /> accordance with the Nigerian
         Institute of Safety Professionals and other relevant<br /> industry standards, ensuring safe and proficient execution
         in high-risk environments.<br /> Our state-of-the-art equipment is meticulously maintained and regularly inspected to<br />
         guarantee reliability and performance under demanding conditions. Additionally, we <br />incorporate environmentally 
         conscious practices to reduce ecological impact during cutting<br /> operations.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to develop customized casing cutting solutions
         that align with project timelines, budgets, and technical specifications. With a proven track record of serving
         leading oil and gas companies, we are committed to delivering high-quality, reliable services that enhance operational
         efficiency and safety, reinforcing our position as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to develop customized<br /> casing cutting solutions
         that align with project timelines, budgets, and technical specifications.<br /> With a proven track record of serving
         leading oil and gas companies, we are committed to <br />delivering high-quality, reliable services that enhance operational
         efficiency and safety, reinforcing <br />our position as a trusted partner in the industry.
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
                      src="/img/Casing Cutting-min.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab md:ml-[14rem]">
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
                         Casing Cutting Services 
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