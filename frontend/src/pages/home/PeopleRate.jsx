import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; // Star icon
import { FiUser } from "react-icons/fi"; // User icon

const PeopleRate = () => {
  const [customers, setCustomers] = useState(0);
  const [countries, setCountries] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      // Animate the number of customers from 0 to 100
      let customerCount = 0;
      const customerInterval = setInterval(() => {
        if (customerCount < 100) {
          customerCount += 1;
          setCustomers(customerCount);
        } else {
          clearInterval(customerInterval);
        }
      }, 30);

      // Animate the number of countries
      let countryCount = 0;
      const countryInterval = setInterval(() => {
        if (countryCount < 50) { // Let's assume 50 countries served
          countryCount += 1;
          setCountries(countryCount);
        } else {
          clearInterval(countryInterval);
        }
      }, 60);

      // Animate satisfaction rate from 0 to 100
      let satisfactionCount = 0;
      const satisfactionInterval = setInterval(() => {
        if (satisfactionCount < 100) {
          satisfactionCount += 1;
          setSatisfaction(satisfactionCount);
        } else {
          clearInterval(satisfactionInterval);
        }
      }, 20);
    };

    animateNumbers();
  }, []);

  return (
    <div className="people-rate-container">
      <style>
        {`
          .people-rate-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f9f9f9;
            padding: 40px 30px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
            flex-wrap: wrap;
          }

          .rate-item {
            text-align: center;
            margin: 20px;
          }

          .rate-item img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }

          .rate-item h3 {
            font-size: 1.5rem;
            margin-top: 10px;
            color: #2d2d2d;
          }

          .rate-item p {
            font-size: 1rem;
            color: #6c6c6c;
          }

          .rate-item .icon {
            font-size: 2rem;
            color: #ff6f61;
          }

          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-item span {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ff6f61;
            margin-bottom: 5px;
          }

          .stat-item h3 {
            font-size: 1rem;
            color: #6c6c6c;
          }

          .stars {
            color: #ff6f61;
            font-size: 1.5rem;
            margin: 10px 0;
          }

          .stat-bar {
            width: 100%;
            height: 8px;
            background-color: #ddd;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
          }

          .stat-bar-inner {
            width: ${satisfaction}%;
            height: 100%;
            background-color: #ff6f61;
            position: absolute;
            top: 0;
            left: 0;
          }

          .stat-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            margin-bottom: 30px;
          }

          /* Horizontal layout for testimonials */
          .people {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px; /* Space between each testimonial */
          }

          /* Individual testimonial item */
          .rate-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 150px;
          }

          .rate-item .stars {
            display: flex;
            justify-content: center;
            gap: 3px;
          }
        `}
      </style>

      <div className="stat-container">
        {/* Customer Count */}
        <div className="stat-item">
          <span>{customers}+ </span>
          <h3>Happy Consumers</h3>
        </div>

        {/* Countries Served */}
        <div className="stat-item">
          <span>{countries}</span>
          <h3>Countries Served</h3>
        </div>

        {/* Satisfaction Rate */}
        <div className="stat-item">
          <span>{satisfaction}%</span>
          <h3>Satisfaction Rate</h3>
          <div className="stat-bar">
            <div className="stat-bar-inner"></div>
          </div>
        </div>
      </div>

      <div className="people">
        {/* Testimonial Section */}
        <div className="rate-item">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg" // Placeholder image
            alt="Customer 1"
          />
          <h3>John Doe</h3>
          <p>"The shopping experience was seamless! Highly recommend."</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="rate-item">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg" // Placeholder image
            alt="Customer 2"
          />
          <h3>Jane Smith</h3>
          <p>"Fantastic quality and speedy delivery! Will shop again."</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="rate-item">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg" // Placeholder image
            alt="Customer 3"
          />
          <h3>Michael Brown</h3>
          <p>"Great prices and customer service. Very satisfied."</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="rate-item">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg" // Placeholder image
            alt="Customer 3"
          />
          <h3>Sofia Davis</h3>
          <p>"Highly recommend ! Excellent service"</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>



        <div className="rate-item">
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg" // Placeholder image
            alt="Customer 3"
          />
          <h3>Mike Lee</h3>
          <p>"Fast delivery and great packaging. Very impressed!"</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>



        <div className="rate-item">
          <img
            src="https://randomuser.me/api/portraits/women/49.jpg" // Placeholder image
            alt="Customer 3"
          />
          <h3>Nina Ford</h3>
          <p>"I love my new items. The quality is fantastic!</p>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>


      </div>
    </div>
  );
};

export default PeopleRate;
