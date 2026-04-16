import React from 'react';
import { NavLink } from 'react-router';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
    const activeClass = ({ isActive }) => 
        isActive ? "flex items-center gap-1 text-[#1A4D2E] font-bold border-b-2 border-[#1A4D2E]" 
                 : "flex items-center gap-1 text-gray-600 hover:text-[#1A4D2E]";

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className='flex justify-between items-center py-3 container mx-auto px-4'>
                <div className="flex items-center text-2xl font-[900] tracking-tighter leading-none">
                    <span className="text-[#1e293b]">Keen</span>
                    <span className="text-[#1A4D2E]">Keeper</span>
                </div>

                <ul className='flex gap-6 items-center'>
                    <li>
                        <NavLink title="Home" to="/" className={activeClass}>
                            <Home size={18} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink title="Timeline" to="/timeline" className={activeClass}>
                            <Clock size={18} /> Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink title="Stats" to="/stats" className={activeClass}>
                            <BarChart3 size={18} /> Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;