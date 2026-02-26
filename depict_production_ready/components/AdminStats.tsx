/// <reference types="vite/client" />
import React, { useState } from 'react';

export const AdminStats: React.FC = () => {
    // Simple password check or DEV environment check
    const [isAuthenticated, setIsAuthenticated] = useState(import.meta.env.DEV);
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid password! (Hint: It is admin123)');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fdfcf8]">
                <form onSubmit={handleLogin} className="p-10 bg-white border border-orange-100 shadow-xl rounded-sm w-full max-w-sm">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center mx-auto mb-4">
                            <span className="text-orange-500 font-bold text-xl">🔒</span>
                        </div>
                        <h2 className="serif-title text-2xl font-bold text-gray-800">Admin Login</h2>
                        <p className="text-[11px] tracking-widest text-gray-400 mt-2 uppercase">Private Analytics Dashboard</p>
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border-b-2 border-gray-200 outline-none focus:border-orange-500 p-3 w-full mb-8 rounded-none transition-colors text-center font-mono"
                        placeholder="Enter Password"
                    />
                    <button type="submit" className="w-full bg-[#1a1a1a] text-white tracking-widest text-sm py-4 font-bold rounded-sm hover:bg-orange-500 transition-colors uppercase">
                        Access Dashboard
                    </button>
                </form>
            </div>
        );
    }

    // Mocked aggregated data tailored to the use-case since no backend is connected
    const trafficData = [
        { source: 'Direct (Book QR Code) / Unknown', visitors: 1245, percentage: '55%' },
        { source: 'Tumblbug Referrer', visitors: 620, percentage: '27%' },
        { source: 'Instagram / Linktree', visitors: 280, percentage: '12%' },
        { source: 'Twitter (X)', visitors: 135, percentage: '6%' },
    ];

    const currentReferrer = document.referrer || 'Direct (No Referrer)';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Real environment variables from Vite
    const buildTime = import.meta.env.VITE_BUILD_TIME || new Date().toLocaleString('ko-KR');
    const branchName = import.meta.env.VITE_BRANCH_NAME || 'main';

    return (
        <div className="min-h-screen bg-[#fdfcf8] p-4 md:p-8 animate-in fade-in duration-500">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-10 pb-6 border-b border-orange-200">
                    <div>
                        <h1 className="serif-title text-3xl font-bold text-gray-800">Source Tracking Dashboard</h1>
                        <p className="text-sm text-gray-500 mt-2">Private Admin Area</p>
                    </div>
                    <a href="/" className="text-[11px] font-bold tracking-widest uppercase bg-white border border-gray-200 px-4 py-2 hover:border-orange-500 hover:text-orange-500 transition-colors rounded-sm shadow-sm inline-flex items-center">
                        Exit Admin
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Current Session Info */}
                    <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full z-0"></div>
                        <h3 className="text-[11px] tracking-widest text-orange-500 uppercase font-bold mb-6 relative z-10 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Live Session Data
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex flex-col">
                                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Detected Referrer</span>
                                <span className="font-medium text-gray-800 break-all">{currentReferrer}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Detected Device</span>
                                <span className="font-medium text-gray-800">{isMobile ? '📱 Mobile' : '💻 Desktop'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Deployment Info */}
                    <div className="bg-[#1a1a1a] text-white p-8 rounded-sm shadow-xl relative overflow-hidden">
                        <h3 className="text-[11px] tracking-widest text-gray-400 uppercase font-bold mb-6 relative z-10">Deployment Information</h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex flex-col">
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1">Latest Build Time</span>
                                <span className="font-medium text-orange-400 font-mono text-sm">{buildTime}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1">Source Branch</span>
                                <span className="font-medium bg-white/10 px-2 py-0.5 rounded text-sm w-fit font-mono">{branchName}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1">Environment</span>
                                <span className="font-medium text-emerald-400 uppercase tracking-widest text-sm">{import.meta.env.MODE}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aggregated Traffic List */}
                <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden mb-12">
                    <div className="px-8 py-6 border-b border-gray-100">
                        <h3 className="text-[11px] tracking-widest text-gray-500 uppercase font-bold flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                            Traffic Sources (Aggregated)
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="py-4 px-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200">Referrer / Source</th>
                                    <th className="py-4 px-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200">Visitors</th>
                                    <th className="py-4 px-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200">Share</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trafficData.map((row, idx) => (
                                    <tr key={idx} className="group hover:bg-orange-50/30 transition-colors">
                                        <td className="py-4 px-8 text-sm text-gray-700 font-medium border-b border-gray-100">{row.source}</td>
                                        <td className="py-4 px-8 text-sm text-gray-800 font-mono border-b border-gray-100">{row.visitors.toLocaleString()}</td>
                                        <td className="py-4 px-8 border-b border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-bold text-gray-500 w-8">{row.percentage}</span>
                                                <div className="w-full bg-gray-100 rounded-full h-1.5 max-w-[150px]">
                                                    <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: row.percentage }}></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
