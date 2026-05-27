"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const myProjects = [
  {
    id: "project-ll",
    title: "Project LL",
    year: "2026",
    state: "In Development",
    role: "Project Manager & Lead Programmer",
    description: "A romantic puzzle visual novel where you must piece together clues to uncover your secret admirer.",
    tools: ["Godot", "GDScript", "Trello"],
    contributions: [
      "Will direct the full development lifecycle.",
      "Acting as lead programmer for the rest of the full development cycle."
    ],
    image: "https://placehold.co/800x450/0a0a0a/ef4444?text=In Developement",
    links: {
      github: "",
      itch: "",
      trailer: "",
      demo: ""
    }
  },
  {
    id: "iris",
    title: "Iris",
    year: "2025",
    state: "In Development",
    role: "Project Manager & Lead Programmer",
    description: "A narrative-driven visual novel simulating social reconnection.",
    tools: ["Godot", "GDScript"],
    contributions: [
      "Has and will continue direct the full development lifecycle.",
      "Programmed core game logics and core architectural systems.",
    ],
    image: "https://placehold.co/800x450/0a0a0a/ef4444?text=In Developement",
    links: {
      github: "https://github.com/christansalvaa/Iris"
    }
  },
  {
    id: "project-automata",
    title: "Project: Automata",
    year: "2026",
    state: "Live",
    role: "Secondary Programmer & Documentation Author",
    description: "A space-simulation game that turns the complex logic of Regular Expressions (Regex) into a tactile and immersive experience.",
    tools: ["Godot", "GDScript"],
    contributions: [
      "Created pause menu logic.",
      "Authored comprehensive documentation."
    ],
    image: "/Project Automata.jpg",
    links: {
      github: "https://github.com/VicTCB/Automata-Group-2",
      itch: "https://victcb.itch.io/project-automata" 
    }
  },
  {
    id: "roman-empire",
    title: "Roman Empire",
    year: "2026",
    state: "Live",
    role: "Secondary Programmer, Storywriter, & Documentation Author",
    description: "A visual novel puzzle game that revolves around Denise who suddenly encounters his old classmate named Lia, causing them to reminisce about the past.",
    tools: ["Godot", "GDScript"],
    contributions: [
      "Created and implemented pause menu logic.",
      "Authored comprehensive documentation",
      "Wrote the one-shot story and script for dialogues"
    ],
    image: "/Roman Empire.jpg",
    links: {
      github: "https://github.com/Pichi-Patchwork-Studio/Roman-Empire",
      itch: "https://pichi-patchwork.itch.io/roman-empire",
      trailer: "/Roman Empire Trailer.mp4", 
    }
  },
  {
    id: "marshmallow-3d",
    title: "Marshmallow 3D",
    year: "2026",
    state: "Live",
    role: "Project Member",
    description: "A 3D maze game where you are a marshmallow.",
    tools: ["Godot", "GDScript"],
    contributions: [
      "Implemented audio to player movement.",
      "Developed the 'finish' state, intergrating triggers and transition logic."
    ],
    image: "https://placehold.co/800x450/0a0a0a/ef4444?text=Placeholder",
    links: {
      github: "",
      itch: ""
    }
  },
  {
    id: "marshmallow-2d",
    title: "Marshmalllow 2D",
    year: "2026",
    state: "Live",
    role: "Project Member",
    description: "A 2D maze game where you are a marshmallow.",
    tools: ["Godot", "GDScript"],
    contributions: [
      "Created the map design for the final level."
    ],
    image: "https://placehold.co/800x450/0a0a0a/ef4444?text=Placeholder",
    links: {
      github: "",
      itch: "" 
    }
  },
  {
    id: "battle-city",
    title: "Battle City",
    year: "2026",
    state: "Unpublished",
    role: "Project Manager & Lead Programmer",
    description: "A clone of Battle City: War of Steel using GameMakerStudio2",
    tools: ["GameMakerStudio2", "GML"],
    contributions: [
      "Acted as lead programmer for the whole developement cycle."
    ],
    image: "/Battle City.jpg",
    links: {
      github: "https://github.com/christansalvaa/Battle-City"
    }
  },
  {
    id: "archvr",
    title: "archvr",
    year: "2025",
    state: "Unpublished",
    role: "Project Manager & Lead Programmer",
    description: "A movie tracker website made for enthusiasts by enthusiasts, heavily inspired by Letterboxd.",
    tools: ["HTML", "JavaScript", "CSS", "API Integration", "IMDb API"],
    contributions: [
      "Spearheaded the end-to-end development of the project.",
      "Succesfully integrated the IMDb API to automate the retrieval of real-time movie metadata."
    ],
    image: "/archvrr.jpg",
    links: {
      github: "https://github.com/christansalvaa/archvr/"
    }
  },
    {
    id: "filo-type",
    title: "FiloType",
    year: "2023",
    state: "Unpublished",
    role: "Project Manager",
    description: "A typing platform with a local language database.",
    tools: ["HTML", "JavaScript", "CSS", "MySQL","Database Integration"],
    contributions: [
      "Pioneered the core program vision by identifying a niche for localized typing tools.",
      "Authored a detailed technical documentation about everything regarding FiloType."
    ],
    image: "/FiloType.png"
  },
  {
    id: "hangman",
    title: "Hangman",
    year: "2022",
    state: "Unpublished",
    role: "Project Member",
    description: "A python based hangman game.",
    tools: ["Python"],
    contributions: [
      "Authored a comprehensive project documentation."
    ],
    image: "/hangman.jpg",
    links: {
      github: "https://github.com/christansalvaa/Hangman"
    }
  },
   {
    id: "medicine-inventory",
    title: "MIMS",
    year: "2022",
    state: "Unpublished",
    role: "Project Head",
    description: "A medicine inventory management system built using java.",
    tools: ["Java", "MySQL"],
    contributions: [
      "Spearheaded the development lifecycle.",
      "Authored a comprehensive project documentation.",
      "Acted as lead presenter for video documentation."
    ],
    image: "MIMS.png"
  },
  {
    id: "snake-game",
    title: "Snake Game",
    year: "2021",
    state: "Unpublished",
    role: "Project Member",
    description: "A simple snake game built using Java.",
    tools: ["Java"],
    contributions: [
      "Authored a comprehensive project documentation.",
      "Acted as lead presenter for video documentation."
    ],
    image: "/Snake Game.jpg"
  }
];

