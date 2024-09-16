"use client";
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'; // Added useRouter
import React, { useEffect } from 'react';
import UsageTrack from './UsageTrack';

function SideNav() {
  const router = useRouter(); // Initialize the router
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/History',
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/Billing',
    },
    {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  // Function to handle navigation on menu item click
  const handleNavigation = (menuPath: string) => {
    router.push(menuPath); // Use router.push() to navigate
  };

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={'/logo.svg'} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6" />

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
              path === menu.path && 'bg-primary text-white'
            }`}
            onClick={() => handleNavigation(menu.path)} // Add onClick to handle navigation
          >
            <menu.icon className="h-6 w-6" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
