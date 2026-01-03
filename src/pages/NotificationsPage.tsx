import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Bell, CheckCircle, AlertCircle, Info, Clock, Check, Trash2, Filter, BellOff } from 'lucide-react';
interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
export function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'read'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([{
    id: '1',
    type: 'success',
    title: 'Surat Disetujui',
    message: 'Surat Tugas ST/2023/105 telah disetujui oleh Pak Kepala',
    timestamp: '5 menit yang lalu',
    isRead: false
  }, {
    id: '2',
    type: 'warning',
    title: 'Revisi Diperlukan',
    message: 'Surat Tugas ST/2023/104 memerlukan revisi pada bagian anggaran',
    timestamp: '1 jam yang lalu',
    isRead: false
  }, {
    id: '3',
    type: 'info',
    title: 'Pengingat',
    message: 'Anda memiliki 3 surat yang menunggu persetujuan',
    timestamp: '2 jam yang lalu',
    isRead: false
  }, {
    id: '4',
    type: 'success',
    title: 'Surat Terkirim',
    message: 'Surat Tugas ST/2023/103 berhasil dikirim ke penerima',
    timestamp: '1 hari yang lalu',
    isRead: true
  }, {
    id: '5',
    type: 'info',
    title: 'Pembaruan Sistem',
    message: 'Sistem akan menjalani maintenance pada Minggu, 29 Oktober 2023',
    timestamp: '2 hari yang lalu',
    isRead: true
  }]);
  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };
  const getIconColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-orange-600 bg-orange-100';
      case 'info':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => notif.id === id ? {
      ...notif,
      isRead: true
    } : notif));
  };
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({
      ...notif,
      isRead: true
    })));
  };
  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };
  const filteredNotifications = notifications.filter(notif => {
    if (activeTab === 'unread') return !notif.isRead;
    if (activeTab === 'read') return notif.isRead;
    return true;
  });
  const unreadCount = notifications.filter(n => !n.isRead).length;
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Bell className="w-7 h-7 text-[#00509E]" />
                Notifikasi
                {unreadCount > 0 && <Badge variant="danger" className="text-xs">
                    {unreadCount} Baru
                  </Badge>}
              </h1>
              <p className="text-gray-500 mt-1">
                Kelola semua notifikasi dan pembaruan sistem Anda.
              </p>
            </div>
            {unreadCount > 0 && <button onClick={markAllAsRead} className="text-sm text-[#00509E] font-medium hover:underline flex items-center gap-1">
                <Check className="w-4 h-4" /> Tandai Semua Dibaca
              </button>}
          </div>

          {/* Tabs */}
          <Card className="overflow-hidden" noPadding>
            <div className="flex border-b border-gray-200">
              <button onClick={() => setActiveTab('all')} className={`flex-1 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'all' ? 'border-[#00509E] text-[#00509E] bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                Semua ({notifications.length})
              </button>
              <button onClick={() => setActiveTab('unread')} className={`flex-1 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'unread' ? 'border-[#00509E] text-[#00509E] bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                Belum Dibaca ({unreadCount})
              </button>
              <button onClick={() => setActiveTab('read')} className={`flex-1 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'read' ? 'border-[#00509E] text-[#00509E] bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                Sudah Dibaca ({notifications.length - unreadCount})
              </button>
            </div>

            {/* Notifications List */}
            <div className="divide-y divide-gray-100">
              {filteredNotifications.length === 0 ? <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BellOff className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    Tidak Ada Notifikasi
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {activeTab === 'unread' && 'Semua notifikasi sudah dibaca'}
                    {activeTab === 'read' && 'Belum ada notifikasi yang dibaca'}
                    {activeTab === 'all' && 'Belum ada notifikasi untuk ditampilkan'}
                  </p>
                </div> : filteredNotifications.map(notif => <div key={notif.id} className={`p-4 hover:bg-gray-50 transition-colors ${!notif.isRead ? 'bg-blue-50/30' : ''}`}>
                    <div className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getIconColor(notif.type)}`}>
                        {getIcon(notif.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className={`font-medium ${!notif.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notif.title}
                            {!notif.isRead && <span className="ml-2 inline-block w-2 h-2 bg-[#00509E] rounded-full"></span>}
                          </h3>
                          <div className="flex items-center gap-1 shrink-0">
                            {!notif.isRead && <button onClick={() => markAsRead(notif.id)} className="p-1.5 text-gray-400 hover:text-[#00509E] hover:bg-blue-50 rounded transition-colors" title="Tandai dibaca">
                                <Check className="w-4 h-4" />
                              </button>}
                            <button onClick={() => deleteNotification(notif.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Hapus">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <p className={`text-sm mb-2 ${!notif.isRead ? 'text-gray-700' : 'text-gray-500'}`}>
                          {notif.message}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {notif.timestamp}
                        </div>
                      </div>
                    </div>
                  </div>)}
            </div>
          </Card>
        </div>
      </main>
    </div>;
}