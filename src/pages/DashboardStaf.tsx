import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { SummaryCard } from '../components/SummaryCard';
import { LetterTable } from '../components/LetterTable';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function DashboardStaf() {
  const navigate = useNavigate();
  const mockData = [{
    id: '1',
    number: 'ST/2023/001',
    letterType: 'Surat Tugas',
    date: '2023-10-25',
    subject: 'Perjalanan Dinas ke Semarang',
    status: 'Draft' as const
  }, {
    id: '2',
    number: 'ST/2023/002',
    letterType: 'Surat Tugas',
    date: '2023-10-24',
    subject: 'Pengawasan Lapangan Sensus Pertanian',
    status: 'Draft' as const
  }, {
    id: '3',
    number: 'ND/2023/003',
    letterType: 'Surat Dinas',
    date: '2023-10-22',
    subject: 'Rapat Koordinasi Wilayah',
    status: 'Pending' as const
  }, {
    id: '4',
    number: 'ST/2023/004',
    letterType: 'Surat Tugas',
    date: '2023-10-20',
    subject: 'Pelatihan Petugas Sensus',
    status: 'Pending' as const
  }, {
    id: '5',
    number: 'ND/2023/005',
    letterType: 'Surat Dinas',
    date: '2023-10-18',
    subject: 'Monitoring Evaluasi Kinerja',
    status: 'Pending' as const
  }];
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-7xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryCard title="Draft" count={2} type="draft" />
            <SummaryCard title="Menunggu TTE" count={5} type="pending" />
            <SummaryCard title="Selesai" count={120} type="completed" />
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Surat Saya</h2>
                <p className="text-sm text-gray-500">
                  Kelola semua surat tugas dan surat dinas Anda di sini.
                </p>
              </div>
              <Button onClick={() => navigate('/create-letter')} leftIcon={<Plus className="w-5 h-5" />} className="shadow-lg shadow-blue-900/20">
                Buat Surat Baru
              </Button>
            </div>

            <LetterTable data={mockData} />

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-center">
              <button className="text-sm text-[#00509E] font-medium hover:underline">
                Lihat Semua Riwayat
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>;
}