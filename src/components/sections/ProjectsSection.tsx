import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { PROJECTS } from '../../data/projects';

export default function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-Slider Logic
  useEffect(() => {
    // Agar user ne mouse hover kiya hai, toh slide mat karo
    if (isHovered) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
        
        // Agar end tak pohoch gaye hain, toh wapas start (0) par jao
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Nahi toh next project par jao
          sliderRef.current.scrollBy({ left: clientWidth + 24, behavior: 'smooth' }); // 24 is gap
        }
      }
    }, 3500); // 3.5 Seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  // Buttons Click Logic
  const scrollLeftBtn = () => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      sliderRef.current.scrollBy({ left: -(clientWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      sliderRef.current.scrollBy({ left: clientWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 w-full overflow-hidden rounded-t-[40px] bg-[#0C0C0C] py-20 sm:-mt-12 sm:rounded-t-[50px] sm:py-24 md:-mt-14 md:rounded-t-[60px] md:py-28"
    >
      <FadeIn as="h2" y={40}>
        <span
          className="hero-heading block text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </span>
      </FadeIn>

      {/* Header & Controls */}
      <div className="mx-auto mt-12 mb-8 flex w-full items-center justify-between px-6 sm:px-10 md:px-16">
        <p className="max-w-md text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
          Explore my latest work — auto-sliding.
        </p>
        <div className="flex gap-3">
          <button
            onClick={scrollLeftBtn}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 active:scale-95"
          >
            ←
          </button>
          <button
            onClick={scrollRightBtn}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10 active:scale-95"
          >
            →
          </button>
        </div>
      </div>

      {/* Full Width Auto-Slider Container */}
      <div
        ref={sliderRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-10 pt-4 sm:px-10 md:gap-8 md:px-16 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS.map((project, index) => (
          <div
            key={project.name}
            className="group relative h-[65vh] w-[92vw] shrink-0 snap-center overflow-hidden rounded-[30px] border-2 border-[#D7E2EA]/10 bg-[#1A1A1A] transition-colors duration-500 hover:border-[#D7E2EA]/40 sm:h-[75vh] sm:w-[85vw] lg:w-[80vw] max-w-[1400px] md:rounded-[40px]"
          >
            {/* Project Image (Full Background) */}
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-110 group-hover:opacity-80"
            />

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/80 via-transparent to-transparent opacity-80" />

            {/* Project Details Layout */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16">
              <div className="flex flex-col gap-3 md:gap-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D7E2EA] text-lg font-black text-[#0C0C0C] sm:h-16 sm:w-16 sm:text-2xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B600A8] sm:text-sm">
                      {project.category}
                    </span>
                    <span className="text-sm font-light text-[#D7E2EA]/70">
                      {project.tech}
                    </span>
                  </div>
                </div>

                <h3 className="mt-2 text-4xl font-black uppercase leading-[1.1] tracking-tight text-[#D7E2EA] sm:text-6xl md:text-7xl lg:text-8xl">
                  {project.name}
                </h3>
                
                <div className="mt-4 md:mt-8">
                  <LiveProjectButton href={project.link} label="View Live Project" />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Padding at the end so last item isn't flush with the edge */}
        <div className="w-2 shrink-0 sm:w-6" />
      </div>
    </section>
  );
}