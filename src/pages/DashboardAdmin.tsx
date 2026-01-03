import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Calendar, Download, Filter, Search, Eye, Trash2, FileText, CheckCircle, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
export function DashboardAdmin() {
  // Mock Data for Charts
  const barData = [{
    name: 'Jan',
    surat: 45
  }, {
    name: 'Feb',
    surat: 52
  }, {
    name: 'Mar',
    surat: 38
  }, {
    name: 'Apr',
    surat: 65
  }, {
    name: 'May',
    surat: 48
  }, {
    name: 'Jun',
    surat: 55
  }];
  const pieData = [{
    name: 'Approved',
    value: 120
  }, {
    name: 'Rejected',
    value: 15
  }, {
    name: 'Pending',
    value: 25
  }];
  const COLORS = ['#10B981', '#EF4444', '#F59E0B'];
  const recentActivities = [{
    id: 1,
    user: 'Raina',
    action: 'created surat',
    target: '#101',
    time: '2 mins ago',
    icon: FileText,
    color: 'text-blue-500 bg-blue-50'
  }, {
    id: 2,
    user: 'Pak Kepala',
    action: 'approved surat',
    target: '#099',
    time: '1 hour ago',
    icon: CheckCircle,
    color: 'text-green-500 bg-green-50'
  }, {
    id: 3,
    user: 'Joko',
    action: 'archived surat',
    target: '#095',
    time: '3 hours ago',
    icon: FileText,
    color: 'text-gray-500 bg-gray-50'
  }, {
    id: 4,
    user: 'Pak Kepala',
    action: 'rejected surat',
    target: '#100',
    time: '5 hours ago',
    icon: XCircle,
    color: 'text-red-500 bg-red-50'
  }];
  return <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header user={{
      name: 'Joko',
      role: 'Admin',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Start Date - End Date" className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#00509E] focus:outline-none w-64" />
              </div>
            </div>
            <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
              Export to Excel
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="h-80">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Jumlah Surat per Bulan
                  </h3>
                  <ResponsiveContainer width="100%" height="85%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip cursor={{
                      fill: '#f3f4f6'
                    }} />
                      <Bar dataKey="surat" fill="#00509E" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="h-80">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Status Surat
                  </h3>
                  <ResponsiveContainer width="100%" height="85%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              {/* Master Data Table */}
              <Card className="overflow-hidden" noPadding>
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Semua Arsip Surat
                  </h3>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" placeholder="Cari surat..." className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#00509E] focus:outline-none w-full sm:w-64" />
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-3 font-medium">No. Surat</th>
                        <th className="px-6 py-3 font-medium">Jenis</th>
                        <th className="px-6 py-3 font-medium">Pegawai</th>
                        <th className="px-6 py-3 font-medium">Tanggal</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                        <th className="px-6 py-3 font-medium text-right">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[1, 2, 3, 4, 5].map(i => <tr key={i} className="bg-white hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-3 font-medium text-gray-900">
                            ST/2023/10{i}
                          </td>
                          <td className="px-6 py-3 text-gray-600">
                            Surat Tugas
                          </td>
                          <td className="px-6 py-3 text-gray-900">Raina</td>
                          <td className="px-6 py-3 text-gray-600">
                            2{i} Okt 2023
                          </td>
                          <td className="px-6 py-3">
                            <Badge variant={i % 2 === 0 ? 'success' : 'warning'}>
                              {i % 2 === 0 ? 'Approved' : 'Pending'}
                            </Badge>
                          </td>
                          <td className="px-6 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-1.5 text-gray-500 hover:text-[#00509E] hover:bg-blue-50 rounded transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Right Sidebar - Activity Log */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Activity Log
                </h3>
                <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                  {recentActivities.map(activity => <div key={activity.id} className="relative pl-10">
                      <div className={`absolute left-2 top-0 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${activity.color}`}>
                        <activity.icon className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.user}</span>{' '}
                          {activity.action}{' '}
                          <span className="font-medium text-[#00509E]">
                            {activity.target}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>)}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>;
}