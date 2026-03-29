import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-eco-600 text-white hover:bg-eco-700 focus:ring-eco-500 shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] dark:shadow-eco-900/30',
    secondary: 'bg-white dark:bg-gray-800 text-eco-800 dark:text-gray-200 border border-eco-200 dark:border-gray-600 hover:bg-eco-50 dark:hover:bg-gray-700 hover:border-eco-300 dark:hover:border-gray-500 focus:ring-eco-500 shadow-sm',
    outline: 'bg-transparent text-eco-700 dark:text-eco-400 border-2 border-eco-600 hover:bg-eco-50 dark:hover:bg-gray-800 focus:ring-eco-500',
    ghost: 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white focus:ring-gray-500',
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} px-6 py-3 ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
