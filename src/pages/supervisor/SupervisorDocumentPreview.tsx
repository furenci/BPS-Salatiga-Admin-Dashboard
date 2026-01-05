import React, { useState } from 'react';
import { SupervisorSidebar } from '../../components/SupervisorSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ArrowLeft, ZoomIn, ZoomOut, CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
export function SupervisorDocumentPreview() {
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const [openSection, setOpenSection] = useState<string | null>('detail');
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    // Auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };
  const handleSign = () => {
    // Mock signing process
    alert('Surat berhasil ditandatangani!');
    setShowPinModal(false);
    navigate('/supervisor');
  };
  return <div className="min-h-screen bg-gray-50">
      <SupervisorSidebar />
      <Header user={{
      name: 'Pak Hartono',
      role: 'Kepala BPS Salatiga',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300 pb-24 md:pb-8">
        <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => navigate('/supervisor')} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Preview Surat ST/2023/105
              </h1>
              <p className="text-sm text-gray-500">
                Perjalanan Dinas ke Semarang
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-180px)] min-h-[600px]">
            {/* Left Column: Document Preview */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <Card className="flex-1 flex flex-col overflow-hidden bg-gray-100 border-gray-300" noPadding>
                {/* Toolbar */}
                <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-gray-600">
                    Halaman 1 dari 2
                  </span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))} className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-medium w-12 text-center">
                      {zoomLevel}%
                    </span>
                    <button onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))} className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Document Viewer Area */}
                <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center bg-gray-200/50">
                  <div className="bg-white shadow-lg transition-transform duration-200 origin-top" style={{
                  width: '595px',
                  minHeight: '842px',
                  transform: `scale(${zoomLevel / 100})`,
                  marginBottom: '2rem'
                }}>
                    {/* Mock Letter Content */}
                    <div className="p-12 h-full flex flex-col relative">
                      {/* Letterhead */}
                      <div className="flex items-center gap-4 border-b-2 border-black pb-4 mb-6">
                        <div className="w-16 h-16 bg-blue-900 rounded flex items-center justify-center text-white font-bold text-xl">
                          BPS
                        </div>
                        <div className="text-center flex-1">
                          <h2 className="font-bold text-lg uppercase tracking-wider">
                            Badan Pusat Statistik
                          </h2>
                          <h3 className="font-bold text-xl uppercase tracking-wider">
                            Kota Salatiga
                          </h3>
                          <p className="text-xs mt-1">
                            Jl. Lingkar Selatan Salatiga Km. 2, Sidomukti,
                            Salatiga 50724
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center mb-6">
                        <h4 className="font-bold underline text-lg">
                          SURAT TUGAS
                        </h4>
                        <p>Nomor: ST/2023/105</p>
                      </div>

                      <div className="space-y-4 text-sm leading-relaxed text-justify">
                        <p>
                          Kepala Badan Pusat Statistik Kota Salatiga menugaskan
                          kepada:
                        </p>

                        <table className="w-full ml-4 mb-4">
                          <tbody>
                            <tr>
                              <td className="w-32 py-1">Nama</td>
                              <td className="py-1">: Raina</td>
                            </tr>
                            <tr>
                              <td className="w-32 py-1">NIP</td>
                              <td className="py-1">: 19901234 567890 1 234</td>
                            </tr>
                            <tr>
                              <td className="w-32 py-1">Jabatan</td>
                              <td className="py-1">: Staff Administrasi</td>
                            </tr>
                          </tbody>
                        </table>

                        <p>
                          Untuk melaksanakan Perjalanan Dinas Dalam Kota dalam
                          rangka Koordinasi dan Konsultasi terkait Persiapan
                          Sensus Pertanian 2023 di Dinas Pertanian Kota
                          Salatiga.
                        </p>

                        <p>Kegiatan tersebut akan dilaksanakan pada:</p>

                        <table className="w-full ml-4 mb-4">
                          <tbody>
                            <tr>
                              <td className="w-32 py-1">Hari/Tanggal</td>
                              <td className="py-1">: Senin, 30 Oktober 2023</td>
                            </tr>
                            <tr>
                              <td className="w-32 py-1">Tempat</td>
                              <td className="py-1">
                                : Dinas Pertanian Kota Salatiga
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Signature Area */}
                      <div className="mt-auto ml-auto w-64 text-center relative">
                        <p className="mb-1">Salatiga, 26 Oktober 2023</p>
                        <p className="font-bold mb-16">
                          Kepala BPS Kota Salatiga
                        </p>

                        {/* Signature Placeholder */}
                        <div className="absolute top-12 left-0 right-0 bottom-8 flex items-center justify-center pointer-events-none">
                          <div className="w-full h-full border-2 border-yellow-400 border-dashed bg-yellow-50/30 rounded flex items-center justify-center text-yellow-600 text-xs font-bold uppercase tracking-widest">
                            Tempat Tanda Tangan
                          </div>
                        </div>

                        <p className="font-bold underline">
                          Ir. Satrio Wibowo, M.Si
                        </p>
                        <p>NIP. 19750101 200003 1 001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Summary & Actions */}
            <div className="lg:col-span-5 flex flex-col h-full overflow-y-auto pr-2 pb-20 lg:pb-0">
              <div className="space-y-4">
                {/* Accordion 1: Detail Surat */}
                <Card className="overflow-hidden" noPadding>
                  <button onClick={() => toggleSection('detail')} className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <span className="font-bold text-gray-900">
                      Detail Surat
                    </span>
                    {openSection === 'detail' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'detail' && <div className="p-4 space-y-3 text-sm bg-gray-50/50">
                      <div className="flex justify-between">
                        <span className="text-gray-500">No. Surat</span>
                        <span className="font-medium">ST/2023/105</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tanggal</span>
                        <span className="font-medium">26 Oktober 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Jenis</span>
                        <span className="font-medium">Surat Tugas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Prioritas</span>
                        <Badge variant="danger">PENTING</Badge>
                      </div>
                    </div>}
                </Card>

                {/* Accordion 2: Pegawai */}
                <Card className="overflow-hidden" noPadding>
                  <button onClick={() => toggleSection('pegawai')} className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <span className="font-bold text-gray-900">
                      Pegawai Ditugaskan
                    </span>
                    {openSection === 'pegawai' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'pegawai' && <div className="p-4 space-y-3 text-sm bg-gray-50/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                          R
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Raina</p>
                          <p className="text-xs text-gray-500">
                            Staff Administrasi
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">NIP</span>
                        <span className="font-medium">
                          19901234 567890 1 234
                        </span>
                      </div>
                    </div>}
                </Card>

                {/* Accordion 3: Tujuan & Anggaran */}
                <Card className="overflow-hidden" noPadding>
                  <button onClick={() => toggleSection('anggaran')} className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <span className="font-bold text-gray-900">
                      Tujuan & Anggaran
                    </span>
                    {openSection === 'anggaran' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'anggaran' && <div className="p-4 space-y-3 text-sm bg-gray-50/50">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tujuan</span>
                        <span className="font-medium text-right max-w-[200px]">
                          Perjalanan Dinas ke Semarang
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tanggal Kegiatan</span>
                        <span className="font-medium">30 Oktober 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Mata Anggaran</span>
                        <span className="font-medium">2901.EBA.994.002.B</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Estimasi Biaya</span>
                        <span className="font-bold text-gray-900">
                          Rp 500.000
                        </span>
                      </div>
                    </div>}
                </Card>

                {/* Accordion 4: Timeline */}
                <Card className="overflow-hidden" noPadding>
                  <button onClick={() => toggleSection('timeline')} className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <span className="font-bold text-gray-900">Timeline</span>
                    {openSection === 'timeline' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openSection === 'timeline' && <div className="p-4 space-y-3 text-sm bg-gray-50/50">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Diajukan</span>
                        <span className="font-medium">26 Okt 2023, 09:30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Deadline</span>
                        <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                          Berangkat Besok
                        </span>
                      </div>
                    </div>}
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-6 space-y-3">
                <Button className="w-full py-4 text-lg shadow-lg shadow-green-900/20 bg-green-600 hover:bg-green-700 border-transparent" onClick={() => setShowPinModal(true)} leftIcon={<CheckCircle className="w-5 h-5" />}>
                  Setuju & Tanda Tangan
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50" leftIcon={<AlertCircle className="w-4 h-4" />}>
                    Minta Revisi
                  </Button>
                  <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50" leftIcon={<XCircle className="w-4 h-4" />}>
                    Tolak
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PIN Modal */}
      {showPinModal && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-center mb-2">
              Masukkan PIN Keamanan
            </h3>
            <p className="text-gray-500 text-center text-sm mb-6">
              Masukkan 4 digit PIN Anda untuk menandatangani dokumen ini.
            </p>

            <div className="flex justify-center gap-4 mb-8">
              {[0, 1, 2, 3].map(i => <input key={i} id={`pin-${i}`} type="password" maxLength={1} className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-[#00509E] focus:ring-0 outline-none transition-colors" value={pin[i]} onChange={e => handlePinChange(i, e.target.value)} />)}
            </div>

            <div className="space-y-3">
              <Button className="w-full py-3" onClick={handleSign}>
                Konfirmasi Tanda Tangan
              </Button>
              <button onClick={() => setShowPinModal(false)} className="w-full py-2 text-gray-500 font-medium hover:text-gray-700">
                Batal
              </button>
            </div>
          </div>
        </div>}
    </div>;
}