/* Document Assistant case study content. Rendered by the page. `note` fields render as handwritten margin notes. */
window.CASE = {
  co: "FactSet · Shipped",
  title: "The answer was in the document. Finding it took 30 pages.",
  dek: "I designed the Document Assistant, which brings AI summaries into FactSet's Document Viewer so research analysts get to relevant, verifiable information without leaving the source.",
  heroNote: "the assistant, beside the source",
  meta: "Senior UX Designer · Research analysts · Desktop, Tablet, Mobile",
  hero: { src: "images/response.jpg", w: 1920, h: 1131,
    alt: "FactSet Document Viewer with the Document Assistant panel open on the left, showing a summary with numbered citations next to the report." },

  short: {
    h: "In short",
    items: [
      ["The problem", "Analysts scan 15, 20 or 30+ pages of transcripts and filings to find one relevant statement."],
      ["What I designed", "An assistant inside the existing viewer: one clear starting action, answers tied to the source, and a layout that works on three form factors."],
      ["What made it hard", "Not every document could be summarized. Some contributors didn't allow AI on their statements, so the assistant couldn't always be there."]
    ]
  },

  why: {
    h: "The problem",
    p: [
      "Research analysts work through earnings calls, transcripts and company documents. They need the overall message, a specific passage, the sentiment of a call, and proof that each point is really in the source.",
      "The Document Viewer gave them the source, but not a faster way through it.",
      "At the same time, AI was changing expectations. People now expect to ask a question, get a short answer and jump straight to where it came from. The chance was to bring that into the viewer analysts already used, not into a separate tool."
    ],
    pull: "How might we help analysts reach trustworthy insight faster, without taking them away from the document?",
    card: {
      label: "what an analyst needs",
      rows: ["Scan long transcripts", "Find a specific passage", "Get the overall message", "Read the sentiment of a call", "Pull relevant excerpts"],
      total: "Verify it against the source",
      note: "the last one is the one that matters"
    }
  },

  root: {
    h: "The constraint",
    intro: "The hardest constraint wasn't visual. It was about permission.",
    chain: [
      ["Document opens", "The viewer loads a transcript, filing or report."],
      ["Eligibility check", "Some contributors didn't allow their statements to be summarized by AI."],
      ["Two outcomes", "Supported: the assistant initializes and the analyst can use it. Unsupported: the original viewer stays exactly as it was."],
      ["What it meant", "The assistant could not be designed as a feature that is always there."]
    ],
    after: "So availability became part of the design: the assistant appears only on documents that can be summarized."
  },

  built: {
    h: "What we built",
    intro: "Two assistants, sharing one principle: reduce manual scanning, keep the source close.",
    items: [
      { name: "Document Assistant", tag: "Primary", does: "Summarize the document, surface key information, highlight relevant content, and provide supporting excerpts.", why: "Get through long documents without reading every page." },
      { name: "Transcript Assistant", does: "Positive, negative and neutral sentiment, plus the statements that mattered most on the call.", why: "Read the tone of a call quickly." }
    ]
  },

  statement: ["The goal was never a chatbot.", "It was AI that is useful inside the analyst's existing workflow."],

  explored: {
    h: "Clarity over multiple entry points",
    intro: "We first explored separate shortcuts for different jobs. Users couldn't tell what each one did.",
    items: [
      ["What we tried", "Two contextual actions: “Summarize the document” and “Show excerpts from the document”."],
      ["What went wrong", "Competing actions made people stop and guess, before they had even tried the assistant."],
      ["What we shipped", "One primary action: “Summarize the document”. Less flexibility upfront, a much clearer mental model."]
    ]
  },

  decisions: {
    h: "Key screens",
    intro: "Each screen comes from one decision.",
    items: [
      { id: "entry", screen: "Entry", layout: "pair", h: "Only show AI where it can work.",
        p: ["The Doc Assistant button sits first in the toolbar. While the assistant initializes it shows a loading ring, so the analyst knows it is on its way and never taps into something half ready.",
            "On unsupported documents, the entry simply isn't there."],
        note: "never offer something the document can't do",
        shots: [
          { src: "images/loading.jpg", w: 1920, h: 1131, alt: "Document Viewer toolbar with the Doc Assistant button showing a loading ring while the assistant initializes.", cap: "Loading, before it is ready to use." },
          { src: "images/ready.jpg", w: 1920, h: 1131, alt: "Document Viewer toolbar with the Doc Assistant button ready.", cap: "Ready to use." }
        ] },
      { id: "welcome", screen: "Welcome", layout: "split", h: "One clear first step.",
        p: ["The assistant opens in the viewer's existing side panel, a pattern analysts already knew from the design system.",
            "The welcome state says what it can do and offers one action. No blank box asking “what should I type?”."],
        note: "clarity beats showing every capability",
        shots: [{ src: "images/welcome.jpg", w: 1920, h: 1131, alt: "Document Assistant welcome panel with a single Summarize the document action, next to the report." }] },
      { id: "answer", screen: "Answer", layout: "split flip", h: "Ask, understand, verify.",
        p: ["For a research analyst a short answer isn't enough. They need to know where it came from.",
            "Every claim carries a numbered citation that leads back to the passage in the document, which stays in view the whole time. The assistant is a faster route to the source, not a replacement for it."],
        note: "not: ask, leave the document, trust the answer",
        shots: [{ src: "images/response.jpg", w: 1920, h: 1131, alt: "Document Assistant summary with numbered citations beside the report." }] },
      { id: "mobile", screen: "Mobile", layout: "split", h: "One screen, two things competing for it.",
        p: ["On desktop the document and panel sit side by side. On tablet the panel narrows and the document stays visible.",
            "On mobile the assistant opens as a bottom panel over the transcript, so the source is always one swipe away, never a separate page."],
        note: "mobile is not a smaller desktop",
        shots: [{ src: "images/split.jpg", w: 1640, h: 1460, alt: "Mobile design: the transcript, and the Document Assistant as a bottom panel with a cited summary." }] }
    ]
  },

  targets: {
    h: "Measuring success",
    note: "The product tracked session length and interaction count. For a productivity tool both rise when things get worse, so these are the measures I'd use instead. Recommended, not measured results.",
    items: [
      ["North star", "Time to verified insight", "From question, to AI answer, to checking the source, to a usable insight."],
      ["Efficiency", "Time on task", "Is it actually saving research time?"],
      ["Trust", "Source verification rate", "Do analysts open the source behind the answer?"]
    ]
  },

  open: {
    h: "What I'd test next",
    intro: "This shipped under time and scope constraints. These are the things I'd validate with analysts.",
    items: [
      ["Is one entry point clear enough?", "Compare a single action, several contextual actions and open chat, on comprehension and task completion."],
      ["Can analysts trace every claim?", "Test citation styles, excerpts and source links for how confidently people can verify."],
      ["Hide it, or explain why it's missing?", "On unsupported documents, do people look for the assistant, or understand it isn't available?"],
      ["What is AI, and what is the document?", "How clearly the interface separates generated text from the source, and says what it cannot summarize."]
    ]
  },

  close: "The lesson wasn't about designing a chatbot. It was about adding AI to a workflow without making AI the workflow.",
  signoff: "Thanks for reading, Sharvani",
  author: { name: "Sharvani A", role: "Senior UX Designer", email: "asharvani0@gmail.com", linkedin: "https://www.linkedin.com/in/sharvaniux/" }
};
