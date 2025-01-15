// Faq.js
import { useState } from "react";

// Example FAQ data
const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows returns within 30 days of purchase. Items must be in original condition.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping. Rates vary depending on the destination.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us through our support page or via email at support@example.com.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: "pointer", fontWeight: "bold", marginBottom: "10px" }}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div
                className="faq-answer"
                style={{ padding: "10px 0", color: "#555", borderLeft: "2px solid #ccc" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
