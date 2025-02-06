import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <nav className="flex justify-center gap-6 p-4 bg-gray-800">
          <Link href="/" className="text-pink-400 font-semibold hover:text-white">Home</Link>
        </nav>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="text-center py-4 bg-gray-800 text-gray-400">
          © 2025 {"Samra's"} Blog
        </footer>
      </body>
    </html>
  );
}
