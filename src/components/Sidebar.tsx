import React from 'react'
import { Home, Users, PlusCircle, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../utils/cn'

export function Sidebar({ className }: { className?: string }) {
  const location = useLocation()
  const currentPath = location.pathname

  const menuItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Users, label: 'Dashboard', path: '/dashboard' },
    { icon: PlusCircle, label: 'Novo Cadastro', path: '/cadastro' },
    { icon: Settings, label: 'Configurações', path: '#' },
  ]

  return (
    <aside
      className={cn(
        'border-outline-variant sticky top-[72px] flex h-full w-64 flex-col border-r bg-white px-4 py-6',
        className,
      )}
    >
      <p className="text-label-caps text-outline mb-4 px-2 tracking-widest uppercase">
        Menu
      </p>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => {
          const active = currentPath === item.path
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                'flex items-center gap-3 rounded-sm px-4 py-3 font-semibold transition-colors duration-150',
                active
                  ? 'text-primary bg-surface-container'
                  : 'text-on-surface hover:bg-surface-container-low hover:text-on-surface',
              )}
            >
              <item.icon size={20} />
              <span className="font-body-base text-body-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User footer */}
      <div className="border-outline-variant mt-auto flex items-center gap-3 border-t pt-4">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
          alt="Avatar do usuário"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="text-on-surface truncate text-sm font-semibold">
            usuário
          </p>
          <p className="text-on-surface-variant truncate text-xs">
            usuario@school.com
          </p>
        </div>
        <button
          title="Sair"
          className="text-on-surface-variant hover:text-error shrink-0 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>
    </aside>
  )
}
