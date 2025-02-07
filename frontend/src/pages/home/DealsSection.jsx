import React, { useState, useEffect } from "react";
import dealsImg from "../../assets/deals.png"; // Replace with actual path to your image

const DealsSection = () => {
  // State to store the countdown timer (in seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 6,
    seconds: 6,
  });

  useEffect(() => {
    // Function to decrement the countdown every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          .deals-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 50px 30px;
            background-color: #ffffff; /* White background */
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
          }

          .deals-image {
            flex: 1 1 50%;
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .deals-image img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .deals-content {
            flex: 1 1 45%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }

          .deals-content h5 {
            font-size: 1.2rem;
            color: #FF5722; /* Warm orange for emphasis */
            text-transform: uppercase;
            margin-bottom: 15px;
          }

          .deals-content h4 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #212121; /* Darker grey for the main title */
          }

          .deals-content p {
            font-size: 1rem;
            color: #757575; /* Soft grey for description */
            line-height: 1.6;
            margin-bottom: 25px;
          }

          .deals-countdown {
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 15px;
          }

          .deals-countdown-card {
            background-color: #8bc34a; /* Light green for countdown cards */
            padding: 15px;
            border-radius: 8px;
            color: white;
            text-align: center;
            font-size: 1.4rem;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            flex: 1;
            transition: all 0.5s ease; /* Smooth transition */
          }

          .deals-countdown-card h4 {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }

          .deals-countdown-card p {
            font-size: 1.2rem;
            margin: 0;
          }

          @media (max-width: 768px) {
            .deals-container {
              flex-direction: column;
            }

            .deals-image, .deals-content {
              flex: 1 1 100%;
              margin-bottom: 20px;
            }
          }
        `}
      </style>

      <section className="deals-container">
        <div className="deals-image">
          <img src={dealsImg} alt="Deals of the Month" />
        </div>

        <div className="deals-content">
          <h5>Get Up To 50% Discount</h5>
          <h4>Deals Of The Month</h4>
          <p>Take advantage of our limited-time deals and get up to 50% off on selected items! Whether you’re updating your wardrobe, upgrading your home essentials, or shopping for gifts, you won’t want to miss these discounts. Shop now before the offer ends!</p>

          <div className="deals-countdown">
            <div className="deals-countdown-card">
              <h4>{timeLeft.days}</h4>
              <p>Days</p>
            </div>
            <div className="deals-countdown-card">
              <h4>{timeLeft.hours}</h4>
              <p>Hours</p>
            </div>
            <div className="deals-countdown-card">
              <h4>{timeLeft.minutes}</h4>
              <p>Minutes</p>
            </div>
            <div className="deals-countdown-card">
              <h4>{timeLeft.seconds}</h4>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealsSection;
