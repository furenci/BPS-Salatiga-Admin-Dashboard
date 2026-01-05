import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Stepper } from '../components/Stepper';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { FileText, ArrowRight, ArrowLeft, Download, Calendar, MapPin, User, Users, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function FormWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [letterType, setLetterType] = useState<'tugas' | 'dinas'>('tugas');
  const steps = [{
    id: 1,
    title: 'Info Umum'
  }, {
    id: 2,
    title: 'Daftar Pegawai'
  }, {
    id: 3,
    title: 'Waktu & Tempat'
  }];
  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);else navigate('/');
  };
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);else navigate('/');
  };
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="md:pl-64 pt-16 pb-20 transition-all duration-300">
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Buat Surat Baru
            </h1>
            <p className="text-gray-500">
              Lengkapi data berikut untuk membuat surat tugas atau surat dinas.
            </p>
          </div>

          <Stepper steps={steps} currentStep={currentStep} />

          <div className="mt-8">
            <Card className="shadow-lg border-t-4 border-t-[#00509E]">
              <div className="space-y-6">
                {/* Step 1 Content */}
                {currentStep === 1 && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Jenis Surat Toggle */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Surat
                      </label>
                      <div className="flex gap-4">
                        <button onClick={() => setLetterType('tugas')} className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 flex items-center justify-center gap-2
                            ${letterType === 'tugas' ? 'border-[#00509E] bg-[#00509E] text-white shadow-md' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                          <FileText className="w-5 h-5" />
                          Surat Tugas
                        </button>
                        <button onClick={() => setLetterType('dinas')} className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 flex items-center justify-center gap-2
                            ${letterType === 'dinas' ? 'border-[#00509E] bg-[#00509E] text-white shadow-md' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                          <FileText className="w-5 h-5" />
                          Surat Dinas
                        </button>
                      </div>
                    </div>

                    {/* Conditional Fields Based on Letter Type */}
                    {letterType === 'tugas' ?
                // SURAT TUGAS LAYOUT
                <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Mata Anggaran
                            </label>
                            <div className="relative">
                              <input type="text" list="anggaran-list" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent" placeholder="Ketik untuk mencari mata anggaran..." />
                              <datalist id="anggaran-list">
                                <option value="2901.EBA.994.001.A - Belanja Bahan" />
                                <option value="2901.EBA.994.002.B - Belanja Perjalanan Dinas" />
                                <option value="2901.EBA.994.003.C - Belanja Modal" />
                              </datalist>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                              Pilih mata anggaran yang sesuai dengan kegiatan
                              ini.
                            </p>
                          </div>

                          <Select label="Klasifikasi Arsip" options={[{
                      value: 'kp',
                      label: 'KP - Kepegawaian'
                    }, {
                      value: 'ku',
                      label: 'KU - Keuangan'
                    }, {
                      value: 'ot',
                      label: 'OT - Organisasi & Tata Laksana'
                    }]} />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <label className="block text-sm font-medium text-gray-700">
                              Menimbang
                            </label>
                            <button className="text-xs text-[#00509E] font-medium hover:underline flex items-center gap-1">
                              <Download className="w-3 h-3" /> Load Template
                            </button>
                          </div>
                          <textarea rows={4} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent resize-none" placeholder="a. Bahwa dalam rangka..." />
                        </div>

                        <Select label="Mengingat" options={[{
                    value: 'uu16',
                    label: 'Undang-Undang Nomor 16 Tahun 1997'
                  }, {
                    value: 'uu5',
                    label: 'Undang-Undang Nomor 5 Tahun 2014'
                  }, {
                    value: 'pp51',
                    label: 'Peraturan Pemerintah Nomor 51 Tahun 1971'
                  }, {
                    value: 'kp12',
                    label: 'Keputusan Presiden Nomor 12 Tahun 2020'
                  }]} />
                      </> :
                // SURAT DINAS LAYOUT
                <>
                        <Select label="Klasifikasi Arsip" options={[{
                    value: 'kp',
                    label: 'KP - Kepegawaian'
                  }, {
                    value: 'ku',
                    label: 'KU - Keuangan'
                  }, {
                    value: 'ot',
                    label: 'OT - Organisasi & Tata Laksana'
                  }]} />

                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <label className="block text-sm font-medium text-gray-700">
                              Perihal
                            </label>
                            <button className="text-xs text-[#00509E] font-medium hover:underline flex items-center gap-1">
                              <Download className="w-3 h-3" /> Load Template
                            </button>
                          </div>
                          <textarea rows={4} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent resize-none" placeholder="Isi perihal surat dinas..." />
                        </div>

                        <Input label="Jumlah Satuan" type="number" placeholder="Masukkan jumlah satuan" />
                      </>}
                  </div>}

                {/* Step 2 Content */}
                {currentStep === 2 && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 flex items-start gap-3">
                      <Users className="w-5 h-5 text-[#00509E] mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-blue-900">
                          {letterType === 'tugas' ? 'Penugasan Pegawai' : 'Informasi Pembuat Surat'}
                        </h4>
                        <p className="text-xs text-blue-700 mt-1">
                          {letterType === 'tugas' ? 'Pilih pegawai yang akan ditugaskan dan anggota tim pendukung.' : 'Tentukan pembuat surat dan penandatangan.'}
                        </p>
                      </div>
                    </div>

                    {letterType === 'tugas' ?
                // SURAT TUGAS - Step 2
                <>
                        <Select label="Nama Pegawai/Mitra yang Ditugaskan" leftIcon={<User className="w-4 h-4" />} options={[{
                    value: 'raina',
                    label: 'Raina - Staff Administrasi'
                  }, {
                    value: 'budi',
                    label: 'Budi Santoso - Staff Lapangan'
                  }, {
                    value: 'siti',
                    label: 'Siti Aminah - Koordinator Wilayah'
                  }, {
                    value: 'ahmad',
                    label: 'Ahmad Fauzi - Supervisor'
                  }]} />

                        <Select label="Anggota Tim" leftIcon={<Users className="w-4 h-4" />} options={[{
                    value: 'raina',
                    label: 'Raina - Staff Administrasi'
                  }, {
                    value: 'budi',
                    label: 'Budi Santoso - Staff Lapangan'
                  }, {
                    value: 'siti',
                    label: 'Siti Aminah - Koordinator Wilayah'
                  }, {
                    value: 'ahmad',
                    label: 'Ahmad Fauzi - Supervisor'
                  }]} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input label="Pembuat Surat Tugas" defaultValue="Raina" leftIcon={<User className="w-4 h-4" />} placeholder="Nama pembuat surat" />

                          <Select label="Penandatangan" leftIcon={<PenTool className="w-4 h-4" />} options={[{
                      value: 'kepala',
                      label: 'Kepala BPS Salatiga'
                    }, {
                      value: 'wakil',
                      label: 'Wakil Kepala BPS'
                    }, {
                      value: 'sekretaris',
                      label: 'Sekretaris'
                    }]} />
                        </div>
                      </> :
                // SURAT DINAS - Step 2
                <>
                        <Select label="Pembuat Surat Keluar" leftIcon={<User className="w-4 h-4" />} options={[{
                    value: 'raina',
                    label: 'Raina - Staff Administrasi'
                  }, {
                    value: 'budi',
                    label: 'Budi Santoso - Staff Lapangan'
                  }, {
                    value: 'siti',
                    label: 'Siti Aminah - Koordinator Wilayah'
                  }, {
                    value: 'ahmad',
                    label: 'Ahmad Fauzi - Supervisor'
                  }]} />

                        <Select label="Penandatangan" leftIcon={<PenTool className="w-4 h-4" />} options={[{
                    value: 'kepala',
                    label: 'Kepala BPS Salatiga'
                  }, {
                    value: 'wakil',
                    label: 'Wakil Kepala BPS'
                  }, {
                    value: 'sekretaris',
                    label: 'Sekretaris'
                  }]} />
                      </>}
                  </div>}

                {/* Step 3 Content */}
                {currentStep === 3 && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#00509E] mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-blue-900">
                          {letterType === 'tugas' ? 'Waktu & Tempat Pelaksanaan' : 'Informasi Surat'}
                        </h4>
                        <p className="text-xs text-blue-700 mt-1">
                          {letterType === 'tugas' ? 'Tentukan jadwal pelaksanaan kegiatan dan lokasi tujuan.' : 'Tentukan tanggal surat dan tujuan pengiriman.'}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Tanggal Surat Dibuat
                        </label>
                        <div className="relative">
                          <input type="date" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent" defaultValue={new Date().toISOString().split('T')[0]} />
                          <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <Input label="Tempat Pelaksanaan" placeholder="Lokasi kegiatan" leftIcon={<MapPin className="w-4 h-4" />} />
                    </div>

                    {letterType === 'tugas' ?
                // SURAT TUGAS - Jangka Waktu
                <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Jangka Waktu Pelaksanaan
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <input type="date" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent" />
                            <span className="absolute right-8 top-2.5 text-xs text-gray-400 pointer-events-none">
                              Mulai
                            </span>
                            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                          </div>
                          <div className="relative">
                            <input type="date" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent" />
                            <span className="absolute right-8 top-2.5 text-xs text-gray-400 pointer-events-none">
                              Selesai
                            </span>
                            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div> :
                // SURAT DINAS - Tempat Tujuan
                <Input label="Tempat Tujuan Surat" placeholder="Instansi/Alamat tujuan surat" leftIcon={<MapPin className="w-4 h-4" />} />}
                  </div>}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
                <Button variant="outline" onClick={handleBack} leftIcon={currentStep === 1 ? undefined : <ArrowLeft className="w-4 h-4" />}>
                  {currentStep === 1 ? 'Batal' : 'Kembali'}
                </Button>
                <Button onClick={handleNext} rightIcon={currentStep === 3 ? undefined : <ArrowRight className="w-4 h-4" />}>
                  {currentStep === 3 ? 'Simpan Surat' : 'Lanjut'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>;
}