import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let cursor = 0;

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => {
        const wordStart = cursor;
        cursor += word.length + 1;

        return (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, ci) => (
                <Char
                  key={ci}
                  progress={scrollYProgress}
                  index={wordStart + ci}
                  total={total}
                >
                  {char}
                </Char>
              ))}
            </span>
            {wi < words.length - 1 && ' '}
          </Fragment>
        );
      })}
    </p>
  );
}

function Char({
  children,
  progress,
  index,
  total,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = Math.min(1, start + 1 / total);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{children}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}