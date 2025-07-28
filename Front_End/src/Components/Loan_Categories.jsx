import React from 'react';
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  LightBulbIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const LoanCategories = () => {
  const loanCategories = [
    {
      id: 1,
      title: 'Micro Enterprise',
      duration: '6-12 months',
      amount: 'PKR 10,000 - 100,000',
      description: 'Small business development',
      icon: BuildingOfficeIcon,
    },
    {
      id: 2,
      title: 'Retail Business',
      duration: '3-9 months',
      amount: 'PKR 15,000 - 150,000',
      description: 'Shop expansion & inventory',
      icon: ShoppingBagIcon,
    },
    {
      id: 3,
      title: 'Tech Startups',
      duration: '12-24 months',
      amount: 'PKR 50,000 - 500,000',
      description: 'Technology innovation',
      icon: LightBulbIcon,
    },
    {
      id: 4,
      title: 'Mobile Vendors',
      duration: '3-6 months',
      amount: 'PKR 5,000 - 50,000',
      description: 'Mobile business setup',
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-teal-600">Loan</span> Categories
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Flexible financing solutions designed to meet the diverse needs of small businesses and entrepreneurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {loanCategories.map((category) => (
          <div key={category.id} className="bg-[#f0f2f3] rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="p-4 rounded-xl bg-teal-500 mb-4 sm:mb-0 sm:mr-5">
                  <category.icon className="h-10 w-10 text-white" />
                </div>

                {/* Text content with relative positioning for top-right duration */}
                <div className="flex-1 relative w-full sm:w-auto">
                  {/* Duration at top-right on large, block below on small */}
                  <span className="block sm:absolute sm:right-0 sm:top-0 mt-2 sm:mt-0 px-3 rounded-full text-xs sm:text-sm font-medium text-teal-500">
                    {category.duration}
                  </span>

                  <h3 className="text-base sm:text-base font-bold text-gray-800">{category.title}</h3>

                  <p className="text-xs sm:text-xs font-bold text-gray-900 mt-2 mb-1">
                    {category.amount}
                  </p>

                  <p className="text-sm sm:text-base text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanCategories;
