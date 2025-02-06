import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact-container pt-20 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        Contact Us
      </h1>

      <div className="form-container max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-4 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-4 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="border border-gray-300 p-4 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg mt-6 hover:bg-primary-dark transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
