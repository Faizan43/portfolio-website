import React from 'react';

const Contact = () => {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <div className="space-y-2 text-gray-600 dark:text-gray-300">
        <p>Email: <a href="sayyadfaizan1999@gmail.com.com" className="text-blue-500 hover:underline">faizan@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/faizansayyad" className="text-blue-500 hover:underline">linkedin.com/in/faizansayyad</a></p>
        <p>GitHub: <a href="https://github.com/faizansayyad" className="text-blue-500 hover:underline">github.com/faizansayyad</a></p>
      </div>
    </section>
  );
};

export default Contact;