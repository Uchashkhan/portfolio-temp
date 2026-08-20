export const shikhoCaseStudy = {
  title: "Shikho App Redesign",
  eyebrow: "Product Design · EdTech · 2026",
  headline: "Turning a crowded student homepage into a clear daily starting point.",
  introduction:
    "A shipped redesign of Shikho’s mobile homepage—designed to help students quickly understand what matters now, continue learning, and see their momentum without the experience competing for attention.",
  metadata: [
    ["Role", "Product Designer"],
    ["Product", "Shikho"],
    ["Platform", "Mobile app"],
    ["Year", "2026"],
  ],
  context:
    "For paid Shikho students, the homepage is the return point between classes, lessons and progress. It needs to surface what is timely, keep ongoing learning within reach, and make a growing set of useful modules feel ordered rather than overwhelming. The redesign focused on a practical hierarchy: first help a student orient themselves, then help them move forward.",
  challenge: {
    title: "When everything is useful, the next step still has to be obvious.",
    copy: "Routine, classes, subjects, course progress and supporting tools all belong on the homepage. The design challenge was to give each one a role without treating every module as equally urgent—or making students work to find what to do next.",
  },
  stories: [
    {
      number: "01",
      title: "Putting today’s learning at the front.",
      copy: "The routine makes the immediate learning day easy to scan through a compact week view, visible activity states and a path into the full schedule. The homepage can signal what is active or coming up without asking students to first interpret a dense calendar.",
      images: ["/projects/shikho-case/routine.png", "/projects/shikho-case/routine-cards.png"],
      alt: [
        "Shikho weekly routine showing learning activity by day",
        "Shikho routine cards for upcoming learning activities",
      ],
    },
    {
      number: "02",
      title: "Helping students return to what they started.",
      copy: "The subject area turns a broad course load into a personal continuation space. Prioritized subject cards make ongoing work visible, while the structure leaves room to reveal more when needed. It is designed around resuming progress, not repeatedly asking students to begin from zero.",
      images: ["/projects/shikho-case/priority-subjects.png"],
      alt: ["Shikho prioritized subject cards on the mobile homepage"],
    },
    {
      number: "03",
      title: "Making progress feel like a live learning state.",
      copy: "Course progress uses distinct states for completed, active, upcoming and unavailable quarters. This helps students read where they are and what is available next without turning the homepage into a report. Supporting widgets remain present but deliberately secondary to the core learning path.",
      images: [
        "/projects/shikho-case/course-progress.png",
        "/projects/shikho-case/features.png",
      ],
      alt: [
        "Shikho course progress cards showing different quarter states",
        "Shikho homepage feature widgets",
      ],
    },
  ],
  system:
    "A dynamic homepage where routine and live activities move forward when relevant, while conditional modules make room and the upper area collapses on scroll to reveal more content.",
  role: [
    "Defined information hierarchy and content priority across homepage modules.",
    "Shaped module structure, interaction behaviour and changing UI states.",
    "Designed the visual UI and reusable component-level patterns.",
    "Worked with Product and Engineering to keep the experience practical to ship.",
  ],
  outcome:
    "The redesign shipped as part of the redesigned Shikho app, bringing the homepage together as a practical, adaptive entry point for the real student experience.",
} as const;
