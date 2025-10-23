'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, IndianRupee, CheckCircle, Star, Users, Award, BookOpen, MessageSquare, Globe } from 'lucide-react';

// Define course type for better type safety
interface CourseDetails {
  name: string;
  duration: string;
  schedule: string;
  price: number;
  emi: string;
  type: 'regular' | 'special' | 'lifetime';
}

export default function CoursesPage() {
  // Centralized function to handle all CTA button clicks
  const handleEnrollClick = (courseDetails: CourseDetails) => {
    console.log('Course selected:', courseDetails);
    
    // Add your business logic here:
    // - Show enrollment form modal
    // - Redirect to payment page
    // - Send analytics event
    // - Store in state/context
    // - API call to backend
    // - WhatsApp integration
    // - etc.
    
    // Example: Navigate to enrollment form with course data
    // router.push(`/enroll?course=${courseDetails.name}&price=${courseDetails.price}`);
    
    // Example: Show modal
    // setSelectedCourse(courseDetails);
    // setShowEnrollModal(true);
    
    // Example: Google Analytics
    // gtag('event', 'course_enrollment_click', {
    //   course_name: courseDetails.name,
    //   course_price: courseDetails.price,
    //   course_type: courseDetails.type
    // });
    
    // Example: WhatsApp redirect
    const message = `Hi! I want to enroll in ${courseDetails.name} (${courseDetails.duration})`;
    const whatsappUrl = `https://wa.me/919310140456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // alert(`Enrollment initiated for: ${courseDetails.name}\nPrice: ₹${courseDetails.price}\nDuration: ${courseDetails.duration}`);
  };

  const courseCategories = [
    {
      icon: <BookOpen className="text-accent" size={28} />,
      title: "Sentence Mastery",
      description: "From simple to complex, learn to structure ideas with ease."
    },
    {
      icon: <Globe className="text-accent" size={28} />,
      title: "Language Bridge",
      description: "Connect your first language with English for faster progress."
    },
    {
      icon: <MessageSquare className="text-accent" size={28} />,
      title: "Spoken English Fluency",
      description: "Speak with confidence, clarity, and natural flow."
    },
    {
      icon: <Star className="text-accent" size={28} />,
      title: "Words & Expressions",
      description: "Build vocabulary, idioms, and phrases for real-world use."
    },
    {
      icon: <Award className="text-accent" size={28} />,
      title: "Writing Excellence",
      description: "Develop clear, creative, and professional writing."
    },
    {
      icon: <Users className="text-accent" size={28} />,
      title: "Effective Communication",
      description: "Express yourself with impact in any situation."
    }
  ];

  const interactiveActivities = [
    "Situational Conversations – Practice English in everyday contexts",
    "Question Crafting – Learn the art of asking and responding smartly",
    "Group Dialogues – Collaborate, share, and sharpen your thinking",
    "Debates & Discussions – Build logic, persuasion, and quick responses",
    "Current Affairs Exchange – Talk about today's world with confidence",
    "Role-Play Practice – Step into real-life roles and communicate naturally",
    "Picture Interpretation – Strengthen vocabulary and description skills"
  ];

  const regularCourses = [
    {
      name: "Weekend Course",
      duration: "6 months",
      schedule: "2 hours, Sat & Sunday",
      features: ["Weekend Classes", "Sunday Special Activities"],
      price: 8000,
      emi: "₹6,500 × 2",
      popular: false
    },
    {
      name: "Intensive Course",
      duration: "3 months",
      schedule: "2 hours, 5 days a week",
      features: ["Intensive Training", "Regular Classes"],
      price: 14000,
      emi: "₹8,500 × 2",
      popular: true
    },
    {
      name: "Extended Course",
      duration: "6 months",
      schedule: "1 hour, 5 days a week",
      features: ["Flexible Timing", "Extended Duration"],
      price: 14000,
      emi: "₹8,500 × 2",
      popular: false
    },
    {
      name: "Quick Course",
      duration: "45 Days",
      schedule: "2 hours, 5 days a week",
      features: ["Quick Learning", "Intensive Course"],
      price: 11000,
      emi: "₹7,500 × 2",
      popular: false
    },
    {
      name: "Daily Course",
      duration: "2 months",
      schedule: "1 hour, 6 days a week",
      features: ["6 Days Learning", "Short Duration"],
      price: 10000,
      emi: "₹6,500 × 2",
      popular: false
    }
  ];

  const specialCourses = [
    {
      name: "Premium Course",
      duration: "3 months",
      schedule: "2 hours, 6 days a week",
      features: ["Sunday Special Activities", "6 Days Training", "Comprehensive Program"],
      price: 20000,
      emi: "₹11,500 × 2",
      badge: "Most Popular"
    },
    {
      name: "Weekend Special",
      duration: "6 months",
      schedule: "2 hours, Sat & Sunday",
      features: ["Sunday Special Activities", "Basic + Advanced", "Weekend Batch"],
      price: 10000,
      emi: "₹6,500 × 2",
      badge: "Best Value"
    },
    {
      name: "Advanced Training",
      duration: "3 months",
      schedule: "1 hour, 6 days a week",
      features: ["Sunday Special Activities", "Extended Learning", "Daily Classes"],
      price: 14000,
      emi: "₹8,500 × 2",
      badge: "Recommended"
    }
  ];

  const personalityProgram = {
    keyAreas: [
      {
        title: "Dynamic Presentation Skills",
        description: "Communicate effectively using not only words but also confident gestures, posture, and body language."
      },
      {
        title: "Emotional & Audience Intelligence",
        description: "Learn to connect with your listeners, understand their emotions, and communicate with empathy."
      },
      {
        title: "Leadership Through Communication",
        description: "Inspire, influence, and motivate others by choosing the right tone, pace, and style for every situation."
      },
      {
        title: "Voice & Speech Mastery",
        description: "Enhance clarity, intonation, and emphasis to make your words more engaging and impactful."
      },
      {
        title: "Pronunciation Excellence",
        description: "Reduce the influence of your native language and develop a neutral, professional accent with expert guidance."
      }
    ],
    highlights: [
      "Speech Recording & Feedback – Analyze your performance and track improvement",
      "Learning from Inspiring Speeches – Study impactful speeches from renowned leaders",
      "Case Studies of Iconic Speeches – Understand what makes a speech memorable",
      "Interactive Group Discussions – Practice real-life communication in a safe environment",
      "Debates & Analytical Exercises – Strengthen critical thinking and persuasive skills",
      "Competitions & Live Sessions – Indoor & outdoor activities to boost confidence",
      "Stage & Speaker's Stand Practice – Refine presence, delivery, and public confidence"
    ],
    courses: [
      {
        name: "Lifetime Membership - Intensive",
        duration: "3 months",
        schedule: "2 hours, 6 days a week",
        features: ["Sunday Special Activities", "Lifetime Access", "Premium Support"],
        price: 28000,
        emi: "₹15,500 × 2",
        badge: "Premium"
      },
      {
        name: "Lifetime Membership - Weekend",
        duration: "6 months",
        schedule: "2 hours, Sat & Sunday",
        features: ["Sunday Special Activities", "Basic + Advanced", "Lifetime Access"],
        price: 18000,
        emi: "₹10,500 × 2",
        badge: "Value Pack"
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      
      {/* Hero Section */}
      <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Offline & Online Courses
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-4">
              ONLINE AND OFFLINE COURSES OFFERED
            </p>
            <p className="text-lg md:text-xl text-secondary max-w-4xl mx-auto italic">
              "Push past the pain, break through the anguish, outlast the crisis — your journey doesn't end here"
            </p>
          </motion.div>

          {/* Course Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
              Key Learning Areas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
                  <p className="text-secondary">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-accent/5 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Interactive Activities
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {interactiveActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"
                >
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-secondary">{activity}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Regular Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
              Regular Courses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative ${
                    course.popular ? 'ring-2 ring-accent' : ''
                  }`}
                >
                  {course.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="text-accent" size={24} />
                    <h3 className="text-xl font-bold text-primary">{course.duration}</h3>
                  </div>
                  
                  <div className="flex items-start space-x-2 mb-4">
                    <Calendar className="text-accent mt-1" size={20} />
                    <p className="text-secondary">{course.schedule}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <IndianRupee className="text-accent" size={20} />
                      <span className="text-3xl font-bold text-primary">{course.price.toLocaleString()}</span>
                      <span className="text-sm text-secondary">one-time</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 mb-4">
                      <p className="text-sm text-secondary">EMI Available: <span className="font-bold text-accent">{course.emi}</span></p>
                    </div>
                    <button 
                      onClick={() => handleEnrollClick({
                        name: course.name,
                        duration: course.duration,
                        schedule: course.schedule,
                        price: course.price,
                        emi: course.emi,
                        type: 'regular'
                      })}
                      className="w-full bg-accent text-white py-3 rounded-xl font-semibold hover:bg-accent/90 transition"
                    >
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Special Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
              Special Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {course.badge}
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-4 mt-2">{course.name}</h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="text-accent" size={20} />
                    <span className="text-secondary">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 mb-4">
                    <Calendar className="text-accent mt-1" size={20} />
                    <p className="text-secondary text-sm">{course.schedule}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="text-accent" size={16} />
                        <span className="text-sm text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <IndianRupee className="text-accent" size={24} />
                      <span className="text-4xl font-bold text-primary">{course.price.toLocaleString()}</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                      <p className="text-sm text-secondary">EMI: <span className="font-bold text-accent">{course.emi}</span></p>
                    </div>
                    <button 
                      onClick={() => handleEnrollClick({
                        name: course.name,
                        duration: course.duration,
                        schedule: course.schedule,
                        price: course.price,
                        emi: course.emi,
                        type: 'special'
                      })}
                      className="w-full bg-accent text-white py-3 rounded-xl font-semibold hover:bg-accent/90 transition shadow-lg"
                    >
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personality Development Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-accent to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Personality Development & Public Speaking Program
              </h2>
              <p className="text-center text-lg opacity-90">
                Transform yourself into a confident, articulate, and charismatic communicator
              </p>
            </div>

            {/* Key Learning Areas */}
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Key Learning Areas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {personalityProgram.keyAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h4 className="text-lg font-bold text-primary mb-3">{area.title}</h4>
                    <p className="text-secondary">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Program Highlights */}
            <div className="bg-accent/5 rounded-3xl p-8 mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Exclusive Program Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {personalityProgram.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"
                  >
                    <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                    <p className="text-secondary text-sm">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Lifetime Membership Courses */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {personalityProgram.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-accent to-purple-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-white text-accent px-4 py-1 rounded-full text-sm font-bold">
                    {course.badge}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 mt-2">{course.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="text-white" size={20} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Calendar className="text-white mt-1" size={20} />
                      <span className="text-sm">{course.schedule}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-white" size={18} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/30 pt-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <IndianRupee className="text-white" size={28} />
                      <span className="text-5xl font-bold">{course.price.toLocaleString()}</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
                      <p className="text-sm">EMI Available: <span className="font-bold">{course.emi}</span></p>
                    </div>
                    <button 
                      onClick={() => handleEnrollClick({
                        name: course.name,
                        duration: course.duration,
                        schedule: course.schedule,
                        price: course.price,
                        emi: course.emi,
                        type: 'lifetime'
                      })}
                      className="w-full bg-white text-accent py-4 rounded-xl font-bold hover:bg-white/90 transition shadow-xl text-lg"
                    >
                      Join Lifetime Membership
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Payment Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              Payment Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-accent/5 rounded-2xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-primary mb-2">Full Payment</h3>
                <p className="text-secondary text-sm">Pay the full amount upfront and save on EMI charges</p>
              </div>
              
              <div className="text-center p-6 bg-accent/5 rounded-2xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-primary mb-2">EMI Option</h3>
                <p className="text-secondary text-sm">Flexible 2-installment EMI available for all courses</p>
              </div>
              
              <div className="text-center p-6 bg-accent/5 rounded-2xl">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-primary mb-2">Secure Payment</h3>
                <p className="text-secondary text-sm">All payment types are accepted and  transactions are 100% safe and secure</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 text-center">
              <p className="text-lg text-primary mb-4">
                <span className="font-bold">Need Help?</span> Contact us for personalized course recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919310140456" className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition">
                  Call: +91-9310140456
                </a>
                <a href="mailto:prerna@talktimespokenenglish.com" className="bg-white text-accent px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition border-2 border-accent">
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
