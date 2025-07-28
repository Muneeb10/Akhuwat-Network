// src/components/Timeline.jsx
import React from 'react';

const Howitwork = () => {
  const timelineItems = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v4a2 2 0 002 2h4"/>
        </svg>
      ),
      title: "Application",
      description: "Submit your loan application with basic documentation, Fill out simple application form, Provide CNIC and basic documents, No complex paperwork required",
      date: "Step 1"
    },
    {
      id: 2,
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
      ),
      title: "Group Formation",
      description: "Join or form a group with other community members, Groups of 15-25 members, Community-based selection, Mutual guarantee system",
      date: "Mar 2024"
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-8 h-8 text-white-600">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
      ),
      title: "Approval & Training",
      description: "Get approved and receive financial literacy training, Quick approval process, Business skills training, Financial management education, Ongoing mentorship support",
      date: "May 2024"
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-8 h-8 text-white-600">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
      title: "Loan Disbursement",
      description: "Receive your interest-free loan and start your business, Interest-free loan disbursement, Flexible repayment schedule, Continuous support, Growth opportunities",
      date: "Jul 2024"
    },
  ];

  return (
    <section className="w-full pt-20 pb-0 md:pb-[300px] px-6 md:px-20 mb-20 mx-auto">
      <div className="text-center mt-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#029fae' }}>How It Works</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our simple, transparent process makes it easy for you to access interest-free loans and start your journey towards financial independence.
        </p>
      </div>
      {/* Timeline Section */}
      <div className="relative py-12 md:py-20">
        {/* Horizontal Line */}
        <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-300 transform -translate-y-1/2 z-0 hidden md:block"></div>
        {/* Vertical Line for Mobile */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2 z-0 block md:hidden"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10">
          {timelineItems.map((item) => (
            <div key={item.id} className="relative z-10 flex flex-col items-center">
              {/* Circle with Number */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10" style={{ backgroundColor: '#f0f2f3' }}>
                <div className="text-teal-500 text-lg">
                  {item.id}
                </div>
              </div>
              {/* Tooltip Box - Always Below */}
              <div className="w-full max-w-xs px-5 py-8 rounded-xl shadow-xl z-20 mt-4 md:mt-0 md:absolute md:top-full md:mt-12 md:left-1/2 md:transform md:-translate-x-1/2" style={{ backgroundColor: '#f0f2f3' }}>
                {/* Arrow pointing upward to circle */}
                <div className="absolute w-4 h-4 transform rotate-45 left-1/2 -translate-x-1/2 -top-2 hidden md:block" style={{ backgroundColor: '#f0f2f3' }}></div>
                {/* Content Container */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="w-12 h-12 mb-3 bg-gradient-to-r from-teal-500 to-cyan-600 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg z-10">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-xl mb-2" style={{ color: '#029fae' }}>
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitwork;