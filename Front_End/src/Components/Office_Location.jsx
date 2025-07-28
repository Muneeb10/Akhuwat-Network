// BranchLocations.jsx
import React from 'react';

const Office_Location = () => {
  const branches = [
    {
      id: 1,
      name: "Downtown Branch",
      address: "123 Main Street, City Center",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9am-7pm, Sat: 10am-5pm"
    },
    {
      id: 2,
      name: "Westside Plaza",
      address: "456 Oak Avenue, West District",
      phone: "(555) 987-6543",
      hours: "Mon-Sat: 10am-8pm, Sun: 11am-4pm"
    },
    {
      id: 3,
      name: "North Park Center",
      address: "789 Pine Road, North Quarter",
      phone: "(555) 456-7890",
      hours: "Mon-Fri: 8am-6pm, Sat-Sun: Closed"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Branch Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{branch.name}</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {branch.address}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {branch.phone}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {branch.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Office_Location;