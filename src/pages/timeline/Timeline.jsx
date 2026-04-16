import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Video, MapPin, Clock, ChevronDown } from 'lucide-react';

const Timeline = () => {
    const [timelineData, setTimelineData] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const storedLogs = JSON.parse(localStorage.getItem('timeline') || '[]');
        setTimelineData(storedLogs);
    }, []);

    const getIcon = (type) => {
        const iconProps = { size: 18 };
        switch (type) {
            case 'Call': return <Phone {...iconProps} className="text-green-600" />;
            case 'Text': return <MessageSquare {...iconProps} className="text-blue-600" />;
            case 'Video': return <Video {...iconProps} className="text-purple-600" />;
            case 'Meet up': return <MapPin {...iconProps} className="text-orange-600" />;
            default: return <Clock {...iconProps} className="text-gray-400" />;
        }
    };

    // Filtering logic based on selected type
    const filteredData = filter === 'All' 
        ? timelineData 
        : timelineData.filter(item => item.type === filter);

    if (timelineData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-gray-400">
                <div className="mb-4 opacity-20"><Clock size={48} /></div>
                <p className="italic font-medium">Your timeline is empty. Start connecting with friends!</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <h2 className="text-5xl font-black text-[#1e293b] mb-8 tracking-tighter">
                Timeline
            </h2>

            {/* Filter Dropdown based on Figma */}
            <div className="relative mb-8 w-64">
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-100 text-gray-500 py-3 px-4 pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all cursor-pointer text-sm"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Calls Only</option>
                    <option value="Text">Texts Only</option>
                    <option value="Video">Video Calls Only</option>
                    <option value="Meet up">Meetups Only</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDown size={16} />
                </div>
            </div>
            
            <div className="space-y-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex items-center justify-between bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-5">
                                <div className="p-3 bg-gray-50 rounded-xl shadow-inner">
                                    {getIcon(item.type)}
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-bold text-gray-800 leading-none mb-1.5">
                                        {item.title}
                                    </h4>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                        {item.date}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-[9px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-tighter border border-green-100">
                                    Logged
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-400 py-10 italic">No logs found for this filter.</p>
                )}
            </div>
        </div>
    );
};

export default Timeline;