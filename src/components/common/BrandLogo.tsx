import React from 'react';
import { Link } from 'react-router-dom';
import bioglobalLogo from '../../assets/biogloballogo.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLink?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showLink = true,
}) => {
  const isLight = variant === 'light';

  // Responsive height classes maintaining the 3:1 natural aspect ratio
  const heightClass =
    size === 'sm'
      ? 'h-7 sm:h-8'
      : size === 'lg'
      ? 'h-14 sm:h-16'
      : size === 'xl'
      ? 'h-20 sm:h-24'
      : 'h-10 sm:h-11';

  const logoImg = (
    <img
      src={bioglobalLogo}
      alt="The BioGlobal - B2B Cosmetic Manufacturing & Private Label Solutions"
      className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] select-none ${
        isLight ? 'brightness-0 invert' : ''
      }`}
      loading="eager"
      decoding="async"
    />
  );

  if (!showLink) {
    return <div className={`inline-flex items-center ${className}`}>{logoImg}</div>;
  }

  return (
    <Link
      to="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#708E50] rounded-lg ${className}`}
      aria-label="The BioGlobal - Home"
    >
      {logoImg}
    </Link>
  );
};

