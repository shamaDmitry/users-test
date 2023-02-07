import React, { useState } from 'react';

const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear())

  return (
    <div className="py-5 bg-black text-white mt-auto">
      <div className="container mx-auto px-4">
        Footer {date}
      </div>
    </div>
  );
}

export default Footer;
