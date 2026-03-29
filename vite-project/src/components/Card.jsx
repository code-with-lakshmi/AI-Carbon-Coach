import React from 'react';

export const Card = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:-translate-y-1 hover:shadow-xl dark:shadow-gray-900/40 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className = '', children, ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ className = '', children, ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ className = '', children, ...props }) => {
  return (
    <p className={`text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 ${className}`} {...props}>
      {children}
    </p>
  );
};

export const CardContent = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ className = '', children, ...props }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
