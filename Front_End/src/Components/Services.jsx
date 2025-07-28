// src/components/ProjectPortfolio.js
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Card from './Card';

const Services = () => {
  const projects = [
    {
      title: 'Health for All',
      description: 'Comprehensive healthcare services and medical assistance programs',
      image: 'https://plus.unsplash.com/premium_photo-1666299703243-3194cdc5a508?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Learn More',
    },
    {
      title: 'Interest-Free Loans',
      description: 'Interest-free loans for small businesses and income generation activities',
      image: 'https://plus.unsplash.com/premium_photo-1681589452352-905ecbfc0c20?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Learn More',
    },
    {
      title: 'Bright Futures',
      description: 'Educational support and skill development programs for all ages',
      image: 'https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Learn More',
    },
    {
      title: 'Disaster Aid',
      description: 'Disaster response and emergency assistance for affected communities',
      image: 'https://plus.unsplash.com/premium_photo-1681492228360-7665972aa5ab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Learn More',
    },
    {
      title: 'Housing Finance',
      description: 'Interest-free housing loans for home construction and renovation.',
      image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Learn More',
    },
    {
      title: 'Enterprise Development',
      description: 'Business development support and entrepreneurship training.',
      image: 'https://plus.unsplash.com/premium_photo-1725400817468-ddb0135d865d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      buttonText: 'Learn More',
    }
  ];

  return (
    <section className="px-6 pt-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-[#029fae] mb-6">Our Services</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Expanding our impact through specialized programs tailored to community needs.
      </p>
      <div className="grid grid-cols-1 px-0 sm:grid-cols-2 md:grid-cols-3 px-6 gap-4 justify-items-center items-center min-h-screen">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Services;