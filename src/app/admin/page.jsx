"use client";

import { useEffect, useMemo, useState } from "react";
import { db, NEWS_COLLECTION, REG_COLLECTION, getAll, updateById, deleteById } from "@/components/custom/firebase/firebase";

const PASSWORD = "Iamreal@123";

function Table({ title, rows, onDelete, onUpdate }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="overflow-auto rounded-lg border border-[#E7E7EA]">
        <table className="min-w-full text-sm text-[#1d191a]">
          <thead className="bg-[#F8F8FA] text-left">
            <tr>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Created</th>
              <th className="px-3 py-2 w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[#F1F1F4]">
                <td className="px-3 py-2">
                  <input
                    className="w-full border border-[#E7E7EA] rounded px-2 py-1"
                    defaultValue={r.email}
                    onBlur={(e) => onUpdate(r.id, { email: e.target.value })}
                  />
                </td>
                <td className="px-3 py-2 text-[#1d191a]">
                  {r.createdAt ? new Date(r.createdAt).toLocaleString() : ""}
                </td>
                <td className="px-3 py-2">
                  <button className="text-red-600" onClick={() => onDelete(r.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [regs, setRegs] = useState([]);
  const [news, setNews] = useState([]);

  async function load() {
    setLoading(true);
    const [a, b] = await Promise.all([
      getAll(REG_COLLECTION),
      getAll(NEWS_COLLECTION),
    ]);
    setRegs(a);
    setNews(b);
    setLoading(false);
  }

  useEffect(() => {
    // Persist login across reloads
    const saved = typeof window !== 'undefined' ? localStorage.getItem('adminAuthed') : null;
    if (saved === 'true') setAuthed(true);
  }, []);

  useEffect(() => {
    if (authed) {
      localStorage.setItem('adminAuthed', 'true');
      load();
    }
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-[900px] mx-auto px-4 py-20">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1d191a]">Admin Login</h1>
            <p className="text-[#1d191a] mt-1">Enter your password to access the dashboard.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input === PASSWORD) setAuthed(true);
              else alert("Wrong password");
            }}
            className="flex gap-3"
          >
            <input
              type="password"
              className="border border-[#E7E7EA] text-[#1d191a] rounded px-3 py-2 flex-1"
              placeholder="Enter admin password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-[#cd7f32] text-white rounded px-4">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1d191a]">
      <header className="border-b border-[#E7E7EA]">
        <div className="max-w-[1100px] mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <button className="text-sm" onClick={load}>{loading ? "Loading..." : "Refresh"}</button>
            <button
              className="text-sm text-[#cd7f32]"
              onClick={() => { localStorage.removeItem('adminAuthed'); setAuthed(false); }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-[1100px] mx-auto px-4 py-8">

        <Table
        title="Registrations"
        rows={regs}
        onDelete={(id) => deleteById(REG_COLLECTION, id).then(load)}
        onUpdate={(id, data) => updateById(REG_COLLECTION, id, data).then(load)}
      />

        <Table
        title="Newsletter Subscribers"
        rows={news}
        onDelete={(id) => deleteById(NEWS_COLLECTION, id).then(load)}
        onUpdate={(id, data) => updateById(NEWS_COLLECTION, id, data).then(load)}
      />
      </main>
    </div>
  );
}


