import React from 'react';
import NextImage from 'next/image';

const Logo = ({ src, alt }) => {
  return (
    <div className="relative w-40 h-14">
      <NextImage src={src || '/vercel.svg'} alt={alt || 'logo'} fill />
    </div>
  );
};

export default Logo;
