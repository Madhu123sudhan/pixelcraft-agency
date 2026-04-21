"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
            aria-label="Toggle theme"
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
}