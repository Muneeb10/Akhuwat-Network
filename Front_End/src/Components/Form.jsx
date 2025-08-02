import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon,
  DocumentIcon,
  IdentificationIcon,
  UserIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    whatsapp: '',
    cnic: '',
    address: '',
    loanAmount: '',
    cnicFront: null,
    cnicBack: null,
    applicantPhoto: null,
    screenshot: null
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [fileNames, setFileNames] = useState({
    cnicFront: '',
    cnicBack: '',
    applicantPhoto: '',
    screenshot: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, [name]: 'Only JPG, PNG images allowed' }));
        return;
      }
      
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, [name]: 'File size exceeds 2MB limit' }));
        return;
      }

      setFormData((prev) => ({ ...prev, [name]: file }));
      setFileNames((prev) => ({ ...prev, [name]: file.name }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
    const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
    const amountRegex = /^\d+(\.\d{1,2})?$/;

    // Field validations
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!phoneRegex.test(formData.whatsapp)) newErrors.whatsapp = 'Valid WhatsApp number is required';
    if (!cnicRegex.test(formData.cnic)) newErrors.cnic = 'CNIC must be in format 12345-1234567-1';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!amountRegex.test(formData.loanAmount)) newErrors.loanAmount = 'Enter valid loan amount';
    
    // File validations
    if (!formData.cnicFront) newErrors.cnicFront = 'CNIC front is required';
    if (!formData.cnicBack) newErrors.cnicBack = 'CNIC back is required';
    if (!formData.applicantPhoto) newErrors.applicantPhoto = 'Your photo is required';
    if (!formData.screenshot) newErrors.screenshot = 'Screenshot is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        // Create FormData for file uploads
        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formPayload.append(key, value);
        });

        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/form`, {
          method: 'POST',
          body: formPayload
        });

        const result = await response.json();

        if (response.ok) {
          toast.success('Form submitted successfully!');
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            whatsapp: '',
            cnic: '',
            address: '',
            loanAmount: '',
            cnicFront: null,
            cnicBack: null,
            applicantPhoto: null,
            screenshot: null
          });
          
          // Reset file names
          setFileNames({
            cnicFront: '',
            cnicBack: '',
            applicantPhoto: '',
            screenshot: ''
          });
        } else {
          toast.error(result.error || 'Something went wrong');
        }
      } catch (err) {
        toast.error('Failed to submit form');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f3] py-12 pb-20 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-center" autoClose={4000} theme="colored" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-white p-2 border-6 border-[#f0f2f3] rounded-full">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-20 w-20 text-white" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                </svg>
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#029fae] mb-6">Loan Application Form</h2>
          <p className="text-lg text-gray-600 mx-auto max-w-3xl">
            Complete this form to apply for a loan. Please provide accurate information and required documents.
          </p>
        </div>





        {/* Form Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-6">Personal Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                  
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Enter first name" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Enter last name" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Job Title */}
                  <div>
                   
                    <input 
                      type="text" 
                      id="jobTitle" 
                      name="jobTitle" 
                      placeholder="Enter job title" 
                      value={formData.jobTitle} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
                    />
                    {errors.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>}
                  </div>

                  {/* Email */}
                  <div>
                  
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* WhatsApp Number */}
                  <div>
                  
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      name="whatsapp" 
                      placeholder="Enter WhatsApp number" 
                      value={formData.whatsapp} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
                    />
                    {errors.whatsapp && <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>}
                  </div>

                  {/* CNIC Number */}
                  <div>
                  
                    <input 
                      type="text" 
                      id="cnic" 
                      name="cnic" 
                      placeholder="XXXXX-XXXXXXX-X" 
                      value={formData.cnic} 
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.cnic ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
                    />
                    {errors.cnic && <p className="mt-1 text-sm text-red-600">{errors.cnic}</p>}
                  </div>
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
 
  <input 
    type="text" 
    id="address" 
    name="address" 
    placeholder="Enter full address" 
    value={formData.address} 
    onChange={handleChange}
    className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
  />
  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
</div>

{/* Loan Amount */}
<div>

  <input 
    type="number" 
    id="loanAmount" 
    name="loanAmount" 
    placeholder="Enter loan amount" 
    value={formData.loanAmount} 
    onChange={handleChange}
    className={`w-full px-4 py-3 rounded-lg border ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} 
  />
  {errors.loanAmount && <p className="mt-1 text-sm text-red-600">{errors.loanAmount}</p>}
