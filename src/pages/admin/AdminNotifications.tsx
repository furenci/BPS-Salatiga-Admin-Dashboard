import React, { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Bell, Clock, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
export function AdminNotifications() {
  const [activeTab, setActiveTab] = useState('all');
  const notifications = [{
    id: 1,
    type: 'pending',
    title: 'Surat ST/2023/105 menunggu persetujuan',
    details: 'Diajukan oleh Raina - Perjalanan Dinas ke Semarang',
    time: '5 menit yang lalu'
  }, {
    id: 2,
    type: 'approved',
    title: 'Surat ND/2023/042 telah disetujui',
    details: 'Disetujui oleh Pak Kepala',
    time: '1 jam yang lalu'
  }, {
    id: 3,
    type: 'rejected',
    title: 'Surat ST/2023/103 ditolak',
    details: 'Ditolak oleh Pak Kepala - Alasan: Anggaran tidak sesuai',
    time: '3 jam yang lalu'
  }, {
    id: 4,
    type: 'pending',
    title: 'Surat ND/2023/041 menunggu persetujuan',
    details: 'Diajukan oleh Ahmad - Permintaan Data Statistik',
    time: '5 jam yang lalu'
  }, {
    id: 5,
    type: 'approved',
    title: 'Surat ST/2023/102 telah disetujui',
    details: 'Disetujui oleh Pak Kepala',
    time: '1 hari yang lalu'
  }];
  const getIcon = (type: string) => {
    switch (type) {
      case 'pending':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };
  const getBgColor = (type: string) => {
    switch (type) {
      case 'pending':
        return 'bg-orange-100';
      case 'approved':
        return 'bg-green-100';
      case 'rejected':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };
  const filteredNotifications = activeTab === 'all' ? notifications : notifications.filter(n => n.type === activeTab);
  return <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <Header user={{
      name: 'Admin',
      role: 'Administrator',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Notifikasi Admin
            </h1>
            <p className="text-gray-500">
              Pantau status persetujuan dan perubahan surat.
            </p>
          </div>

          <Card className="overflow-hidden" noPadding>
            <div className="flex border-b border-gray-200">
              {['all', 'pending', 'approved', 'rejected'].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 px-6 py-3 text-sm font-medium border-b-2 transition-colors capitalize ${activeTab === tab ? 'border-[#00509E] text-[#00509E] bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                  {tab}
                </button>)}
            </div>

            <div className="divide-y divide-gray-100">
              {filteredNotifications.map(notif => <div key={notif.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getBgColor(notif.type)}`}>
                      {getIcon(notif.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {notif.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {notif.details}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">{notif.time}</p>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">
                      Lihat Detail
                    </Button>
                  </div>
                </div>)}
            </div>
          </Card>
        </div>
      </main>
    </div>;
}