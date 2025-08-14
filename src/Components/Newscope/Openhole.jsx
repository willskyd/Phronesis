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
            Open Hole, Cased Hole, and Slim Hole Services 
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">
           Open Hole, Cased Hole, and Slim Hole Services 
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
          Phronesis Oil and Gas Limited provides specialized open hole, cased hole, and slim hole services, delivering precise
          and reliable solutions to support drilling, completion, and production operations in the oil and gas industry. Our
          services are tailored to meet Nigeria’s regulatory requirements and international best practices, ensuring safety,
          efficiency, and optimal performance for both onshore and offshore projects.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Phronesis Oil and Gas Limited provides specialized open hole, cased hole, and slim hole services, <br /> delivering precise
          and reliable solutions to support drilling, completion, and production operations<br /> in the oil and gas industry. Our
          services are tailored to meet Nigeria’s regulatory requirements and<br /> international best practices, ensuring safety,
          efficiency, and optimal performance for both onshore<br /> and offshore projects.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
          Our team of experienced engineers and technicians utilizes advanced wireline and logging technologies to deliver
          comprehensive open hole, cased hole, and slim hole services. Open hole services include formation evaluation,
           wireline logging, and reservoir characterization to provide critical data for well planning and development. 
           Cased hole services encompass well integrity assessments, production logging, and perforation operations to 
           optimize well performance and longevity. Our slim hole capabilities enable cost-effective and environmentally 
           efficient drilling and logging in constrained or challenging environments, leveraging specialized equipment for
            precision and reliability.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
          Our team of experienced engineers and technicians utilizes advanced wireline and logging <br />technologies to deliver
          comprehensive open hole, cased hole, and slim hole services. Open hole<br /> services include formation evaluation,
           wireline logging, and reservoir characterization to provide<br /> critical data for well planning and development. 
           Cased hole services encompass well integrity <br />assessments, production logging, and perforation operations to 
           optimize well performance and <br />longevity. Our slim hole capabilities enable cost-effective and environmentally 
           efficient drilling and <br />logging in constrained or challenging environments, leveraging specialized equipment for
            precision and<br /> reliability.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety and quality are integral to our operations. All personnel are trained in accordance with the Nigerian 
         Institute of Safety Professionals and other relevant industry standards, ensuring safe and proficient execution 
         of complex tasks. Our state-of-the-art equipment is rigorously maintained and calibrated to deliver consistent 
         results in demanding conditions, while our environmentally conscious practices minimize ecological impact.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Safety and quality are integral to our operations. All personnel are trained in accordance with<br /> the Nigerian 
         Institute of Safety Professionals and other relevant industry standards, ensuring safe<br /> and proficient execution 
         of complex tasks. Our state-of-the-art equipment is rigorously maintained <br />and calibrated to deliver consistent 
         results in demanding conditions, while our environmentally conscious <br />practices minimize ecological impact.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to provide customized solutions that align with
         project specifications, timelines, and budgets. With a proven track record of serving leading oil and gas companies,
         we are committed to delivering innovative, high-quality services that enhance operational success and reinforce our
         position as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to provide customized solutions<br /> that align with
         project specifications, timelines, and budgets. With a proven track record of serving<br /> leading oil and gas companies,
         we are committed to delivering innovative, high-quality services that<br /> enhance operational success and reinforce our
         position as a trusted partner in the industry.
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
                      src="/img/Open Hole-min.webp"
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
                          Open Hole, Cased Hole, and Slim Hole Services 
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