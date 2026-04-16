import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Phone, MessageSquare, Video, Clock, Target, Calendar, ArrowLeft, MapPin } from 'lucide-react';
import { toast } from 'react-hot-toast';

const FriendDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [friend, setFriend] = useState(null);

    // Fetch friend data 
    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                
                const found = data.find(f => f.id == id);
                setFriend(found);
            })
            .catch(err => {
                console.error("Data load failed:", err);
                toast.error("Could not load friend info");
            });
    }, [id]);

    const handleInteraction = (type) => {
        if (!friend) return;

        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            type: type, 
            title: `${type} with ${friend.name}`
        };
        
        const existingTimeline = JSON.parse(localStorage.getItem('timeline') || '[]');
        localStorage.setItem('timeline', JSON.stringify([newEntry, ...existingTimeline]));
        
        toast.success(`${type} logged successfully!`);
    };

    if (!friend) {
        return (
            <div className="h-screen flex items-center justify-center font-medium text-gray-400 animate-pulse">
                Fetching profile...
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Back Navigation */}
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 mb-8 text-gray-500 hover:text-black transition-all group"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                <span className="text-sm font-bold uppercase tracking-wider">Back</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Profile Sidebar */}
                <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <img 
                        src={friend.picture} 
                        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-gray-50" 
                        alt={friend.name} 
                    />
                    <h2 className="text-2xl font-bold text-gray-900">{friend.name}</h2>
                    <p className="text-gray-400 text-sm mb-6">{friend.email}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {friend.tags.map(tag => (
                            <span key={tag} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-[9px] font-bold uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-500 italic text-sm mb-8">"{friend.bio}"</p>
                    
                    <div className="space-y-2">
                        <button className="w-full py-2 bg-gray-50 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">Snooze</button>
                        <button className="w-full py-2 bg-red-50 text-red-500 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-100 transition-colors">Delete</button>
                    </div>
                </div>

                {/* Right Side: Stats & Interactions */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard icon={<Clock className="text-blue-500"/>} label="Last Contact" value={`${friend.days_since_contact}d ago`} />
                        <StatCard icon={<Target className="text-green-500"/>} label="Goal" value={`Every ${friend.goal}d`} />
                        <StatCard icon={<Calendar className="text-purple-500"/>} label="Next Due" value={friend.next_due_date} />
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-800 mb-6 text-sm uppercase tracking-widest">Quick Check-In</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ActionButton onClick={() => handleInteraction('Call')} icon={<Phone size={20}/>} label="Call" color="hover:text-green-600 hover:bg-green-50" />
                            <ActionButton onClick={() => handleInteraction('Text')} icon={<MessageSquare size={20}/>} label="Text" color="hover:text-blue-600 hover:bg-blue-50" />
                            <ActionButton onClick={() => handleInteraction('Video')} icon={<Video size={20}/>} label="Video" color="hover:text-purple-600 hover:bg-purple-50" />
                            {/* Add Meet up button*/}
                            <ActionButton onClick={() => handleInteraction('Meet up')} icon={<MapPin size={20}/>} label="Meet up" color="hover:text-orange-600 hover:bg-orange-50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="mb-2">{icon}</div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
        <h4 className="text-lg font-bold text-gray-800">{value}</h4>
    </div>
);

const ActionButton = ({ onClick, icon, label, color }) => (
    <button onClick={onClick} className={`flex flex-col items-center p-5 bg-gray-50 rounded-2xl transition-all group ${color}`}>
        <div className="mb-2 group-hover:scale-110 transition-transform">{icon}</div>
        <span className="text-[10px] font-bold uppercase">{label}</span>
    </button>
);

export default FriendDetails;