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
       <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Logistics Services
         </div>
     <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Logistics Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited provides comprehensive logistics services tailored to the unique demands of the oil
         and gas industry, ensuring seamless, safe, and efficient transportation and supply chain solutions for both onshore 
         and offshore operations. Our logistics operations are designed to meet Nigeria’s regulatory requirements and adhere 
         to international best practices, delivering reliability and operational excellence to our clients.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited provides comprehensive logistics services tailored to the <br /> unique demands of the oil
         and gas industry, ensuring seamless, safe, and efficient<br /> transportation and supply chain solutions for both onshore 
         and offshore operations. Our <br />logistics operations are designed to meet Nigeria’s regulatory requirements and adhere <br />
         to international best practices, delivering reliability and operational excellence to our clients.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our logistics team, composed of experienced professionals, manages the end-to-end transportation of equipment,
         materials, and personnel, utilizing a fleet of well-maintained vehicles and specialized transport equipment. 
         We offer services including material procurement and delivery, equipment transportation, personnel logistics, 
         and supply chain coordination, all executed with precision to meet project timelines and budgetary constraints.
         Our capabilities extend to handling hazardous and non-hazardous materials, ensuring compliance with environmental 
         and safety regulations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Our logistics team, composed of experienced professionals, manages the end-to-end<br /> transportation of equipment,
         materials, and personnel, utilizing a fleet of well-maintained<br /> vehicles and specialized transport equipment. 
         We offer services including material procurement<br /> and delivery, equipment transportation, personnel logistics, 
         and supply chain coordination, all<br /> executed with precision to meet project timelines and budgetary constraints.
         Our capabilities extend<br /> to handling hazardous and non-hazardous materials, ensuring compliance with environmental 
         and safety<br /> regulations.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety and efficiency are at the forefront of our logistics operations. All personnel are trained in accordance with
         the standards of the Nigerian Institute of Safety Professionals and other relevant industry bodies, ensuring safe 
         handling and transportation processes. Our fleet is rigorously inspected and maintained to guarantee reliability in 
         challenging operational environments. Additionally, we employ advanced tracking and coordination systems to provide 
         real-time updates, enhancing transparency and client confidence.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Safety and efficiency are at the forefront of our logistics operations. All personnel are trained<br /> in accordance with
         the standards of the Nigerian Institute of Safety Professionals and other<br /> relevant industry bodies, ensuring safe 
         handling and transportation processes. Our fleet is <br />rigorously inspected and maintained to guarantee reliability in 
         challenging operational environments.<br /> Additionally, we employ advanced tracking and coordination systems to provide 
         real-time updates,<br /> enhancing transparency and client confidence.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
          Phronesis Oil and Gas Limited collaborates closely with clients to develop customized logistics solutions that optimize
          operational efficiency and support project success. With a proven track record of serving leading oil and gas companies,
          we are committed to delivering dependable, high-quality logistics services, solidifying our reputation as a trusted 
          partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Phronesis Oil and Gas Limited collaborates closely with clients to develop customized logistics<br /> solutions that optimize
          operational efficiency and support project success. With a proven track<br /> record of serving leading oil and gas companies,
          we are committed to delivering dependable, <br />high-quality logistics services, solidifying our reputation as a trusted 
          partner in the industry.
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
                      src="/img/Logistics Services-min.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab ml-[18rem]">
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
                         Logistics Services
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