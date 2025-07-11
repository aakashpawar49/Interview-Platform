import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 space-y-4">
        <p>
          &copy; {new Date().getFullYear()} Interview Prep AI. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 flex-wrap text-orange-600 font-semibold">
          <a href="https://github.com/aakashpawar49" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/aakash-pawar" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:aakashpawar496@gmail.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
