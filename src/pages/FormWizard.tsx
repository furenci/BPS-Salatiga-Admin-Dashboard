import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Stepper } from '../components/Stepper';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { FileText, ArrowRight, ArrowLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function FormWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
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
              Lengkapi data berikut untuk membuat surat tugas atau nota dinas.
            </p>
          </div>

          <Stepper steps={steps} currentStep={currentStep} />

          <div className="mt-8">
            <Card className="shadow-lg border-t-4 border-t-[#00509E]">
              <div className="space-y-6">
                {/* Step 1 Content */}
                {currentStep === 1 && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select label="Jenis Surat" options={[{
                    value: 'st',
                    label: 'Surat Tugas'
                  }, {
                    value: 'nd',
                    label: 'Nota Dinas'
                  }, {
                    value: 'sk',
                    label: 'Surat Keputusan'
                  }]} />
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
                        Pilih mata anggaran yang sesuai dengan kegiatan ini.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="block text-sm font-medium text-gray-700">
                          Menimbang & Mengingat
                        </label>
                        <button className="text-xs text-[#00509E] font-medium hover:underline flex items-center gap-1">
                          <Download className="w-3 h-3" /> Load Template
                        </button>
                      </div>
                      <textarea rows={5} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent resize-none" placeholder="a. Bahwa dalam rangka..." />
                    </div>
                  </div>}

                {/* Step 2 Content (Placeholder) */}
                {currentStep === 2 && <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00509E]">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Daftar Pegawai
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto mt-2">
                      Fitur pemilihan pegawai akan muncul di sini. Anda dapat
                      memilih satu atau lebih pegawai untuk ditugaskan.
                    </p>
                  </div>}

                {/* Step 3 Content (Placeholder) */}
                {currentStep === 3 && <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00509E]">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Waktu & Tempat
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto mt-2">
                      Detail waktu pelaksanaan dan lokasi kegiatan akan diisi
                      pada langkah ini.
                    </p>
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