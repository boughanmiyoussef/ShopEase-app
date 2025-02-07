import React from 'react';
import { motion } from 'framer-motion'; // For animation

// Import the founder's image (replace with your actual portrait image)
import founderImage from '../../assets/founder1.jpg';

const AboutUs = () => {
  return (
    <motion.div 
      className="about-us-page container mx-auto py-16 px-4 mt-20"  // Added margin-top for space
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      {/* About Shopease Section */}
      <motion.section 
        className="about-us-section mb-16"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-semibold text-center mb-6 text-primary">
          About ShopEase
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At ShopEase, we are dedicated to revolutionizing the e-commerce experience. Our mission is to provide innovative solutions that empower individuals and businesses to achieve their goals with ease and efficiency. We believe in the power of technology to transform lives and are committed to delivering exceptional value to our customers.
        </p>
      </motion.section>

      {/* Message from the Founder Section */}
      <motion.section 
        className="founder-message bg-gray-100 py-16"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-8 px-4">
          {/* Founder Message (Left Side) */}
          <motion.div
            className="w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-primary text-center">A Message from Our Founder & CEO</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              As the founder of ShopEase, I embarked on this journey with a clear vision: to create a platform that bridges the gap between consumers and businesses, making online shopping seamless and enjoyable. With a background in technology and a passion for innovation, I recognized the challenges faced by both shoppers and retailers in the e-commerce space. This insight drove me to develop a solution that is both user-friendly and efficient.
              <br />
              Our goal is to empower our users by providing them with tools that are not only effective but also intuitive. We are committed to continuous improvement and innovation, ensuring that our platform evolves to meet the ever-changing needs of our community.
              <br />
              Thank you for being a part of our journey. Together, we are building a future where online shopping is not just a transaction but an experience.
              <br />
              - <strong>Youssef Boughanmi</strong>
            </p>
          </motion.div>

          {/* Founder Image (Right Side) */}
          <motion.div
            className="w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={founderImage} 
              alt="Founder" 
              className="w-full h-auto rounded-lg shadow-lg border-4 border-primary"
            />
          </motion.div>
        </div>
      </motion.section>

      <style jsx>{`
        .about-us-page {
          background-color: #fafafa; /* Light background for the page */
        }

        .about-us-section h1 {
          color: #FF6347; /* Primary color */
        }

        .about-us-section p {
          color: #4a5568; /* Dark gray for text */
        }

        /* Founder’s Message Section */
        .founder-message {
          background-color: #f1f5f9; /* Light gray background for the section */
        }

        .founder-message h2 {
          color: #FF6347; /* Primary color for heading */
        }

        .founder-message p {
          color: #4a5568; /* Dark gray text */
        }

        .text-primary {
          color: #FF6347; /* Primary color for headings and important elements */
        }

        .founder-message img {
          border: 4px solid #FF6347; /* Border with primary color */
        }

        /* Flexbox adjustments for the layout */
        .founder-message .flex {
          display: flex;
          justify-content: center; /* Center the flex items */
          align-items: center;
        }

        .founder-message .w-2\/3 {
          flex: 2; /* Left side (message) */
        }

        .founder-message .w-1\/3 {
          flex: 1; /* Right side (portrait image) */
        }

        .founder-message img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 12px; /* Rounded corners for the image */
        }
      `}</style>

    </motion.div>
  );
};

export default AboutUs;
