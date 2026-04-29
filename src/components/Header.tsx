import React from 'react';
import { Menu, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-surface-container-lowest shadow-sm sticky top-0 z-40 border-b border-outline-variant shrink-0">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto font-sans text-sm antialiased">
        <div className="flex items-center gap-3">
          <button 
            className="lg:hidden p-1 text-primary hover:bg-surface-container-low rounded-md transition-colors"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
          <GraduationCap className="text-primary hidden sm:block" size={24} />
          <h1 className="text-xl font-bold tracking-tight text-primary">StudentManager</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/dashboard"
            className={cn(
              "pb-1 transition-colors active:opacity-80",
              currentPath === '/dashboard'
                ? "text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            Dashboard
          </Link>
          <Link 
            to="/cadastro"
            className={cn(
              "pb-1 transition-colors active:opacity-80",
              currentPath === '/cadastro'
                ? "text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            Register
          </Link>
          <Link 
            to="/perfil/1"
            className={cn(
              "pb-1 transition-colors active:opacity-80",
              currentPath.startsWith('/perfil')
                ? "text-primary border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            Profile
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img 
              alt="User avatar"
              src="https://ui-avatars.com/api/?name=Admin+User&background=2563EB&color=fff"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
