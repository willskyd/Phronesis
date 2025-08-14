import React, { useEffect, useState } from "react";

const images = [
  "/img/Logistics Services-min.webp",
  "/img/Engineering Overview-min.webp",
  "/img/Electrical Logging and Calibration-min.webp" 
];

const Animatedimage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Change image every 10 seconds infinitely
    const cyclerInterval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(cyclerInterval);
  }, []);

  return (
    <img
      src={images[current]}
      alt=""
      className="w-[31rem] h-[23rem] object-cover md:w-[83rem] md:-mt-[1rem] md:h-[45rem] animate-pulse"
    />
  );
};

export default Animatedimage;