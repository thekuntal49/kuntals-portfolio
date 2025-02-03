import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const currentHours = new Date().getHours();
  // const currentMinutes = new Date().getMinutes();
  // const currentTime = `${currentHours}:${currentMinutes < 10 ? '0' : ''}${currentMinutes}`;

  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p>&copy; {currentYear} Kuntal Kargupta. All rights reserved.</p>
      {/* <p>{currentTime}</p> */}
    </footer>
  );
};
