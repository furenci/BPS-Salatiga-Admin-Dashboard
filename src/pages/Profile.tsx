import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { User, Lock, Settings, Camera, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
export function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Profile Saya</h1>
            <p className="text-gray-500">
              Kelola informasi pribadi dan pengaturan akun Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1">
              <Card className="text-center h-full">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00509E] to-[#003d7a] flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg mx-auto">
                    R
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-gray-200 text-gray-600 hover:text-[#00509E] transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="text-xl font-bold text-gray-900">Raina</h2>
                <p className="text-gray-500 mb-2">Staff Administrasi</p>
                <Badge variant="primary" className="mb-6">
                  NIP. 19901234 567890 1 234
                </Badge>

                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#00509E]">127</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                      Total Surat
                    </p>
                  </div>
                  <div className="text-center border-l border-gray-100">
                    <p className="text-2xl font-bold text-orange-500">8</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                      Bulan Ini
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Tabs & Forms */}
            <div className="lg:col-span-2">
              <Card className="min-h-[500px]" noPadding>
                {/* Tabs Header */}
                <div className="flex border-b border-gray-200 overflow-x-auto">
                  <button onClick={() => setActiveTab('personal')} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'personal' ? 'border-[#00509E] text-[#00509E]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                    <User className="w-4 h-4" />
                    Informasi Pribadi
                  </button>
                  <button onClick={() => setActiveTab('security')} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'security' ? 'border-[#00509E] text-[#00509E]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                    <Lock className="w-4 h-4" />
                    Keamanan
                  </button>
                  <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'settings' ? 'border-[#00509E] text-[#00509E]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                    <Settings className="w-4 h-4" />
                    Pengaturan
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'personal' && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Nama Lengkap" defaultValue="Raina" leftIcon={<User className="w-4 h-4" />} />
                        <Input label="NIP" defaultValue="19901234 567890 1 234" disabled className="bg-gray-50" leftIcon={<Briefcase className="w-4 h-4" />} />
                        <Input label="Jabatan" defaultValue="Staff Administrasi" leftIcon={<Briefcase className="w-4 h-4" />} />
                        <Input label="Unit Kerja" defaultValue="Subbagian Umum" leftIcon={<MapPin className="w-4 h-4" />} />
                        <Input label="Email" type="email" defaultValue="raina@bps.go.id" leftIcon={<Mail className="w-4 h-4" />} />
                        <Input label="Nomor Telepon" defaultValue="0812-3456-7890" leftIcon={<Phone className="w-4 h-4" />} />
                      </div>
                      <div className="pt-4 flex justify-end">
                        <Button>Simpan Perubahan</Button>
                      </div>
                    </div>}

                  {activeTab === 'security' && <div className="space-y-6 max-w-md animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <Input label="Password Saat Ini" type="password" placeholder="••••••••" />
                      <Input label="Password Baru" type="password" placeholder="Masukan password baru" />
                      <Input label="Konfirmasi Password Baru" type="password" placeholder="Ulangi password baru" />

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="text-sm font-medium text-blue-900 mb-2">
                          Persyaratan Password:
                        </h4>
                        <ul className="text-xs text-blue-700 list-disc list-inside space-y-1">
                          <li>Minimal 8 karakter</li>
                          <li>Mengandung huruf besar dan kecil</li>
                          <li>Mengandung minimal satu angka</li>
                        </ul>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button>Update Password</Button>
                      </div>
                    </div>}

                  {activeTab === 'settings' && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Notifikasi
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Notifikasi Email
                              </p>
                              <p className="text-xs text-gray-500">
                                Terima update status surat via email
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00509E]"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Notifikasi Browser
                              </p>
                              <p className="text-xs text-gray-500">
                                Tampilkan popup notifikasi di desktop
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00509E]"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button>Simpan Pengaturan</Button>
                      </div>
                    </div>}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>;
}