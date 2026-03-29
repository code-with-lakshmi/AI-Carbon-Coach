import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-eco-600 text-white hover:bg-eco-700 focus:ring-eco-500 shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)]',
    secondary: 'bg-white text-eco-800 border border-eco-200 hover:bg-eco-50 hover:border-eco-300 focus:ring-eco-500 shadow-sm',
    outline: 'bg-transparent text-eco-700 border-2 border-eco-600 hover:bg-eco-50 focus:ring-eco-500',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500',
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} px-6 py-3 ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
