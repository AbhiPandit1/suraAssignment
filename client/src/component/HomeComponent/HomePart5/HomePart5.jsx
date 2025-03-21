import HomePartCard from './HomePartCard';

const HomePart5 = () => {
  return (
    <div className="bg-[#004050] gap-8 px-6 py-8 sm:py-12">
      {/* Integrations Tag */}
      <div className="w-full flex justify-start sm:justify-center">
        <div className="px-4 py-1  w-max text-left sm:text-center text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm mb-6 sm:mb-8 shadow-lg">
          Integrations
        </div>
      </div>
      {/* Heading with Line Break */}
      <h1 className="text-white text-3xl sm:text-6xl font-semibold mb-4 sm:mb-6 text-start sm:text-center">
        Boost your efficiency <br />
        integrations
      </h1>

      {/* Description with Line Break */}
      <p className="text-white text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto sm:text-center text-left">
        Connect every part of your <br /> business with integrations that will
        simplify your workflow.
      </p>
      <div className='mt-10'>
        <HomePartCard />
      </div>
    </div>
  );
};

export default HomePart5;