export default function ProjectsPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Lock scrolling on the main page when the modal is open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCard]);

  // Find the data for the currently clicked project
  const activeProjectData = myProjects.find((p) => p.id === activeCard);

  return (
    <div className="animate-fade-in max-w-[1400px] mx-auto mt-10 pb-20 px-4 md:px-8">
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] mb-12 pb-2">
        Projects
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 items-start relative">
        
        {/* Left Side: Sticky Navigation Menu */}
        <div className="hidden lg:block w-48 shrink-0 sticky top-32">
          <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
            Index
          </h3>
          <ul className="flex flex-col gap-2 border-l border-neutral-800">
            {myProjects.map((project) => (
              <li key={`nav-${project.id}`}>
                <a 
                  href={`#${project.id}`}
                  className="block pl-4 py-2 text-sm text-neutral-400 hover:text-white hover:border-red-500 border-l border-transparent -ml-[1px] transition-all"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: The Project Cards (Fully Detailed but Clickable) */}
        <div className="w-full flex-1 flex flex-col gap-12">
          {myProjects.map((project) => (
            <div 
              key={project.id} 
              id={project.id}
              onClick={() => setActiveCard(project.id)}
              className="scroll-mt-32 flex flex-col md:flex-row gap-8 bg-black/40 border border-red-900/50 p-6 md:p-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-red-600 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] cursor-pointer group"
            >
              
              {/* Image Container & Tech Stack */}
              <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-4 relative">
                {/* Visual cue to click */}
                <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-neutral-300 border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 pointer-events-none">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg> Expand
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto aspect-video object-cover rounded border border-red-950 shadow-inner group-hover:brightness-110 transition-all"
                />
                
                {project.tools && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 border border-red-900/30 text-neutral-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Text & Data (Restored to full detail) */}
              <div className="w-full flex-1 flex flex-col justify-center">
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <h2 className="text-2xl font-bold text-white flex items-baseline gap-2 group-hover:text-red-400 transition-colors">
                    {project.title} 
                    <span className="text-neutral-500 text-base font-normal tracking-wide">({project.year})</span>
                  </h2>
                  <span className="px-3 py-1 bg-red-950/40 border border-red-900 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full">
                    {project.state}
                  </span>
                </div>
                
                <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
                  {project.role}
                </p>
                
                <p className="text-neutral-300 text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Contributions Box (Restored!) */}
                <div className="bg-neutral-950/50 border-l-2 border-red-800 p-4 mb-6">
                  <h3 className="text-xs text-neutral-400 uppercase tracking-widest mb-2 font-semibold">Contributions</h3>
                  <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1">
                    {project.contributions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Action Links (Restored with e.stopPropagation!) */}
                <div 
                  className="flex flex-wrap gap-3 mt-auto border-t border-red-950 pt-5"
                  onClick={(e) => e.stopPropagation()} // Crucial: stops the card from expanding when a link is clicked
                >
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 text-sm text-neutral-300 rounded hover:border-red-500 hover:text-red-400 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      Source Code
                    </a>
                  )}

                  {project.links?.itch && (
                    <a href={project.links.itch} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 text-sm text-neutral-300 rounded hover:border-red-500 hover:text-red-400 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
                      </svg>
                      Play on Itch.io
                    </a>
                  )}

                  {project.links?.trailer && (
                    <a href={project.links.trailer} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 text-sm text-neutral-300 rounded hover:border-red-500 hover:text-red-400 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Watch Trailer
                    </a>
                  )}

                  {project.links?.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 text-sm text-neutral-300 rounded hover:border-red-500 hover:text-red-400 transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN OVERLAY MODAL */}
      {activeCard && activeProjectData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in">
          
          {/* Dark Blur Backdrop (Clicking this closes the modal) */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setActiveCard(null)}
          ></div>

          {/* Expanded Modal Content Box */}
          <div className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-[#070707] border border-red-900/60 rounded-xl shadow-[0_0_60px_rgba(220,38,38,0.25)] flex flex-col animate-scale-up">
            
            {/* Close Button ("X") */}
            <button 
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full border border-neutral-700 text-white hover:text-red-500 hover:border-red-500 hover:bg-red-950/30 transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Huge Hero Image */}
            <div className="w-full relative">
              <img 
                src={activeProjectData.image} 
                alt={activeProjectData.title} 
                className="w-full h-64 md:h-[400px] object-cover border-b border-red-950"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent"></div>
            </div>

            {/* Deep Dive Information */}
            <div className="p-6 md:p-10 flex flex-col gap-6 -mt-10 relative z-10">
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-md">
                  {activeProjectData.title} 
                  <span className="text-neutral-500 text-2xl font-bold ml-3">({activeProjectData.year})</span>
                </h2>
                <span className="px-4 py-1.5 bg-red-900/20 border border-red-600 text-red-400 text-sm font-bold uppercase tracking-widest rounded-full">
                  {activeProjectData.state}
                </span>
              </div>
              
              <p className="text-red-500 text-base font-bold uppercase tracking-widest border-b border-red-950/50 pb-4">
                {activeProjectData.role}
              </p>

              <div className="flex flex-col md:flex-row gap-10">
                {/* Left Side: Description & Tools */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    {activeProjectData.description}
                  </p>
                  
                  {activeProjectData.tools && (
                    <div>
                      <h3 className="text-xs text-neutral-500 uppercase tracking-widest mb-3 font-semibold">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {activeProjectData.tools.map((tool, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Contributions */}
                <div className="w-full md:w-1/2 bg-black/40 border border-neutral-800 p-6 rounded-lg">
                  <h3 className="text-sm text-white uppercase tracking-widest mb-4 font-bold border-b border-red-950 pb-2">Key Contributions</h3>
                  <ul className="list-disc list-inside text-neutral-300 text-base space-y-3">
                    {activeProjectData.contributions.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-neutral-800">
                {activeProjectData.links?.github && (
                  <a href={activeProjectData.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-neutral-900 border border-neutral-700 text-sm font-bold text-white rounded hover:border-red-500 hover:bg-red-950/30 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    Source Code
                  </a>
                )}

                {activeProjectData.links?.itch && (
                  <a href={activeProjectData.links.itch} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-red-600 border border-red-500 text-sm font-bold text-white rounded hover:bg-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
                    </svg>
                    Play on Itch.io
                  </a>
                )}

                {activeProjectData.links?.trailer && (
                  <a href={activeProjectData.links.trailer} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-neutral-900 border border-neutral-700 text-sm font-bold text-white rounded hover:border-red-500 hover:bg-red-950/30 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    Watch Trailer
                  </a>
                )}

                {activeProjectData.links?.demo && (
                  <a href={activeProjectData.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-neutral-900 border border-neutral-700 text-sm font-bold text-white rounded hover:border-red-500 hover:bg-red-950/30 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}