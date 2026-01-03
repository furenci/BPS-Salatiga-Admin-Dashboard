import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LetterTable } from '../components/LetterTable';
import { Download, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
export function RiwayatSurat() {
  const [filterStatus, setFilterStatus] = useState('all');
  // Extended Mock Data
  const mockData = [{
    id: '1',
    number: 'ST/2023/001',
    date: '2023-10-25',
    subject: 'Perjalanan Dinas ke Semarang',
    status: 'Draft' as const
  }, {
    id: '2',
    number: 'ST/2023/002',
    date: '2023-10-24',
    subject: 'Pengawasan Lapangan Sensus Pertanian',
    status: 'Draft' as const
  }, {
    id: '3',
    number: 'ST/2023/003',
    date: '2023-10-22',
    subject: 'Rapat Koordinasi Wilayah',
    status: 'Pending' as const
  }, {
    id: '4',
    number: 'ST/2023/004',
    date: '2023-10-20',
    subject: 'Pelatihan Petugas Sensus',
    status: 'Pending' as const
  }, {
    id: '5',
    number: 'ST/2023/005',
    date: '2023-10-18',
    subject: 'Monitoring Evaluasi Kinerja',
    status: 'Approved' as const
  }, {
    id: '6',
    number: 'ST/2023/006',
    date: '2023-10-15',
    subject: 'Kunjungan Kerja ke Dinas Pertanian',
    status: 'Approved' as const
  }, {
    id: '7',
    number: 'ST/2023/007',
    date: '2023-10-12',
    subject: 'Sosialisasi Sensus Ekonomi',
    status: 'Rejected' as const
  }, {
    id: '8',
    number: 'ST/2023/008',
    date: '2023-10-10',
    subject: 'Rapat Pleno Bulanan',
    status: 'Approved' as const
  }, {
    id: '9',
    number: 'ST/2023/009',
    date: '2023-10-08',
    subject: 'Pengambilan Data Lapangan',
    status: 'Approved' as const
  }, {
    id: '10',
    number: 'ST/2023/010',
    date: '2023-10-05',
    subject: 'Koordinasi dengan Camat Sidorejo',
    status: 'Approved' as const
  }];
  const filteredData = filterStatus === 'all' ? mockData : mockData.filter(item => item.status.toLowerCase() === filterStatus.toLowerCase());
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="md:pl-64 pt-16 transition-all duration-300 pb-8">
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Riwayat Surat
              </h1>
              <p className="text-gray-500">
                Lihat dan kelola semua riwayat surat tugas Anda.
              </p>
            </div>
            <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
              Export Data
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 border-l-4 border-l-[#00509E]">
              <p className="text-sm text-gray-500">Total Surat</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </Card>
            <Card className="p-4 border-l-4 border-l-yellow-400">
              <p className="text-sm text-gray-500">Draft</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </Card>
            <Card className="p-4 border-l-4 border-l-blue-500">
              <p className="text-sm text-gray-500">Menunggu TTE</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </Card>
            <Card className="p-4 border-l-4 border-l-green-500">
              <p className="text-sm text-gray-500">Selesai</p>
              <p className="text-2xl font-bold text-gray-900">120</p>
            </Card>
          </div>

          {/* Filters & Table */}
          <Card className="overflow-hidden" noPadding>
            <div className="p-6 border-b border-gray-100 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Cari nomor surat atau perihal..." className="pl-9 pr-4 h-10 w-full rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent" />
                </div>
                <div>
                  <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                    <option value="all">Semua Status</option>
                    <option value="draft">Draft</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="w-full" leftIcon={<Filter className="w-4 h-4" />}>
                    Filter Tanggal
                  </Button>
                </div>
              </div>
            </div>

            <LetterTable data={filteredData} />

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Menampilkan <span className="font-medium">1</span> sampai{' '}
                <span className="font-medium">{filteredData.length}</span> dari{' '}
                <span className="font-medium">127</span> data
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>;
}