import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Stats = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        // Fetch logs from localStorage to calculate stats
        const data = JSON.parse(localStorage.getItem('timeline') || '[]');
        setTimelineData(data);
    }, []);

    // Filter count for each interaction type
    const getCount = (type) => timelineData.filter(item => item.type === type).length;

    const statsData = [
        { name: 'Text', value: getCount('Text') || 0 },
        { name: 'Call', value: getCount('Call') || 0 },
        { name: 'Video', value: getCount('Video') || 0 },
    ];

    // Colors matched with Figma status theme
    const COLORS = {
        'Text': '#A855F7', 
        'Call': '#1A4D2E', 
        'Video': '#22C55E' 
    };

    return (
        <main className="min-h-screen bg-gray-50/30 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-[#1e293b] mb-10 tracking-tight">Friendship Analytics</h1>

                <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm max-w-4xl">
                    <h3 className="text-gray-600 font-semibold mb-8">By Interaction Type</h3>
                    
                    <div className="flex flex-col items-center">
                        <div className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={statsData}
                                        innerRadius={70} // Creates the donut hole
                                        outerRadius={100}
                                        paddingAngle={2}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {statsData.map((entry) => (
                                            <Cell key={entry.name} fill={COLORS[entry.name]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                        contentStyle={{ borderRadius: '10px', border: 'none' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Custom Legend section based on Figma mockup */}
                        <div className="flex justify-center gap-8 mt-6">
                            {statsData.map((item) => (
                                <div key={item.name} className="flex items-center gap-2">
                                    <div 
                                        className="w-2 h-2 rounded-full" 
                                        style={{ backgroundColor: COLORS[item.name] }}
                                    />
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Stats;