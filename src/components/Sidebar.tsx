import React from 'react';
import { Home, Users, PlusCircle, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

export function Sidebar({ className }: { className?: string }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: Users, label: 'Dashboard', path: '/dashboard' },
    { icon: PlusCircle, label: 'Novo Cadastro', path: '/cadastro' },
    { icon: Settings, label: 'Configurações', path: '#' },
  ];

  return (
    <aside className={cn("flex flex-col h-[calc(100vh-72px)] w-64 py-6 px-4 border-r border-outline-variant sticky top-[72px] bg-surface", className)}>
      <p className="text-label-caps text-outline mb-4 px-2 uppercase tracking-widest">Menu</p>
      
      <nav className="space-y-1 flex-1">
        {menuItems.map((item, index) => {
          const active = currentPath === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-colors duration-150",
                active 
                  ? "bg-tertiary-container text-primary" 
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              )}
            >
              <item.icon size={20} />
              <span className="font-body-base text-body-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4 bg-surface-container-high rounded-2xl border border-outline-variant">
        <p className="text-body-sm font-semibold text-on-surface">Upgrade Plan</p>
        <p className="text-xs text-on-surface-variant mt-1">Get more storage and advanced analytics.</p>
        <button className="w-full mt-3 bg-primary text-on-primary py-2 rounded-lg font-bold text-xs hover:opacity-90 transition-opacity">
          Upgrade
        </button>
      </div>
    </aside>
  );
}
