export default function CertificatesPage() {
  
  // DATA HUB: Grouped by Organization
  const certificateGroups = [
    {
      id: "GK",
      issuer: "Global Knowledge",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
      ),
      items: [
        "Certificate of Completion for accomplishing their part in the ICT Project: GKDEMY - Higher Education for Everyone.",
        "Certificate of Attendance in the 8-Day Work Immersion Training at GK College of Business, Arts, and Technology.",
        "Best in Team Management during their part the ICT Project: GKDEMY - Higher Education for Everyone."
      ]
    },
    {
      id: "TSD",
      issuer: "Tesda",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      items: [
        "English for Business and Entrepreneurship",
        "Exercising Sustainable Development in the Workplace",
        "Microsoft Digital Literacy",
        "Orienting Oneself to Environmentally Sustainable Work Standards",
        "Participating in Workplace Communication",
        "Performing Solid Waste Management in the Workplace",
        "Receiving and Responding to Workplace Communication",
        "Smart Android Mobile Apps Development for Beginners",
        "Smart Technopreneurship 101",
        "Wi-Fi 101 and Digital Thumbprint Program"
      ]
    },
    {
      id: "CSC",
      issuer: "Cisco / NetAcad",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      items: [
        "Cybersecurity Essentials",
        "Get Connected",
        "Introduction to Cybersecurity",
        "NDG Linux Essentials"
      ]
    },
    {
      id: "TOE",
      issuer: "TOEIC",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      items: [
        "TOEIC Official Score Certificate (925/990)"
      ]
    },
    {
      id: "DOT",
      issuer: "Department of Tourism",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      items: [
        "Filipino Brand of Service Excellency"
      ]
    },
    {
      id: "ASE",
      issuer: "ASEAN Foundation",
      icon: (
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      items: [
        "AIClassASEAN Certificate of Completion"
      ]
    }
  ];

  return (
    <div className="animate-fade-in max-w-5xl mt-10 pb-20">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] mb-16 pb-2">
        Certificates
      </h1>

      {/* Loop through each Organization */}
      <div className="flex flex-col gap-16">
        {certificateGroups.map((group) => (
          <div key={group.id} className="animate-fade-in">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6 border-b border-red-950 pb-3">
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                {group.icon}
              </span>
              <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
                {group.issuer}
              </h2>
              {/* The Entries Counter is back */}
              <span className="ml-auto text-xs font-mono text-neutral-500 hidden sm:block">
                ENTRIES: {group.items.length.toString().padStart(2, '0')}
              </span>
            </div>

            {/* Grid of Individual Data Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex flex-col bg-black/40 border border-neutral-800 p-5 rounded-lg transition-all duration-300 hover:border-red-600/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:-translate-y-1 group"
                >
                  
                  {/* Card Header Line */}
                  <div className="flex justify-between items-center mb-4 text-neutral-600 group-hover:text-red-500/70 transition-colors border-b border-neutral-900 pb-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-[10px] font-mono tracking-widest uppercase">
                      {group.id.substring(0,3).toUpperCase()}-CERT-{(index + 1).toString().padStart(3, '0')}
                    </span>
                  </div>

                  {/* Certificate Text */}
                  <p className="text-neutral-300 text-sm font-medium leading-relaxed flex-grow group-hover:text-white transition-colors">
                    {cert}
                  </p>

                  {/* Professional Footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-mono font-bold flex items-center gap-1.5 group-hover:text-red-400 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-red-500 transition-colors"></span>
                      Recorded
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}