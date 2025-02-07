import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <>
      <style>
        {`
          .banner-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            padding: 50px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            flex-direction: column; /* Default for smaller screens (column) */
            text-align: center;
            margin-top: 80px; /* Add space above the banner to avoid overlap with navbar */
          }

          .banner-content {
            margin-bottom: 20px;
          }

          /* Flashing Animation */
          @keyframes flashTitle {
            0% {
              color: #ff6f61; /* Initial flashy color */
            }
            50% {
              color: #f7d14c; /* Midway flashy color */
            }
            100% {
              color: #ff6f61; /* Return to initial flashy color */
            }
          }

          @keyframes flashSubtitle {
            0% {
              color: #ff6f61; /* Initial color */
            }
            50% {
              color: #ff9b00; /* Different flashy color */
            }
            100% {
              color: #ff6f61; /* Return to initial color */
            }
          }

          .banner-subtitle {
            font-size: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: flashSubtitle 1.5s infinite; /* Apply flashing animation */
          }

          .banner-title {
            font-size: 3rem;
            font-weight: bold;
            margin: 10px 0;
            animation: flashTitle 1.5s infinite; /* Apply flashing animation */
          }

          .banner-description {
            font-size: 1.1rem; /* Increased font size for better readability */
            color: #6c6c6c; /* Medium gray for text */
            line-height: 1.8; /* Increased line height for readability */
            margin-top: 20px; /* Add space before the description */
            margin-bottom: 30px; /* Add space after the description */
          }

          .shop-button {
            background-color: #ff6f61; /* Button color matching subtitle */
            color: white;
            border: none;
            padding: 12px 30px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .shop-button:hover {
            background-color: #e05b4a; /* Darker red on hover */
          }

          .shop-link {
            color: white;
            text-decoration: none;
          }

          .banner-image-container {
            margin-top: 20px; /* Add space before the image */
            margin-bottom: 20px; /* Add space after the image */
          }

          .banner-image {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .banner-container {
              flex-direction: column; /* Stack content vertically on smaller screens */
              padding: 30px 20px; /* Reduce padding on smaller screens */
            }

            .banner-title {
              font-size: 2.5rem; /* Smaller font size for title */
            }

            .banner-subtitle {
              font-size: 1.25rem; /* Smaller font size for subtitle */
            }

            .banner-description {
              font-size: 1rem; /* Smaller font size for description */
            }

            .banner-image-container {
              max-width: 100%; /* Full width for image on smaller screens */
            }

            .shop-button {
              padding: 10px 20px; /* Smaller button for mobile */
            }
          }

          /* Additional styles for very small screens like mobile */
          @media (max-width: 480px) {
            .banner-title {
              font-size: 2rem; /* Even smaller font size on very small screens */
            }
          }

          /* Larger Screens (Desktops) */
          @media (min-width: 769px) {
            .banner-container {
              flex-direction: row; /* Align content horizontally on larger screens */
            }

            .banner-content {
              text-align: left; /* Align text to the left */
              margin-right: 30px; /* Add some space between content and image */
            }

            .banner-image-container {
              max-width: 50%; /* Limit image width to 50% of the container */
            }

            .banner-image {
              width: 100%; /* Full width of the container */
              height: auto;
            }

            .shop-button {
              padding: 12px 30px; /* Standard button size for desktops */
            }
          }
        `}
      </style>

      <div className="banner-container">
        {/* Banner Content */}
        <div className="banner-content">
          <h1 className="banner-title">Say Hello To Good Buys</h1>
          <p className="banner-description" style={{ color: 'black'  }}>
            Discover our new summer collection with fresh, stylish designs for every occasion. From breezy dresses to chic accessories, we've got everything you need to stay fashionable this season. 
            <br />
            Shop now and enjoy <strong>Up To 50% Off</strong> on select items!
          </p>

          <h4 className="banner-subtitle">Up to 50% Off on Latest Fashion Trends</h4>
          <button className="shop-button" style={{margin : '50px'}}>
            <Link to="/search" className="shop-link">Shop Now!</Link>
          </button>
        </div>

        {/* Banner Image */}
        <div className="banner-image-container">
          <img src={bannerImg} alt="Summer Collection Banner" className="banner-image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
