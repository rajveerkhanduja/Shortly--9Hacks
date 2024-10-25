import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-black p-4'>
      <div className='flex flex-col md:flex-row items-center w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
        
        {/* Left Side: Image */}
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <Image src={'/Shortly.svg'} alt='login' width={250} height={250} className='rounded-lg' />
        </div>
        
        {/* Right Side: Sign-In Form */}
        <div className='w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center text-white'>
          <h2 className='text-2xl font-semibold text-center text-white mb-4'>Welcome Back!</h2>
          <p className='text-center text-gray-300 mb-6'>
            Sign in to continue to your account
          </p>
          
          <SignIn 
          appearance={{
            variables: {
              colorPrimary: '#3b82f6',         
              colorBackground: '#ffffff',      
              colorText: '#111827',            
            },
            elements: {
              formButtonPrimary: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded', 
              formFieldInput: 'border border-gray-300 rounded-lg p-2 mb-4 w-full bg-white text-gray-800',   
              card: 'border-none bg-white',
            }
          }}
          />
        </div>
      </div>
    </div>
  );
}
