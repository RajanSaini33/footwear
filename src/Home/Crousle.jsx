
import React, { useEffect, useState } from 'react';
import her from "../assets/image/hero2.webp";
import haa from "../assets/image/hero1.webp";
import hro from "../assets/image/hero3.webp";

const images = [her, haa, hro];

const Crousle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  },[])

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden  shadow-lg">
      
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-130 object-cover transition-all duration-500"
      />



  
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Crousle;
