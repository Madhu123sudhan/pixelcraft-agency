"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-r from-blue-500 to-purple-600"></div>
                    <h1 className="text-xl font-bold text-black dark:text-white">
                        PixelCraft
                    </h1>
                </div>

                {/* Menu */}
                <div className="flex items-center gap-6">
                    <a href="#services" className="hover:text-blue-600">Services</a>
                    <a href="#portfolio" className="hover:text-blue-600">Work</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>

                    <ThemeToggle />
                </div>

            </div>
        </nav>
    );
}