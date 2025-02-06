import { useParams } from 'react-router-dom';
import blogsData from '../../data/blogs.json';
import { motion } from 'framer-motion'; // For animation

const BlogDetails = () => {
  const { title } = useParams();
  const blog = blogsData.find(b => b.title === title); // Find the blog based on the title

  return (
    <motion.div 
      className="blog-detail-container max-w-4xl mx-auto py-24 px-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Blog Title */}
      <motion.h1 
        className="text-5xl font-extrabold text-gray-800 mb-6 text-center"
        initial={{ y: -30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        {blog.title}
      </motion.h1>

      {/* Blog Image */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-auto object-cover rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
        />
      </motion.div>

      {/* Blog Subtitle and Date */}
      <motion.div 
        className="flex justify-center gap-8 mb-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="text-gray-500 text-lg">{blog.subtitle}</span>
        <span className="text-gray-500 text-lg">{blog.date}</span>
      </motion.div>

      {/* Blog Content / Description */}
      <motion.div 
        className="blog-content text-lg text-gray-700 leading-relaxed space-y-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <p>{blog.description}</p>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div 
        className="mt-10 text-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a 
          href="/" 
          className="inline-block text-white bg-primary py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
        >
          Back to Home
        </a>
      </motion.div>

      {/* Inline Styles */}
      <style jsx>{`
        .blog-detail-container {
          background-color: #f9fafb;
        }

        .blog-detail-container h1 {
          color: #2d3748;
        }

        .blog-detail-image {
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .blog-detail-image:hover {
          transform: scale(1.05);
        }

        .blog-content p {
          color: #4a5568;
          line-height: 1.8;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
        }

        .blog-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .flex {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .bg-primary {
          background-color: #FF6347;
        }

        .bg-primary-dark {
          background-color: #d35135;
        }

        a {
          text-decoration: none;
        }

        a:hover {
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  );
};

export default BlogDetails;
