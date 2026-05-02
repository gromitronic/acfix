export type BlogImage = {
  placement: "cover" | `after paragraph ${number}`;
  purpose: string;
  alt: string;
  prompt: string;
  src?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  images: BlogImage[];
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ac-blowing-warm-air-port-st-lucie",
    title: "AC Blowing Warm Air in Port St. Lucie? Start Here",
    excerpt:
      "Warm air from the vents can mean anything from a thermostat setting to a refrigerant or airflow problem. Here is how to think through the first steps before requesting local HVAC help.",
    metaDescription:
      "Learn common reasons an AC blows warm air in Port St. Lucie and when to request help from a licensed local HVAC partner through ACFix.",
    publishedAt: "2026-05-02",
    readingTime: "5 min read",
    tags: ["AC repair", "Port St. Lucie", "HVAC troubleshooting", "Cooling"],
    images: [
      {
        placement: "cover",
        purpose: "Set the local heat-and-homeowner context before the troubleshooting copy.",
        alt: "Port St. Lucie home exterior with outdoor AC unit on a hot afternoon",
        src: "/images/worried-man-outdoor-house-porch.jpg",
        prompt:
          "Bright, realistic Florida home exterior in Port St. Lucie on a hot afternoon, subtle HVAC condenser visible, homeowner looking concerned near a thermostat visible through open doorway, clean editorial style, no logos, no text."
      },
      {
        placement: "after paragraph 2",
        purpose: "Support the basic thermostat-check step.",
        alt: "Homeowner checking a thermostat set to cooling mode",
        prompt:
          "Close realistic photo of a homeowner adjusting a modern wall thermostat in a bright Florida hallway, cooling mode implied but no readable screen text, natural daylight, no logos."
      },
      {
        placement: "after paragraph 5",
        purpose: "Show visible warning signs without encouraging DIY repair.",
        alt: "HVAC refrigerant line with visible frost near indoor equipment",
        prompt:
          "Safe realistic close-up of frost on an HVAC refrigerant line near an indoor air handler, homeowner observing from a distance, clean utility closet, no tools in hand, no text."
      }
    ],
    body: [
      "When an AC starts blowing warm air, the first instinct is usually panic. In Port St. Lucie, that makes sense. A cooling issue can turn a house uncomfortable fast, especially during long humid afternoons.",
      "Start with the basics before assuming the worst. Check that the thermostat is set to cool, the temperature is set below the current room temperature, and the fan is not set to \"on\" in a way that makes it feel like the system is constantly moving room-temperature air.",
      "Next, check the air filter. A clogged filter can restrict airflow and make the system struggle. If the filter is packed with dust, replace it and give the system time to run. Do not remove the filter and run the system without one.",
      "If the outdoor unit is not running, the issue may involve power, a tripped breaker, a failed capacitor, a contactor, or another component that should be handled by a licensed HVAC professional. If the system is running but not cooling, refrigerant, coil, airflow, or compressor issues may be involved.",
      "You should also look for signs of water around the indoor unit, ice on the refrigerant lines, unusual noises, or burning smells. Those are good reasons to stop guessing and request professional help.",
      "ACFix can help with the next step. ACFix is not an HVAC contractor and does not repair systems directly. We help route homeowner requests to independent local HVAC partners who can contact you about service options, scheduling, and pricing.",
      "If your AC is blowing warm air in Port St. Lucie, submit a request and describe what you are seeing. The more specific you are, the easier it is for a local partner to understand the problem before they call."
    ]
  },
  {
    slug: "florida-humidity-ac-problems",
    title: "Why Florida Humidity Makes AC Problems Feel Worse",
    excerpt:
      "In Florida, comfort is not just about temperature. Humidity can make a cooling problem feel bigger and may point to airflow, runtime, sizing, or maintenance issues.",
    metaDescription:
      "Understand why humidity affects AC comfort in Florida homes and when to request a local HVAC referral through ACFix.",
    publishedAt: "2026-05-09",
    readingTime: "5 min read",
    tags: ["Humidity", "Florida HVAC", "Indoor comfort", "AC maintenance"],
    images: [
      {
        placement: "cover",
        purpose: "Introduce humidity as the central comfort problem.",
        alt: "Humid Florida living room with thermostat and window condensation",
        src: "/images/modern-living-room-thermostat-view.jpg",
        prompt:
          "Realistic interior of a Florida living room with sunlight, thermostat showing high humidity without readable numbers, subtle condensation on a window, clean lifestyle photography, no text."
      },
      {
        placement: "after paragraph 2",
        purpose: "Visualize airflow and runtime issues in a normal home setting.",
        alt: "Ceiling vent in a humid Florida room",
        prompt:
          "Realistic photo of a ceiling AC vent in a bright Florida bedroom, slight sense of heavy humid air through soft window condensation, clean editorial style, no text, no logos."
      },
      {
        placement: "after paragraph 4",
        purpose: "Connect musty smells and moisture clues to professional help.",
        alt: "Homeowner noticing moisture near indoor HVAC unit",
        prompt:
          "Homeowner safely noticing light moisture near an indoor HVAC air handler in a utility closet, no active repair, natural light, realistic photo, no text."
      }
    ],
    body: [
      "Florida AC problems rarely feel small because humidity changes everything. A room can be technically cool and still feel sticky, heavy, and uncomfortable. That is because air conditioning does two jobs: it lowers temperature and helps remove moisture from the air.",
      "If your home feels humid even when the AC is running, a few things may be happening. The system may not be running long enough to pull moisture out of the air. The air filter may be dirty. Airflow may be restricted. The evaporator coil may need attention. The system may also be oversized, which can cool the house quickly without enough runtime for dehumidification.",
      "Port St. Lucie homes can be especially demanding on AC equipment. Long cooling seasons, frequent storms, and high moisture levels mean systems work hard for much of the year. Small maintenance issues can show up as comfort problems before the system fully fails.",
      "Homeowners can start by checking the filter, making sure vents are open and unobstructed, and confirming thermostat settings. If humidity remains high, or if you notice musty smells, water near the indoor unit, weak airflow, or rooms that never feel comfortable, it is time to involve a professional.",
      "ACFix helps homeowners take that next step by routing requests to independent local HVAC partners where available. ACFix is a referral service, not the company performing the HVAC work.",
      "When submitting a request, mention the humidity issue clearly. Include whether the AC is cooling, how long it runs, which rooms feel uncomfortable, and whether you have noticed water, odors, or airflow changes. Those details help a local partner prepare for the conversation."
    ]
  },
  {
    slug: "ac-tune-up-season-port-st-lucie",
    title: "AC Tune-Up Season in Port St. Lucie: What Homeowners Should Know",
    excerpt:
      "A seasonal AC tune-up can help catch small issues before peak heat puts your system under pressure. Here is what Port St. Lucie homeowners should know.",
    metaDescription:
      "Learn why AC tune-ups matter in Port St. Lucie and how ACFix can connect homeowners with local HVAC partner contractors.",
    publishedAt: "2026-05-16",
    readingTime: "5 min read",
    tags: ["AC tune-up", "Maintenance", "Port St. Lucie", "HVAC partners"],
    images: [
      {
        placement: "cover",
        purpose: "Present maintenance as routine and professional.",
        alt: "HVAC professional inspecting an outdoor condenser beside a Florida home",
        src: "/images/hvac-technician-repairing-air-conditioner.jpg",
        prompt:
          "Licensed HVAC professional inspecting an outdoor condenser beside a Florida home, sunny clean setting, realistic photography, no company logo, no text."
      },
      {
        placement: "after paragraph 2",
        purpose: "Illustrate the kinds of components checked during maintenance.",
        alt: "HVAC professional checking components during AC maintenance",
        prompt:
          "Realistic close-up of an HVAC professional checking AC components with a meter beside an outdoor condenser, clean professional scene, no visible brand names, no text."
      },
      {
        placement: "after paragraph 4",
        purpose: "Show homeowner maintenance habits between professional visits.",
        alt: "Homeowner replacing a clean HVAC air filter",
        prompt:
          "Bright realistic photo of a homeowner replacing a rectangular HVAC air filter inside a Florida home, clean hands, simple maintenance moment, no text, no logos."
      }
    ],
    body: [
      "In Port St. Lucie, the AC does not get a long vacation. Even outside the hottest months, Florida homes rely on cooling and humidity control often enough that small issues can build quietly.",
      "That is why seasonal tune-ups matter. A maintenance visit can help identify dirty coils, weak airflow, clogged drain lines, worn electrical components, thermostat issues, and early signs of system stress. It is not a magic shield against every breakdown, but it can reduce surprises and give homeowners a clearer picture of system health.",
      "A tune-up is especially worth considering if your AC runs constantly, struggles in the afternoon, makes new noises, leaves some rooms warmer than others, or has not been checked in a year or more. Older systems may need closer attention because parts wear down gradually before a failure becomes obvious.",
      "Homeowners can handle a few simple habits between visits. Replace filters on schedule. Keep supply and return vents clear. Keep debris away from the outdoor unit. Pay attention to changes in noise, airflow, humidity, and energy usage.",
      "The actual inspection and service should be handled by a licensed HVAC professional. ACFix can help route your maintenance request to an independent local HVAC partner. ACFix does not perform tune-ups directly and does not control partner pricing, scheduling, or service terms.",
      "If you want a Port St. Lucie AC tune-up before peak heat, submit a referral request with your ZIP code, system concern, and preferred timing. A local partner may contact you to discuss availability and next steps."
    ]
  },
  {
    slug: "before-requesting-ac-repair",
    title: "What to Do Before You Request AC Repair",
    excerpt:
      "A few quick checks can help you describe the issue clearly and avoid confusion when a local HVAC partner contacts you.",
    metaDescription:
      "Before requesting AC repair, use this simple homeowner checklist to gather details for a local HVAC partner.",
    publishedAt: "2026-05-23",
    readingTime: "6 min read",
    tags: ["AC repair", "Homeowner checklist", "HVAC referral", "Troubleshooting"],
    images: [
      {
        placement: "cover",
        purpose: "Frame the post as a practical homeowner checklist.",
        alt: "Homeowner writing AC symptoms on a notepad near a thermostat",
        src: "/images/woman-writing-notes-indoor-home.jpg",
        prompt:
          "Homeowner writing AC symptoms on a notepad near a thermostat, clean Florida kitchen background, practical and realistic, no text."
      },
      {
        placement: "after paragraph 3",
        purpose: "Support the thermostat and filter checks.",
        alt: "Thermostat and HVAC filter being checked before AC repair request",
        prompt:
          "Split-style realistic editorial photo composition showing a thermostat on a wall and a clean HVAC filter being checked nearby, bright home interior, no readable text."
      },
      {
        placement: "after paragraph 5",
        purpose: "Encourage useful documentation for the contractor.",
        alt: "Homeowner photographing water near an indoor AC unit",
        prompt:
          "Homeowner using a phone to photograph a small water spot near an indoor AC unit from a safe distance, practical documentation scene, no logos, no text."
      }
    ],
    body: [
      "Before you request AC repair, take five minutes to gather the details a contractor will likely ask for. You do not need to diagnose the system. You just need to describe what is happening clearly.",
      "First, note what the system is doing. Is it blowing warm air, not turning on, cycling quickly, making noise, leaking water, freezing up, or cooling some rooms better than others? Write down when the problem started and whether it is constant or intermittent.",
      "Second, check the thermostat. Confirm the mode, temperature setting, battery status if applicable, and whether the display looks normal. Sometimes a simple setting or battery issue can create confusion.",
      "Third, check the filter. A very dirty filter can cause airflow and comfort problems. If you replace it, mention that when you submit the request.",
      "Fourth, look at the outdoor unit from a safe distance. Is it running? Is it noisy? Is there debris around it? Do not open panels or touch electrical components.",
      "Fifth, take photos if there is visible water, ice, damaged wiring, or a thermostat error message. Photos can help a local HVAC partner understand the issue faster.",
      "If anything smells like burning, sparks, or seems unsafe, turn the system off and seek professional help. Electrical and refrigerant-related issues should not be handled as DIY repairs.",
      "ACFix makes the referral step simple. Submit the issue once, and we help route the request to an independent local HVAC partner where available. ACFix is not an HVAC contractor and does not perform the repair. The partner contractor will handle diagnosis, pricing, scheduling, and service terms directly with you."
    ]
  },
  {
    slug: "repair-or-replace-older-ac-system",
    title: "Repair or Replace? How to Think About an Older AC System",
    excerpt:
      "When an older AC breaks down, the right choice depends on age, repair cost, comfort, efficiency, and how long you plan to stay in the home.",
    metaDescription:
      "Learn key factors homeowners should consider when deciding whether to repair or replace an older AC system.",
    publishedAt: "2026-05-30",
    readingTime: "5 min read",
    tags: ["AC replacement", "HVAC repair", "Home comfort", "Florida homes"],
    images: [
      {
        placement: "cover",
        purpose: "Show the repair-versus-replace decision visually.",
        alt: "Older AC condenser compared with newer AC condenser near a Florida home",
        src: "/images/man-explaining-air-conditioner-woman.jpg",
        prompt:
          "Side-by-side visual of an older outdoor AC condenser and a newer clean condenser near a Florida home, realistic editorial photo, no text."
      },
      {
        placement: "after paragraph 2",
        purpose: "Represent reviewing repair costs and system age.",
        alt: "Homeowner reviewing an HVAC estimate at a kitchen table",
        prompt:
          "Realistic photo of a homeowner reviewing an HVAC estimate document at a kitchen table with calculator and pen, no readable text, warm natural light."
      },
      {
        placement: "after paragraph 5",
        purpose: "Cue a contractor conversation without implying ACFix performs the work.",
        alt: "Homeowner discussing AC replacement options with HVAC contractor",
        prompt:
          "Homeowner speaking with an independent HVAC professional beside an outdoor condenser, both looking at equipment, Florida home exterior, no company logos, no text."
      }
    ],
    body: [
      "When an older AC system breaks down, the hardest question is not always \"Can it be fixed?\" Sometimes it is \"Should it be fixed?\"",
      "There is no universal answer. A small repair on a system that has otherwise been reliable may make sense. A costly repair on an older system with recurring issues may point toward replacement. The best decision depends on the system age, repair estimate, energy use, comfort problems, warranty status, and your plans for the home.",
      "In Florida, AC systems work hard. Long cooling seasons can make age feel heavier than it does in milder climates. If your system struggles every summer, runs constantly, leaves rooms humid, or needs repeated service, it may be time to have a replacement conversation.",
      "That does not mean every breakdown should become a sales pitch. Homeowners should ask clear questions: What failed? Is the repair likely to last? Are other major components showing wear? What efficiency or comfort gains would replacement offer? What warranties apply? Are there financing options?",
      "Get the estimate in writing and compare the repair cost against the likely remaining life of the system. If you are unsure, it is reasonable to ask for both repair and replacement options.",
      "ACFix can help route replacement guidance or repair requests to independent local HVAC partners. ACFix is a referral service, not the contractor making the recommendation or doing the work. The partner contractor is responsible for inspecting the system, explaining options, pricing the work, and providing any warranty details.",
      "If you are weighing repair versus replacement, describe the system age, symptoms, and any recent repair history when you submit your request."
    ]
  },
  {
    slug: "ac-drain-line-florida",
    title: "Why Your AC Drain Line Matters in Florida",
    excerpt:
      "A clogged condensate drain line can shut down cooling or cause water issues. Florida homeowners should know the warning signs.",
    metaDescription:
      "Learn why AC condensate drain lines matter in Florida homes and when to request local HVAC help.",
    publishedAt: "2026-06-06",
    readingTime: "5 min read",
    tags: ["Drain line", "AC maintenance", "Florida HVAC", "Water leak"],
    images: [
      {
        placement: "cover",
        purpose: "Introduce the drain line and condensate pan clearly.",
        alt: "Indoor HVAC air handler area with condensate drain line and pan",
        src: "/images/drain-pan-washing-machine-corner.jpg",
        prompt:
          "Close realistic photo of an indoor HVAC air handler area with clean drain line and pan, bright utility closet, no water damage, no text."
      },
      {
        placement: "after paragraph 2",
        purpose: "Show what a backed-up drain issue can look like.",
        alt: "Small water buildup near indoor HVAC unit",
        prompt:
          "Realistic photo of small water buildup near an indoor HVAC air handler drain pan, clean scene without severe damage, homeowner observing safely, no text."
      },
      {
        placement: "after paragraph 5",
        purpose: "Show professional service without DIY instructions.",
        alt: "HVAC professional inspecting an AC condensate drain line",
        prompt:
          "Licensed HVAC professional inspecting an AC condensate drain line in a utility closet, professional tools visible but not instructional, clean realistic photo, no logos, no text."
      }
    ],
    body: [
      "Your AC does more than cool the air. It also removes moisture. That moisture has to go somewhere, and in many systems it leaves through a condensate drain line.",
      "In Florida, drain line problems are common because AC systems remove a lot of moisture over a long cooling season. If the line clogs, water can back up near the indoor unit. Depending on the system, that can trigger a safety switch, stop the AC, or lead to water damage if ignored.",
      "Warning signs include water around the air handler, a musty smell, AC shutting off unexpectedly, a full drain pan, or repeated float switch trips. If your thermostat is on but the system will not run, a drain safety switch may be one possible cause.",
      "Homeowners can reduce risk by replacing filters on schedule and paying attention to moisture near the indoor unit. Some homeowners use drain maintenance products, but you should follow manufacturer guidance and avoid anything that could damage the system.",
      "If you see active leaking, repeated shutdowns, or signs of water damage, request professional help. A licensed HVAC professional can inspect the drain line, clear the blockage, and check whether the system has other moisture or airflow issues.",
      "ACFix can help route drain line and cooling requests to independent local HVAC partners in the Port St. Lucie area where available. ACFix is not the HVAC contractor and does not perform drain service directly. The partner contractor handles diagnosis, pricing, and service.",
      "When submitting a request, mention where the water is, whether the system has stopped cooling, and whether this has happened before."
    ]
  },
  {
    slug: "weak-airflow-from-vents",
    title: "Weak Airflow From Your Vents? Possible Causes",
    excerpt:
      "Weak airflow can come from filters, ducts, blower issues, frozen coils, or blocked vents. Here is how to describe the problem before asking for help.",
    metaDescription:
      "Understand common causes of weak AC airflow and how ACFix can help connect homeowners with local HVAC partners.",
    publishedAt: "2026-06-13",
    readingTime: "5 min read",
    tags: ["Airflow", "AC repair", "Ductwork", "HVAC troubleshooting"],
    images: [
      {
        placement: "cover",
        purpose: "Make the weak-airflow symptom immediately recognizable.",
        alt: "Homeowner checking weak airflow from an air vent",
        src: "/images/man-checking-air-vent-interior.jpg",
        prompt:
          "Realistic photo of a homeowner holding a hand near an air vent checking airflow in a bright Florida hallway, no text, clean editorial style."
      },
      {
        placement: "after paragraph 2",
        purpose: "Support the filter and blocked-vent causes.",
        alt: "Dirty HVAC filter beside clean replacement filter",
        prompt:
          "Realistic close-up of a dirty HVAC air filter beside a clean replacement filter on a neutral surface, practical homeowner maintenance image, no text, no logos."
      },
      {
        placement: "after paragraph 4",
        purpose: "Show room-by-room airflow differences.",
        alt: "Warm bedroom with AC vent and sunlight in a Florida home",
        prompt:
          "Bright Florida bedroom with ceiling vent, warm sunlight, homeowner looking toward the vent from the doorway, realistic editorial photo, no text."
      }
    ],
    body: [
      "Weak airflow can make a cooling system feel broken even when cold air is technically coming out of the vents. The house takes longer to cool, certain rooms stay warm, and the system may run more than usual.",
      "One of the simplest causes is a dirty air filter. When a filter is clogged, the system has to work harder to move air. Blocked vents, closed registers, or furniture covering returns can also create airflow problems.",
      "Other causes need professional attention. A blower motor issue, dirty evaporator coil, leaking ducts, disconnected ductwork, frozen coil, or system design problem can all reduce airflow. In Florida homes, humidity and heavy system use can make these issues more noticeable.",
      "Before requesting help, check whether the weak airflow is happening everywhere or only in certain rooms. Note whether the air feels cold, warm, or room temperature. Look for ice on refrigerant lines, water near the indoor unit, or unusual sounds when the system starts.",
      "Do not open equipment panels or attempt electrical repairs. If the coil is frozen, turning the system off and letting it thaw may be necessary before a professional can inspect it, but ask the contractor for guidance.",
      "ACFix can help connect your request with an independent local HVAC partner where available. ACFix is not an HVAC contractor and does not inspect ducts or equipment directly. The partner contractor will evaluate the issue and discuss service options with you.",
      "When submitting the form, include the rooms affected, filter status, system behavior, and any visible signs like ice or water."
    ]
  },
  {
    slug: "questions-before-hiring-hvac-contractor",
    title: "Questions to Ask Before Hiring an HVAC Contractor",
    excerpt:
      "Even when you get a referral, it is smart to ask clear questions about licensing, pricing, warranties, and scope before approving HVAC work.",
    metaDescription:
      "Use these homeowner questions before hiring an HVAC contractor for AC repair, maintenance, or replacement.",
    publishedAt: "2026-06-20",
    readingTime: "5 min read",
    tags: ["Hiring HVAC", "Homeowner tips", "Referral disclosure", "Contractor questions"],
    images: [
      {
        placement: "cover",
        purpose: "Show the homeowner-contractor conversation in a trustworthy way.",
        alt: "Homeowner speaking with HVAC professional at front door",
        src: "/images/man-smiling-at-woman-doorway.jpg",
        prompt:
          "Homeowner speaking with HVAC professional at front door of a Florida home, professional and friendly, realistic photo, no logos, no text."
      },
      {
        placement: "after paragraph 2",
        purpose: "Reinforce license and credential verification.",
        alt: "Homeowner reviewing contractor credentials on a tablet",
        prompt:
          "Homeowner reviewing contractor credential details on a tablet at a kitchen counter, screen not readable, clean Florida home interior, no logos, no text."
      },
      {
        placement: "after paragraph 5",
        purpose: "Support written estimates and warranty questions.",
        alt: "Written HVAC estimate and warranty paperwork on a table",
        prompt:
          "Realistic close-up of HVAC estimate and warranty paperwork on a table with pen, no readable text, neutral bright lighting, professional editorial style."
      }
    ],
    body: [
      "A referral can save time, but homeowners should still ask good questions before hiring any HVAC contractor. The goal is simple: understand who is doing the work, what they recommend, what it costs, and what happens if something goes wrong.",
      "Start with credentials. Ask whether the contractor is licensed and insured for HVAC work in your area. You can also ask for the license number and verify it through the appropriate state or local resource.",
      "Ask about pricing before work begins. Is there a diagnostic fee? Does the estimate include parts and labor? Are there after-hours charges? If replacement is involved, what equipment is included, and what is not included?",
      "Ask about the scope of work. What problem did they find? What repair or replacement do they recommend? Are there lower-cost or higher-efficiency options? How long should the work take?",
      "Ask about warranties. Parts, labor, equipment, and manufacturer warranties may all be different. Get warranty details in writing when possible.",
      "Finally, ask who to contact if there is a problem after the visit. Clear communication matters.",
      "ACFix is a referral service. We help route homeowner requests to independent local HVAC partners, but we do not perform HVAC work, set prices, supervise service, or guarantee outcomes. The partner contractor is responsible for their own licensing, estimates, scheduling, warranties, and workmanship.",
      "That makes your questions important. A good contractor should be willing to explain the work clearly before you approve it."
    ]
  },
  {
    slug: "how-acfix-works",
    title: "How ACFix Works for Homeowners",
    excerpt:
      "ACFix is built to make the first step easier: submit your HVAC issue once and get routed toward a local partner where available.",
    metaDescription:
      "Learn how ACFix works as an HVAC referral service connecting homeowners with independent local HVAC partners.",
    publishedAt: "2026-06-27",
    readingTime: "5 min read",
    tags: ["ACFix", "HVAC referral", "Homeowners", "Local partners"],
    images: [
      {
        placement: "cover",
        purpose: "Show the referral request as the starting point.",
        alt: "Homeowner submitting an HVAC referral request on a laptop",
        src: "/images/man-using-laptop-cozy-living-room.jpg",
        prompt:
          "Clean modern web form on a laptop in a Florida home, homeowner submitting an HVAC request, bright natural light, no readable text, no logos."
      },
      {
        placement: "after paragraph 3",
        purpose: "Visualize the request being routed to a local partner.",
        alt: "Phone and laptop showing homeowner HVAC request workflow",
        prompt:
          "Realistic photo of a laptop and phone on a kitchen counter suggesting a homeowner service request workflow, abstract map pins on screen without readable text, clean and trustworthy, no logos."
      },
      {
        placement: "after paragraph 6",
        purpose: "Ground the launch area in Port St. Lucie.",
        alt: "Port St. Lucie neighborhood with Florida home and AC condenser",
        prompt:
          "Sunny Port St. Lucie residential street with Florida homes, palm trees, and a subtle outdoor AC condenser beside one house, realistic local editorial photo, no text, no logos."
      }
    ],
    body: [
      "ACFix is designed for the moment when you know you need HVAC help but do not want to spend the afternoon making calls from scratch.",
      "The process starts with a request form. You share your name, contact information, location, and a short description of the issue. That might be warm air from the vents, weak airflow, a system that will not turn on, water near the indoor unit, or a question about replacement.",
      "ACFix then helps route the request to an independent local HVAC partner where available. If a partner can help with your area and issue, they may contact you directly to discuss scheduling, pricing, diagnostics, and next steps.",
      "The important part: ACFix is not the HVAC contractor. We do not send our own technicians, perform repairs, install systems, set contractor prices, or guarantee appointment times. The HVAC partner is an independent business responsible for the service relationship.",
      "For homeowners, the value is a simpler first step. Instead of searching through every option while the house heats up, you can submit the request once and let ACFix help connect it locally.",
      "You should still ask the partner questions before approving work. Confirm licensing, diagnostic fees, repair recommendations, written estimates, warranty terms, and timing.",
      "ACFix is focused on St. Lucie, Martin, and Palm Beach counties, starting with Port St. Lucie city landing coverage. If you need AC help, submit a request with as much detail as you can. Clear information helps the local partner understand the situation before they contact you."
    ]
  },
  {
    slug: "common-ac-noises",
    title: "Common AC Noises and What They Might Mean",
    excerpt:
      "Buzzing, rattling, squealing, clicking, and banging sounds can point to different AC issues. Here is when to stop guessing and request local HVAC help.",
    metaDescription:
      "Learn what common AC noises may indicate and when homeowners should request help from a local HVAC partner.",
    publishedAt: "2026-07-04",
    readingTime: "5 min read",
    tags: ["AC noises", "HVAC repair", "Troubleshooting", "Home comfort"],
    images: [
      {
        placement: "cover",
        purpose: "Make the noise issue visible without dramatizing it.",
        alt: "Homeowner listening to an outdoor AC condenser from a safe distance",
        src: "/images/woman-looking-at-hvac-system.jpg",
        prompt:
          "Realistic close-up of outdoor AC condenser beside a Florida home with homeowner listening from a safe distance, sunny day, no text, no logos."
      },
      {
        placement: "after paragraph 2",
        purpose: "Show loose-panel or component concerns generically.",
        alt: "Outdoor AC condenser panel being inspected by a professional",
        prompt:
          "HVAC professional visually inspecting an outdoor AC condenser panel near a Florida home, tools visible but no active repair steps, realistic photo, no logos, no text."
      },
      {
        placement: "after paragraph 4",
        purpose: "Support the referral CTA after explaining what details to share.",
        alt: "Homeowner entering AC noise details into a service request form",
        prompt:
          "Homeowner entering AC noise details into a laptop service request form at a kitchen table, screen not readable, bright Florida home interior, no logos, no text."
      }
    ],
    body: [
      "An AC system does not have to be silent, but new or loud noises deserve attention. The sound can give a local HVAC professional useful clues.",
      "A buzzing sound may involve electrical components, a struggling motor, loose parts, or debris near the outdoor unit. A rattling sound may point to loose panels, worn components, or something caught where it should not be. Squealing can sometimes involve belts or motor bearings, depending on the system. Clicking at startup may be normal in small amounts, but repeated clicking without the system starting can point to a control or electrical issue. Banging or clanking should be taken seriously because it may involve a loose or damaged part.",
      "Do not open electrical panels or reach into equipment to investigate. If a sound is loud, sudden, or paired with burning smells, poor cooling, water, or the system shutting down, turn the system off and request professional help.",
      "When you submit a service request, describe the noise in plain language. Say where it is coming from, when it happens, whether the system still cools, and whether the noise started suddenly or has been getting worse.",
      "ACFix can help route your AC noise request to an independent local HVAC partner where available. ACFix is not an HVAC contractor and does not diagnose or repair systems directly. The partner contractor will handle inspection, estimates, scheduling, and service terms.",
      "In Port St. Lucie heat, waiting too long can turn a small issue into a more stressful one. If the sound is new and concerning, it is worth getting a professional opinion."
    ]
  }
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
