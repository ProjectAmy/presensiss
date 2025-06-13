"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import TanggalHariIni from "@/app/components/TanggalHariIni";

export default function JadwalPage() {
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
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-green-700 p-6 rounded-t-lg text-white text-left mb-6">
              <h3 className="text-lg md:text-xl font-semibold tracking-wide">Jadwal amysidra</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow p-6 text-gray-800 space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm text-center">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="border px-3 py-2"></th>
                      <th className="border px-3 py-2">Senin</th>
                      <th className="border px-3 py-2">Selasa</th>
                      <th className="border px-3 py-2">Rabu</th>
                      <th className="border px-3 py-2">Kamis</th>
                      <th className="border px-3 py-2">Jumat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="border px-3 py-2 text-left">L1</th>
                      <td className="border px-3 py-2 bg-green-100">12 L3 Biology</td>
                      <td className="border px-3 py-2 bg-blue-100">12 Chemistry</td>
                      <td className="border px-3 py-2 bg-gray-100">12E Biology</td>
                      <td className="border px-3 py-2 bg-pink-100">11 Enterprise</td>
                      <td className="border px-3 py-2 bg-yellow-100">12B Biology</td>
                    </tr>
                    <tr>
                      <th className="border px-3 py-2 text-left">L2</th>
                      <td className="border px-3 py-2 bg-yellow-100">12B Biology</td>
                      <td className="border px-3 py-2 bg-white">PPA</td>
                      <td className="border px-3 py-2 bg-red-200">13B Biology</td>
                      <td className="border px-3 py-2 bg-blue-100">11A Biology</td>
                      <td className="border px-3 py-2 bg-blue-200">12 Chemistry</td>
                    </tr>
                    <tr>
                      <th className="border px-3 py-2 text-left">L3</th>
                      <td className="border px-3 py-2 bg-yellow-100">12B Biology</td>
                      <td className="border px-3 py-2 bg-orange-100">13 L3 Biology</td>
                      <td className="border px-3 py-2 bg-blue-200">11A Biology</td>
                      <td className="border px-3 py-2 bg-purple-100">13 Chemistry</td>
                      <td className="border px-3 py-2 bg-green-100">11B Biology</td>
                    </tr>
                    <tr>
                      <th className="border px-3 py-2 text-left">L4</th>
                      <td className="border px-3 py-2 bg-white">PPA</td>
                      <td className="border px-3 py-2 bg-red-200">13B Biology</td>
                      <td className="border px-3 py-2 bg-orange-100">13 L3 Biology</td>
                      <td className="border px-3 py-2 bg-yellow-100">12B Biology</td>
                      <td className="border px-3 py-2 bg-purple-100">13 Chemistry</td>
                    </tr>
                    <tr>
                      <th className="border px-3 py-2 text-left">L5</th>
                      <td className="border px-3 py-2 bg-yellow-100">11C Biology</td>
                      <td className="border px-3 py-2 bg-gray-100">12E Biology</td>
                      <td className="border px-3 py-2 bg-green-100">11B Biology</td>
                      <td className="border px-3 py-2 bg-red-200">13B Biology</td>
                      <td className="border px-3 py-2 bg-blue-200">13 Public</td>
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
