import React, { useState } from 'react';
import { SupervisorSidebar } from '../../components/SupervisorSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Clock, CheckCircle, FileText, AlertCircle, ChevronRight, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function SupervisorDashboard() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const letters = [{
    id: 1,
    number: 'ST/2023/105',
    subject: 'Perjalanan Dinas ke Semarang',
    submitter: 'Raina',
    date: '26 Okt 2023, 09:30',
    priority: 'PENTING',
    deadline: 'Berangkat Besok',
    status: 'pending'
  }, {
    id: 2,
    number: 'ST/2023/104',
    subject: 'Pengawasan Lapangan Sensus Pertanian',
    submitter: 'Budi',
    date: '26 Okt 2023, 08:15',
    priority: 'SEGERA',
    deadline: 'Deadline: 2 hari lagi',
    status: 'pending'
  }, {
    id: 3,
    number: 'ND/2023/042',
    subject: 'Undangan Rapat Koordinasi',
    submitter: 'Siti',
    date: '25 Okt 2023, 16:45',
    priority: 'BIASA',
    deadline: 'Deadline: 5 hari lagi',
    status: 'pending'
  }, {
    id: 4,
    number: 'ST/2023/103',
    subject: 'Pelatihan Petugas Sensus',
    submitter: 'Ahmad',
    date: '25 Okt 2023, 14:20',
    priority: 'PENTING',
    deadline: 'Terlambat 1 Hari',
    status: 'pending'
  }];
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'PENTING':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'SEGERA':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };
  const getDeadlineColor = (deadline: string) => {
    if (deadline.includes('Besok') || deadline.includes('Terlambat')) return 'text-red-600 font-bold';
    return 'text-gray-500';
  };
  const filteredLetters = activeFilter === 'all' ? letters : letters.filter(l => l.priority.toLowerCase() === activeFilter.toLowerCase());
  return <div className="min-h-screen bg-gray-50">
      <SupervisorSidebar />
      <Header user={{
      name: 'Pak Hartono',
      role: 'Kepala BPS Salatiga',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300 pb-20">
        <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Inbox Persetujuan
            </h1>
            <p className="text-gray-500">
              Surat yang menunggu tanda tangan Anda.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <Card className="p-3 md:p-4 border-l-4 border-l-orange-500 flex flex-col items-center text-center">
              <Clock className="w-6 h-6 text-orange-500 mb-2" />
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-500">Menunggu</p>
            </Card>
            <Card className="p-3 md:p-4 border-l-4 border-l-green-500 flex flex-col items-center text-center">
              <CheckCircle className="w-6 h-6 text-green-500 mb-2" />
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-xs text-gray-500">Disetujui Hari Ini</p>
            </Card>
            <Card className="p-3 md:p-4 border-l-4 border-l-blue-500 flex flex-col items-center text-center">
              <FileText className="w-6 h-6 text-blue-500 mb-2" />
              <p className="text-2xl font-bold text-gray-900">45</p>
              <p className="text-xs text-gray-500">Total Bulan Ini</p>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
            {['all', 'penting', 'segera', 'biasa'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${activeFilter === filter ? 'bg-[#00509E] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}
                `}>
                {filter === 'all' ? 'Semua (12)' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>)}
          </div>

          {/* Letter Cards List */}
          <div className="space-y-4">
            {filteredLetters.map(letter => <div key={letter.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${getPriorityColor(letter.priority)}`}>
                      {letter.priority}
                    </span>
                    <span className={`text-xs ${getDeadlineColor(letter.deadline)} flex items-center gap-1`}>
                      {letter.deadline.includes('Terlambat') && <AlertCircle className="w-3 h-3" />}
                      {letter.deadline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {letter.subject}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{letter.number}</p>

                  <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                      {letter.submitter.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Diajukan oleh</p>
                      <p className="text-sm font-medium text-gray-900">
                        {letter.submitter}
                      </p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-xs text-gray-500">Tanggal</p>
                      <p className="text-xs font-medium text-gray-900">
                        {letter.date}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                      Tolak
                    </Button>
                    <Button className="w-full bg-[#00509E] hover:bg-blue-700" onClick={() => navigate(`/supervisor/preview/${letter.id}`)}>
                      Lihat & Tanda Tangani
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </main>
    </div>;
}