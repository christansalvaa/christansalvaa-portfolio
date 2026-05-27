import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030303] text-white font-sans min-h-screen flex flex-col selection:bg-red-500/30">
        
        {/* === DEEP SPACE BACKGROUND === */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-[#030303] overflow-hidden">
          
          {/* Layer 1: Distant Stars (Tiny, dim, packed) */}
          <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stars-distant" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="25" r="0.5" fill="white" />
                <circle cx="75" cy="15" r="0.5" fill="white" />
                <circle cx="45" cy="75" r="0.5" fill="white" />
                <circle cx="95" cy="85" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars-distant)" />
          </svg>

          {/* Layer 2: Closer Stars (Bigger, brighter, sparse) */}
          <svg className="absolute inset-0 w-full h-full opacity-80 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stars-close" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="40" r="1.5" fill="rgba(255, 255, 255, 0.8)" />
                <circle cx="160" cy="120" r="1" fill="rgba(255, 255, 255, 0.5)" />
                <circle cx="90" cy="180" r="2" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="190" cy="50" r="1.2" fill="rgba(255, 255, 255, 0.9)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars-close)" />
          </svg>

          {/* Layer 3: Nebula Ambient Glows (Brightened up!) */}
          <div className="absolute top-0 left-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-red-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-red-950/30 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
          
        </div>

        {/* FLOATING PILL NAVIGATION */}
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
          <nav className="pointer-events-auto flex items-center gap-6 px-6 py-3 bg-black/40 backdrop-blur-xl border border-neutral-800 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-red-900/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]">
            
            <Link 
              href="/" 
              className="text-lg font-black tracking-tighter text-white pr-6 border-r border-neutral-800 hover:text-red-500 transition-colors duration-300"
            >
              CS.
            </Link>

            <div className="flex gap-5 text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-semibold">
              <Link href="/about" className="hover:text-white transition-colors duration-300">About</Link>
              <Link href="/projects" className="hover:text-white transition-colors duration-300">Projects</Link>
              <Link href="/experience" className="hover:text-white transition-colors duration-300">Experience</Link>
              <Link href="/certificates" className="hover:text-white transition-colors duration-300 hidden sm:block">Certficates</Link>
            </div>
            
          </nav>
        </div>

        {/* PAGE CONTENT */}
        <main className="flex-grow max-w-5xl mx-auto px-6 pt-32 pb-12 w-full">
          {children}
        </main>

      </body>
    </html>
  );
}