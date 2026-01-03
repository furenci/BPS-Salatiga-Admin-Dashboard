import React from 'react';
import { LayoutDashboard, FilePlus, History, User, LogOut, Bell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [{
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/'
  }, {
    icon: FilePlus,
    label: 'Buat Surat',
    path: '/create-letter'
  }, {
    icon: History,
    label: 'Riwayat Surat',
    path: '/history'
  }, {
    icon: Bell,
    label: 'Notifikasi',
    path: '/notifications',
    badge: 3
  }, {
    icon: User,
    label: 'Profile',
    path: '/profile'
  }];
  const handleLogout = () => {
    // In production, clear auth tokens/session here
    navigate('/login');
  };
  return <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-30">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#00509E] flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-none">
              BPS Salatiga
            </h1>
            <p className="text-xs text-gray-500 mt-1">Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map(item => {
        const isActive = location.pathname === item.path;
        return <Link key={item.path} to={item.path} className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative
                ${isActive ? 'bg-[#00509E]/10 text-[#00509E]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}>
              <item.icon className={`w-5 h-5 ${isActive ? 'text-[#00509E]' : 'text-gray-400'}`} />
              {item.label}
              {item.badge && item.badge > 0 && <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                  {item.badge}
                </span>}
            </Link>;
      })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>;
}