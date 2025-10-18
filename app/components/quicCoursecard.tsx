'use client';

import { motion } from 'framer-motion';
import { Clock, IndianRupee, ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CoursesPreview() {
  const router = useRouter();

  const featuredCourses = [
    {
      name: "Weekend Course",
      duration: "6 months",
      schedule: "Sat & Sunday",
      price: 8000,
      features: ["Weekend Classes", "Sunday Activities"],
      badge: "Popular"
    },
    {
      name: "Intensive Course",
      duration: "3 months",
      schedule: "5 days/week",
      price: 14000,
      features: ["Quick Results", "Regular Classes"],
      badge: "Best Seller"
    },
    {
      name: "Premium Course",
      duration: "3 months",
      schedule: "6 days/week",
      price: 20000,
      features: ["Personality Development Interview session","Premium Support", "Sunday Special"],
      badge: "Recommended"
    }
  ];

  const handleViewAllCourses = () => {
    router.push('/english-speaking-courses');
  };

  const handleEnrollClick = (courseName: string, price: number) => {
    console.log(`Enrolling in: ${courseName}, Price: ₹${price}`);
    const message = `Hi! I want to enroll in ${courseName} (${price})`;
    const whatsappUrl = `https://wa.me/919310140456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    // Example: Navigate to courses page or open modal
    // router.push('/');
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Popular Courses
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Choose from our range of expertly designed courses to kickstart your English learning journey
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative"
            >
              {/* Badge */}
              <div className="absolute -top-3 right-4 bg-accent text-white px-4 py-1 rounded-full text-xs font-semibold">
                {course.badge}
              </div>

              {/* Course Name */}
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 mt-2">
                {course.name}
              </h3>

              {/* Duration */}
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="text-accent" size={20} />
                <div>
                  <p className="text-sm text-secondary">Duration</p>
                  <p className="font-semibold text-primary">{course.duration}</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-accent/5 rounded-lg p-3 mb-4">
                <p className="text-sm text-secondary">Schedule: <span className="font-semibold text-primary">{course.schedule}</span></p>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="border-t pt-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline space-x-1">
                    <IndianRupee className="text-accent" size={18} />
                    <span className="text-3xl font-bold text-primary">{course.price.toLocaleString()}</span>
                  </div>
                  <span className="text-sm text-secondary">EMI Available</span>
                </div>
                
                <button
                  onClick={() => handleEnrollClick(course.name, course.price)}
                  className="w-full bg-accent text-white py-3 rounded-xl font-semibold hover:bg-accent/90 transition"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={handleViewAllCourses}
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-lg hover:shadow-xl group"
          >
            <span>View All Courses</span>
            <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
          </button>
          
          <p className="text-secondary mt-4">
            Explore our complete range of 10+ courses designed for every learning goal
          </p>
        </motion.div>

        {/* Quick Info Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10+</div>
              <div className="text-sm opacity-90">Course Options</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5000+</div>
              <div className="text-sm opacity-90">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">EMI</div>
              <div className="text-sm opacity-90">Options Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
