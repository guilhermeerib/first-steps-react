import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col">
      <Header onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      
      <div className="max-w-[1200px] w-full mx-auto flex flex-1 relative">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden mt-[72px]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0 mt-[72px]' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 w-full min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
