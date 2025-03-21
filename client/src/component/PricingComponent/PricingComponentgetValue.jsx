import React from 'react';
import { LiaCheckCircle } from 'react-icons/lia';
import { TfiMinus } from 'react-icons/tfi';

const pricingPlans = [
  {
    name: 'Personal',
    price: '$156/mo',
    features: [true, true, true, false, false, false, false],
  },
  {
    name: 'Professional',
    price: '$256/mo',
    features: [true, true, true, true, true, true, true],
  },
];

const featureList = [
  'Time management integration',
  'Customizable reporting dashboard',
  'Detailed transaction payloads',
  'Basic registration and ticketing',
  'Real-time notifications',
  'Automatic backups',
  'Multilingual support',
];

const PricingComponentgetValue = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-5xl md:py-12">
        {/* Pricing Table */}
        <div className="overflow-auto md:overflow-visible mx-auto w-[80vw] md:w-full">
          <table className="w-full rounded-xl border border-gray-300 overflow-hidden text-sm md:text-base">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100">
                <th className="bg-[rgb(223,249,235)] px-3 py-4 md:px-6 md:py-5 text-left rounded-tl-xl text-xs md:text-lg">
                  Compare Plans
                </th>
                {pricingPlans.map((plan, index) => (
                  <th
                    key={index}
                    className={`px-4 py-4 md:px-6 md:py-5 text-center bg-[rgb(223,249,235)] text-xs md:text-lg ${
                      index === pricingPlans.length - 1 ? 'rounded-tr-xl' : ''
                    }`}
                  >
                    <p className="font-semibold">{plan.name}</p>
                    <p className="text-green-600 font-bold">{plan.price}</p>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {featureList.map((feature, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="px-3 py-4 md:px-6 md:py-5 text-gray-700">
                    {feature}
                  </td>
                  {pricingPlans.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      className="text-center px-3 py-4 md:px-6 md:py-5"
                    >
                      {plan.features[index] ? (
                        <LiaCheckCircle
                          className="text-green-500 inline-block"
                          size={22}
                        />
                      ) : (
                        <TfiMinus
                          className="text-red-500 inline-block"
                          size={22}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* Table Footer (Rounded Bottom) */}
            <tfoot>
              <tr>
                <td
                  colSpan={pricingPlans.length + 1}
                  className="rounded-b-xl h-2 bg-white"
                ></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingComponentgetValue;
