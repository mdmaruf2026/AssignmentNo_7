import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
    const activeClass = ({ isActive }) => 
        isActive ? "flex items-center gap-1 text-green-700 font-bold border-b-2 border-green-700" 
                 : "flex items-center gap-1 text-gray-600 hover:text-green-700";

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className='flex justify-between items-center py-3 container mx-auto px-4'>
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-8 h-8" />
                    <span className="text-xl font-bold text-green-900">KeenKeeper</span>
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