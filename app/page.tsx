"use client";
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'; // Using Next.js navigation

export default function Home() {
  const router = useRouter(); // Initializing the router

  const navigateToDashboard = () => {
    router.push('/dashboard'); // Navigate to dashboard on button click
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/background1.jpg')" }}>
      {/* Header */}
      <header className="w-full bg-white shadow p-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            id="logo-79"
            className="gradient w-32 h-auto"
            viewBox="0 0 125 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="ccustom"
              d="M88.861 37.225c.759 0 1.208-.575 1.208-1.474 0-.932-.482-1.474-1.192-1.474-.406 0-.688.18-.899.466h-.01V33.27h-.44v3.873h.44v-.368h.01c.228.314.504.45.883.45Zm-.032-.369c-.596 0-.889-.471-.889-1.1 0-.606.282-1.105.894-1.105.531 0 .786.477.786 1.105 0 .634-.255 1.1-.791 1.1Z"
              fill="#E5708C"
            />
            <path
              d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z"
              fill="url(#gradient_a1234)"
            />
            <defs>
              <linearGradient
                id="gradient_a1234"
                x1="0"
                y1="16"
                x2="119"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="ccompli1" stop-color="#64C2DB"></stop>
                <stop className="ccompli2" offset=".307" stop-color="#7476ED"></stop>
                <stop className="ccustom" offset=".604" stop-color="#C994DF"></stop>
                <stop className="ccompli1" offset="1" stop-color="#E56F8C"></stop>
              </linearGradient>
            </defs>
          </svg>
        
        </div>
        {/* Button */}
        <div className='flex gap-5 items-center'>
          <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>
            Join Membership just for Rs.500/Month
          </h2>
          <UserButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/classic-background.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          AI <span className="text-indigo-600">Content Generator</span>
        </h1>
        <p className="text-lg text-gray-600">
          Create engaging content with our AI-powered platform in seconds. Boost your productivity and streamline your workflow today!
        </p>
        <button
          onClick={navigateToDashboard} // Trigger navigation
          className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700"
        >
          Get Started Now
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-200">
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-lg font-semibold">25+ Templates</h3>
            <p className="text-gray-600">Responsive and customizable templates.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">AI-Powered</h3>
            <p className="text-gray-600">Advanced AI generating quality content.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Free to Use</h3>
            <p className="text-gray-600">Use our tools for free without limitations.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-600">Get help anytime you need it.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
