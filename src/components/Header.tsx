import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
}
export function Header({
  user = {
    name: 'Raina',
    role: 'Staff',
    avatar: ''
  }
}: HeaderProps) {
  const navigate = useNavigate();
  return <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 fixed top-0 right-0 left-0 md:left-64 z-20">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md">
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 hidden sm:block">
          Selamat Datang, <span className="text-[#00509E]">{user.name}</span>
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search..." className="h-9 pl-9 pr-4 rounded-full bg-gray-100 border-none text-sm focus:ring-2 focus:ring-[#00509E] w-64" />
        </div>

        <button onClick={() => navigate('/notifications')} className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900 leading-none">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">{user.role}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00509E] to-[#003d7a] flex items-center justify-center text-white font-medium border-2 border-white shadow-sm">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>;
}