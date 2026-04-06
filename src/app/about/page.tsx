import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About — Anand Arora",
  description:
    "Anand Arora: technology executive, product leader, AI writer, and sci-fi author with 18 years building at the frontier of tech and education.",
};

const focusAreas = [
  "Artificial Intelligence",
  "Product Strategy",
  "EdTech",
  "Platform Scaling",
  "Monetization",
  "Mental Models",
  "Science Fiction",
];

const experience = [
  {
    role: "Head of Products & Technology",
    org: "Apeejay Group & Cadence Infotech",
    period: "Current",
    note: "Leading product and engineering for an IT firm specialising in education software.",
  },
  {
    role: "Founder & CEO",
    org: "EdTech Venture",
    period: "Prior",
    note:
      "Scaled from zero to 100,000+ users. Reached $1 M ARR with 20 % profitability before exiting.",
  },
];

const achievements = [
  "18 years building tech products across education, enterprise, and consumer verticals",
  "Scaled a bootstrapped edtech company to $1 M ARR and 20% net profitability",
  "Grew user base to 100,000+ with a lean team and capital-efficient model",
  "Published author — science fiction novel 'The Reboot: Nebula Chronicles'",
];

const writing = [
  "Artificial intelligence and its societal impact",
  "Technology strategy and product thinking",
  "Science, systems, and new mental models",
  "Literature and the art of storytelling",
];

const connect = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aroraanand/",
    description: "Professional updates and long-form thinking",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/decodewithanand/",
    description: "@decodewithanand — ideas decoded visually",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@decodewithanand",
    description: "@decodewithanand — video essays",
  },
  {
    label: "The Reboot on Amazon",
    href: "https://www.amazon.in/Reboot-Nebula-Chronicles-Anand-Arora/dp/B0B9HD57MV/",
    description: "Nebula Chronicles — science fiction novel",
  },
];

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 px-4">
      {/* Headline */}
      <header className="mb-12">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-3">
          Technology Executive · Product Leader · Author
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Anand Arora</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          18 years at the intersection of technology and human ambition — building
          products that scale, leading teams that ship, and writing about the ideas
          that matter most. Currently steering products and engineering at the
          Apeejay Group.
        </p>
      </header>

      <Separator className="mb-10" />

      {/* Impact Metrics */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Leadership Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold">18 yrs</p>
            <p className="text-sm text-muted-foreground mt-1">
              Building and shipping tech products
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">$1 M ARR</p>
            <p className="text-sm text-muted-foreground mt-1">
              Bootstrapped to profitable scale
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">100 K+</p>
            <p className="text-sm text-muted-foreground mt-1">
              Users on a platform built from zero
            </p>
          </div>
        </div>
      </section>

      <Separator className="mb-10" />

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
              <span className="text-xs text-muted-foreground sm:w-20 shrink-0 mt-0.5 pt-1">
                {item.period}
              </span>
              <div>
                <p className="font-semibold">{item.role}</p>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="text-sm mt-1 text-foreground/80">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      {/* Focus Areas */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Focus Areas
        </h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <Badge key={area} variant="secondary" className="text-sm px-3 py-1">
              {area}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="mb-10" />

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Highlights
        </h2>
        <ul className="space-y-3">
          {achievements.map((item) => (
            <li key={item} className="flex gap-3 text-sm">
              <span className="text-muted-foreground mt-0.5 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="mb-10" />

      {/* Writing & Interests */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Writing & Interests
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          I write to think clearly. Topics I keep returning to:
        </p>
        <ul className="space-y-2">
          {writing.map((topic) => (
            <li key={topic} className="flex gap-3 text-sm">
              <span className="text-muted-foreground shrink-0">—</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="mb-10" />

      {/* Connect */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Connect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {connect.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border p-4 hover:border-foreground/40 transition-colors"
            >
              <p className="font-medium group-hover:underline">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
