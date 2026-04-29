import React from 'react'
import { Menu, GraduationCap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../utils/cn'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <header className="bg-surface-container-lowest border-outline-variant sticky top-0 z-40 shrink-0 border-b shadow-sm">
      <div className="mx-auto flex max-w-screen items-center justify-between px-6 py-4 font-sans text-sm antialiased">
        <div className="flex items-center gap-3">
          <button
            className="text-primary hover:bg-surface-container-low rounded-md p-1 transition-colors lg:hidden"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
          <GraduationCap className="text-primary hidden sm:block" size={24} />
          <h1 className="text-primary text-xl font-bold tracking-tight">
            StudentManager
          </h1>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/dashboard"
            className={cn(
              'pb-1 transition-colors active:opacity-80',
              currentPath === '/dashboard'
                ? 'text-primary border-primary border-b-2'
                : 'text-on-surface-variant hover:text-primary',
            )}
          >
            Dashboard
          </Link>
          <Link
            to="/cadastro"
            className={cn(
              'pb-1 transition-colors active:opacity-80',
              currentPath === '/cadastro'
                ? 'text-primary border-primary border-b-2'
                : 'text-on-surface-variant hover:text-primary',
            )}
          >
            Register
          </Link>
          <Link
            to="/perfil/1"
            className={cn(
              'pb-1 transition-colors active:opacity-80',
              currentPath.startsWith('/perfil')
                ? 'text-primary border-primary border-b-2'
                : 'text-on-surface-variant hover:text-primary',
            )}
          >
            Profile
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="border-outline-variant h-8 w-8 overflow-hidden rounded-full border">
            <img
              alt="User avatar"
              src="https://ui-avatars.com/api/?name=Admin+User&background=2563EB&color=fff"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
