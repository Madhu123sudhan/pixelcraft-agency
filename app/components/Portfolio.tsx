import Image from "next/image";

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-900 transition-colors scroll-mt-24"
        >
            <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
                Our Work
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

                {/* Project 1 */}
                <div className="relative group overflow-hidden rounded-xl">
                    <Image
                        src="/P1.jpg"
                        alt="Project 1"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                        Mouse Cursor Control using Facial Expressions
                    </div>
                </div>

                {/* Project 2 */}
                <div className="relative group overflow-hidden rounded-xl">
                    <Image
                        src="/P2.png"
                        alt="Project 2"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                        YelpCamp - Campground Review Platform
                    </div>
                </div>

                {/* Project 3 */}
                <div className="relative group overflow-hidden rounded-xl">
                    <Image
                        src="/P3.jpg"
                        alt="Project 3"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                        Online Service Booking Application
                    </div>
                </div>

            </div>
        </section>
    );
}