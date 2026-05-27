import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[85vh] animate-fade-in text-center px-4">
      
      {/* The Original Subtle Glow (Sits behind text to illuminate the stars) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-red-900/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Eyebrow Text (Red Glow) */}
      <p className="text-red-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
        Portfolio & Workbench
      </p>

      {/* Massive Headline (Added white glow to the whole thing) */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-600 mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        Christan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">Salva</span>
      </h1>

      {/* Subheadline / Role (Added soft white glow) */}
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
        Computer Science Major & Game Developer
      </h2>

      {/* Bio / Hook (Added very faint white glow for readability) */}
      <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
        I turn <strong>bold</strong> ideas into <em>italic</em> ones. Come check my works out!
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto">
        
        {/* Primary CTA (Download Resume) */}
        {/* Note: put your resume file in the "public" folder of your Next.js app! */}
        <a 
          href="/CV - Salva.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-red-600/90 text-white font-bold rounded hover:bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-1 transition-all duration-300 tracking-wider w-full sm:w-auto text-center"
        >
          Download Resume
        </a>

        {/* Secondary Button (Projects) */}
        <Link 
          href="/projects" 
          className="px-8 py-4 bg-black/50 border border-neutral-700 text-neutral-300 font-bold rounded hover:border-red-500 hover:text-red-400 hover:bg-red-950/20 hover:-translate-y-1 transition-all duration-300 tracking-wider w-full sm:w-auto text-center backdrop-blur-sm"
        >
          Explore Projects
        </Link>
        
        {/* Secondary Button (About) */}
        <Link 
          href="/about" 
          className="px-8 py-4 bg-black/50 border border-neutral-700 text-neutral-300 font-bold rounded hover:border-red-500 hover:text-red-400 hover:bg-red-950/20 hover:-translate-y-1 transition-all duration-300 tracking-wider w-full sm:w-auto text-center backdrop-blur-sm"
        >
          More About Me
        </Link>
        
      </div>

    </div>
  );
}