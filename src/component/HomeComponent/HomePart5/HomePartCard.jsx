import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

// Data Array
const cardData = [
  {
    id: 1,
    imageSrc:
      'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-slack.svg',
    title: 'Slack',
    description: 'Productivity',
    message:
      'Notify your teammates of the latest activities with instant Slack messages.',
    link: '#',
  },
  {
    id: 2,
    imageSrc:
      'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-zapier.svg',
    title: 'Zapier',
    description: 'Automation',
    message:
      'Connect your apps and automate workflows to save time and effort.',
    link: '#',
  },
  {
    id: 3,
    imageSrc:
      'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-hubspot.svg',
    title: 'HubSpot',
    description: 'CRM',
    message:
      'Manage your customer relationships and grow your business with HubSpot.',
    link: '#',
  },
  {
    id: 4,
    imageSrc:
      'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-paypal.svg',
    title: 'Paypal',
    description: 'Payments',
    message: 'Manage payments and transactions efficiently with PayPal.',
    link: '#',
  },
  {
    id: 5,
    imageSrc:
      'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-stripe.svg',
    title: 'Stripe',
    description: 'Payments',
    message: 'Stripe helps businesses manage online payments with ease.',
    link: '#',
  },
  {
    id: 6,
    imageSrc:
      'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-salesforce.svg',
    title: 'Salesforce',
    description: 'CRM',
    message:
      'Grow your business and improve customer relationships with Salesforce.',
    link: '#',
  },
];

const HomePartCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col text-white justify-between items-center bg-[#0B223045] shadow-xl rounded-lg p-12 transform hover:scale-105 transition-transform duration-300"
        >
          {/* Image and Text Section */}
          <div className="flex justify-between items-center mb-6 w-full">
            <div className="flex flex-col text-left">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-base mb-4">{card.description}</p>
            </div>
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Message Section */}
          <p className="text-sm mb-4 text-start">{card.message}</p>

          {/* Learn More Button */}
          <div className=" w-full">
            <a
              href={card.link}
              className="inline-flex items-center text-white hover:text-[#00CC61] text-start"
            >
              <span className="mr-2 text-start">Learn More</span>
              <AiOutlineArrowRight /> {/* Right arrow icon from react-icons */}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePartCard;
