import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    
    // Mapping status values to specific Figma-defined design styles
    const statusStyles = {
        'on-track': 'bg-[#1A4D2E] text-white',
        'almost due': 'bg-[#F3AF4E] text-white',
        'overdue': 'bg-[#EB5757] text-white',
    };

    return (
        <Link 
            to={`/friendDetails/${friend.id}`} 
            className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center border border-gray-100 h-full hover:shadow-md transition-all duration-300 cursor-pointer block"
        >
            {/* Friend Avatar */}
            <div className="w-16 h-16 mb-3">
                <img 
                    src={friend.picture} 
                    alt={friend.name} 
                    className="w-full h-full rounded-full object-cover border-2 border-gray-50" 
                />
            </div>

            {/* Profile Identity */}
            <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                {friend.name}
            </h3>

            {/* Engagement Recency */}
            <p className="text-gray-400 text-[10px] mb-3">
                {friend.days_since_contact}d ago
            </p>

            {/* Categorization Labels */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {friend.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Connectivity Status Indicator */}
            <div className="mt-auto">
                <div className={`w-[100px] py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wide ${statusStyles[friend.status] || 'bg-gray-200'}`}>
                    {friend.status}
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;