</div>
</div>



                {/* File Upload Section */}
                <div className="pt-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Required Documents</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* CNIC Front */}
                    <div>
                      <label htmlFor="cnicFront" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <IdentificationIcon className="h-5 w-5 mr-2 text-teal-600" />
                        CNIC Front *
                      </label>
                      <div className="flex flex-col">
                        <label 
                          htmlFor="cnicFront" 
                          className={`flex flex-col items-center justify-center px-4 py-6 rounded-lg border-2 border-dashed ${errors.cnicFront ? 'border-red-500' : 'border-gray-300'} cursor-pointer bg-gray-50 hover:bg-gray-100`}
                        >
                          <DocumentIcon className="h-10 w-10 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">
                            {fileNames.cnicFront || 'Click to upload'}
                          </span>
                        </label>
                        <input 
                          type="file" 
                          id="cnicFront" 
                          name="cnicFront" 
                          onChange={handleFileChange}
                          accept="image/*"
                          className="sr-only"
                        />
                        {errors.cnicFront && <p className="mt-1 text-sm text-red-600">{errors.cnicFront}</p>}
                      </div>
                    </div>

                    {/* CNIC Back */}
                    <div>
                      <label htmlFor="cnicBack" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <IdentificationIcon className="h-5 w-5 mr-2 text-teal-600" />
                        CNIC Back *
                      </label>
                      <div className="flex flex-col">
                        <label 
                          htmlFor="cnicBack" 
                          className={`flex flex-col items-center justify-center px-4 py-6 rounded-lg border-2 border-dashed ${errors.cnicBack ? 'border-red-500' : 'border-gray-300'} cursor-pointer bg-gray-50 hover:bg-gray-100`}
                        >
                          <DocumentIcon className="h-10 w-10 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">
                            {fileNames.cnicBack || 'Click to upload'}
                          </span>
                        </label>
                        <input 
                          type="file" 
                          id="cnicBack" 
                          name="cnicBack" 
                          onChange={handleFileChange}
                          accept="image/*"
                          className="sr-only"
                        />
                        {errors.cnicBack && <p className="mt-1 text-sm text-red-600">{errors.cnicBack}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    {/* Applicant Photo */}
                    <div>
                      <label htmlFor="applicantPhoto" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <UserIcon className="h-5 w-5 mr-2 text-teal-600" />
                        Your Photo *
                      </label>
                      <div className="flex flex-col">
                        <label 
                          htmlFor="applicantPhoto" 
                          className={`flex flex-col items-center justify-center px-4 py-6 rounded-lg border-2 border-dashed ${errors.applicantPhoto ? 'border-red-500' : 'border-gray-300'} cursor-pointer bg-gray-50 hover:bg-gray-100`}
                        >
                          <UserIcon className="h-10 w-10 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">
                            {fileNames.applicantPhoto || 'Click to upload'}
                          </span>
                        </label>
                        <input 
                          type="file" 
                          id="applicantPhoto" 
                          name="applicantPhoto" 
                          onChange={handleFileChange}
                          accept="image/*"
                          className="sr-only"
                        />
                        {errors.applicantPhoto && <p className="mt-1 text-sm text-red-600">{errors.applicantPhoto}</p>}
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div>
                      <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <CameraIcon className="h-5 w-5 mr-2 text-teal-600" />
                        Screenshot *
                      </label>
                      <div className="flex flex-col">
                        <label 
                          htmlFor="screenshot" 
                          className={`flex flex-col items-center justify-center px-4 py-6 rounded-lg border-2 border-dashed ${errors.screenshot ? 'border-red-500' : 'border-gray-300'} cursor-pointer bg-gray-50 hover:bg-gray-100`}
                        >
                          <CameraIcon className="h-10 w-10 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">
                            {fileNames.screenshot || 'Click to upload'}
                          </span>
                        </label>
                        <input 
                          type="file" 
                          id="screenshot" 
                          name="screenshot" 
                          onChange={handleFileChange}
                          accept="image/*"
                          className="sr-only"
                        />
                        {errors.screenshot && <p className="mt-1 text-sm text-red-600">{errors.screenshot}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {/* Green Box */}
                  <div className="border-2 border-green-500 rounded-xl p-3 flex items-center">
                    <div className=" rounded-lg mr-4">
                      <img src='https://freesvg.org/img/1612850349easypaisa.png'  className='h-[80px] w-[80px]' />
                    </div>
                    <div>
                      <div className="text-gray- text-2xl text-bold">03459575063</div>
                    </div>
                  </div>

                  {/* Red Box */}
                  <div className="border-2 border-red-500 rounded-xl p-3 flex items-center">
                    <div className=" rounded-lg mr-4">
                   <img src='https://iconpusher.com/_next/image?url=https%3A%2F%2Fimg.iconpusher.com%2Fcom.techlogix.mobilinkcustomer%2F6.1.02.png&w=256&q=75'  className='h-[100px] w-[100px]' />
                    </div>
                    <div>
                     <div className="text-gray- text-2xl text-bold">03459575063</div>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    if you have submitted your loan request, then check your status by 
                    <a href='#' className='ml-2 text-xm'>
                      
                    <u>clicking here</u>
                    </a>
                  </p>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="space-y-6 sticky top-6">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="mb-8 text-teal-100">
                  Have questions about our loan process? Contact us directly using the information below.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-lg"><MapPinIcon className="h-6 w-6 text-white" /></div>
                    <div>
                      <h3 className="text-lg font-semibold">Head Office</h3>
                      <p className="text-teal-100">Thandi Sadak, Hyderabad, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-lg"><PhoneIcon className="h-6 w-6 text-white" /></div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-teal-100">+92 335 4571620<br />+92 22 1234567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-lg"><EnvelopeIcon className="h-6 w-6 text-white" /></div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-teal-100 break-all">loans@alkhidmatfoundation.online<br />support@alkhidmatfoundation.online</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-teal-500/30 pt-4">
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <p className="text-teal-100">Mon–Fri: 9am–6pm<br />Sat: 10am–2pm<br />Sun: Closed</p>
                </div>
                
                {/* Additional Info Boxes */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-teal-500/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-teal-100">Loans Approved</div>
                  </div>
                  <div className="bg-cyan-500/20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">PKR 10M+</div>
                    <div className="text-teal-100">Disbursed</div>
                  </div>
                </div>
              </div>
              
  
             
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Form;