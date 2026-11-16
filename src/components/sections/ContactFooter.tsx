import { Mail, Phone } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';

const CONTACT = {
  email: 'iamayyadaslam1000@gmail.com',
  phone: '+92 303 339 7250',
  phoneHref: 'tel:+923033397250',
  github: 'https://github.com/ayyadaslam',
  linkedin: 'https://linkedin.com/in/ayyad-aslam-34082a196',
};

// Inline SVGs for brand icons (removed from newer lucide-react versions)
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#0C0C0C] px-5 pb-10 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-32"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        <FadeIn as="h2" y={40}>
          <span
            className="hero-heading block font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s Talk
          </span>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="max-w-[560px] font-light uppercase leading-relaxed tracking-wide text-[#D7E2EA]"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
          >
            Have a product in mind? Whether it&apos;s fintech, IoT, or a
            full-stack build — i&apos;d love to hear about it.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Say Hello" href={`mailto:${CONTACT.email}`} />
        </FadeIn>

        {/* Contact links */}
        <FadeIn delay={0.3} y={20} className="w-full">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3 text-left text-sm text-[#D7E2EA] transition-colors hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5"
            >
              <Mail size={18} className="shrink-0" />
              <span className="truncate">{CONTACT.email}</span>
            </a>

            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3 text-left text-sm text-[#D7E2EA] transition-colors hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5"
            >
              <Phone size={18} className="shrink-0" />
              <span>{CONTACT.phone}</span>
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3 text-left text-sm text-[#D7E2EA] transition-colors hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5"
            >
              <GithubIcon size={18} />
              <span>github.com/ayyadaslam</span>
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/20 px-4 py-3 text-left text-sm text-[#D7E2EA] transition-colors hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </FadeIn>

        <div className="mt-8 w-full border-t border-[#D7E2EA]/10 pt-6 text-xs uppercase tracking-widest text-[#D7E2EA]/40">
          © {new Date().getFullYear()} Ayyad Aslam — Built with React &amp;
          Framer Motion
        </div>
      </div>
    </footer>
  );
}