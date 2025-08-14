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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Wellhead Installation & Maintenance Service
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">Wellhead Installation
             & Maintenance Service
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited specializes in the installation and maintenance of wellhead systems, delivering reliable 
         and efficient solutions to support oil and gas production operations. Our comprehensive wellhead services are designed
         to ensure optimal performance, safety, and compliance with Nigeria’s regulatory standards and international best practices
         in the oil and gas industry.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Phronesis Oil and Gas Limited specializes in the installation and maintenance of wellhead <br />systems, delivering reliable 
         and efficient solutions to support oil and gas production operations.<br /> Our comprehensive wellhead services are designed
         to ensure optimal performance, safety, and<br /> compliance with Nigeria’s regulatory standards and international best practices
         in the oil and gas industry.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our team of highly skilled engineers and technicians brings extensive experience in the installation, testing, and
         maintenance of wellhead equipment. Utilizing advanced tools and cutting-edge technology, we provide tailored solutions
         that meet the unique needs of each project, whether onshore or offshore. Our services include wellhead installation,
         routine maintenance, inspection, repair, and upgrades, ensuring operational efficiency and minimizing downtime for 
         our clients
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
         Our team of highly skilled engineers and technicians brings extensive experience in the <br />installation, testing, and
         maintenance of wellhead equipment. Utilizing advanced tools and <br />cutting-edge technology, we provide tailored solutions
         that meet the unique needs of each<br /> project, whether onshore or offshore. Our services include wellhead installation,
         routine maintenance,<br /> inspection, repair, and upgrades, ensuring operational efficiency and minimizing downtime for 
         our clients
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Phronesis Oil and Gas Limited is committed to safety and environmental stewardship in all wellhead operations. Our
         personnel undergo rigorous training in line with industry standards, including those set by the Nigerian Institute
         of Safety Professionals, to ensure safe and precise execution of projects. We also prioritize meticulous planning 
         and coordination to deliver projects on time and within budget, allowing our clients to focus on their core operations.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        Phronesis Oil and Gas Limited is committed to safety and environmental stewardship in all<br /> wellhead operations. Our
         personnel undergo rigorous training in line with industry standards,<br /> including those set by the Nigerian Institute
         of Safety Professionals, to ensure safe and precise <br />execution of projects. We also prioritize meticulous planning 
         and coordination to deliver projects<br /> on time and within budget, allowing our clients to focus on their core operations.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         With a proven track record of serving leading oil and gas companies, Phronesis Oil and Gas Limited is your trusted
         partner for wellhead installation and maintenance services, delivering excellence and reliability in every project.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] ">
        With a proven track record of serving leading oil and gas companies, Phronesis Oil and Gas Limited <br />is your trusted
         partner for wellhead installation and maintenance services, delivering excellence and<br /> reliability in every project.
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
                      src="/img/Wellhead Installation-min.webp"
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
                          Wellhead Installation & Maintenance Service
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