import React from 'react';
import { AdminSidebar } from '../components/AdminSidebar';
import { Header } from '../components/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { FileText, CheckCircle, Clock, Wallet, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Link } from 'react-router-dom';
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
    name: 'Surat Tugas',
    value: 180
  }, {
    name: 'Surat Dinas',
    value: 67
  }];
  const COLORS = ['#00509E', '#FF8C00'];
  const recentActivities = [{
    id: 1,
    text: 'Raina mengedit Surat No. 102',
    time: '2 mins ago'
  }, {
    id: 2,
    text: 'Budi menghapus draft Surat No. 099',
    time: '1 hour ago'
  }, {
    id: 3,
    text: 'Pak Kepala menyetujui Surat No. 105',
    time: '3 hours ago'
  }, {
    id: 4,
    text: 'Siti membuat Surat Dinas baru',
    time: '5 hours ago'
  }];
  return <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <Header user={{
      name: 'Admin',
      role: 'Administrator',
      avatar: ''
    }} />

      <main className="md:pl-64 pt-16 transition-all duration-300">
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-gray-500">
              Monitoring kesehatan administrasi kantor secara menyeluruh.
            </p>
          </div>

          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 border-l-4 border-l-[#00509E]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Total Surat</p>
                  <p className="text-2xl font-bold text-gray-900">247</p>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FileText className="w-5 h-5 text-[#00509E]" />
                </div>
              </div>
            </Card>
            <Card className="p-4 border-l-4 border-l-orange-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Pending Approval</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
              </div>
            </Card>
            <Card className="p-4 border-l-4 border-l-green-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Approved (Bulan Ini)</p>
                  <p className="text-2xl font-bold text-gray-900">45</p>
                </div>
                <div className="p-2 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </Card>
            <Card className="p-4 border-l-4 border-l-purple-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Anggaran Terpakai</p>
                  <p className="text-2xl font-bold text-gray-900">15 Kode</p>
                </div>
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Wallet className="w-5 h-5 text-purple-600" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="h-80">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Surat Keluar per Bulan
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
                    Distribusi Jenis Surat
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

              {/* Activity Log Widget */}
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Aktivitas Terbaru
                  </h3>
                  <Link to="/admin/activity-log" className="text-sm text-[#00509E] font-medium hover:underline flex items-center gap-1">
                    Lihat Semua <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentActivities.map(activity => <div key={activity.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-sm text-gray-700">
                          {activity.text}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {activity.time}
                      </span>
                    </div>)}
                </div>
              </Card>
            </div>

            {/* Budget Usage Table (Simplified) */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Penggunaan Anggaran Top 5
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold text-gray-900">
                          2901.EBA.994.00{i}.A
                        </span>
                        <Badge variant="primary">{8 - i}x</Badge>
                      </div>
                      <p className="text-xs text-gray-600">
                        Belanja Bahan & Operasional Kantor
                      </p>
                    </div>)}
                </div>
                <Button variant="outline" className="w-full mt-4 text-xs">
                  Lihat Detail Anggaran
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>;
}