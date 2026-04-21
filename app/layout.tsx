import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
    title: "PixelCraft Agency",
    description: "We design and build modern digital experiences for brands",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="light">
                    {children}
                </ThemeProvider>
            </body>
        </html >
    );
}