import React, { useState } from 'react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday to Friday: 11:00 AM - 11:00 PM, Saturday: 10:00 AM - 11:00 PM, Sunday: 10:00 AM - 10:00 PM"
    },
    {
      question: "Do I need to book in advance?",
      answer: "While walk-ins are welcome, we recommend booking in advance, especially for weekends and holidays to guarantee your preferred time slot."
    },
    {
      question: "What is the minimum age requirement?",
      answer: "Most activities are suitable for ages 4 and up. Laser tag requires a minimum height of 108cm. Some activities may have specific age restrictions for safety reasons."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have ample free parking available for all our guests at our Al Quoz 2 location."
    },
    {
      question: "Can I bring outside food and drinks?",
      answer: "Outside food and drinks are not permitted. However, we have a variety of food and beverage options available at our on-site café."
    },
    {
      question: "Do you offer birthday party packages?",
      answer: "Yes! We offer comprehensive birthday party packages including decorations, food, and dedicated party hosts. Contact us for more details."
    },
    {
      question: "Are there any safety measures in place?",
      answer: "Safety is our top priority. All equipment is regularly maintained, staff are trained in safety protocols, and we have first aid facilities on-site."
    },
    {
      question: "What should I wear?",
      answer: "We recommend comfortable clothing and closed-toe shoes. For trampoline activities, grip socks are required (available for purchase)."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions about Altitude Arena</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full text-left p-6 focus:outline-none hover:bg-gray-50"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <span className="text-2xl">{openFAQ === index ? '−' : '+'}</span>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
