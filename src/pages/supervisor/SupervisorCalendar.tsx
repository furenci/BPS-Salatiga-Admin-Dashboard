import React from 'react';
import { SupervisorSidebar } from '../../components/SupervisorSidebar';
import { Header } from '../../components/Header';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Calendar as CalendarIcon, MapPin, Users, Search } from 'lucide-react';
export function SupervisorCalendar() {
  // Mock calendar data
  const days = Array.from({
    length: 35
  }, (_, i) => {
    const day = i - 2; // Start from previous month
    if (day <= 0) return {
      day: 31 + day,
      currentMonth: false
    };
    if (day > 31) return {
      day: day - 31,
      currentMonth: false
    };
    return {
      day,
      currentMonth: true
    };
  });
  const activities = [{
    date: 30,
    type: 'dinas',
    title: 'Raina - Dinas Luar',
    color: 'bg-blue-500'
  }, {
    date: 30,
    type: 'dinas',
    title: 'Budi - Survey',
    color: 'bg-blue-500'
  }, {
    date: 30,
    type: 'rapat',
    title: 'Siti - Rapat',
    color: 'bg-green-500'
  }, {
    date: 26,
    type: 'dinas',
    title: 'Ahmad - Dinas',
    color: 'bg-blue-500'
  }, {
    date: 28,
    type: 'rapat',
    title: 'Rapat Internal',
    color: 'bg-green-500'
  }];
  const getActivityForDate = (date: number) => {
    return activities.filter(a => a.date === date);
  };
  return <div className="min-h-screen bg-gray-50">
      <SupervisorSidebar />
      <Header user={{
      name: 'Pak Hartono',
      role: 'Kepala BPS Salatiga',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300 pb-20">
        <div className="p-4 md:p-6 max-w-6xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Kalender Kegiatan
            </h1>
            <p className="text-gray-500">
              Monitoring kegiatan dinas luar pegawai.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Dinas Luar Hari Ini</p>
                <p className="text-xl font-bold text-gray-900">3 Orang</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Kegiatan Minggu Ini</p>
                <p className="text-xl font-bold text-gray-900">8 Kegiatan</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Pegawai Tersedia</p>
                <p className="text-xl font-bold text-gray-900">12 Orang</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar Grid */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">
                    Oktober 2023
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Bulan Lalu
                    </Button>
                    <Button variant="outline" size="sm">
                      Bulan Depan
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => <div key={day} className="bg-gray-50 p-2 text-center text-xs font-medium text-gray-500">
                        {day}
                      </div>)}

                  {days.map((d, i) => {
                  const dayActivities = d.currentMonth ? getActivityForDate(d.day) : [];
                  return <div key={i} className={`bg-white min-h-[80px] p-2 relative hover:bg-gray-50 transition-colors cursor-pointer ${!d.currentMonth ? 'text-gray-300 bg-gray-50/50' : 'text-gray-900'}`}>
                        <span className={`text-sm font-medium ${d.day === 30 && d.currentMonth ? 'bg-[#00509E] text-white w-6 h-6 rounded-full flex items-center justify-center' : ''}`}>
                          {d.day}
                        </span>

                        <div className="mt-1 space-y-1">
                          {dayActivities.map((act, idx) => <div key={idx} className="flex items-center gap-1">
                              <div className={`w-1.5 h-1.5 rounded-full ${act.color}`}></div>
                              <span className="text-[10px] truncate text-gray-600 hidden md:block">
                                {act.title}
                              </span>
                            </div>)}
                          {dayActivities.length > 0 && <div className="md:hidden flex justify-center mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>}
                        </div>
                      </div>;
                })}
                </div>
              </Card>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Selected Date Detail */}
              <Card>
                <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  Senin, 30 Oktober 2023
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Raina</p>
                      <p className="text-xs text-gray-500">
                        Perjalanan Dinas ke Semarang
                      </p>
                      <Badge variant="outline" className="mt-1 text-[10px]">
                        08:00 - 16:00
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Budi Santoso</p>
                      <p className="text-xs text-gray-500">
                        Survey Harga Pasar
                      </p>
                      <Badge variant="outline" className="mt-1 text-[10px]">
                        09:00 - 12:00
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[40px] bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Siti Aminah</p>
                      <p className="text-xs text-gray-500">
                        Rapat Koordinasi Wilayah
                      </p>
                      <Badge variant="outline" className="mt-1 text-[10px]">
                        13:00 - 15:00
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Staff Availability Check */}
              <Card>
                <h3 className="font-bold text-gray-900 mb-4">
                  Cek Ketersediaan
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Cari nama pegawai..." className="pl-9 pr-4 h-10 w-full rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00509E]" />
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="font-bold text-green-700 text-sm">
                        Ahmad Fauzi
                      </span>
                    </div>
                    <p className="text-xs text-green-600">
                      Tersedia untuk ditugaskan hari ini.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>;
}