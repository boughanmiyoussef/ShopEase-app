import React from 'react';

const Qa = () => {
  const questions = [
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
    { question: "How can I track my order?", answer: "Once your order ships, you will receive an email with tracking information." },
    { question: "How do I request a refund?", answer: "Please contact support within 30 days for refund requests." },
    { question: "Can I cancel my order?", answer: "You can cancel an order within 24 hours of placing it." },
    { question: "What is your return policy?", answer: "You can return items within 30 days if they are unused." },
    { question: "How do I change my delivery address?", answer: "You can change your address by contacting us within 24 hours of placing the order." }
  ];

  return (
    <div className="qa-container">
      <style>
        {`
          .qa-container {
            max-width: 1000px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .qa-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 30px;
            color: #333;
          }

          .qa-item {
            background-color: #fff;
            border-radius: 8px;
            margin: 10px 0;
            padding: 15px;
            position: relative;
            cursor: pointer;
            overflow: hidden;
            transition: background-color 0.3s ease;
          }

          .qa-item:hover {
            background-color: #ff6f61; /* Assuming this is your primary color */
          }

          .qa-question {
            font-size: 1.3rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }

          .qa-answer {
            font-size: 1.1rem;
            color: #333;
            padding: 15px;
            border-radius: 5px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 0;
            background-color: #fff;
            overflow: hidden;
            opacity: 0;
            transition: height 0.3s ease-out, opacity 0.3s ease-out;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }

          .qa-item:hover .qa-answer {
            height: 100%; /* Expand to full height */
            opacity: 1; /* Make it fully visible */
          }
        `}
      </style>

      <h2 className="qa-title">Frequently Asked Questions</h2>

      <div className="qa-list">
        {questions.map((item, index) => (
          <div className="qa-item" key={index}>
            <div className="qa-question">{item.question}</div>
            <div className="qa-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qa;
