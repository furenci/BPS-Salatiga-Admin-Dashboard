import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Mail, Lock, LogIn } from 'lucide-react';
export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production, this would call an API
    navigate('/');
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#00509E] text-white text-3xl font-bold mb-4 shadow-lg">
            B
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            BPS Salatiga
          </h1>
          <p className="text-gray-600">Sistem Administrasi Surat</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-t-4 border-t-[#00509E]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Selamat Datang
            </h2>
            <p className="text-gray-500 text-sm">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input label="Email" type="email" placeholder="nama@bps.go.id" value={email} onChange={e => setEmail(e.target.value)} leftIcon={<Mail className="w-4 h-4" />} required />

            <Input label="Password" type="password" placeholder="Masukkan password Anda" value={password} onChange={e => setPassword(e.target.value)} leftIcon={<Lock className="w-4 h-4" />} required />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00509E] focus:ring-[#00509E]" />
                <span className="text-gray-600">Ingat saya</span>
              </label>
              <a href="#" className="text-[#00509E] hover:underline font-medium">
                Lupa password?
              </a>
            </div>

            <Button type="submit" className="w-full py-6 text-lg shadow-lg shadow-blue-900/20" leftIcon={<LogIn className="w-5 h-5" />}>
              Masuk
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{' '}
              <Link to="/register" className="text-[#00509E] font-medium hover:underline">
                Daftar sekarang
              </Link>
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2023 Badan Pusat Statistik Kota Salatiga</p>
          <p className="mt-1">Sistem Administrasi Surat Tugas</p>
        </div>
      </div>
    </div>;
}