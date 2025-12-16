import React from 'react';

const CoursesHero = () => {
  return (
    <section className="bg-gray-100 pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
        
        {/* Left Content Column */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 leading-tight text-text">
            <span className="text-[#dea01e]">International Student Talent Hub</span>
          </h1>
          
          <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-md sm:text-lg md:text-xl lg:text-xl">
            <li className="flex items-start text-text">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl text-[#dea01e]">&bull;</span>
              <div>
                <strong className="font-bold">Interactive Learning:</strong> Master fundamentals hands-on.
              </div>
            </li>
            <li className="flex items-start text-text">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl text-[#dea01e]">&bull;</span>
              <div>
                <strong className="font-bold">Real Projects:</strong> Build and learn by doing.
              </div>
            </li>
            <li className="flex items-start text-text">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl text-[#dea01e]">&bull;</span>
              <div>
                <strong className="font-bold">Expert Mentorship:</strong> Get guided by industry leaders.
              </div>
            </li>
          </ul>
        </div>
        
        {/* Right Form Column */}
        <div className="lg:w-1/2">
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <form className="space-y-3 sm:space-y-4">
              

              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 sm:p-3 border border-border rounded-lg bg-background text-text focus:ring-accent focus:ring-offset-2 focus:outline-none"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg sm:text-xl text-[#1f2937]">
                  📧
                </span>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 sm:p-3 border border-border rounded-lg bg-background text-text focus:ring-accent focus:ring-offset-2 focus:outline-none"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg sm:text-xl text-[#1f2937]">
                  ✉️
                </span>
              </div>

              {/* Program Interested Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Program interested"
                  className="w-full p-2 sm:p-3 border border-border rounded-lg bg-background text-text focus:ring-accent focus:ring-offset-2 focus:outline-none"
                />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg sm:text-xl text-[#1f2937]">
                  ?
                </button>
              </div>

              {/* Phone Input */}
              <div className="flex">
                <div className="flex items-center p-2 sm:p-3 border border-r-0 border-border rounded-l-lg bg-background text-text">
                  <span className="mr-2">🇮🇳</span>
                  <span className="text-sm sm:text-base">+91</span>
                </div>
                <div className="relative flex-grow">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 sm:p-3 border border-l-0 border-border rounded-r-lg bg-background text-text focus:ring-accent focus:ring-offset-2 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg sm:text-xl text-[#1f2937]">
                    📞
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start pt-2">
                <input
                  type="checkbox"
                  id="sms_consent"
                  defaultChecked
                  className="h-3 w-3 sm:h-4 sm:w-4 rounded mt-1 text-accent focus:ring-accent border-border"
                />
                <label 
                  htmlFor="sms_consent" 
                  className="ml-2 text-xs sm:text-sm text-text-secondary"
                >
                  I agree to receive SMS & Whatsapp communications on this number.
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="px-lg py-2 sm:py-3 mt-3 sm:mt-4 text-base sm:text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity bg-accent-dark text-white"
              >
                Sign Up ❯
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CoursesHero;