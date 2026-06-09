import { ShieldCheck } from "lucide-react";
import { MEDICAL_SCOPE_NOTE } from "@/lib/constants/brand";

/** Reassuring non-clinical scope note for serious-care pages (spec §4.3, §18.3). */
export function MedicalScopeNote({ children }: { children?: React.ReactNode }) {
  return (
    <aside
      className="flex gap-3 rounded-2xl border border-care bg-care/60 p-4 sm:p-5"
      aria-label="Care scope note"
    >
      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1F5FA0]" aria-hidden />
      <p className="text-sm leading-relaxed text-[#23456b]">
        {children ?? MEDICAL_SCOPE_NOTE}
      </p>
    </aside>
  );
}
