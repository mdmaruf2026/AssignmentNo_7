import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1A4D2E] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-black mb-4 tracking-tighter">KeenKeeper</h2>
                
                <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8 font-medium opacity-80">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center gap-4 mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Social Links</span>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="bg-white p-2.5 rounded-full text-[#1A4D2E] hover:bg-gray-200 transition-all">
                            <FaYoutube size={18} />
                        </a>
                        <a href="#" className="bg-white p-2.5 rounded-full text-[#1A4D2E] hover:bg-gray-200 transition-all">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="bg-white p-2.5 rounded-full text-[#1A4D2E] hover:bg-gray-200 transition-all">
                            <FaTwitter size={18} />
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;