export default function ExperiencePage() {
  
  // THIS IS YOUR TIMELINE DATA
  // Just add a new block to the top of this list when you get a new job!
  const myExperience = [
    {
      id: 1,
      role: "Student Assistant",
      company: "DLSU-D HMD Secretary Office",
      date: "2025 - Present",
      description: "Provided administrative support by managing departmental records and documents. Assisted in daily office operations, delivered high-quality front-facing service to students and visitors, and performed basic hardware and software troubleshooting.",
      skills: ["Administrative Support", "Front-Facing Service", "Operational Efficiency", "Technical Assitance"]
    },
    {
      id: 2,
      role: "Team Leader for Information Systems Group",
      company: "GlobalKnowledge Philippines Incorporated",
      date: "2023",
      description: "Oversaw the development and management of team-led courses during the immersion period. Organized and contributed to the publication of numerous educational courses on the GK College Academy online platform.",
      skills: ["Leadership", "Team Management", "Content Management", "Publication"]
    }
  ];

  return (
    <div className="animate-fade-in max-w-4xl mt-10 pb-20">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] mb-16 pb-2">
        Experience
      </h1>

      {/* TIMELINE CONTAINER */}
      {/* The border-l creates the vertical red line down the left side */}
      <div className="relative border-l-2 border-red-900/40 ml-4 md:ml-6 space-y-12">
        
        {myExperience.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-12 group">
            
            {/* The Timeline Dot */}
            {/* Sits exactly on the vertical line. Glows when you hover the card! */}
            <div className="absolute left-[-9px] top-1.5 h-4 w-4 bg-black border-2 border-red-500 rounded-full transition-all duration-300 group-hover:bg-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>

            {/* The Experience Card */}
            <div className="bg-black/40 border border-red-900/30 p-6 md:p-8 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.05)] backdrop-blur-sm transition-all duration-300 group-hover:border-red-600/60 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]">
              
              {/* Header: Role and Date */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors">
                  {job.role}
                </h2>
                <span className="text-neutral-500 text-sm font-semibold tracking-wider font-mono">
                  {job.date}
                </span>
              </div>
              
              {/* Company */}
              <h3 className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
                {job.company}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-300 text-base leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Skills/Tools Used (Reusing the pill design!) */}
              {job.skills && (
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 border border-red-900/30 text-neutral-400 transition-all duration-300 hover:border-red-500 hover:text-red-300 hover:shadow-[0_0_12px_rgba(239,68,68,0.4)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}