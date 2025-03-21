import PersonalButton from '../../Button/PersonalButton';

const HomePart6PriceCard = () => {
  const priceData = [
    { id: '1', heading: 'Premium', price: '199' },
    { id: '2', heading: 'Enterprises', price: '399' },
  ];

  return (
    <div className="rounded-lg gap-12 p-0 sm:p-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-12">
        {priceData.map((item, index) => (
          <div key={item.id} className=" bg-white rounded-2xl p-12 py-20 flex-1 text-start  ">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize">
              {item.heading}
            </h1>
            <p className="text-4xl text-black mt-2 font-medium">
              ${item.price}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Best for medium business owners, startups who need a landing page
              for their business.
            </p>

            <div className="mt-4">
              {index % 2 === 0 ? (
                <PersonalButton
                  text="Get Started"
                  bgColor="#00CC61"
                  hoverColor="#00994D"
                  textColor="#fff"
                  hoverTextColor="#fff"
                  iconColor="#fff"
                  hoverIconColor="#fff"
                />
              ) : (
                <PersonalButton
                  text="Get Started"
                  bgColor="#DFF9EB"
                  hoverColor="#1C1D20"
                  textColor="#000"
                  hoverTextColor="#fff"
                  iconColor="#000"
                  hoverIconColor="#fff"
                />
              )}
            </div>

            <h2 className="text-lg font-semibold text-gray-700 mt-5">
              What’s included:
            </h2>
            <ul className="mt-2 text-gray-600 text-sm space-y-2">
              <li>✔ 130+ Coded Blocks</li>
              <li>✔ Best for Developers, Freelancers</li>
              <li>✔ Made with TailwindCSS</li>
              <li>✔ Premium Support</li>
              <li>✔ Future Updates</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePart6PriceCard;
