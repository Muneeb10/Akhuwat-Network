const Card = ({ title, btnUrl, description, image, buttonText }) => {
  return (
    <div className="flex justify-center mb-10 items-center">
      <div className="max-w-[720px] mx-auto">
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-[#f0f2f3] text-gray-700 shadow-lg">
          {/* Image Section */}
          <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl"/>
          </div>
          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-xl font-medium text-blue-gray-900">{title}</h5>
            </div>
            <p className="text-base font-light text-gray-700">{description}</p>
          </div>
          {/* Action Button */}
          <div className="p-6 pt-3">
            <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <button className="block w-[150px] rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-2 font-bold uppercase transition-all">
                {buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
