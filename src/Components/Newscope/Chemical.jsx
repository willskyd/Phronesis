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
            Chemical Cold, Explosive, and Field Maintenance Services
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">
           Chemical Cold, Explosive, and Field Maintenance <br /> Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
          Phronesis Oil and Gas Limited delivers specialized chemical cold, explosive, and field maintenance services,
          providing safe, efficient, and innovative solutions for complex operational challenges in the oil and gas 
          industry. Our services are tailored to meet the rigorous demands of both onshore and offshore projects, 
          ensuring compliance with Nigeria’s regulatory standards and international best practices.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Phronesis Oil and Gas Limited delivers specialized chemical cold, explosive, and field maintenance <br /> services,
          providing safe, efficient, and innovative solutions for complex operational challenges in the<br /> oil and gas 
          industry. Our services are tailored to meet the rigorous demands of both onshore and<br /> offshore projects, 
          ensuring compliance with Nigeria’s regulatory standards and international best practices.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Our team of highly trained professionals employs advanced techniques and state-of-the-art equipment to perform 
        chemical cold cutting, explosive operations, and comprehensive field maintenance. Chemical cold cutting services
        enable precise, spark-free cutting of pipelines, tanks, and other infrastructure, minimizing risks in hazardous
        environments. Our explosive services, conducted with stringent safety protocols, support controlled demolition
        and specialized applications, ensuring operational efficiency and safety. Additionally, our field maintenance
        services encompass inspection, repair, and upkeep of critical infrastructure, including pipelines, vessels, 
        and production facilities, to ensure optimal performance and longevity.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Our team of highly trained professionals employs advanced techniques and state-of-the-art<br /> equipment to perform 
        chemical cold cutting, explosive operations, and comprehensive field<br /> maintenance. Chemical cold cutting services
        enable precise, spark-free cutting of pipelines, tanks,<br /> and other infrastructure, minimizing risks in hazardous
        environments. Our explosive services, conducted<br /> with stringent safety protocols, support controlled demolition
        and specialized applications, ensuring<br /> operational efficiency and safety. Additionally, our field maintenance
        services encompass inspection,<br /> repair, and upkeep of critical infrastructure, including pipelines, vessels, 
        and production facilities, to ensure<br /> optimal performance and longevity.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety is at the core of our operations. All personnel undergo extensive training in line with the Nigerian 
         Institute of Safety Professionals and other relevant industry standards, equipping them to handle high-risk
         tasks with precision and care. Our equipment is meticulously maintained and regularly inspected to ensure 
         reliability in demanding conditions. We also integrate environmentally conscious practices to minimize the 
         ecological impact of our operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Safety is at the core of our operations. All personnel undergo extensive training in line with the<br /> Nigerian 
         Institute of Safety Professionals and other relevant industry standards, equipping them<br /> to handle high-risk
         tasks with precision and care. Our equipment is meticulously maintained and<br /> regularly inspected to ensure 
         reliability in demanding conditions. We also integrate environmentally<br /> conscious practices to minimize the 
         ecological impact of our operations.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Phronesis Oil and Gas Limited collaborates closely with clients to develop customized solutions that align with 
        project specifications, timelines, and budgets. With a proven track record of serving leading oil and gas companies,
        we are committed to delivering high-quality, safe, and reliable services, reinforcing our position as a trusted 
        partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to develop customized solutions<br /> that align with 
         project specifications, timelines, and budgets. With a proven track record of serving<br /> leading oil and gas companies,
         we are committed to delivering high-quality, safe, and reliable services, <br />reinforcing our position as a trusted 
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
                      src="/img/Chemical Cold-min.webp"
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
                         Chemical Cold, Explosive, and Field Maintenance Services
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