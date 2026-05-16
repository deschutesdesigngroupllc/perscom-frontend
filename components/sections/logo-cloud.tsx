import Image from "next/image";
import { Container } from "../ui/container";
import { Marquee } from "../motion/marquee";

const logos = [
  { src: "/logos/laravel.svg", alt: "Laravel" },
  { src: "/logos/react.png", alt: "React" },
  { src: "/logos/aws.png", alt: "AWS" },
  { src: "/logos/docker.png", alt: "Docker" },
  { src: "/logos/github.png", alt: "GitHub" },
  { src: "/logos/vue.png", alt: "Vue" },
  { src: "/logos/statamic.svg", alt: "Statamic" },
  { src: "/logos/tuple.svg", alt: "Tuple" },
];

export function LogoCloud() {
  return (
    <section className="border-y border-white/5 bg-ink-900 py-16">
      <Container>
        <p className="mb-10 text-center text-sm font-medium tracking-wider text-white/40 uppercase">
          Built on technology you trust
        </p>
        <Marquee>
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-10 shrink-0 items-center grayscale opacity-60 transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
