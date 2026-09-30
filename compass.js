/* Compass case study content. Rendered by index.html.
   `note` fields render as handwritten margin notes. `id` and `nav` feed the side navigation. */
window.COMPASS = {
  co: "A personal project",
  title: "The answer already existed. Nobody could find it.",
  dek: "In three companies I saw people waste hours searching for things a colleague already knew. Compass is my attempt to fix that.",
  heroNote: "the screen I'm proudest of",
  meta: "Solo project, end to end. Designed, not yet tested with users.",
  hero: { src: "images/map-topic.jpg", w: 1600, h: 1058,
    alt: "Compass Knowledge Map with the Security topic selected. The details panel lists its four connections: Sarah Chen, David Lee, Security Playbook and Kubernetes." },

  short: {
    h: "In short",
    items: [
      ["The problem", "People keep searching for answers that already exist. You can't find an expert unless you already know their name. When someone leaves, their knowledge leaves with them."],
      ["What I designed", "One search that gives a sourced answer, a map of who knows what, and a way to document something in minutes, not meetings."],
      ["Where it stands", "All screens are designed. Nothing is live and I haven't tested it with users yet. My open questions are at the end."]
    ]
  },

  why: {
    h: "Where it started",
    p: [
      "Some years back, an engineer in my team spent a full afternoon rebuilding something another team had already solved two months before. Nobody knew, because there was no way to know.",
      "After that I kept seeing the same thing. In healthtech, in fintech, in SaaS. Different company, same story.",
      "Slowly I understood this is not a search problem. It is a memory problem. New joiners need context that was never written down, so seniors repeat it again and again. And when someone leaves, whatever they didn't write down is simply gone."
    ],
    pull: "The knowledge was not badly organised. It was not organised at all, and the company realised only after that person left.",
    math: {
      label: "my rough maths",
      rows: [["Time lost per repeat search", "~30 min"], ["Repeat searches per week", "~3"], ["Working weeks per year", "~46"]],
      total: ["Lost per person, per year", "~70 hrs"],
      note: "not a study, just a gut check"
    }
  },

  root: {
    h: "Finding the root cause",
    intro: "Before UX, I was a dentist. One habit stayed with me: don't treat the symptom. So I kept asking why.",
    chain: [
      ["What people said", "New joiners take months to become useful. When a senior leaves, we find out how much we never knew."],
      ["Why?", "Most of what people know is never written down."],
      ["Why?", "Writing it up feels like extra work with no benefit. So it happens only under pressure, usually during the handover."],
      ["Diagnosis", "People will document only when it costs less effort than losing the knowledge. Today it costs more."]
    ],
    after: "This changed my focus. Search is important, but the real job is to make documenting so easy that people do it before they leave, not after."
  },

  field: {
    h: "Existing tools",
    intro: "There are many good tools in this space. None of them does all four things together: sourced answers, a real map of expertise, easy contribution, and a way to keep it trustworthy.",
    rivals: [
      { name: "Glean", tag: "Closest to my idea", strong: "Strong AI search across tools.", gap: "Expertise is only a side effect of who wrote what. It is not mapped on its own." },
      { name: "Guru", strong: "A verify loop that keeps answers fresh.", gap: "Finds you the document, not the person." },
      { name: "Confluence + AI plugins", strong: "Where most documents already live.", gap: "Good for writing. Doesn't keep things accurate or tell you whom to ask." },
      { name: "Microsoft Viva Topics", strong: "Deep Microsoft 365 integration.", gap: "Not much use outside Microsoft tools." },
      { name: "ServiceNow Knowledge", strong: "Built for IT service workflows.", gap: "Too much process for most teams." }
    ]
  },

  statement: ["Everyone who leaves a team takes an unwritten library with them.", "I wanted to capture it before they go."],

  ideation: {
    h: "Initial ideation",
    intro: "I started on paper. Pencil sketches helped me decide what each screen must do before worrying about how it looks.",
    sketches: [
      { src: "images/sketch-home.jpg", w: 1280, h: 960, note: "home: ask first, trust signals next",
        alt: "Pencil sketch of the home page: a search bar with 'Ask anything', three count boxes for answers, experts and pending queries, boxes for recent searches and recently validated, and a row of peers.",
        cap: "Home. Search on top, three trust numbers, recent searches, recently validated, and your peers." },
      { src: "images/sketch-map.jpg", w: 1280, h: 1007, note: "map: people linked by skills",
        alt: "Pencil sketch of the knowledge map: user name boxes joined by lines to skill labels.",
        cap: "Knowledge Map. Only people and skills, joined by lines." },
      { src: "images/sketch-validate.jpg", w: 1280, h: 941, note: "validate: a simple queue",
        alt: "Pencil sketch of the validate page: a 0 of 10 counter, tabs for My Validations and Team Validations, and a list of cards with validate, request changes, view and skip buttons.",
        cap: "Validate. A counter, two tabs, and one card per document." }
    ],
    changes: {
      h: "What changed from sketch to screen",
      items: [
        ["Home", "Added a 'Trending this week' panel and a Contribute prompt. 'Your peers' became 'Your knowledge network', showing what each person knows."],
        ["Knowledge Map", "Documents became a third type of node. Line thickness now shows how strong a connection is, and clicking a node opens a details panel."],
        ["Validate", "The structure stayed almost the same. I added a confidence score and a tag that tells you why the doc came to you."]
      ]
    }
  },

  decisions: {
    h: "Key screens",
    intro: "Each screen comes from one idea I kept holding on to.",
    items: [
      { id: "home", screen: "Home", layout: "split", h: "Give the answer, not a link.",
        p: ["The home page should answer, not redirect. So the search bar takes a real question, not guessed keywords. Below it, three panels help even before you type: your recent searches, what the company is asking this week, and what an expert just validated.",
            "The numbers on top answer a silent question: is anyone actually using this, or is it one more wiki nobody opens?"],
        note: "numbers are there to build trust, not to show off",
        shots: [{ src: "images/home.jpg", w: 1522, h: 2000, alt: "Compass home page with a plain-language search bar, usage counts, panels for recent searches, trending this week and recently validated, a contribute prompt, and a knowledge network row." }] },
      { id: "map", screen: "Knowledge Map", layout: "pair", h: "Help people discover experts.",
        p: ["I spent the most time here. If you don't know there's a security expert in the company, you'll never search for her name. So the map connects people, topics and documents based on real contribution and validation history, not on who wrote “expert” in their bio.",
            "This is the first place I'd send a new joiner. Not a wiki home page, but a map of who actually knows what."],
        note: "start from a topic you know, end at a person you didn't",
        shots: [
          { src: "images/map-default.jpg", w: 1600, h: 1058, alt: "Knowledge map with nothing selected, showing people, topics and documents joined by lines.", cap: "Nothing selected. The whole network at a glance." },
          { src: "images/map-topic.jpg", w: 1600, h: 1058, alt: "Knowledge map with the Security topic selected, highlighting its connections and showing a details panel.", cap: "Click Security and you see Sarah, David and the playbook, with connection strength." }
        ] },
      { id: "contribute", screen: "Contribute", layout: "split flip", h: "Five minutes, not a meeting.",
        p: ["The problem was never bad content. It was no content, because writing properly feels like homework. So Contribute asks for the minimum: a title and whatever you already have. A file, a link, two lines. AI does the structuring after that.",
            "One thing I kept with humans: deciding who should see it. AI can't guess that."],
        note: "if it feels like homework, nobody does it",
        shots: [{ src: "images/contribute.jpg", w: 1600, h: 1790, alt: "Contribute form, step 1 of 4, with fields for topic, optional description, attachments, links from other tools, and people to tag.", cap: "Step 1 of 4." }] },
      { id: "validate", screen: "Validate", layout: "split", h: "Show confidence, and keep it honest.",
        p: ["Every answer shows its source and a confidence score. The fastest way to lose trust is to leave people guessing how sure the tool is. But a score nobody rechecks slowly becomes a lie.",
            "So Validate sends new docs to known experts with three options: validate, request changes, or skip. Skip matters as much as the other two. Force an unsure person to say yes or no, and everyone learns to rubber-stamp."],
        note: "skip is a valid answer",
        shots: [{ src: "images/validate.jpg", w: 1600, h: 1566, alt: "Validate page showing 1 of 3 reviewed, one document already validated, and two cards with author, confidence score and options to validate, request changes, view or skip." }] }
    ]
  },

  targets: {
    h: "Goals",
    note: "These are targets I designed for, not results. Nothing is measured with real users yet.",
    items: [["~70", "hrs / yr", "Lost per person today to repeat searching, as per my rough maths."], ["<60", "sec", "From asking a question to getting a sourced answer."], ["<5", "min", "To document something worth keeping."]]
  },

  open: {
    h: "Open questions",
    intro: "Things I'd test with real users before I trust any of this myself.",
    items: [
      ["Am I just moving the bottleneck?", "Instead of nobody knowing, three experts may get disturbed all the time."],
      ["Will people keep validating?", "Or will the queue keep growing until someone gives up?"],
      ["What does confidence mean for a vague question?", "Sometimes the honest answer is “we don't know”, not a percentage."],
      ["What breaks beyond English?", "Most companies I've worked with don't work in just one language."]
    ]
  },

  close: "This is still a work in progress, like the product itself. If you see where it breaks, I'd really like to hear it.",
  signoff: "Thanks for reading, Sharvani",
  author: { name: "Sharvani A", role: "Senior UX Designer", email: "asharvani0@gmail.com", linkedin: "https://linkedin.com/in/sharvaniux" }
};
