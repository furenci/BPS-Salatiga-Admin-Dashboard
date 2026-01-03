import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { User, Mail, Lock, Briefcase, UserPlus, ArrowLeft } from 'lucide-react';
export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    nip: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - in production, this would call an API
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    navigate('/login');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <Link to="/login" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Kembali ke Login</span>
        </Link>

        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#00509E] text-white text-3xl font-bold mb-4 shadow-lg">
            B
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Daftar Akun Baru
          </h1>
          <p className="text-gray-600">Lengkapi data Anda untuk membuat akun</p>
        </div>

        {/* Register Card */}
        <Card className="shadow-xl border-t-4 border-t-[#00509E]">
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Nama Lengkap" name="name" type="text" placeholder="Nama sesuai identitas" value={formData.name} onChange={handleChange} leftIcon={<User className="w-4 h-4" />} required />

              <Input label="NIP" name="nip" type="text" placeholder="Nomor Induk Pegawai" value={formData.nip} onChange={handleChange} leftIcon={<Briefcase className="w-4 h-4" />} required />
            </div>

            <Input label="Email" name="email" type="email" placeholder="nama@bps.go.id" value={formData.email} onChange={handleChange} leftIcon={<Mail className="w-4 h-4" />} helperText="Gunakan email resmi BPS" required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Password" name="password" type="password" placeholder="Minimal 8 karakter" value={formData.password} onChange={handleChange} leftIcon={<Lock className="w-4 h-4" />} required />

              <Input label="Konfirmasi Password" name="confirmPassword" type="password" placeholder="Ulangi password" value={formData.confirmPassword} onChange={handleChange} leftIcon={<Lock className="w-4 h-4" />} required />
            </div>

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

            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" id="terms" className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#00509E] focus:ring-[#00509E]" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Saya menyetujui{' '}
                <a href="#" className="text-[#00509E] hover:underline font-medium">
                  syarat dan ketentuan
                </a>{' '}
                yang berlaku
              </label>
            </div>

            <Button type="submit" className="w-full py-6 text-lg shadow-lg shadow-blue-900/20" leftIcon={<UserPlus className="w-5 h-5" />}>
              Daftar Akun
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{' '}
              <Link to="/login" className="text-[#00509E] font-medium hover:underline">
                Masuk di sini
              </Link>
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2023 Badan Pusat Statistik Kota Salatiga</p>
        </div>
      </div>
    </div>;
}