// Single source for the proof numbers shown across the site, so pages can't
// drift apart. Round down and use "+" so figures stay true as they grow.
// Only countable, confirmed figures belong here — no unevidenced multipliers
// like "3x" (removed Nov 2026).

export interface ProofStat {
  number: string;
  title: string;
}

export const proofStats = {
  // Confirmed Nov 2026.
  consultingProjects: { number: "40+", title: "Consulting Projects Completed" },
  // Clients and transformed organisations are the same group, counted across
  // all partners. Confirmed Nov 2026.
  organisationsTransformed: { number: "50+", title: "Organisations Transformed" },

  // Years ValueHut has operated vs the team's combined experience — both
  // confirmed Nov 2026; labels kept distinct so they don't read as conflicting.
  yearsInBusiness: { number: "10+", title: "Years in Business" },
  collectiveExperience: { number: "100+", title: "Years of collective experience" },
  // Talent Matching placements. Confirmed Nov 2026.
  successfulMatches: { number: "50+", title: "Successful Matches" },
} satisfies Record<string, ProofStat>;
