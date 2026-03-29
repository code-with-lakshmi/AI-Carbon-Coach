import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit handler
    console.log(isLogin ? 'Logging in...' : 'Signing up...');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-2">
        <CardTitle>{isLogin ? 'Welcome back' : 'Create an account'}</CardTitle>
        <CardDescription>
          {isLogin 
            ? 'Enter your details to access your dashboard.' 
            : 'Join thousands of students making a difference today.'}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Email" 
            type="email" 
            placeholder="student@university.edu" 
            required 
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            required 
          />
          
          <Button type="submit" variant="primary" fullWidth className="mt-6">
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase text-gray-400">
              <span className="bg-white px-2">Or continue with</span>
            </div>
          </div>
          
          <Button type="button" variant="secondary" fullWidth className="gap-2">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.25024 6.60998L5.32028 9.77C6.27528 6.61001 9.19533 4.75 12.0003 4.75Z"
                fill="#EA4335"
              />
              <path
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L20.18 21.29C22.57 19.09 24 15.93 24 12.275H23.49Z"
                fill="#4285F4"
              />
              <path
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.53491C0.46 8.18491 0 10.0499 0 11.9999C0 13.9499 0.46 15.8149 1.28 17.4649L5.26498 14.2949Z"
                fill="#FBBC05"
              />
              <path
                d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L15.8404 17.905C14.7704 18.62 13.4604 19.05 12.0004 19.05C9.13543 19.05 6.15545 17.14 5.20045 13.95L1.13544 17.11C3.12544 21.06 7.21043 24.0001 12.0004 24.0001Z"
                fill="#34A853"
              />
            </svg>
            Google
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button 
            type="button" 
            onClick={toggleMode}
            className="font-medium text-eco-600 hover:text-eco-700 transition-colors"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
