import HomePart4Component from './HomePart4Component';

const HomePart4 = () => {
  return (
    <div className="px-6 sm:px-12 py-6">
      {/* Company History Section */}
      <div className="w-max px-6 py-2 flex justify-start sm:justify-center text-[#00CC61] bg-[#E6F9EE] rounded-lg text-sm mb-4 sm:mb-6 shadow-sm">
        Company History
      </div>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <h1 className="text-2xl sm:text-5xl font-semibold mb-4 sm:mb-0 text-start  sm:text-left">
          Our journey from inception to <br /> present day
        </h1>
        <p className="text-sm sm:text-lg flex justify-end items-end mt-[2%]  max-w-prose text-start sm:text-start">
          Founded in 2010, we began as a small startup with <br />
          vision to revolutionize customer relationship management.
        </p>
      </div>
      <HomePart4Component />
    </div>
  );
};

export default HomePart4;
