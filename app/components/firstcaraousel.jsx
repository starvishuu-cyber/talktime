'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2 } from 'lucide-react';

// interface Testimonial {
//   name: string;
//   role: string;
//   description: string;
//   image: string;
//   level: string;
// }

const testimonials = [
  {
    name: "Ayush",
    role: "Software Engineer from India",
    description: "Ready for a Job Interview in English",
    image: "images/Ayush.JPG", // Add your images to public/images/
    level: "C1"
  },
  {
    name: "Priya",
    role: "MBA Student from Delhi",
    description: "Cleared IELTS with 8.5 Band Score",
    image: "images/Priya.JPG",
    level: "C2"
  },
  {
    name: "Arjun",
    role: "Junior Student",
    description: "Now Speaking Confidently in School",
    image: "images/kid1.JPG",
    level: "B2"
  },
  {
    name: "Piyush",
    role: "College Student from Delhi",
    description: "Preparing for Study Abroad",
    image: "images/Piyush.JPG",
    level: "B1"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  // Floating badge animation variants
  const floatingVariant = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hoverScaleVariant = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.15, 
      rotate: [0, -5, 5, 0],
      transition: { 
        duration: 0.5,
        rotate: {
          repeat: Infinity,
          duration: 2
        }
      }
    }
  };
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
              SPEAK WITH <span className='text-accent'>CONFIDENCE</span> CONNECT WITH THE WORLD<br />
            </h1>
            
            <p className="text-lg md:text-xl text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
              India's No. 1 English Speaking, Public Speaking, Personality Development Institute. Assisted more than 5000+ People so far with 98%+ Success Rate. 5/5 Google Ratings.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-accent/50 transition-all duration-300"
            >
              Book Now
            </motion.button>

            {/* Indicator Dots */}
            <div className="flex justify-center lg:justify-start space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Circle Background */}
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Gradient Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-300 rounded-full opacity-60 blur-3xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    {/* Placeholder for user image - Replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-indigo-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="sm:w-64 sm:h-64 w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl">
                           <img 
                              src={currentTestimonial.image} 
                              alt={currentTestimonial.name}
                              className="w-full h-full  rounded-full object-cover"
                            />
                        </div>
                        <p className="text-lg font-semibold">{currentTestimonial.name}</p>
                      </div>
                    </div>
                    {/* To use actual images: */}
                   
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Badge: AI (Top Left) */}
              <motion.div
                variants={floatingVariant}
                initial="initial"
                animate={isDesktop && 'animate'}
                className="absolute -top-4 z-20 left-8 md:left-12"
              >
                <motion.div
                  variants={hoverScaleVariant}
                  initial="rest"
                  animate={isHovered ? "hover" : "rest"}
                  className="bg-white px-6 py-3 rounded-2xl shadow-xl cursor-pointer"
                >
                  <span className="text-2xl font-bold text-accent">AI</span>
                </motion.div>
              </motion.div>

              {/* Floating Badge: IELTS (Top Right) */}
              <motion.div
                variants={floatingVariant}
                initial="initial"
                animate={isDesktop && 'animate'}
                style={{ animationDelay: '0.5s' }}
                className="absolute -top-4 right-8 md:right-16"
              >
                <motion.div
                  variants={hoverScaleVariant}
                  initial="rest"
                  animate={isHovered ? "hover" : "rest"}
                  className="bg-white px-5 py-3 rounded-2xl shadow-xl cursor-pointer"
                >
                  <span className="text-xl font-bold text-primary">IELTS</span>
                </motion.div>
              </motion.div>

              {/* Floating Badge: Audio Icon (Left) */}
              <motion.div
                variants={floatingVariant}
                initial="initial"
                animate={isDesktop && 'animate'}
                style={{ animationDelay: '1s' }}
                className="absolute top-1/3 -left-6 md:-left-8"
              >
                <motion.div
                  variants={hoverScaleVariant}
                  initial="rest"
                  animate={isDesktop && ( isHovered ? "hover" : "rest")}
                  className="bg-white p-4 rounded-2xl shadow-xl cursor-pointer"
                >
                  <Volume2 className="text-accent" size={28} />
                </motion.div>
              </motion.div>

              {/* Floating Badge: Level (Right) - Dynamic */}
              <motion.div
                variants={floatingVariant}
                initial="initial"
                animate="animate"
                style={{ animationDelay: '1.5s' }}
                className="absolute top-1/2 -right-6 md:-right-8"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial.level}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      variants={hoverScaleVariant}
                      initial="rest"
                      animate={isHovered ? "hover" : "rest"}
                      className="bg-accent text-white px-5 py-6 rounded-2xl shadow-xl cursor-pointer"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold">{currentTestimonial.level}</div>
                        <div className="text-xs">Advanced</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* User Info Card (Bottom) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute z-10 -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white px-6 py-4 rounded-2xl shadow-2xl"
                  >
                    <p className="text-sm text-secondary mb-1">{currentTestimonial.role}</p>
                    <p className="font-semibold text-primary">{currentTestimonial.description}</p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
    </section>
  );
}
