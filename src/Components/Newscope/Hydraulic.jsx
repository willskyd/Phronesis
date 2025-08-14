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
            Hydraulic, Stimulation, Coiled Tubing, and Nitrogen Services
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">
           Hydraulic, Stimulation, Coiled Tubing, <br /> and Nitrogen Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Phronesis Oil and Gas Limited offers specialized hydraulic, stimulation, coiled tubing, and nitrogen services, 
        delivering innovative and efficient solutions to enhance well performance and optimize production in the oil 
        and gas industry. Our services are designed to meet the highest standards of safety, quality, and regulatory 
        compliance in Nigeria and align with international best practices.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
       Phronesis Oil and Gas Limited offers specialized hydraulic, stimulation, coiled tubing,<br /> and nitrogen services, 
        delivering innovative and efficient solutions to enhance well <br />performance and optimize production in the oil 
        and gas industry. Our services are<br /> designed to meet the highest standards of safety, quality, and regulatory 
        compliance<br /> in Nigeria and align with international best practices.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our team of experienced engineers and technicians utilizes state-of-the-art equipment and advanced technologies
         to provide comprehensive well intervention and stimulation services. These include hydraulic fracturing, acidizing,
         coiled tubing operations, and nitrogen lifting, tailored to improve reservoir productivity and address complex
         operational challenges. Whether for onshore or offshore projects, we ensure precise execution and minimal environmental
         impact.

        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Our team of experienced engineers and technicians utilizes state-of-the-art equipment<br /> and advanced technologies
         to provide comprehensive well intervention and stimulation<br /> services. These include hydraulic fracturing, acidizing,
         coiled tubing operations, and nitrogen<br /> lifting, tailored to improve reservoir productivity and address complex
         operational challenges. <br />Whether for onshore or offshore projects, we ensure precise execution and minimal environmental
         <br />impact.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited’s coiled tubing services enable efficient well cleanouts, milling, drilling, and other
          interventions, supported by a fleet of modern, well-maintained equipment operated by highly trained personnel. Our
           nitrogen services facilitate safe and effective well kickoff, purging, and pressure testing, ensuring operational 
           reliability. All personnel are trained in accordance with the Nigerian Institute of Safety Professionals and other 
           relevant industry standards, guaranteeing safe and professional service delivery.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Phronesis Oil and Gas Limited’s coiled tubing services enable efficient well cleanouts,<br /> milling, drilling, and other
          interventions, supported by a fleet of modern, well-maintained<br /> equipment operated by highly trained personnel. Our
           nitrogen services facilitate safe and<br /> effective well kickoff, purging, and pressure testing, ensuring operational 
           reliability. All personnel<br /> are trained in accordance with the Nigerian Institute of Safety Professionals and other 
           relevant industry <br />standards, guaranteeing safe and professional service delivery.

        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         With a commitment to operational excellence and client satisfaction, Phronesis Oil and Gas Limited collaborates
         closely with clients to develop customized solutions that meet project timelines and budgets. Our proven expertise
         and dedication to quality make us a trusted partner for hydraulic, stimulation, coiled tubing, and nitrogen services
         in the oil and gas sector.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         With a commitment to operational excellence and client satisfaction, Phronesis Oil and<br /> Gas Limited collaborates
         closely with clients to develop customized solutions that meet<br /> project timelines and budgets. Our proven expertise
         and dedication to quality make us a <br />trusted partner for hydraulic, stimulation, coiled tubing, and nitrogen services
         in the oil and gas sector.
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
                      src="/img/Hydraulic, Stimulation,-min.webp"
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
                          Hydraulic, Stimulation, Coiled Tubing, and Nitrogen Services
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