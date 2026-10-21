import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { transition } from "../../../utils/transition";
import { fadeIn } from "../../../utils/variants";
import Scopeslide from "../../Scopeslide";
import Animatedimage from "../ServicesPages/Animated";
class App extends React.Component { 
 
  #services

  

  // constructor() {
  //   super()
  //   this.#services = [
  //     { id: 1, name: "Environmental And Waste Management Services" },
  //     { id: 2, name: "Wellhead Installation and Maintenance Service" },
  //     { id: 3, name: "Equipment Leasing And Procurement" },
  //     { id: 4, name: "Oil And Gas Drilling" },
  //     { id: 5, name: "Well Overhauling / Stimulation Services" },
  //     {
  //       id: 6,
  //       name: "Hydraulic, Stimulation Coiled Tubing/ Nitrogen Services",
  //     },
  //     { id: 7, name: "Pumping Services" },
  //     { id: 8, name: "Electrical Logging/ Calibration Services" },
  //     { id: 9, name: "Open Hole, Cased Hole, Slim Hole" },
  //     { id: 10, name: "Bolt Tensioning Services" },
  //     { id: 11, name: "Hydraulic Torqueing" },
  //     { id: 12, name: "Casing Cutting Services" },
  //     { id: 13, name: "Chemical Cold, Explosive, Field Maintenance Services" },
  //     { id: 14, name: "Rental Of Drill Cutting Skips" },
  //     { id: 15, name: "Pipping Line Welding And Fabrications Services" },
  //     { id: 16, name: "Logistics Services" },
  //     { id: 17, name: "Environmental Consultancy" },
  //     { id: 18, name: "Civil And Mechanical Engineering" },
  //     { id: 19, name: "Constructions" },
  //     { id: 20, name: "Location Preparations" },
  //   ];
  // }

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

                <Scopeslide />


                  </div>
                </section>
             
            </ul>
            {/* <div className="ServicePage2_area_cont">
              <span>PHRONESIS OIL & GAS TEK LIMITED</span> is a full service
              hazardous and non–hazardous waste transportation, management,
              disposal, complete oil and gas drilling services solution Company
              recognized for its technical expertise, commitment to safety, and
              dedication to the protection of its clients’ long-term liability.
            </div> */}

         
          </motion.div>
        </div>
      </section>
    );
   }
  
    Scope() {
        return (
          <div className=" bg-[#1D2723] servicePageDiv">
            <section className="relative bg-[#1D2723] lg:py-32 pt-32 pb-8 px-0">
              <div className="container2 ">
                <div className="ServicePage_area ">
                  <div className="dash_home_products_swiper_slide_img_divb">
                     <Animatedimage />
                    {/* <img
                      src="/img/about_img.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    /> */}
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab md:ml-[25rem]">
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
                          Scope of Work
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