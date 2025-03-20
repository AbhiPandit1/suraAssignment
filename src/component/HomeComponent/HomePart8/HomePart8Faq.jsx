import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HomePart8Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FaqData = [
    {
      id: '1',
      question: 'How can I contact the help desk?',
      ans: 'You can contact the help desk via phone, email, or through our online support portal, available 24/7 for your convenience.',
    },
    {
      id: '2',
      question: 'What types of issues can the help desk assist with?',
      ans: 'Our help desk can assist with a wide range of technical issues including software troubleshooting, hardware problems, network connectivity, account access, and general IT support.',
    },
    {
      id: '3',
      question: 'Can the help desk assist remotely?',
      ans: 'Yes, our help desk can provide remote assistance using secure remote access tools to troubleshoot and resolve issues directly on your device.',
    },
    {
      id: '4',
      question: 'What are the help desk hours of operation?',
      ans: 'The help desk operates 24/7 to ensure you receive timely support whenever you need it, including weekends and holidays.',
    },
    {
      id: '5',
      question: 'Is there a way to check the status of my support request?',
      ans: 'Yes, you can check the status of your support request through our online support portal or by contacting the help desk directly for updates.',
    },
  ];

  return (
    <div className="bg-white py-12 px-6 lg:px-16 rounded-2xl shadow-lg">
      {/* Section Title */}
      <div className="flex flex-col items-start sm:items-center sm:text-center text-start">
        <div className="px-4 py-1 w-max text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm font-medium mb-4 shadow-md">
          Faq
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Discover our help desk FAQs to learn how we efficiently address your
          technical issues, ensuring you receive the support needed to stay
          productive and focused.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-8 space-y-4">
        {FaqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            className="border-b border-gray-200 rounded-sm p-4  bg-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Question Section */}
            <button
              className="flex justify-between items-center w-full text-lg font-medium text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-start">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-black" />
              ) : (
                <FaChevronDown className="text-black" />
              )}
            </button>

            {/* Answer Section */}
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              className="overflow-hidden text-gray-600 mt-3 text-start"
            >
              {openIndex === index && <p>{faq.ans}</p>}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePart8Faq;
