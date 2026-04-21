export default function Footer() {
    return (
        <footer className="relative backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-700">

            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

                {/* Logo */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-linear-to-r from-blue-500 to-purple-600"></div>
                        <h2 className="text-lg font-bold text-black dark:text-white">
                            PixelCraft
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300">
                        Building modern digital experiences that help brands grow.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3 text-black dark:text-white">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                        <li><a href="#portfolio" className="hover:text-blue-600">Work</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3 text-black dark:text-white">
                        Contact
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300">📧 contact@pixelcraft.com</p>
                    <p className="text-gray-600 mt-2 dark:text-gray-300">📞 +91 98765 43210</p>
                    <p className="text-gray-600 mt-2 dark:text-gray-300">📍 Chennai, India</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center py-4 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                © 2026 PixelCraft Agency. All rights reserved.
            </div>

        </footer>
    );
}