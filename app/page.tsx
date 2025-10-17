'use client';

import { useState} from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Menu, X, Star, MessageSquare, Users, Calendar, 
  Award, CheckCircle, ChevronDown, Phone, Mail, 
  MapPin, Instagram, Youtube, Linkedin 
} from 'lucide-react';
import Firstcarousel from './components/firstcaraousel'
import Gallerycarousel from './components/gallerycarousel'
import CourseCard from './components/quicCoursecard'

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function TalkTimeeLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", phone:'',email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Form submission handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    try {
      await fetch("forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "appointment", ...form }),
      });
      setFormSubmitted(true);
      setForm({ name: "", email: "", message: "" ,phone:'' });
      setSending(false);
      console.log('formSubmitted')
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (err) {
      setSending(false);
      alert("Something went wrong. Please try again.");
      console.error(err);
    }
  };
  return (
    <div className="bg-white text-text-primary font-sans">
      
      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex itejms-center h-full p-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-bold h-full text-accent"
              >
                <img  className='object-fill bg-accent rounded-full h-full w-full' src='/talktimelogo.png' alt={'Talktimee'} />
              </motion.div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition">Home</button>
              <Link href='/english-speaking-courses' className="block w-full text-left py-2 hover:text-accent transition">Courses</Link>
              <button onClick={() => scrollToSection('features')} className="hover:text-accent transition">Features</button>
              <Link href='/about' className="block w-full text-left py-2 hover:text-accent transition">About</Link>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-accent transition">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-accent transition">FAQ</button>
              <button onClick={() => scrollToSection('QuicLinks')} className="hover:text-accent transition">Links</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition">Contact</button>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition"
              >
                Book Free Demo
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-accent transition">Home</button>
              <Link href='/english-speaking-courses' className="block w-full text-left py-2 hover:text-accent transition">Courses</Link>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 hover:text-accent transition">Features</button>
              <Link href='/about' className="block w-full text-left py-2 hover:text-accent transition">About</Link>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-accent transition">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-accent transition">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-accent transition">Contact</button>
              <button onClick={() => scrollToSection('QuicLinks')} className="hover:text-accent transition">Quick Link</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-accent text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                Book Free Demo
              </button>
            </div>
          </motion.div>
        )}
      </nav>
      {/* ===============caousel========= */}
       <Firstcarousel/>
      {/* ========== HERO SECTION ========== */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Personalized <span className="text-accent">1-on-1</span> speaking sessions.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8">
                Learn from expert tutors with real conversation practice — anytime, anywhere.
              </p>

              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Book Free Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-accent text-accent px-8 py-4 rounded-2xl font-semibold hover:bg-accent hover:text-white transition"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-200 via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <MessageSquare className="text-white" size={32} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-text-primary">English Made Easy</h3>
                      <p className="text-text-secondary">Interactive Learning</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-accent" size={20} />
                      <span>Live 1:1 Sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-accent" size={20} />
                      <span>Expert Mentors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-accent" size={20} />
                      <span>Flexible Timings</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
       
      <CourseCard/>
      <Gallerycarousel/>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TalkTime Spoken English?</h2>
            <p className="text-lg text-text-secondary">Everything you need to master English speaking</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquare className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Interactive Classes</h3>
              <p className="text-text-secondary">
                Engage in real-time conversations with expert trainers and improve your fluency.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Trainers</h3>
              <p className="text-text-secondary">
                Learn from certified professionals with years of teaching experience.
              </p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-text-secondary">
                Choose class timings that fit your schedule. Weekend and evening slots available.
              </p>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-world Practice</h3>
              <p className="text-text-secondary">
                Practice with real scenarios, group discussions, and role-playing activities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="bg-gradient-to-br from-accent to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold p-1">1k+</span>
                    </div>
                    <div>
                      <p className="font-semibold">Happy Learners</p>
                      <p className="text-sm text-text-secondary">Across India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white  font-bold p-1">98%</span>
                    </div>
                    <div>
                      <p className="font-semibold">Success Rate</p>
                      <p className="text-sm text-text-secondary">Student Satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold p-1">5+</span>
                    </div>
                    <div>
                      <p className="font-semibold">Years Experience</p>
                      <p className="text-sm text-text-secondary">In Training</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About TalkTime Spoken English</h2>
              <p className="text-lg text-text-secondary mb-4 leading-relaxed">
                TalkTimee is India's leading English spoken platform dedicated to helping individuals speak English with confidence. Our mission is to break the language barrier and empower learners with practical communication skills.
              </p>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                With personalized attention, interactive sessions, and real-world practice, we've helped thousands of students, professionals, and entrepreneurs achieve their English speaking goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-text-secondary">Real stories from real learners</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic">
                "TalkTime Spoken English  transformed my speaking skills! I was hesitant to speak English, but the trainers made me comfortable. Now I confidently speak at my workplace."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-text-secondary">Software Engineer</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic">
                "Best investment I made! The classes are interactive, fun, and super effective. I cleared my IELTS exam with a great score thanks to TalkTime Spoken English."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <div>
                  <p className="font-semibold">Rahul Kumar</p>
                  <p className="text-sm text-text-secondary">MBA Student</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic">
                "I was struggling with fluency for years. TalkTime English Spoken's personalized approach helped me speak naturally within 3 months. Highly recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  AN
                </div>
                <div>
                  <p className="font-semibold">Anjali Nair</p>
                  <p className="text-sm text-text-secondary">Business Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">Everything you need to know</p>
          </motion.div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-purple-50 transition"
              >
                <span className="font-semibold text-lg">How do I start learning?</span>
                <ChevronDown 
                  className={`transition-transform ${activeAccordion === 1 ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {activeAccordion === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-text-secondary"
                >
                  Simply book a free demo session by filling out the contact form. Our team will reach out to understand your goals and schedule your first class.
                </motion.div>
              )}
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-purple-50 transition"
              >
                <span className="font-semibold text-lg">Are classes online?</span>
                <ChevronDown 
                  className={`transition-transform ${activeAccordion === 2 ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {activeAccordion === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-text-secondary"
                >
                  Yes! All our classes are conducted online via Zoom or Google Meet. Learn from the comfort of your home at your preferred time.
                </motion.div>
              )}
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-purple-50 transition"
              >
                <span className="font-semibold text-lg">Do you provide certification?</span>
                <ChevronDown 
                  className={`transition-transform ${activeAccordion === 3 ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {activeAccordion === 3 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-text-secondary"
                >
                  Yes, upon successful completion of the course, we provide a certificate of completion that validates your English proficiency.
                </motion.div>
              )}
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === 4 ? null : 4)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-purple-50 transition"
              >
                <span className="font-semibold text-lg">What is the duration of the course?</span>
                <ChevronDown 
                  className={`transition-transform ${activeAccordion === 4 ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {activeAccordion === 4 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-text-secondary"
                >
                  We offer flexible course durations ranging from 1 month to 6 months based on your current level and goals. Each plan is customized to your needs.
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT / LEAD CAPTURE SECTION ========== */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2  id='contactready' className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-text-secondary">Book your free demo class today!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {!formSubmitted ? (
              <form className="space-y-6" name='appointment'
                netlify-honeypot="bot-field"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    name='email'
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>


                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition resize-none"
                    placeholder="Tell us about your learning goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent text-white px-8 sm:py-4  py-2 rounded-2xl font-bold sm:text-lg shadow-lg hover:shadow-xl transition"
                >
                  {sending?"Submitting...":"Book Free Demo Now"}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">Thank You!</h3>
                <p className="text-lg text-text-secondary mb-6">
                  Your demo class request has been received. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-accent font-semibold hover:underline"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      <section>
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4698720780425!2d77.16622692495723!3d28.645646483486075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036fc993597b%3A0x7ec86206a8c63711!2sTalkTime%20Spoken%20English%20Institute%20-%20India&#39;s%20No.%201%20Best%20English%2C%20Top%20Public%20Speaking%2C%20Personality%20Development%20Classes%20in%20Delhi!5e0!3m2!1sen!2sin!4v1760730437361!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>

      {/* ========== FOOTER ========== */}
      <footer  id='QuicLinks' className="bg-text-primary text-white py-12 px-4  bg-purple-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">TalkTime English Spoken</h3>
              <p className="text-gray-300">
                Empowering learners to speak English confidently and fluently.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-accent transition">Home</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-accent transition">Features</button></li>
                <li><a href='/about' className="hover:text-accent transition">About</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent transition">Contact</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/terms-and-conditions" className="hover:text-accent transition">Terms of Service</a></li>
                <li><a href="/terms-and-conditions#8ids" className="hover:text-accent transition">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions#3ids" className="hover:text-accent transition">Refund Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail size={18} />
                  <span>Prerna@talktimespokenenglish.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={18} />
                  <span>+91 9310140456</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>4/17 West Patel Nagar,
                  Near Patel Nagar Metro Station
                  Gate no. 2, New Delhi- 110008 </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} TalkTime Spoken English. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-accent transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
