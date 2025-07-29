import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const maxMessageLength = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Valid email is required';
    if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length > maxMessageLength) newErrors.message = `Message exceeds ${maxMessageLength} characters`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/form`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
          toast.success('Form submitted successfully!');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            service: '',
            subject: '',
            message: ''
          });
        } else {
          toast.error(result.error || 'Something went wrong');
        }
      } catch (err) {
        alert('Failed to submit form');
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#029fae] mb-6">Contact Akhuwat Network</h2>
          <p className="text-lg text-gray-600 mx-auto max-w-3xl">
            Get in touch with us to learn more about our services, apply for a loan, or explore partnership opportunities. We are here to help you succeed.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="+92 XXX XXXXXXX" value={formData.phone} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}>
                      <option value="">Select a service</option>
                      <option value="consultation">Consultation</option>
                      <option value="loan">Loan Application</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input type="text" id="subject" name="subject" placeholder="Brief subject of your message" value={formData.subject} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea id="message" name="message" rows={5} placeholder="Details about your inquiry..." value={formData.message} onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`} />
                  <div className="flex justify-between mt-1">
                    {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                    <p className={`text-sm ${formData.message.length > maxMessageLength ? 'text-red-600' : 'text-gray-500'}`}>
                      {formData.message.length}/{maxMessageLength}
                    </p>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button type="submit" disabled={loading}
                    className="flex-1 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                    {loading ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  <a href={`https://wa.me/${import.meta.env.REACT_APP_PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-gradient-to-r from-teal-500 to-cyan-600 hover:text-white transition-all shadow-sm hover:shadow-md">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="space-y-6 sticky top-6">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <p className="mb-8 text-teal-100">
                  Have questions about our services? Want to partner with us? Fill out the form or contact us directly using the information below.
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
                      <p className="text-teal-100 break-all">info@akhuwatnetwork.online<br />support@akhuwatnetwork.online</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-teal-500/30 pt-4">
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <p className="text-teal-100">Mon–Fri: 9am–6pm<br />Sat: 10am–2pm<br />Sun: Closed</p>
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
