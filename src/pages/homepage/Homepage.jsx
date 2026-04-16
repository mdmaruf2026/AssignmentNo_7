import React, { useEffect, useState } from 'react';
import Banner from '../../components/homepage/Banner';

import FriendCard from '../../components/homepage/FriendCard';

const Homepage = () => {
    // State to store the list of friends fetched from JSON
    const [friends, setFriends] = useState([]);

    // Fetch friend data from the public folder on component mount
    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(err => console.error("Error loading friends data:", err));
    }, []);

    /**
     * Calculate summary statistics based on the friends list.
     * These values will be passed down to the Banner component.
     */
    const total = friends.length;
    const onTrack = friends.filter(f => f.status === 'on-track').length;
    const almostDue = friends.filter(f => f.status === 'almost due').length;
    const overdue = friends.filter(f => f.status === 'overdue').length;

    return (
        <main className="min-h-screen bg-white">
            {/* Display the top banner with dynamic summary stats */}
            <Banner 
                total={total} 
                onTrack={onTrack} 
                almostDue={almostDue} 
                overdue={overdue} 
            />

           {/* Implement Friend Card Grid here to list all friends */}
        <section className="container mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900">Your Friends</h2>
                <p className="text-gray-500 text-sm font-medium">Total: {friends.length}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
            ))}
            </div>
        </section>
        </main>
    );
};

export default Homepage;