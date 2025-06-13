"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

// TanggalHariIni sekarang diambil dari komponen terpisah
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
        {/* Tanggal hari ini */}
        <div className="bg-white pl-33 py-2">
          <TanggalHariIni />
        </div>
        <main className="grow bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-green-700 p-6 rounded-t-lg text-white text-left mb-6">
              <h3 className="text-lg md:text-xl font-semibold tracking-wide">Ahlan wa sahlan, Amysidra!</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow p-6 text-gray-800 space-y-4">
              <h4 className="text-green-900 font-semibold text-lg mb-3">Jadwal Hari Ini</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border px-3 py-2 text-left">Jam Ke</th>
                      <th className="border px-3 py-2 text-left">Pelajaran</th>
                      <th className="border px-3 py-2 text-left">Kelas</th>
                      <th className="border px-3 py-2 text-left">Presensi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-2">1</td>
                      <td className="border px-3 py-2">Al-Qur'an</td>
                      <td className="border px-3 py-2">VII A</td>
                      <td className="border px-3 py-2 text-center">
                        <a href="/presensi" className="inline-block px-2 py-1 rounded bg-red-100 text-red-700 hover:underline">Belum</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">2</td>
                      <td className="border px-3 py-2">Hadis</td>
                      <td className="border px-3 py-2">VII A</td>
                      <td className="border px-3 py-2 text-center">
                        <a href="/presensi" className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 hover:underline">Sudah</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-3 py-2">3</td>
                      <td className="border px-3 py-2">Ushul Fiqh</td>
                      <td className="border px-3 py-2">VIII B</td>
                      <td className="border px-3 py-2 text-center">
                        <a href="/presensi" className="inline-block px-2 py-1 rounded bg-red-100 text-red-700 hover:underline">Belum</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
