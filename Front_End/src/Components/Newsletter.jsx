import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleSubscribe = async () => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setStatus({ message: 'Email is required.', type: 'error' });
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ message: data.message || 'Subscribed successfully!', type: 'success' });
        setEmail('');
      } else {
        setStatus({ message: data.message || 'Something went wrong.', type: 'error' });
      }
    } catch (error) {
      setStatus({ message: 'Server error. Please try again later.', type: 'error' });
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#029fae' }}>Stay Connected</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">Subscribe to our newsletter for updates and success stories</p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]"
            aria-label="Email address"
          />
          <button onClick={handleSubscribe} className="px-6 py-3 rounded-lg font-medium text-white transition-colors duration-300" style={{ backgroundColor: '#029fae' }} aria-label="Subscribe to newsletter">
            Subscribe
          </button>
        </div>

        {/* Status message */}
        {status.message && (
          <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
