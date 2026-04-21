"use client";

import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"success" | "error" | "idle">("idle");
    const [loading, setLoading] = useState(false);

    // 🔹 Simple validation
    const validate = () => {
        if (!form.name || !form.email || !form.message) return false;
        if (!form.email.includes("@")) return false;
        return true;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!validate()) {
            setStatus("error");
            return;
        }

        setLoading(true);

        // 🔹 Fake API delay
        setTimeout(() => {
            setLoading(false);
            setStatus("success");

            // reset form
            setForm({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section
            id="contact"
            className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT - FORM */}
                <div className="p-8 rounded-3xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">

                    <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                        Get in Touch 🚀
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />

                        {/* Message */}
                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            value={form.message}
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        ></textarea>

                        {/* Button */}
                        <button
                            disabled={loading}
                            className="w-full py-3 rounded-xl cursor-pointer text-white font-semibold bg-linear-to-r from-blue-500 to-purple-600 transition"
                        >
                            {loading ? "Sending..." : "Send Message 🚀"}
                        </button>

                    </form>

                    {/* Status Messages */}
                    {status === "success" && (
                        <p className="mt-4 text-green-600 dark:text-green-400">
                            Message sent successfully ✅
                        </p>
                    )}

                    {status === "error" && (
                        <p className="mt-4 text-red-600">
                            Please fill all fields correctly ❌
                        </p>
                    )}

                </div>

                {/* RIGHT SIDE (keep your existing UI here) */}
                <div className="space-y-8">

                    <h3 className="text-3xl font-semibold text-black dark:text-white">
                        Contact Information
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300">
                        Let’s connect and build something great together.
                    </p>

                    {/* Card Wrapper */}
                    <div className="space-y-6">

                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-xl">
                                📧
                            </div>
                            <div>
                                <p className="font-medium text-black dark:text-white">Email</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    contact@pixelcraft.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-xl">
                                📞
                            </div>
                            <div>
                                <p className="font-medium text-black dark:text-white">Phone</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    +91 98765 43210
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-xl">
                                📍
                            </div>
                            <div>
                                <p className="font-medium text-black dark:text-white">Location</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Chennai, India
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}