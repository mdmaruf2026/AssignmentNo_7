import React from 'react';
import { NavLink } from 'react-router';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
    const activeClass = ({ isActive }) => 
        isActive ? "flex items-center gap-2 bg-[#1A4D2E] text-white px-4 py-2 rounded-lg font-medium transition-all" 
                 : "flex items-center gap-2 text-gray-500 hover:text-[#1A4D2E] px-4 py-2 transition-all";

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className='flex justify-between items-center py-4 container mx-auto px-4'>
                <div className="flex items-center text-2xl font-[900] tracking-tighter leading-none">
                    <span className="text-[#1e293b]">Keen</span>
                    <span className="text-[#1A4D2E]">Keeper</span>
                </div>

                <ul className='flex gap-2 items-center'>
                    <li>
                        <NavLink to="/" className={activeClass}>
                            <Home size={18} />
                            <span className="text-sm">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline" className={activeClass}>
                            <Clock size={18} />
                            <span className="text-sm">Timeline</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={activeClass}>
                            <BarChart3 size={18} />
                            <span className="text-sm">Stats</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;