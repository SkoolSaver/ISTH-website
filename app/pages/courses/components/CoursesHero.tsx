import React from 'react';
import { appPalette } from '@/theme/palette' 

const CoursesHero = () => {
  const { background, text, border, active } = appPalette;

  return (
    <section 
      style={{ backgroundColor: background.main }} 
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        
        {/* Left Content Column */}
        <div className="lg:w-1/2">
          <h1 
            style={{ color: text.main }} 
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            International Student Talent Hub
          </h1>
          <h2 
            style={{ color: active.accent }} 
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Learn, Build and Master
          </h2>
          
          <ul className="space-y-6 text-xl md:text-2xl">
            <li 
              style={{ color: text.main }} 
              className="flex items-start"
            >
              <span className="mr-3 text-3xl" style={{ color: active.accent }}>&bull;</span>
              <div>
                <strong className="font-semibold">Interactive Learning:</strong> Master fundamentals hands-on.
              </div>
            </li>
            <li 
              style={{ color: text.main }} 
              className="flex items-start"
            >
              <span className="mr-3 text-3xl" style={{ color: active.accent }}>&bull;</span>
              <div>
                <strong className="font-semibold">Real Projects:</strong> Build and learn by doing.
              </div>
            </li>
            <li 
              style={{ color: text.main }} 
              className="flex items-start"
            >
              <span className="mr-3 text-3xl" style={{ color: active.accent }}>&bull;</span>
              <div>
                <strong className="font-semibold">Expert Mentorship:</strong> Get guided by industry leaders.
              </div>
            </li>
          </ul>
        </div>
        
        {/* Right Form Column */}
        <div className="lg:w-1/2">
          <div 
            style={{ backgroundColor: background.secondary, borderColor: border.main }} 
            className="p-6 sm:p-8 rounded-xl shadow-lg border-2"
          >
            <form className="space-y-4">
              
              {/* Program Interested Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Program interested"
                  style={{ backgroundColor: background.main, borderColor: border.main, color: text.main }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2"
                />
                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" style={{ color: text.muted }}>
                  ?
                </button>
              </div>

              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  style={{ backgroundColor: background.main, borderColor: border.main, color: text.main }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" style={{ color: text.muted }}>
                  📧
                </span>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  style={{ backgroundColor: background.main, borderColor: border.main, color: text.main }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-offset-2"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" style={{ color: text.muted }}>
                  ✉️
                </span>
              </div>

              {/* Phone Input */}
              <div className="flex">
                <div 
                  style={{ backgroundColor: background.main, borderColor: border.main, color: text.main }} 
                  className="flex items-center p-3 border border-r-0 rounded-l-lg"
                >
                  <span className="mr-2">🇮🇳</span>
                  <span>+91</span>
                </div>
                <div className="relative flex-grow">
                  <input
                    type="tel"
                    placeholder="Phone"
                    style={{ backgroundColor: background.main, borderColor: border.main, color: text.main }}
                    className="w-full p-3 border rounded-r-lg focus:ring-2 focus:ring-offset-2 border-l-0"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" style={{ color: text.muted }}>
                    📞
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center pt-2">
                <input
                  type="checkbox"
                  id="sms_consent"
                  defaultChecked
                  style={{ backgroundColor: active.accent, borderColor: active.accent }}
                  className="h-5 w-5 rounded text-yellow-500 focus:ring-yellow-500" // Placeholder for styling the checkbox with accent color
                />
                <label 
                  htmlFor="sms_consent" 
                  style={{ color: text.secondary }} 
                  className="ml-2 text-sm"
                >
                  I agree to receive SMS & Whatsapp communications on this number.
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                style={{ backgroundColor: active.accent, color: active.light }}
                className="w-full py-3 mt-4 text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-150"
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