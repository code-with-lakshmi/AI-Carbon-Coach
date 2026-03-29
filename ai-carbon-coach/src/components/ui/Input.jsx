import React from 'react';

const Input = React.forwardRef(({ label, id, className = '', error, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={`
          flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm 
          transition-colors duration-200 
          file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-gray-400 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eco-500 focus-visible:border-transparent
          disabled:cursor-not-allowed disabled:opacity-50
          ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
