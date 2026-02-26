/// <reference types="vite/client" />
import React, { useState } from 'react';
// 만약 차트 라이브러리 설치가 안 되었다면 아래 차트 부분은 표로 대체됩니다.
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const AdminStats: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(import.meta.env.DEV);
    const [password, setPassword] = useState('');
    const [dateRange, setDateRange] = useState('7days'); // 7days, 30days 선택용

    // 1. 날짜별 가공 데이터 (최근 7일 예시)
    const dailyData = [
        { date: '2024-05-20', visitors: 120, fundingClicks: 15, direct: 80, sns: 40 },
        { date: '2024-05-21', visitors: 150, fundingClicks: 22, direct: 90, sns: 60 },
        { date: '2024-05-22', visitors: 200, fundingClicks: 45, direct: 110, sns: 90 },
        { date: '2024-05-23', visitors: 180, fundingClicks: 30, direct: 100, sns: 80 },
        { date: '2024-05-24', visitors: 250, fundingClicks: 55, direct: 130, sns: 120 },
        { date: '2024-05-25', visitors: 310, fundingClicks: 70, direct: 160, sns: 150 },
        { date: '2024-05-26', visitors: 280, fundingClicks: 60, direct: 140, sns: 140 },
    ];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') setIsAuthenticated(true);
        else alert('Invalid password!');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fdfcf8]">
                <form onSubmit={handleLogin} className="p-10 bg-white border border-orange-100 shadow-xl rounded-sm w-full max-w-sm text-center">
                    <h2 className="serif-title text-2xl font-bold mb-6">Tree Admin Login</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border-b-2 border-gray-200 outline-none focus:border-green-600 p-3 w-full mb-8 text-center"
                        placeholder="Password"
                    />
                    <button type="submit" className="w-full bg-[#1a1a1a] text-white py-4 font-bold rounded-sm hover:bg-green-700 transition-colors">
                        ACCESS DASHBOARD
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fdfcf8] p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* 헤더 */}
                <div className="flex justify-between items-end mb-10 pb-6 border-b-2 border-green-800">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 tracking-tighter">Tree Analytics Dashboard</h1>
                        <p className="text-green-700 font-medium text-sm">test.writingchallengetree.com</p>
                    </div>
                    <div className="flex gap-2">
                        {['7days', '30days'].map(range => (
                            <button 
                                key={range}
                                onClick={() => setDateRange(range)}
                                className={`px-4 py-1 text-xs font-bold rounded-full border ${dateRange === range ? 'bg-green-800 text-white' : 'bg-white text-green-800'}`}
                            >
                                {range === '7days' ? '최근 1주일' : '최근 1개월'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 차트 섹션 */}
                <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Daily Visitor Trend</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dailyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="date" fontSize={12} tickMargin={10} />
                                <YAxis fontSize={12} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="visitors" stroke="#166534" strokeWidth={3} name="총 방문자" dot={{ r: 4 }} />
                                <Line type="monotone" dataKey="fundingClicks" stroke="#f97316" strokeWidth={2} name="펀딩 클릭" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 상세 데이터 테이블 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-sm shadow-sm border border-gray-200">
                        <div className="p-5 border-b font-bold text-gray-700">날짜별 상세 수치</div>
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-gray-400">
                                <tr>
                                    <th className="p-4">날짜</th>
                                    <th className="p-4">방문자(PV)</th>
                                    <th className="p-4">직접유입</th>
                                    <th className="p-4">SNS/외부</th>
                                    <th className="p-4 text-orange-600">펀딩클릭</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dailyData.map((d, i) => (
                                    <tr key={i} className="border-t hover:bg-green-50/50">
                                        <td className="p-4 font-medium">{d.date}</td>
                                        <td className="p-4">{d.visitors}</td>
                                        <td className="p-4 text-gray-500">{d.direct}</td>
                                        <td className="p-4 text-gray-500">{d.sns}</td>
                                        <td className="p-4 font-bold text-orange-600">{d.fundingClicks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 우측 요약 카드 */}
                    <div className="space-y-6">
                        <div className="bg-green-800 text-white p-6 rounded-sm shadow-lg">
                            <h4 className="text-xs font-bold opacity-70 uppercase mb-2">Weekly Total Visitors</h4>
                            <p className="text-4xl font-bold">1,490</p>
                            <div className="mt-4 text-xs bg-white/10 p-2 rounded">지난주 대비 +12% 상승</div>
                        </div>
                        <div className="bg-white p-6 rounded-sm border border-gray-200">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Top Referrer</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm"><span>Direct / QR</span><strong>55%</strong></div>
                                <div className="flex justify-between text-sm"><span>Instagram</span><strong>22%</strong></div>
                                <div className="flex justify-between text-sm"><span>Tumblbug</span><strong>18%</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
