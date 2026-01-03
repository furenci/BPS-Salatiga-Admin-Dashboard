import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardStaf } from './pages/DashboardStaf';
import { FormWizard } from './pages/FormWizard';
import { MobileApproval } from './pages/MobileApproval';
import { DashboardAdmin } from './pages/DashboardAdmin';
import { RiwayatSurat } from './pages/RiwayatSurat';
import { Profile } from './pages/Profile';
import { ApprovalPage } from './pages/ApprovalPage';
import { NotificationsPage } from './pages/NotificationsPage';
export function App() {
  return <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashboardStaf />} />
        <Route path="/create-letter" element={<FormWizard />} />
        <Route path="/history" element={<RiwayatSurat />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mobile-approval" element={<MobileApproval />} />
        <Route path="/approval" element={<ApprovalPage />} />
        <Route path="/admin" element={<DashboardAdmin />} />
      </Routes>

      {/* Dev Navigation Helper - Remove in production */}
      <div className="fixed bottom-4 right-4 z-50 group">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer opacity-50 hover:opacity-100 transition-opacity text-xs font-mono">
          Dev Nav
        </div>
        <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 hidden group-hover:block p-2 max-h-96 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <Link to="/login" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Register
            </Link>
            <div className="border-t border-gray-200 my-1"></div>
            <Link to="/" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Staff Dashboard
            </Link>
            <Link to="/create-letter" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Create Letter
            </Link>
            <Link to="/history" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Riwayat Surat
            </Link>
            <Link to="/notifications" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Notifikasi
            </Link>
            <Link to="/profile" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Profile
            </Link>
            <Link to="/approval" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Desktop Approval
            </Link>
            <Link to="/mobile-approval" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Mobile Approval
            </Link>
            <Link to="/admin" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </Router>;
}