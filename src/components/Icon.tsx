import {
  HeartHandshake,
  Brain,
  HandHeart,
  Stethoscope,
  BriefcaseMedical,
  BedDouble,
  Activity,
  HeartPulse,
  Users,
  Moon,
  Home,
  Sparkles,
  ChefHat,
  Baby,
  Brush,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  HeartHandshake,
  Brain,
  HandHeart,
  Stethoscope,
  BriefcaseMedical,
  BedDouble,
  Activity,
  HeartPulse,
  Users,
  Moon,
  Home,
  Sparkles,
  ChefHat,
  Baby,
  Brush,
  ShieldCheck,
};

/** Resolve a lucide icon by name from seed data; falls back to HeartHandshake. */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? HeartHandshake;
  return <Cmp className={className} aria-hidden />;
}
