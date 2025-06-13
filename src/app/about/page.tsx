"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import TanggalHariIni from "@/app/components/TanggalHariIni";

export default function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onLogout={handleLogout} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
          <div className="bg-white pl-33 py-2">
                            <TanggalHariIni />
                          </div>
        <main className="grow bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-green-700 p-6 rounded-t-lg text-white text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Tentang Kami</h1>
            </div>
            <div className="bg-white rounded-b-lg shadow p-6 text-gray-800 space-y-4">
              <p className="text-lg font-semibold text-green-700">Aplikasi Dashboard Guru</p>
              <p>
                <strong>Versi:</strong> 1.0.0
              </p>
              <p>
                Dashboard ini adalah aplikasi web modern yang dirancang khusus untuk memudahkan guru dalam mengelola presensi siswa, melihat jadwal mengajar, dan memantau kehadiran setiap kelas. Dengan antarmuka yang intuitif dan responsif, aplikasi ini memberikan pengalaman pengguna yang nyaman baik di komputer maupun perangkat mobile.
              </p>
              <p className="font-semibold">Fitur-fitur utama:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Presensi siswa secara digital (flip Hadir/Absen tiap siswa)</li>
                <li>Jadwal mengajar mingguan yang terstruktur dan mudah dibaca</li>
                <li>Integrasi login Google untuk keamanan dan kemudahan akses</li>
                <li>Sidebar navigasi untuk akses cepat ke Dashboard, Jadwal, dan Presensi</li>
                <li>Tampilan tanggal hari ini secara otomatis di setiap halaman utama</li>
                <li>Desain tema warna yang konsisten dengan logo sekolah</li>
              </ul>
              <p>
                Aplikasi ini dikembangkan untuk mendukung aktivitas belajar-mengajar yang lebih efisien dan transparan di lingkungan sekolah. Semua fitur dapat diakses dengan mudah melalui sidebar, dan setiap halaman dilengkapi navigasi yang jelas serta informasi yang relevan.
              </p>
              <p className="font-semibold text-green-700">Aplikasi ini dibuat dan dikembangkan oleh <span className="font-bold">Project Amy</span>.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
