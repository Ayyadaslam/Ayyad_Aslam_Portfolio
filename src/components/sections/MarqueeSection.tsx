import { useEffect, useRef, useState } from 'react';
import { MARQUEE_IMAGES } from '../../data/marquee';

function Row({
  images,
  translateX,
}: {
  images: string[];
  translateX: number;
}) {
  const tripled = [...images, ...images, ...images];

  return (
    <div
      className="flex w-max gap-3"
      style={{
        transform: `translate3d(${translateX}px, 0, 0)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((src, i) => (
        <div
          key={i}
          className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <Row images={MARQUEE_IMAGES.slice(0, 11)} translateX={offset - 200} />
        <Row images={MARQUEE_IMAGES.slice(11)} translateX={-(offset - 200)} />
      </div>
    </section>
  );
}