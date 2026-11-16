import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import { NAV_LINKS } from '../../data/nav';

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 px-6 pt-6 md:px-10 md:pt-8"
      >
        <ul className="flex items-center justify-between text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:text-lg lg:text-[1.4rem]">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-opacity duration-200 hover:text-[#B600A8]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Heading */}
      <div className="relative z-10 mt-10 overflow-hidden sm:mt-8 md:mt-4">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tighter sm:text-[15vw] md:text-[16vw] lg:text-[17vw]"
        >
          {"Hi, i'm ayyad"}
        </FadeIn>
      </div>

      {/* Portrait (Magnetic 3D Avatar with Glow) */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] z-20 -translate-x-1/2 -translate-y-1/2 sm:top-[52%] md:top-[55%]">
        <div className="pointer-events-auto">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              magnetStrength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div className="relative">
                {/* Neon Glow Behind Avatar */}
                <div
                  className="absolute inset-0 rounded-full opacity-60 blur-[80px]"
                  style={{
                    background:
                      'radial-gradient(circle, #B600A8 0%, #7621B0 40%, transparent 80%)',
                  }}
                />
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Ayyad Aslam"
                  className="relative z-10 w-[300px] object-contain drop-shadow-2xl sm:w-[400px] md:w-[480px] lg:w-[550px]"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-30 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full-stack engineer crafting secure, scalable &amp; real-time products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}