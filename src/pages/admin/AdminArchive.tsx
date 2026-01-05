import React, { useState } from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Search, Download, Eye, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
export function AdminArchive() {
  const [filterStatus, setFilterStatus] = useState('all');
  const mockData = [{
    id: '1',
    number: 'ST/2023/105',
    type: 'Surat Tugas',
    date: '2023-10-26',
    creator: 'Raina',
    subject: 'Perjalanan Dinas ke Semarang',
    status: 'Pending'
  }, {
    id: '2',
    number: 'ND/2023/042',
    type: 'Surat Dinas',
    date: '2023-10-25',
    creator: 'Budi',
    subject: 'Undangan Rapat Koordinasi',
    status: 'Approved'
  }, {
    id: '3',
    number: 'ST/2023/104',
    type: 'Surat Tugas',
    date: '2023-10-24',
    creator: 'Siti',
    subject: 'Pengawasan Lapangan',
    status: 'Approved'
  }, {
    id: '4',
    number: 'ST/2023/103',
    type: 'Surat Tugas',
    date: '2023-10-23',
    creator: 'Raina',
    subject: 'Pelatihan Petugas',
    status: 'Rejected'
  }, {
    id: '5',
    number: 'ND/2023/041',
    type: 'Surat Dinas',
    date: '2023-10-22',
    creator: 'Ahmad',
    subject: 'Permintaan Data Statistik',
    status: 'Approved'
  }, {
    id: '6',
    number: 'ST/2023/102',
    type: 'Surat Tugas',
    date: '2023-10-20',
    creator: 'Raina',
    subject: 'Kunjungan ke Dinas Pertanian',
    status: 'Approved'
  }, {
    id: '7',
    number: 'ST/2023/101',
    type: 'Surat Tugas',
    date: '2023-10-18',
    creator: 'Budi',
    subject: 'Survey Harga Pasar',
    status: 'Approved'
  }, {
    id: '8',
    number: 'ND/2023/040',
    type: 'Surat Dinas',
    date: '2023-10-15',
    creator: 'Siti',
    subject: 'Laporan Bulanan',
    status: 'Draft'
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Draft':
        return <Badge variant="default">Draft</Badge>;
      case 'Pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'Approved':
        return <Badge variant="success">Approved</Badge>;
      case 'Rejected':
        return <Badge variant="danger">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <Header user={{
      name: 'Admin',
      role: 'Administrator',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Semua Arsip Surat
              </h1>
              <p className="text-gray-500">
                Arsip lengkap semua surat tugas dan surat dinas BPS Salatiga.
              </p>
            </div>
            <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
              Export Data
            </Button>
          </div>

          <Card className="overflow-hidden" noPadding>
            <div className="p-6 border-b border-gray-100 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Cari nomor atau perihal..." className="pl-9 pr-4 h-10 w-full rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent" />
                </div>
                <div>
                  <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                    <option value="all">Semua Jenis Surat</option>
                    <option value="tugas">Surat Tugas</option>
                    <option value="dinas">Surat Dinas</option>
                  </select>
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
                <div>
                  <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                    <option value="">Pilih Bulan</option>
                    <option value="1">Januari 2023</option>
                    <option value="10">Oktober 2023</option>
                    <option value="11">November 2023</option>
                    <option value="12">Desember 2023</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-medium">No. Surat</th>
                    <th className="px-6 py-4 font-medium">Jenis</th>
                    <th className="px-6 py-4 font-medium">Tanggal</th>
                    <th className="px-6 py-4 font-medium">Pembuat</th>
                    <th className="px-6 py-4 font-medium">Perihal</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mockData.map(item => <tr key={item.id} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {item.number}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.type === 'Surat Tugas' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.date}</td>
                      <td className="px-6 py-4 text-gray-900">
                        {item.creator}
                      </td>
                      <td className="px-6 py-4 text-gray-900 max-w-xs truncate">
                        {item.subject}
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(item.status)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-gray-500 hover:text-[#00509E] hover:bg-blue-50 rounded transition-colors" title="Lihat Detail">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded transition-colors" title="Download">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Menampilkan <span className="font-medium">1</span> sampai{' '}
                <span className="font-medium">{mockData.length}</span> dari{' '}
                <span className="font-medium">247</span> data
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