import React, { useEffect, useState, useRef } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CheckCircle, XCircle, AlertCircle, ZoomIn, ZoomOut, RotateCcw, PenTool, Upload, FileText, History, ChevronDown, ChevronUp } from 'lucide-react';
export function ApprovalPage() {
  const [signatureMode, setSignatureMode] = useState<'draw' | 'upload'>('draw');
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showHistory, setShowHistory] = useState(false);
  // Canvas drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';
    const startDrawing = (e: MouseEvent | TouchEvent) => {
      setIsDrawing(true);
      const {
        offsetX,
        offsetY
      } = getCoordinates(e, canvas);
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };
    const draw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      const {
        offsetX,
        offsetY
      } = getCoordinates(e, canvas);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      setHasSignature(true);
    };
    const stopDrawing = () => {
      setIsDrawing(false);
      ctx.closePath();
    };
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);
    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [isDrawing]);
  const getCoordinates = (e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
    if ('touches' in e) {
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top
      };
    }
    return {
      offsetX: (e as MouseEvent).offsetX,
      offsetY: (e as MouseEvent).offsetY
    };
  };
  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header user={{
      name: 'Pak Kepala',
      role: 'Kepala BPS Salatiga',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300 pb-20">
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Persetujuan Surat
              </h1>
              <p className="text-gray-500">
                Review dokumen dan bubuhkan tanda tangan elektronik.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Status Dokumen:</span>
              <Badge variant="warning">Menunggu TTE</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)] min-h-[600px]">
            {/* Left Column: Document Preview */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <Card className="flex-1 flex flex-col overflow-hidden bg-gray-100 border-gray-300" noPadding>
                {/* Toolbar */}
                <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Surat_Tugas_105.pdf</span>
                    <span className="text-gray-400">•</span>
                    <span>2 Halaman</span>
                  </div>
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
                <div className="flex-1 overflow-auto p-8 flex justify-center bg-gray-100">
                  <div className="bg-white shadow-lg transition-transform duration-200 origin-top" style={{
                  width: '595px',
                  height: '842px',
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
                          <p className="text-xs">
                            Telp: (0298) 326xxx, Email: bps3373@bps.go.id
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

                        <p>
                          Demikian Surat Tugas ini dibuat untuk dilaksanakan
                          dengan penuh tanggung jawab.
                        </p>
                      </div>

                      {/* Signature Area */}
                      <div className="mt-auto ml-auto w-64 text-center relative">
                        <p className="mb-1">Salatiga, 26 Oktober 2023</p>
                        <p className="font-bold mb-16">
                          Kepala BPS Kota Salatiga
                        </p>

                        {/* Signature Placeholder/Preview */}
                        {hasSignature && <div className="absolute top-12 left-0 right-0 bottom-8 flex items-center justify-center pointer-events-none">
                            <div className="w-32 h-20 border-2 border-blue-500 border-dashed bg-blue-50/50 rounded flex items-center justify-center text-blue-600 text-xs font-medium">
                              Preview Tanda Tangan
                            </div>
                          </div>}

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

            {/* Right Column: Approval Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6 h-full overflow-y-auto pr-2">
              {/* Letter Details */}
              <Card>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  Detail Surat
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">No. Surat</span>
                    <span className="font-medium text-gray-900">
                      ST/2023/105
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">Tanggal Surat</span>
                    <span className="font-medium text-gray-900">
                      26 Oktober 2023
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-500">Perihal</span>
                    <span className="font-medium text-gray-900 text-right max-w-[200px]">
                      Perjalanan Dinas ke Semarang
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500">Diajukan Oleh</span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                        R
                      </div>
                      <span className="font-medium text-gray-900">Raina</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Signature Interface */}
              <Card className="flex-1 flex flex-col">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-gray-500" />
                  Tanda Tangan Elektronik
                </h3>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-4">
                  <button onClick={() => setSignatureMode('draw')} className={`flex-1 pb-2 text-sm font-medium transition-colors ${signatureMode === 'draw' ? 'border-b-2 border-[#00509E] text-[#00509E]' : 'text-gray-500 hover:text-gray-700'}`}>
                    Gambar Tanda Tangan
                  </button>
                  <button onClick={() => setSignatureMode('upload')} className={`flex-1 pb-2 text-sm font-medium transition-colors ${signatureMode === 'upload' ? 'border-b-2 border-[#00509E] text-[#00509E]' : 'text-gray-500 hover:text-gray-700'}`}>
                    Upload Gambar
                  </button>
                </div>

                {/* Draw Area */}
                {signatureMode === 'draw' && <div className="flex-1 flex flex-col">
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 mb-3 flex-1 min-h-[200px]">
                      <canvas ref={canvasRef} width={400} height={200} className="w-full h-full cursor-crosshair touch-none rounded-lg" />
                      {!hasSignature && !isDrawing && <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gray-400 text-sm">
                          Tulis tanda tangan Anda di sini
                        </div>}
                    </div>
                    <div className="flex justify-end">
                      <button onClick={clearSignature} className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1">
                        <RotateCcw className="w-3 h-3" /> Reset
                      </button>
                    </div>
                  </div>}

                {/* Upload Area */}
                {signatureMode === 'upload' && <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-6 min-h-[200px]">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 font-medium">
                      Klik untuk upload gambar
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Format PNG (Transparan) max 2MB
                    </p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Pilih File
                    </Button>
                  </div>}

                {/* Comments */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Catatan (Opsional)
                  </label>
                  <textarea rows={2} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E] focus:border-transparent resize-none" placeholder="Tambahkan catatan untuk revisi atau persetujuan..." />
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="danger" className="w-full bg-white hover:bg-red-50" leftIcon={<XCircle className="w-4 h-4" />}>
                  Tolak
                </Button>
                <Button variant="outline" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50 hover:text-orange-700" leftIcon={<AlertCircle className="w-4 h-4" />}>
                  Minta Revisi
                </Button>
                <Button variant="success" className="col-span-2 w-full py-6 text-lg shadow-lg shadow-green-900/20" leftIcon={<CheckCircle className="w-5 h-5" />} disabled={!hasSignature && signatureMode === 'draw'}>
                  Setujui & Tanda Tangani
                </Button>
              </div>

              {/* Audit Trail Accordion */}
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button onClick={() => setShowHistory(!showHistory)} className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <History className="w-4 h-4" />
                    Riwayat Dokumen
                  </div>
                  {showHistory ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                </button>

                {showHistory && <div className="p-4 space-y-4 bg-white">
                    <div className="flex gap-3 relative before:absolute before:left-[11px] before:top-2 before:bottom-[-20px] before:w-0.5 before:bg-gray-100 last:before:hidden">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 relative z-10">
                        R
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Raina mengajukan surat
                        </p>
                        <p className="text-xs text-gray-500">
                          26 Okt 2023, 09:30 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 relative">
                      <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold shrink-0 relative z-10">
                        S
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Sistem memverifikasi format
                        </p>
                        <p className="text-xs text-gray-500">
                          26 Okt 2023, 09:30 WIB
                        </p>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
}