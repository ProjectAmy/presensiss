"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import TanggalHariIni from "@/app/components/TanggalHariIni";
import { useRouter } from "next/navigation";

export default function PresensiPage() {
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
          <div className="w-full max-w-xl mx-auto">
            <div className="bg-green-700 p-6 rounded-t-lg text-white text-left mb-6">
              <h3 className="text-lg md:text-xl font-semibold tracking-wide">Presensi kelas VII A</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow p-6 text-gray-800 space-y-4">
              <div className="flex flex-col gap-2">
                <div><span className="font-semibold">Pelajaran:</span> Al-Qur&apos;an</div>
                <div><span className="font-semibold">Jam ke:</span> 1</div>
                <div><span className="font-semibold">Pengajar:</span> Amysidra</div>
              </div>
            </div>
            {/* Tabel daftar siswa */}
            <div className="mt-8">
              <table className="min-w-full border text-sm text-center">
                <thead>
                  <tr className="bg-green-100 text-gray-900 font-bold">
                    <th className="border px-3 py-2">No</th>
                    <th className="border px-3 py-2">Nama</th>
                    <th className="border px-3 py-2">Status Kehadiran</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-900">
                  {/* Data dummy siswa */}
                  {["Ahmad", "Budi", "Citra", "Dewi", "Eka"].map((nama, idx) => (
                    <SiswaRow key={idx} no={idx+1} nama={nama} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// Komponen baris siswa dengan tombol flip-flop
function SiswaRow({ no, nama }: { no: number; nama: string }) {
  const [hadir, setHadir] = React.useState(true);
  return (
    <tr>
      <td className="border px-3 py-2">{no}</td>
      <td className="border px-3 py-2 text-left">{nama}</td>
      <td className="border px-3 py-2">
        <button
          onClick={() => setHadir((h) => !h)}
          className={
            hadir
              ? "bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded transition-colors"
              : "bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded transition-colors"
          }
        >
          {hadir ? "Hadir" : "Absen"}
        </button>
      </td>
    </tr>
  );
}
