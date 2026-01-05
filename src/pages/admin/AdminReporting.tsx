import React from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { FileText, Download, Search, Calendar } from 'lucide-react';
export function AdminReporting() {
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
              Rekapitulasi & Laporan
            </h1>
            <p className="text-gray-500">
              Generate laporan custom dan export data untuk keperluan
              administrasi.
            </p>
          </div>

          {/* Quick Reports */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-left group">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <FileText className="w-5 h-5 text-[#00509E]" />
              </div>
              <h3 className="font-bold text-gray-900">Laporan Bulanan</h3>
              <p className="text-xs text-gray-500 mt-1">
                Rekap surat bulan ini
              </p>
            </button>
            <button className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-orange-300 transition-all text-left group">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-100 transition-colors">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900">Surat Pending</h3>
              <p className="text-xs text-gray-500 mt-1">
                Semua surat menunggu TTE
              </p>
            </button>
            <button className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-green-300 transition-all text-left group">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Penggunaan Anggaran</h3>
              <p className="text-xs text-gray-500 mt-1">
                Laporan YTD tahun ini
              </p>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Report Generator */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-gray-500" />
                Generate Laporan Custom
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Rentang Tanggal
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input type="date" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
                    </div>
                    <div className="relative">
                      <input type="date" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data yang Disertakan
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-[#00509E] focus:ring-[#00509E]" defaultChecked />
                      <span className="text-sm text-gray-700">Surat Tugas</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-[#00509E] focus:ring-[#00509E]" defaultChecked />
                      <span className="text-sm text-gray-700">Surat Dinas</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-[#00509E] focus:ring-[#00509E]" />
                      <span className="text-sm text-gray-700">
                        Detail Anggaran
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-[#00509E] focus:ring-[#00509E]" />
                      <span className="text-sm text-gray-700">
                        Data Pegawai
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Format File
                  </label>
                  <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                    <option value="xlsx">Excel (.xlsx)</option>
                    <option value="pdf">PDF Document (.pdf)</option>
                    <option value="csv">CSV (.csv)</option>
                  </select>
                </div>

                <Button className="w-full mt-2" leftIcon={<Download className="w-4 h-4" />}>
                  Generate & Download Laporan
                </Button>
              </div>
            </Card>

            {/* Advanced Search */}
            <Card>
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-500" />
                Pencarian Arsip Lanjutan
              </h3>

              <div className="space-y-4">
                <Input label="Kata Kunci" placeholder="Nomor surat, perihal, dll" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Jenis Surat
                    </label>
                    <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                      <option value="">Semua</option>
                      <option value="tugas">Surat Tugas</option>
                      <option value="dinas">Surat Dinas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Status
                    </label>
                    <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                      <option value="">Semua</option>
                      <option value="approved">Approved</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pegawai Terkait
                  </label>
                  <select className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]">
                    <option value="">Pilih Pegawai</option>
                    <option value="raina">Raina</option>
                    <option value="budi">Budi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mata Anggaran
                  </label>
                  <input type="text" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" placeholder="Cari kode anggaran..." />
                </div>

                <Button variant="outline" className="w-full mt-2" leftIcon={<Search className="w-4 h-4" />}>
                  Cari Arsip
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>;
}