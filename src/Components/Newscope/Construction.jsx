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
           <div className="font-bold text-2xl md:text-3xl uppercase md:hidden text-white ">Construction Services and Civil Works
         </div>
          <div className="font-bold text-2xl md:text-3xl md:-mt-[5rem] uppercase hidden md:block text-white ">
            Construction Services and Civil Works
         </div>
             {/* small screen */}
        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
        Phronesis Oil & Gas Tek Limited is committed to meeting the increasing demand for responsive, cost-effective, and 
        quality construction management services for complex projects, including resolution of construction disputes. We 
        provide comprehensive architectural and construction services to clients who seek not only design excellence but 
        also value the insight, experience, and knowledge that comes from working with an experienced contractor. Our 
        approach combines the benefits of superior design quality with exceptional design value across all our construction 
        and civil works projects.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
        Phronesis Oil & Gas Tek Limited is committed to meeting the increasing demand for responsive, cost-effective, and 
        quality construction management services for complex projects, including resolution of construction disputes. We 
        provide comprehensive architectural and construction services to clients who seek not only design excellence but 
        also value the insight, experience, and knowledge that comes from working with an experienced contractor. Our 
        approach combines the benefits of superior design quality with exceptional design value across all our construction 
        and civil works projects.
        </div>

          {/* <div className="font-bold text-xl md:text-3xl uppercase md:hidden text-white ">Service Philosophy</div> */}
          <div className="font-bold text-xl md:text-2xl md:mt-[1rem] uppercase  text-white ">Service Philosophy</div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         At Phronesis Oil & Gas Tek Limited, we integrate good design principles with practical construction value, 
         ensuring that every project delivers optimal functionality, durability, and cost-effectiveness. Our experienced 
         team brings deep industry knowledge to complex construction challenges while maintaining the highest standards 
         of project execution and client service.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
           At Phronesis Oil & Gas Tek Limited, we integrate good design principles with practical construction value, 
         ensuring that every project delivers optimal functionality, durability, and cost-effectiveness. Our experienced 
         team brings deep industry knowledge to complex construction challenges while maintaining the highest standards 
         of project execution and client service.
        </div>

        <div className="font-bold text-xl md:text-2xl md:mt-[1rem] uppercase  text-white ">Construction and Civil Works Services</div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our comprehensive construction capabilities encompass a full range of services designed to support infrastructure 
         development and maintenance across various sectors:
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
         Our comprehensive construction capabilities encompass a full range of services designed to support infrastructure 
         development and maintenance across various sectors: 
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Building Construction -</span> Complete building construction services from 
       foundation to completion, including commercial, industrial, and residential structures designed to meet specific client
        requirements and regulatory standards.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1.5rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Building Construction -</span> Complete building construction services from 
       foundation to completion, including commercial, industrial, and residential structures designed to meet specific client
        requirements and regulatory standards.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Road Rehabilitation and Construction  -</span> Comprehensive road 
        infrastructure services including new road construction, rehabilitation of existing roadways, surface treatments, 
        and pavement management solutions.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Road Rehabilitation and Construction  -</span>  Comprehensive road 
        infrastructure services including new road construction, rehabilitation of existing roadways, surface treatments, 
        and pavement management solutions.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Culvert and Drainage Systems -</span> Design and construction of drainage 
       infrastructure including culverts, storm water management systems, and flood control structures to ensure proper 
       water flow and environmental protection.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Culvert and Drainage Systems -</span> Design and construction of drainage 
       infrastructure including culverts, storm water management systems, and flood control structures to ensure proper 
       water flow and environmental protection.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Erosion Control -</span> Specialized erosion prevention and mitigation 
        services including slope stabilization, retaining walls, and environmental protection measures to preserve soil 
        integrity and prevent environmental degradation.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Erosion Control -</span> Specialized erosion prevention and mitigation 
        services including slope stabilization, retaining walls, and environmental protection measures to preserve soil 
        integrity and prevent environmental degradation.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Project Schedule Development and Monitoring -</span> Comprehensive project 
        planning services including timeline development, milestone tracking, and progress monitoring to ensure timely project 
        completion within budget parameters.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Project Schedule Development and Monitoring -</span> Comprehensive project 
        planning services including timeline development, milestone tracking, and progress monitoring to ensure timely project 
        completion within budget parameters.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Contract Document Development -</span> Professional preparation of construction 
        contracts, specifications, and project documentation to ensure clear project parameters and legal compliance.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Contract Document Development -</span> Professional preparation of construction 
        contracts, specifications, and project documentation to ensure clear project parameters and legal compliance.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Contract Bidding, Negotiation and Award -</span> Complete bid management 
       services including contractor selection, negotiation processes, and contract award administration to secure optimal 
       project partnerships.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Contract Bidding, Negotiation and Award  -</span> Complete bid management 
       services including contractor selection, negotiation processes, and contract award administration to secure optimal 
       project partnerships.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Contract Administration -</span> Ongoing contract management including 
       compliance monitoring, change order management, and dispute resolution to ensure smooth project execution.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Contract Administration -</span> Ongoing contract management including 
       compliance monitoring, change order management, and dispute resolution to ensure smooth project execution.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Program Management Services -</span> Comprehensive oversight of multi-phase 
       construction programs including coordination of multiple contractors, timeline management, and quality assurance across 
       complex project portfolios.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Program Management Services -</span>  Comprehensive oversight of multi-phase 
       construction programs including coordination of multiple contractors, timeline management, and quality assurance across 
       complex project portfolios.
        </div>

         <div className="ServicePage2_area_cont md:hidden mt-[0.5rem] ">
       <span className=" font-semibold text-lg">Dredging Support Services -</span> Specialized marine construction support 
       including dredging operations, waterway maintenance, and marine infrastructure development to support maritime and 
       offshore operations.
        </div>

        <div className="ServicePage2_area_cont hidden md:block -mt-[1rem] leading-[1.5rem] pr-[18rem]">
        <span className=" font-semibold text-lg">Dredging Support Services -</span>Specialized marine construction support 
       including dredging operations, waterway maintenance, and marine infrastructure development to support maritime and 
       offshore operations.
        </div>

        <div className="ServicePage2_area_cont md:hidden mt-[1rem] ">
         Our construction and civil works division combines technical expertise with proven project management capabilities 
         to deliver successful outcomes for infrastructure projects of varying complexity and scale.
        </div>
         {/* large screen */}
        <div className="ServicePage2_area_cont hidden md:block mt-[1rem] leading-[1.5rem] pr-[18rem]">
           Our construction and civil works division combines technical expertise with proven project management capabilities 
         to deliver successful outcomes for infrastructure projects of varying complexity and scale.
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
                      src="/img/Construction Services-min.webp"
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
                          Construction Services and Civil Works
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