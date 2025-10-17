'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle } from 'lucide-react';

export default function TermsAndConditions() {
  const termsData = [
    {
      id: 1,
      title: "Introduction",
      content: "Welcome to TalkTime Spoken English Institute! By joining TalkTime, you agree to follow our guidelines to ensure a smooth, productive, and friendly learning experience for everyone."
    },
    {
      id: 2,
      title: "Admissions",
      points: [
        "Students must meet the minimum age or course requirements.",
        "Admission depends on eligibility and seat availability."
      ]
    },
    {
      id: 3,
      title: "Fees & Refunds",
      points: [
        "Course fees must be paid on time to secure your seat.",
        "Refunds are provided only if the course is canceled or if withdrawal is made within the specified period."
      ]
    },
    {
      id: 4,
      title: "Attendance & Participation",
      points: [
        "Regular attendance is required for the best learning outcomes.",
        "Active participation in classes, exercises, and activities is expected."
      ]
    },
    {
      id: 5,
      title: "Behavior & Respect",
      points: [
        "Students must treat teachers and peers with courtesy.",
        "Misbehavior, bullying, or cheating is strictly prohibited and may result in disciplinary action."
      ]
    },
    {
      id: 6,
      title: "Course Changes & Cancellations",
      points: [
        "Schedules, syllabus, or instructors may change if necessary.",
        "If a course is cancelled, students may transfer to another course or receive a refund."
      ]
    },
    {
      id: 7,
      title: "Use of Institute Facilities",
      points: [
        "Students should use classrooms, library, and other resources responsibly.",
        "Any damage or loss must be compensated by the student."
      ]
    },
    {
      id: 8,
      title: "Privacy & Safety",
      points: [
        "Personal information is confidential and used only for academic purposes.",
        "Students must follow all health, safety, and emergency guidelines."
      ]
    },
    {
      id: 9,
      title: "Materials & Intellectual Property",
      points: [
        "Institute materials are copyrighted and cannot be shared without permission.",
        "Student work belongs to the student but may be used for promotional purposes with consent."
      ]
    },
    {
      id: 10,
      title: "Complaints & Feedback",
      points: [
        "Students can submit complaints or suggestions in writing.",
        "The institute will respond promptly and fairly."
      ]
    },
    {
      id: 11,
      title: "Acceptance",
      content: "By enrolling, students confirm that they have read, understood, and agreed to these guidelines."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            TalkTime Spoken English
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
            Terms & Guidelines
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Please read these terms carefully to ensure a smooth and productive learning experience.
          </p>
        </motion.div>

        {/* Terms Content */}
        <div className="space-y-6">
          {termsData.map((section, index) => (
            <motion.div
              id={section.id+'ids'}
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Section Title */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {section.id}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  {section.title}
                </h3>
              </div>

              {/* Content or Points */}
              {section.content && (
                <p className="text-secondary leading-relaxed ml-11">
                  {section.content}
                </p>
              )}

              {section.points && (
                <ul className="space-y-3 ml-11">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="flex-shrink-0 text-accent mt-1" size={20} />
                      <span className="text-secondary leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-accent/10 rounded-2xl py-8 md:p-10 "
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Contact Information
          </h3>
          <p className="text-secondary text-center mb-6">
            For questions regarding these terms, please contact:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center space-x-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div>
                <Mail className="text-accent" size={24} />
                <p className="text-sm text-secondary">Email</p>
              </div>
                <a 
                  href="mailto:prerna@talktimespokenenglish.com"
                  className="text-accent font-semibold hover:underline text-start"
                >
                  prerna@talktimespokenenglish.com
                </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <Phone className="text-accent" size={24} />
              <div>
                <p className="text-sm text-secondary">Phone</p>
                <a 
                  href="tel:+919310140456"
                  className="text-accent font-semibold hover:underline"
                >
                  +91-9310140456
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-secondary"
        >
          Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </motion.div>
      </div>
    </section>
  );
}
