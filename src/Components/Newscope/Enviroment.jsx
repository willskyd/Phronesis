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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Environmental Consultancy Services 
         </div>
       <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Environmental Consultancy Services 
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Phronesis Oil and Gas Limited provides expert environmental consultancy services, delivering tailored solutions to 
        support the oil and gas industry in achieving compliance, sustainability, and operational excellence. Our services
        are designed to meet Nigeria’s stringent environmental regulations and align with international best practices, 
        ensuring responsible and efficient project execution for both onshore and offshore operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
         Phronesis Oil and Gas Limited provides expert environmental consultancy services, delivering tailored solutions to 
        support the oil and gas industry in achieving compliance, sustainability, and operational excellence. Our services
        are designed to meet Nigeria’s stringent environmental regulations and align with international best practices, 
        ensuring responsible and efficient project execution for both onshore and offshore operations.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
          Our team of seasoned environmental consultants brings extensive expertise in environmental management, offering 
          comprehensive guidance on regulatory compliance, risk assessment, and sustainable practices. We provide services 
          such as environmental impact assessments (EIA), environmental audits, waste management planning, spill response 
          strategies, and regulatory permitting support. Our consultancy also includes advice on carbon footprint reduction, 
          pollution control, and biodiversity protection, helping clients navigate complex environmental challenges.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
          Our team of seasoned environmental consultants brings extensive expertise in environmental management, offering 
          comprehensive guidance on regulatory compliance, risk assessment, and sustainable practices. We provide services 
          such as environmental impact assessments (EIA), environmental audits, waste management planning, spill response 
          strategies, and regulatory permitting support. Our consultancy also includes advice on carbon footprint reduction, 
          pollution control, and biodiversity protection, helping clients navigate complex environmental challenges.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety and sustainability are at the heart of our consultancy approach. Our professionals are trained in accordance 
         with the Nigerian Institute of Safety Professionals and other relevant industry standards, ensuring that our 
         recommendations prioritize both environmental stewardship and operational safety. We leverage advanced tools and 
         methodologies to deliver accurate assessments and actionable solutions tailored to each client’s needs.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
         Safety and sustainability are at the heart of our consultancy approach. Our professionals are trained in accordance 
         with the Nigerian Institute of Safety Professionals and other relevant industry standards, ensuring that our 
         recommendations prioritize both environmental stewardship and operational safety. We leverage advanced tools and 
         methodologies to deliver accurate assessments and actionable solutions tailored to each client’s needs.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Phronesis Oil and Gas Limited collaborates closely with clients to develop customized environmental strategies that
        align with project goals, timelines, and budgets. With a proven track record of serving leading oil and gas companies, 
        we are committed to providing high-quality consultancy services that promote sustainable development and regulatory 
        compliance, solidifying our position as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
         Phronesis Oil and Gas Limited collaborates closely with clients to develop customized environmental strategies that
         align with project goals, timelines, and budgets. With a proven track record of serving leading oil and gas companies, 
         we are committed to providing high-quality consultancy services that promote sustainable development and regulatory 
         compliance, solidifying our position as a trusted partner in the industry.
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
                      src="/img/Environmental Consultancy Services-min.webp"
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
                          Environmental Consultancy Services 
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