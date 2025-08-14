import React from 'react'
import "./Home/NewHome/newhome.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Pagination,  Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";


const Scopeslide = () => {
  return (
    <div className=' md:-ml-[1 rem] md:w-full'> 
       
       <div className="relative w-[90vw] md:-ml[4rem]  overflow-x-hidden md:-mr-[4rem]  ">

        <Swiper
      slidesPerView={1} // Default to 1 slide for small screens
      spaceBetween={10}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      navigation={true}
      className="w-full max-w-[95vw] mx-auto py-4" // Center and constrain width
    >
      {[
        {
          href: '/Electrical/Calibration_Service',
          imgSrc: '/img/Electrical Logging and Calibration-min.webp',
          title: 'Electrical & Calibration Service',
          description: 'Phronesis Oil and Gas Limited offers specialized electrical logging and calibration services, providing...',
        },
        {
          href: '/Oil_&_Gas_Drilling_Services',
          imgSrc: '/img/Oil and Gas Drilling Services-min.webp',
          title: 'Oil & Gas Drilling Services',
          description: 'Phronesis Oil and Gas Limited provides comprehensive oil and gas drilling services, delivering safe, efficient...',
        },
        {
          href: '/Wellhead_Installation_&_Maintainance_Service',
          imgSrc: '/img/Wellhead Installation-min.webp',
          title: 'Wellhead Installation & Maintenance Service',
          description: 'Phronesis Oil and Gas Limited specializes in the installation and maintenance of wellhead systems, delivering...',
        },
        {
          href: '/Hydraulic_Stimulation_CoiledTubing_&_Nitrogen_Services',
          imgSrc: '/img/Hydraulic, Stimulation,-min.webp',
          title: 'Hydraulic, Stimulation, Coiled Tubing, and Nitrogen Services',
          description: 'Phronesis Oil and Gas Limited offers specialized hydraulic, stimulation, coiled tubing, and nitrogen services...',
        },
        {
          href: '/Pumping_Services',
          imgSrc: '/img/Pumping Services-min.webp',
          title: 'Pumping Services',
          description: 'Phronesis Oil and Gas Limited provides specialized pumping services tailored to the needs of the oil and gas industry...',
        },

         {
      href: '/OpenHole_CasedHole_&_SlimHole_Services',
      imgSrc: '/img/Open Hole-min.webp',
      title: 'Open Hole, Cased Hole, and Slim Hole Services',
      description: 'Phronesis Oil and Gas Limited provides specialized open hole, cased hole, and slim hole services...',
    },
    {
      href: '/Bolt_Tensioning_Services',
      imgSrc: '/img/Bolt Tensioning Services-min.webp',
      title: 'Bolt Tensioning Services',
      description: 'Phronesis Oil and Gas Limited provides specialized bolt tensioning services, delivering precise...',
    },
    {
      href: '/Hydraulic_Torqueing_Services',
      imgSrc: '/img/Hydraulic Torqueing Services-min.webp',
      title: 'Hydraulic Torqueing Services',
      description: 'Phronesis Oil and Gas Limited provides specialized hydraulic torquing services, delivering precise...',
    },
    {
      href: '/Casing_Cutting_Services',
      imgSrc: '/img/Casing Cutting-min.webp',
      title: 'Casing Cutting Services',
      description: 'Phronesis Oil and Gas Limited provides specialized casing cutting services, delivering precise and...',
    },
    {
      href: '/ChemicalCold_Explosive_&_Field_Maintenance_Services',
      imgSrc: '/img/Chemical Cold-min.webp',
      title: 'Chemical Cold, Explosive, and Field Maintenance Services',
      description: 'Phronesis Oil and Gas Limited delivers specialized chemical cold, explosive, and field maintenance services...',
    },
    {
      href: '/Rental_of_Drill_Cutting_Skips_Services',
      imgSrc: '/img/Rental of Drill Cutting Skips Services-min.webp',
      title: 'Rental of Drill Cutting Skips Services',
      description: 'Phronesis Oil and Gas Limited offers specialized rental services for drill cutting skips, providing reliable and...',
    },
    {
      href: '/Piping_Line_Welding_Fabrication_Services',
      imgSrc: '/img/Piping Line Welding-min.webp',
      title: 'Piping Line Welding and Fabrication Services',
      description: 'Phronesis Oil and Gas Limited delivers premier piping line welding and fabrication services...',
    },
    {
      href: '/Logistics_Services',
      imgSrc: '/img/Logistics Services-min.webp',
      title: 'Logistics Services',
      description: 'Phronesis Oil and Gas Limited provides comprehensive logistics services tailored to the unique demands...',
    },
    {
      href: '/Location_Preparations_Services',
      imgSrc: '/img/Location Preparations Services-min.webp',
      title: 'Location Preparations Services',
      description: 'Phronesis Oil and Gas Limited provides comprehensive location preparation services, delivering tailored...',
    },
    {
      href: '/Environmental_Consultancy_Services',
      imgSrc: '/img/Environmental Consultancy Services-min.webp',
      title: 'Environmental Consultancy Services',
      description: 'Phronesis Oil and Gas Limited provides expert environmental consultancy services, delivering tailored...',
    },
    {
      href: '/Construction_Services_&_Civil_Works',
      imgSrc: '/img/Construction Services-min.webp',
      title: 'Construction Services and Civil Works',
      description: 'Phronesis Oil & Gas Tek Limited is committed to meeting the increasing demand for responsive, cost-effective...',
    },
    {
      href: '/Civil_&_Mechanical_Engineering_Services',
      imgSrc: '/img/Civil and Mechanical-min.webp',
      title: 'Civil and Mechanical Engineering Services',
      description: 'Phronesis Oil and Gas Limited provides specialized civil and mechanical engineering services, delivering precise...',
    },
  
        // Add other services here following the same structure
      ].map((service, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center py-4">
          <a href={service.href} className="block w-full max-w-[28rem] mx-auto">
            <div className="border border-[#7c9289] rounded-lg overflow-hidden shadow-lg">
              <img
                src={service.imgSrc}
                alt={service.title}
                className=" w-full h-[15rem] object-cover"
              />
              <div className="p-4 bg-[#1a2e35]">
                <p className="text-lg font-extrabold text-white mb-2">{service.title}</p>
                <p className="text-sm text-gray-200">
                  {service.description}{' '}
                  <a href={service.href} className="text-blue-500 hover:underline">
                    read more
                  </a>
                </p>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
       {/* <Swiper
       
         slidesPerView={3}
         spaceBetween={30}
        //  effect={"fade"}
         pagination={{
           dynamicBullets: true,
           clickable: true,
           
         }}
         breakpoints={{
            50: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           500: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           // 768: {
           //   slidesPerView: 2,
           //   spaceBetween: 40,
           // },
           768: {
             slidesPerView: 2,
             spaceBetween: 10,
           },
           1024: {
             slidesPerView: 2,
             spaceBetween: 10,
           },
           1200: {
             slidesPerView: 3,
             spaceBetween: 10,
           },
           1400: {
             slidesPerView: 3,
             spaceBetween: 10,
           },
           1800: {
             slidesPerView: 4,
             spaceBetween: 10,
           },
         }}
         loop={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         modules={[Autoplay, Pagination, Navigation]}
         navigation={true}
         // onSlideChange={handleSlideChange}
         className="!w-full "
         style={{maxWidth: '90vw',
           marginLeft: '0.5rem',
           
          }}
       >
         
                                
        <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Electrical/Calibration_Service"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Electrical Logging and Calibration.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Electrical & Calibration Service</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited offers specialized electrical logging
                  and calibration services, providing <a href="/Electrical/Calibration_Service" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>
                <SwiperSlide className="mt-[2rem] ml-[0.5rem] relative ">
                <a
                  href="/Oil_&_Gas_Drilling_Services"
                  // href={`/services/${data.id}/${data.title}` [#7c9289]}       
                >
                  <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto 
                    md:w-[22rem] md:ml-[1.5rem] ml-[1.5rem] android">
                    <img
                      src="/img/Oil and Gas Drilling Services.webp"
                      alt=""
                      className="w-[25rem] h-[13.5rem] rounded-lg object-cover rounded-b-none
                       md:w-[22rem] "
                    />
                <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
                    font-extrabold'>Oil & Gas Drilling Services </p>
         <div className="-mt-[0.5rem]  ">
        <p className="text-sm text-gray-200 p-3 ml-[1rem]">
         Phronesis Oil and Gas Limited provides comprehensive oil and gas drilling services,
        delivering safe, efficient, <a href="/Oil_&_Gas_Drilling_Services" className='text-blue-500'>read more</a>
                        </p>
                         </div>
              </div>
           
         </a>
       </SwiperSlide>

        <SwiperSlide className="mt-[2rem] -ml-[0.5rem] relative ">
             <a
               href="/Wellhead_Installation_&_Maintainance_Service"
               // href={`/services/${data.id}/${data.title}` [#7c9289]}       
                   >
        <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
       md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android">
       <img
          src="/img/Wellhead Installation.webp"
         alt=""
         className="w-[25rem] h-[13.5rem] rounded-lg object-cover rounded-b-none md:w-[22rem]"
         />
       <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
               font-extrabold'>Wellhead Installation & Maintenance Service </p>
        <div className="-mt-[0.5rem]  ">
       <p className="text-sm text-gray-200 p-3 ml-[1rem]">
       Phronesis Oil and Gas Limited specializes in the installation and maintenance of wellhead
        systems, delivering  &nbsp;
       <a href="/Wellhead_Installation_&_Maintainance_Service" className='text-blue-500'>read more</a>
         </p>
          </div>
       </div>
      
         </a>
       </SwiperSlide>
        <SwiperSlide className="mt-[2rem] -ml-[0.5rem] relative ">
      <a
        href="/Hydraulic_Stimulation_CoiledTubing_&_Nitrogen_Services"
        // href={`/services/${data.id}/${data.title}` [#7c9289]}       
      >
        <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
      md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android">
      <img
         src="/img/Hydraulic, Stimulation,.webp"
        alt=""
        className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none md:w-[22rem] object-cover"
                        />
      <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
               font-extrabold'>Hydraulic, Stimulation, Coiled Tubing, and Nitrogen Services</p>
          <div className="-mt-[0.5rem]  ">
       <p className="text-sm text-gray-200 p-3 ml-[1rem]">
      Phronesis Oil and Gas Limited offers specialized hydraulic, stimulation, coiled tubing,
      and nitrogen services,  &nbsp;
           <a href="/Hydraulic_Stimulation_CoiledTubing_&_Nitrogen_Services" className='text-blue-500'>read more</a>
       </p>
            </div>
      </div>
        </a>
      </SwiperSlide>
     
      <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Pumping_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Pumping Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Pumping Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides specialized pumping services tailored to the
                  needs of the oil and gas industry <a href="/Pumping_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

               <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/OpenHole_CasedHole_&_SlimHole_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Open Hole.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Open Hole, Cased Hole, and Slim Hole Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                 Phronesis Oil and Gas Limited provides specialized open hole, cased hole, 
                 and slim hole  <a href="/OpenHole_CasedHole_&_SlimHole_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

               <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Bolt_Tensioning_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Bolt Tensioning Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Bolt Tensioning Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides specialized bolt tensioning services,
                   delivering precise <a href="/Bolt_Tensioning_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Hydraulic_Torqueing_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Hydraulic Torqueing Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Hydraulic Torqueing Services </p>
          <div className="-mt-[0.5rem]  ">
               <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides specialized hydraulic torquing services,
                   delivering precise <a href="/Hydraulic_Torqueing_Services" className='text-blue-500'>read more</a>
          </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Casing_Cutting_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Casing Cutting.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Casing Cutting Services </p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides specialized casing cutting
                 services, delivering precise and  <a href="/Casing_Cutting_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/ChemicalCold_Explosive_&_Field_Maintenance_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Chemical Cold.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Chemical Cold, Explosive, and Field Maintenance Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
           Phronesis Oil and Gas Limited delivers specialized chemical cold, explosive, and 
           field maintenance services, <a href="/ChemicalCold_Explosive_&_Field_Maintenance_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Rental_of_Drill_Cutting_Skips_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Rental of Drill Cutting Skips Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Rental of Drill Cutting Skips Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                 Phronesis Oil and Gas Limited offers specialized rental services for drill cutting skips,
                 providing reliable and <a href="/Rental_of_Drill_Cutting_Skips_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Piping_Line_Welding_Fabrication_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Piping Line Welding.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Piping Line Welding and Fabrication Services </p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited delivers premier piping line welding
                 and fabrication services<a href="/Piping_Line_Welding_Fabrication_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Logistics_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Logistics Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Logistics Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides comprehensive logistics services
                 tailored to the unique demands <a href="/Logistics_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Location_Preparations_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Location Preparations Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Location Preparations Services</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                 Phronesis Oil and Gas Limited provides comprehensive location
                preparation services, delivering tailored <a href="/Location_Preparations_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

                <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Environmental_Consultancy_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Environmental Consultancy Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Environmental Consultancy Services </p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides expert environmental consultancy services,
                  delivering tailored <a href="/Environmental_Consultancy_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

               <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Construction_Services_&_Civil_Works"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Construction Services.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Construction Services and Civil Works</p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil & Gas Tek Limited is committed to meeting the increasing demand 
                  for responsive, cost-effective, <a href="/Construction_Services_&_Civil_Works" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>

               <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
         <a
           href="/Civil_&_Mechanical_Engineering_Services"
           // href={`/services/${data.id}/${data.title}` [#7c9289]}       
         >
           <div className=" border-[0.1px] border-[#7c9289] w-[25rem] rounded-lg h-auto
            md:w-[22rem] md:ml-[2rem] ml-[1.5rem] android ">
             <img
               src="/img/Civil and Mechanical.webp"
               alt=""
               className="w-[25rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
               md:w-[22rem] z-10"
             />
             <p className='text-[1.35rem] text-white p-3 ml-[1rem] mt-[1rem]
             font-extrabold'>Civil and Mechanical Engineering Services </p>
          <div className="-mt-[0.5rem]  ">
                   <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                  Phronesis Oil and Gas Limited provides specialized bolt tensioning services,
                   delivering precise <a href="/Civil_&_Mechanical_Engineering_Services" className='text-blue-500'>read more</a>
         </p>
          </div>
          </div>
                  
                </a>
              </SwiperSlide>
      
  
 </Swiper> */}
     </div>
                   
           </div>
  )
}

export default Scopeslide
