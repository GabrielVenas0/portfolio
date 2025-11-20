import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-primary-800 tracking-tighter">
                    DEV<span className="text-primary-500">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-primary-600 hover:text-primary-900 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={onOpenModal}
                        className="px-5 py-2 bg-primary-800 text-white rounded-full font-medium hover:bg-primary-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Contact
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col space-y-4 md:hidden animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-primary-600 hover:text-primary-900 font-medium text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                onOpenModal();
                                setIsMobileMenuOpen(false);
                            }}
                            className="w-full py-3 bg-primary-800 text-white rounded-lg font-medium hover:bg-primary-900 transition-colors"
                        >
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};
