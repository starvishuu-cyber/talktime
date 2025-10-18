'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Star, BookOpen } from 'lucide-react';

export default function AboutUs() {
  const whyChooseData = [
    {
      icon: <Award className="text-accent" size={32} />,
      title: "Expert Mentors",
      description: "Trainers with years of experience in spoken English and personality coaching."
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Personal Attention",
      description: "Small batch sizes for personalized guidance."
    },
    {
      icon: <BookOpen className="text-accent" size={32} />,
      title: "Practical Learning",
      description: "Focus on speaking, listening, confidence-building, and personality enhancement."
    },
    {
      icon: <Star className="text-accent" size={32} />,
      title: "Flexible Options",
      description: "Online and offline classes to suit your lifestyle."
    }
  ];

  const courses = [
    "Spoken English: Basic, Intermediate & Advanced",
    "Personality Development & Public Speaking",
    "Interview Preparation & Group Discussions",
    "Grammar & Vocabulary Mastery"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            About Us
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
              Welcome to <span className="font-bold text-accent">TalkTime Spoken English</span> — where learning English becomes fun, practical, and confidence-boosting, and personality development takes center stage!
            </p>
            <p className="text-lg md:text-xl text-secondary leading-relaxed">
              Since <span className="font-bold">2020</span>, we have empowered thousands of learners to speak English fluently, communicate confidently, and shine with a strong, impressive personality.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5000+</div>
            <div className="text-sm md:text-base text-secondary">Students Trained</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm md:text-base text-secondary">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2020</div>
            <div className="text-sm md:text-base text-secondary">Established</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm md:text-base text-secondary">Commitment</div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Target className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Mission</h2>
            </div>
            <p className="text-secondary leading-relaxed mb-4">
              To help every learner speak English with ease and confidence while developing a strong, charismatic personality.
            </p>
            <p className="text-secondary leading-relaxed">
              Our courses focus on real-life communication, personal grooming, body language, and soft skills, so students can present their best self in every situation.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Eye className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-secondary leading-relaxed mb-4">
              To create learners who are not just fluent in English but also confident, articulate, and ready to succeed in all areas of life.
            </p>
            <p className="text-secondary leading-relaxed">
              At TalkTime Spoken English, we transform students into strong communicators with impressive personalities.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Why Choose TalkTime Spoken English
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Achievement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 bg-accent/10 rounded-2xl p-6 text-center"
          >
            <p className="text-lg text-primary">
              <span className="font-bold text-accent">Proven Results:</span> Over 1,000 students trained successfully with a <span className="font-bold">99% satisfaction rate</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Our Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            Our Courses
          </h2>
          <p className="text-lg text-secondary text-center mb-8 max-w-3xl mx-auto">
            We provide a wide range of programs tailored to every learner:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-primary font-semibold">{course}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent to-purple-600 rounded-3xl p-4 pb-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Step into a world where English learning meets personality transformation
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Start your journey with TalkTime Spoken English — speak fluently, communicate confidently, and present your best self to the world!
          </p>
          <a
            href='/#contactready'
            className="bg-white text-wrap w-full text-accent px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
