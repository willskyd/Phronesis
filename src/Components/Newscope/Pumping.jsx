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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Pumping Services
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Pumping Services
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited provides specialized pumping services tailored to the needs of the oil and gas 
         industry, delivering efficient, safe, and reliable solutions for both onshore and offshore operations. Our 
         services are designed to meet stringent regulatory requirements in Nigeria while adhering to international best
          practices, ensuring optimal performance and environmental responsibility.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Phronesis Oil and Gas Limited provides specialized pumping services tailored to the needs <br /> of the oil and gas 
         industry, delivering efficient, safe, and reliable solutions for both onshore<br /> and offshore operations. Our 
         services are designed to meet stringent regulatory requirements<br /> in Nigeria while adhering to international best
          practices, ensuring optimal performance and environmental<br /> responsibility.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our team of experienced professionals, supported by a fleet of advanced pumping equipment, delivers high-pressure
          pumping solutions for a variety of applications, including well stimulation, cementing, pressure testing, and 
          fluid transfer. We leverage cutting-edge technology and meticulous operational planning to execute projects with 
          precision, minimizing downtime and maximizing efficiency for our clients.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Our team of experienced professionals, supported by a fleet of advanced pumping<br /> equipment, delivers high-pressure
          pumping solutions for a variety of applications, including<br /> well stimulation, cementing, pressure testing, and 
          fluid transfer. We leverage cutting-edge<br /> technology and meticulous operational planning to execute projects with 
          precision, minimizing<br /> downtime and maximizing efficiency for our clients.
        </div>


         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Safety is at the core of our operations. All personnel undergo comprehensive training in line with the standards of 
         the Nigerian Institute of Safety Professionals and other relevant industry bodies, ensuring safe and proficient service
          delivery. Our well-maintained equipment is rigorously inspected to guarantee reliability in demanding operational 
          environments, providing our clients with confidence in the quality and consistency of our services.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Safety is at the core of our operations. All personnel undergo comprehensive training<br /> in line with the standards of 
         the Nigerian Institute of Safety Professionals and other relevant<br /> industry bodies, ensuring safe and proficient service
          delivery. Our well-maintained equipment<br /> is rigorously inspected to guarantee reliability in demanding operational 
          environments, providing<br /> our clients with confidence in the quality and consistency of our services.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to develop customized pumping solutions that align
          with project specifications, timelines, and budgets. With a proven track record of serving leading oil and gas 
          companies, we are committed to delivering innovative and dependable pumping services, solidifying our reputation 
          as a trusted partner in the industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Phronesis Oil and Gas Limited collaborates closely with clients to develop customized<br /> pumping solutions that align
          with project specifications, timelines, and budgets. With a <br />proven track record of serving leading oil and gas 
          companies, we are committed to delivering<br /> innovative and dependable pumping services, solidifying our reputation 
          as a trusted partner in the industry.
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
                      src="/img/Pumping Services-min.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab ml-[20rem]">
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
                          Pumping Services
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