export default function Services() {
    return (
        <section
            id="services"
            className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center transition-colors"
        >
            <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
                Our Services
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        UI/UX Design
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        We create intuitive and modern interfaces that enhance user experience.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        Web Development
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        High-performance and scalable websites built with modern technologies.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        Branding
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Build a strong brand identity that connects with your audience.
                    </p>
                </div>

                {/* Card 4 (NEW) */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        Digital Marketing
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Grow your business with SEO, social media, and data-driven marketing strategies.
                    </p>
                </div>

            </div>
        </section>
    );
}