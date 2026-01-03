import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle, XCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
export function MobileApproval() {
  const navigate = useNavigate();
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  return <div className="min-h-screen bg-gray-100 pb-24">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center gap-3 sticky top-0 z-20">
        <button onClick={() => navigate('/')} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-semibold text-gray-900">Detail Persetujuan</h1>
      </header>

      {/* Document Preview Area */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[400px] relative">
          {/* Mock Document Header */}
          <div className="h-24 bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center text-white font-bold text-xs">
              BPS
            </div>
            <div className="flex-1">
              <div className="h-2 w-3/4 bg-gray-300 rounded mb-2"></div>
              <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Mock Document Body */}
          <div className="p-6 space-y-4">
            <div className="flex justify-center mb-6">
              <div className="h-4 w-1/3 bg-gray-800 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-gray-200 rounded"></div>
              <div className="h-2 w-full bg-gray-200 rounded"></div>
              <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 pt-4">
              <div className="h-2 w-full bg-gray-200 rounded"></div>
              <div className="h-2 w-11/12 bg-gray-200 rounded"></div>
              <div className="h-2 w-full bg-gray-200 rounded"></div>
            </div>

            {/* Signature Placeholder */}
            <div className="flex justify-end mt-12">
              <div className="w-32 h-24 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-gray-400 text-xs text-center p-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full mb-1 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                Area Tanda Tangan Elektronik
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Accordion */}
      <div className="px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button onClick={() => setIsDetailsOpen(!isDetailsOpen)} className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 border-b border-gray-100">
            <span className="font-medium text-gray-900">Detail Surat</span>
            {isDetailsOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>

          {isDetailsOpen && <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Nomor Surat</span>
                <span className="font-medium text-gray-900">ST/2023/105</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Tanggal</span>
                <span className="font-medium text-gray-900">26 Okt 2023</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Diajukan Oleh</span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                    R
                  </div>
                  <span className="font-medium text-gray-900">Raina</span>
                </div>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Status</span>
                <Badge variant="warning">Menunggu TTE</Badge>
              </div>
            </div>}
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <Button variant="danger" className="w-full bg-white hover:bg-red-50" leftIcon={<XCircle className="w-4 h-4" />}>
            Tolak / Revisi
          </Button>
          <Button variant="success" className="w-full" leftIcon={<CheckCircle className="w-4 h-4" />}>
            Setuju & TTE
          </Button>
        </div>
      </div>
    </div>;
}