import { FadeIn } from '../ui/FadeIn';
import { SERVICES } from '../../data/services';
import { Code2, Cpu, Landmark, Network, ShieldCheck } from 'lucide-react';

// Mapping icons to services based on their index
const ServiceIcons = [Code2, Cpu, Landmark, Network, ShieldCheck];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 -mt-10 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 py-24 sm:rounded-t-[50px] sm:px-8 sm:py-32 md:rounded-t-[60px] md:px-10 md:py-40"
    >
      {/* 🌟 Animated Background Orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-float-orb absolute -left-20 top-20 h-[300px] w-[300px] rounded-full bg-[#B600A8] opacity-20 blur-[100px] sm:h-[400px] sm:w-[400px]" />
        <div className="animate-float-orb-reverse absolute -right-20 top-1/3 h-[250px] w-[250px] rounded-full bg-[#7621B0] opacity-20 blur-[120px] sm:h-[350px] sm:w-[350px]" />
        <div className="animate-float-orb absolute bottom-10 left-1/3 h-[350px] w-[350px] rounded-full bg-[#BE4C00] opacity-10 blur-[130px] sm:h-[450px] sm:w-[450px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <FadeIn as="h2" y={40}>
          <span
            className="mb-16 block text-center font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#646973] sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 160px)' }}
          >
            Services
          </span>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ServiceIcons[i % ServiceIcons.length];
            
            return (
              <FadeIn
                key={service.number}
                delay={i * 0.1}
                y={40}
                className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0C0C0C]/60 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#B600A8]/40 hover:bg-[#1A1A1A]/80 sm:p-10 md:p-12"
              >
                {/* Hover Glow Effect (Inside Card) */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#B600A8]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                  {/* Icon & Number Row */}
                  <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start md:gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#D7E2EA] transition-colors duration-500 group-hover:border-[#B600A8]/50 group-hover:text-[#B600A8]">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    {/* Hollow Number (Fills on hover) */}
                    <span
                      className="font-black leading-none text-transparent transition-all duration-500 [-webkit-text-stroke:1.5px_#646973] group-hover:[-webkit-text-stroke:1.5px_#B600A8]"
                      style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-3 pt-2">
                    <div className="flex items-center gap-4">
                      <h3
                        className="font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#D7E2EA]"
                        style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)' }}
                      >
                        {service.name}
                      </h3>
                    </div>
                    <p
                      className="max-w-3xl font-light leading-relaxed text-[#D7E2EA]/60 transition-colors duration-300 group-hover:text-[#D7E2EA]/90"
                      style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Animated Bottom Line on Hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#B600A8] to-[#BE4C00] transition-all duration-700 group-hover:w-full" />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}