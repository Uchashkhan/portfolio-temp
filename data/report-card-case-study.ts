export const reportCardCaseStudy = {
  title: "Shikho Report Card",
  eyebrow: "Product Design · Learning Analytics · 2026",
  headline: "Making student performance easier to understand—and easier to act on.",
  introduction:
    "A shipped mobile Report Card for Shikho that turns performance data into a clearer learning experience: helping students see where they stand, understand what is affecting their result, and find where to focus next.",
  metadata: [
    ["Role", "Product Designer"],
    ["Product", "Shikho"],
    ["Area", "Learning analytics"],
    ["Year", "2026"],
  ],
  context:
    "The Shikho Report Card brings together performance signals that are useful but easy to misread on a small screen: scores, class rank, subject results, learning activity, chapter performance, trends, and areas needing attention. The challenge was to make this information feel structured rather than overwhelming—while helping students move beyond “How did I do?” to “What should I work on next?”",
  challenge: {
    title: "A report should not leave students alone with a number.",
    copy: "A score or rank can show an outcome, but it does not explain what led there or what should happen next. The experience needed a hierarchy that makes performance easy to scan first, then lets students investigate only as deeply as they need.",
  },
  stories: [
    {
      number: "01",
      title: "Moving from one result to a learning map.",
      copy: "The report begins with high-level progress, then progressively reveals subject-level and chapter-level detail. Students can first understand their overall position, then tap into a subject and trace performance to specific chapters and topics. This prevents the experience from becoming a dense dashboard while keeping meaningful depth within reach.",
    },
    {
      number: "02",
      title: "Making performance metrics easier to trust.",
      copy: "Score, class rank, subject score, and chapter rank can be confusing when they appear without context. I designed the UI so these concepts remain separated at the appropriate level, with clear explanatory entry points for how they are determined. The goal was to minimise confusion without forcing every student through an explanation before seeing their report.",
    },
    {
      number: "03",
      title: "Turning weak areas into a next step.",
      copy: "The weak-topics system identifies where a student needs improvement, rather than leaving them with an abstract low score. It helps students move from subject performance into chapter and topic-level understanding, then provides guidance to revisit classes, practise quizzes, and use relevant learning resources.",
    },
  ],
  system:
    "The Report Card is structured around different quarters, performance trends, learning activity, and varying levels of available data. It includes focused areas, detailed drill-down, leaderboard context, and an empty state so the experience remains understandable even when a student does not yet have a complete report or model-test data.",
  role: [
    "Led the end-to-end UI design through productisation.",
    "Structured the hierarchy across overview, subject, chapter, and topic-level performance.",
    "Designed interaction states and visual patterns for performance, trends, focused areas, and explanations.",
    "Worked with Product and Engineering to make the system ready for the shipped Shikho app.",
  ],
  outcome:
    "The Report Card shipped as part of the Shikho app, creating a clearer, more actionable way for students to understand their learning performance.",
} as const;
