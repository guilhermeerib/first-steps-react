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
        'border-outline-variant bg-surface sticky top-[72px] flex h-[calc(100vh-72px)] w-64 flex-col border-r px-4 py-6',
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

      <div className="bg-surface-container-high border-outline-variant mt-auto rounded-2xl border p-4">
        <p className="text-body-sm text-on-surface font-semibold">
          Upgrade Plan
        </p>
        <p className="text-on-surface-variant mt-1 text-xs">
          Get more storage and advanced analytics.
        </p>
        <button className="bg-primary text-on-primary mt-3 w-full rounded-lg py-2 text-xs font-bold transition-opacity hover:opacity-90">
          Upgrade
        </button>
      </div>
    </aside>
  )
}
