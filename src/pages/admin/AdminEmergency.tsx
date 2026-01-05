import React from 'react';
import { AdminSidebar } from '../../components/AdminSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { AlertTriangle, Edit, Ban, Search } from 'lucide-react';
export function AdminEmergency() {
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
              Intervensi Darurat
            </h1>
            <p className="text-gray-500">
              Alat khusus admin untuk situasi darurat dan koreksi data.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-bold text-orange-800">Perhatian</h3>
              <p className="text-sm text-orange-700">
                Fitur ini hanya untuk situasi darurat. Semua aksi yang dilakukan
                di halaman ini akan tercatat secara permanen di audit log dengan
                status "Emergency Action". Gunakan dengan bijak.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Force Edit */}
            <Card className="border-t-4 border-t-red-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Edit className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Edit Paksa Surat</h3>
                  <p className="text-xs text-gray-500">
                    Edit surat yang sudah disetujui/selesai
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Gunakan fitur ini jika ada kesalahan data fatal (typo nominal,
                  salah tanggal) pada surat yang statusnya sudah final.
                </p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Masukkan No. Surat (misal: ST/2023/105)" className="flex-1 h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <Button variant="danger" size="sm">
                    Cari
                  </Button>
                </div>
              </div>
            </Card>

            {/* Void Letter */}
            <Card className="border-t-4 border-t-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Ban className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Batalkan Surat (Void)
                  </h3>
                  <p className="text-xs text-gray-500">
                    Tandai surat batal tanpa hapus nomor
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Gunakan fitur ini jika kegiatan batal tapi nomor surat sudah
                  terbit. Nomor tidak akan hilang agar urutan tetap terjaga.
                </p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Masukkan No. Surat (misal: ST/2023/105)" className="flex-1 h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50" size="sm">
                    Cari
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Emergency Actions */}
          <Card>
            <h3 className="font-bold text-gray-900 mb-4">
              Riwayat Intervensi Darurat
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3 font-medium">Tanggal</th>
                    <th className="px-6 py-3 font-medium">Admin</th>
                    <th className="px-6 py-3 font-medium">Aksi</th>
                    <th className="px-6 py-3 font-medium">No. Surat</th>
                    <th className="px-6 py-3 font-medium">Alasan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-gray-600">26 Okt 2023</td>
                    <td className="px-6 py-3 font-medium text-gray-900">
                      Joko
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-red-600 font-medium">
                        Force Edit
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-900">ST/2023/102</td>
                    <td className="px-6 py-3 text-gray-600">
                      Koreksi nominal anggaran salah ketik
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 text-gray-600">25 Okt 2023</td>
                    <td className="px-6 py-3 font-medium text-gray-900">
                      Admin
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-orange-600 font-medium">Void</span>
                    </td>
                    <td className="px-6 py-3 text-gray-900">ND/2023/038</td>
                    <td className="px-6 py-3 text-gray-600">
                      Kegiatan dibatalkan mendadak
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>;
}