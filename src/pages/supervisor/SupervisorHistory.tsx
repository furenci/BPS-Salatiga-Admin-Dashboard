import React from 'react';
import { SupervisorSidebar } from '../../components/SupervisorSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Download, Search, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
export function SupervisorHistory() {
  const history = [{
    id: 1,
    number: 'ST/2023/104',
    subject: 'Perjalanan Dinas ke Semarang',
    submitter: 'Raina',
    date: '26 Okt 2023, 14:30',
    status: 'approved'
  }, {
    id: 2,
    number: 'ST/2023/103',
    subject: 'Pelatihan Petugas Sensus',
    submitter: 'Budi',
    date: '25 Okt 2023, 10:15',
    status: 'rejected',
    reason: 'Anggaran tidak sesuai'
  }, {
    id: 3,
    number: 'ND/2023/041',
    subject: 'Undangan Rapat Koordinasi',
    submitter: 'Siti',
    date: '24 Okt 2023, 16:00',
    status: 'approved'
  }, {
    id: 4,
    number: 'ST/2023/102',
    subject: 'Survey Lapangan',
    submitter: 'Ahmad',
    date: '24 Okt 2023, 09:00',
    status: 'revision',
    reason: 'Perbaiki tanggal pelaksanaan'
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="success">DISETUJUI</Badge>;
      case 'rejected':
        return <Badge variant="danger">DITOLAK</Badge>;
      case 'revision':
        return <Badge variant="warning">REVISI</Badge>;
      default:
        return <Badge>UNKNOWN</Badge>;
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <SupervisorSidebar />
      <Header user={{
      name: 'Pak Hartono',
      role: 'Kepala BPS Salatiga',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300 pb-20">
        <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Riwayat Persetujuan
              </h1>
              <p className="text-gray-500">
                Surat yang telah Anda tandatangani atau proses.
              </p>
            </div>
            <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
              Export Laporan
            </Button>
          </div>

          <Card className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Cari nomor atau perihal..." className="pl-9 pr-4 h-10 w-full rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
              </div>
              <input type="date" className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
              <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                <option value="">Semua Status</option>
                <option value="approved">Disetujui</option>
                <option value="rejected">Ditolak</option>
                <option value="revision">Revisi</option>
              </select>
            </div>
          </Card>

          <div className="space-y-4">
            {history.map(item => <div key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    {getStatusBadge(item.status)}
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.subject}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{item.number}</p>

                  {item.reason && <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700">
                      <span className="font-bold">Alasan:</span> {item.reason}
                    </div>}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                        {item.submitter.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">
                        Diajukan oleh {item.submitter}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </main>
    </div>;
}