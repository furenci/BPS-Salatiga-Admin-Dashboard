import React from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Search, Calendar, Filter } from 'lucide-react';
export function AdminActivityLog() {
  const activities = [{
    id: 1,
    user: 'Raina',
    action: 'mengedit Surat No. 102',
    details: 'Mengubah mata anggaran dari A ke B',
    time: '26 Okt 2023, 12:34 WIB',
    ip: '192.168.1.100'
  }, {
    id: 2,
    user: 'Budi',
    action: 'menghapus draft Surat No. 099',
    details: 'Surat duplikat',
    time: '26 Okt 2023, 11:20 WIB',
    ip: '192.168.1.102'
  }, {
    id: 3,
    user: 'Pak Kepala',
    action: 'menyetujui Surat No. 105',
    details: 'Persetujuan via Mobile',
    time: '26 Okt 2023, 09:15 WIB',
    ip: '192.168.1.50'
  }, {
    id: 4,
    user: 'Raina',
    action: 'membuat Surat No. 105',
    details: 'Surat Tugas Perjalanan Dinas',
    time: '26 Okt 2023, 08:45 WIB',
    ip: '192.168.1.100'
  }, {
    id: 5,
    user: 'Siti',
    action: 'login ke sistem',
    details: 'Login berhasil',
    time: '26 Okt 2023, 08:00 WIB',
    ip: '192.168.1.105'
  }, {
    id: 6,
    user: 'Admin',
    action: 'melakukan force edit Surat No. 098',
    details: 'Koreksi kesalahan nominal',
    time: '25 Okt 2023, 16:30 WIB',
    ip: '192.168.1.10'
  }];
  return <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <Header user={{
      name: 'Admin',
      role: 'Administrator',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-5xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Activity Log (Audit Trail)
            </h1>
            <p className="text-gray-500">
              Jejak lengkap aktivitas pengguna untuk transparansi dan keamanan
              data.
            </p>
          </div>

          <Card className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Start Date - End Date" className="pl-9 pr-4 h-10 w-full rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
              </div>
              <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                <option value="">Semua User</option>
                <option value="Raina">Raina</option>
                <option value="Budi">Budi</option>
                <option value="Pak Kepala">Pak Kepala</option>
              </select>
              <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                <option value="">Semua Aksi</option>
                <option value="Create">Create</option>
                <option value="Edit">Edit</option>
                <option value="Delete">Delete</option>
                <option value="Approve">Approve</option>
              </select>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Cari aktivitas..." className="pl-9 pr-4 h-10 w-full rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {activities.map(activity => <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-[#00509E] group-[.is-active]:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="font-bold text-xs">
                      {activity.user.charAt(0)}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900">
                        {activity.user}
                      </div>
                      <time className="font-caveat font-medium text-[#00509E] text-xs">
                        {activity.time}
                      </time>
                    </div>
                    <div className="text-slate-700 text-sm">
                      <span className="font-medium">{activity.action}</span>
                      <p className="text-slate-500 mt-1 text-xs">
                        {activity.details}
                      </p>
                    </div>
                    <div className="mt-2 text-xs text-slate-400 font-mono">
                      IP: {activity.ip}
                    </div>
                  </div>
                </div>)}
            </div>
          </Card>
        </div>
      </main>
    </div>;
}