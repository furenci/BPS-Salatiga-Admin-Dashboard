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
import { AdminArchive } from './pages/admin/AdminArchive';
import { AdminNotifications } from './pages/admin/AdminNotifications';
import { AdminActivityLog } from './pages/admin/AdminActivityLog';
import { AdminReporting } from './pages/admin/AdminReporting';
import { AdminEmergency } from './pages/admin/AdminEmergency';
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

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/admin/archive" element={<AdminArchive />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/activity-log" element={<AdminActivityLog />} />
        <Route path="/admin/reporting" element={<AdminReporting />} />
        <Route path="/admin/emergency" element={<AdminEmergency />} />
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
            <div className="border-t border-gray-200 my-1"></div>
            <Link to="/" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Staff Dashboard
            </Link>
            <Link to="/create-letter" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Create Letter
            </Link>
            <div className="border-t border-gray-200 my-1"></div>
            <Link to="/admin" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700 font-bold">
              Admin Dashboard
            </Link>
            <Link to="/admin/archive" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Admin Archive
            </Link>
            <Link to="/admin/activity-log" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Activity Log
            </Link>
            <Link to="/admin/reporting" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Reporting
            </Link>
            <Link to="/admin/emergency" className="px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700">
              Emergency
            </Link>
          </div>
        </div>
      </div>
    </Router>;
}