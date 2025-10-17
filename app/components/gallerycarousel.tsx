'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { loadImages } from "../utils/getAllimages";


interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

// Add your actual images here
const qqcarouselImages: CarouselImage[] = [
  {
    src: '/images/session1.jpg',
    alt: 'Interactive English Learning Session',
    caption: 'Live Interactive Classes'
  },
  {
    src: '/images/session2.jpg',
    alt: 'One-on-One Mentoring',
    caption: 'Personal Attention from Expert Trainers'
  },
  {
    src: '/images/session3.jpg',
    alt: 'Group Discussion Session',
    caption: 'Real-world Practice Sessions'
  },
  {
    src: '/images/session4.jpg',
    alt: 'Online Learning Environment',
    caption: 'Flexible Schedule & Comfortable Learning'
  },
  {
    src: '/images/session5.jpg',
    alt: 'Student Success Stories',
    caption: 'Join 10,000+ Happy Learners'
  }
];

export default function ImageCarousel() {
  const [carouselImages  , setCarouseImages]=useState<CarouselImage[]>([])
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  console.log(carouselImages[currentIndex] ,currentIndex)

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  useEffect(()=>{
    let interval: ReturnType<typeof setInterval>;
    async function getAllimages(){
        const allImg= await loadImages()
        setCarouseImages(allImg)
         interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) >= allImg.length? 0:(prev + 1));
        }, 4000);

    }
    getAllimages()
     return () => clearInterval(interval);
            
  },[])
if(carouselImages.length>0)
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content (Desktop: Left, Mobile: Top) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Get a Glimpse of the Spirit of Our Sessions in These Photos...
            </h2>
            <p className="text-lg md:text-xl text-secondary mb-8">
              Experience the energy, engagement, and transformation happening in every TalkTimee session. Real students, real progress, real confidence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-accent/10 rounded-2xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">10k+</div>
                <div className="text-sm text-secondary">Students</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-secondary">Sessions Daily</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-secondary">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Carousel (Desktop: Right, Mobile: Bottom) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            {/* Carousel Container */}
            <div className="relative w-full aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Image Slider */}
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Placeholder for images - Replace with actual images */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-purple-400 via-accent to-indigo-400 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-4">📸</div>
                      <p className="text-2xl font-semibold">{carouselImages[currentIndex].caption}</p>
                      <p className="text-sm mt-2 opacity-75">Slide {currentIndex + 1} of {carouselImages.length}</p>
                    </div>
                  </div> */}
                  
                  {/* To use actual images, uncomment below: */}
                   <Image
                    src={carouselImages[currentIndex]?.src}
                    alt={carouselImages[currentIndex]?.alt||"not found"}
                    fill
                    lazyRoot='wiu'
                    className="w-full h-full object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false} // Set true for hero images
                />
                  
                  {/* Optional Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-semibold">
                      {carouselImages[currentIndex]?.caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? 'bg-accent w-8 h-3' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
        {/* Thumbnail Preview (Optional - Desktop Only) */}
            <div className="hidden md:flex  justify-between space-x-3 mt-6 overflow-x-auto pb-2 px-1">
              {carouselImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'border-accent scale-110 shadow-lg' 
                      : 'border-gray-300 hover:border-accent opacity-60 hover:opacity-100'
                  }`}
                >
                 <Image
                    src={image.src}
                    alt={image.alt}
                    fill // fills parent container (must be relative)
                    className="object-fill hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false} // Set true for hero images
                />

                </button>
              ))}
            </div>
      </div>
    </section>
  );
}
