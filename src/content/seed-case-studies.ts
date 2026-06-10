export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  /** Hinglish titles from the live site are kept as-is. */
  title: string;
  excerpt: string;
  /** Short service label shown on cards (e.g. "Live-in Maid"). */
  service: string;
  location: string;
  publishedAt: string;
  sections: CaseStudySection[];
  takeaways?: string[];
  quote?: { text: string; name: string; role: string };
}

/**
 * Case studies ported from www.ezyhelpers.com/case-studies.
 * Copy is taken from the live pages — do not invent new claims or numbers.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "chhote-break-bade-results",
    title:
      "Chhote Break, Bade Results — How a 30-Minute Rule Saved a Live-In Housemaid Placement",
    excerpt:
      "Learn how a guaranteed 30-minute break restored focus, behaviour, and loyalty for a live-in housemaid. A real EzyHelpers case story on trust and harmony.",
    service: "Live-in Maid",
    location: "Bangalore, Karnataka",
    publishedAt: "2024-02-10",
    sections: [
      {
        heading: "When Palak asked for a house change",
        body: [
          "Palak, a 23-year-old live-in housemaid from Bihar, handled all housekeeping tasks yet worked nonstop from 6 AM to 10 PM. Even short pauses felt wrong, and the piling “extras” made her feel invisible and exhausted.",
          "Every request added guilt — she feared taking a break would seem lazy. The routine offered no breathing space or predictability. She quietly told EzyHelpers: “I want a new house.”",
          "The principle that saved the placement was clear: Chhote Break, Bade Results.",
        ],
      },
      {
        heading: "The challenge",
        body: [
          "Palak lived inside the home but had no breathing space. Her days were packed from 6 AM to 10 PM, so even her downtime felt like work. Silence, exhaustion, and the feeling of being invisible pushed her toward a house change.",
          "She asked for a new placement after months of nonstop chores. The family was surprised — on paper everything was fine, but Palak felt drained and guilty taking even a short rest.",
        ],
      },
      {
        heading: "The EzyHelpers approach",
        body: [
          "EzyHelpers initiated mediation, surfaced both perspectives, and highlighted that helpers need clarity and permission to pause. We proposed one concrete system instead of another productivity trick.",
          "The family committed to a non-negotiable, daily personal break from 4:00 to 4:30 PM. Palak received explicit permission to rest without guilt, and the family agreed to stop piling on ad-hoc tasks.",
        ],
      },
      {
        heading: "Key results and outcomes",
        body: [
          "Within days, her energy rebounded, her attitude softened, she took initiative, and mistakes vanished. Palak said, “Everything is fine now. I want to stay here,” while the family exclaimed that 30 minutes made all the difference.",
          "Her energy bounced back — she cleaned with more focus and less fatigue. Her behaviour softened — she became communicative, cheerful, and relaxed. Work quality improved — laundry stayed crisp, rooms tidy, initiative returned. Mistakes reduced — no more missed dusting or delayed tasks.",
          "Loyalty deepened — “Ab sab theek chal raha hai. Main yahin rehna chahti hoon.” The family realised a small break created trust: “We didn't realise 30 minutes could make such a big difference.”",
        ],
      },
      {
        heading: "Why agencies should enforce break policies",
        body: [
          "Families assume helpers can rest when free, but helpers feel guilty, afraid, and unsure. A fixed, enforced break gives them dignity, predictability, permission to breathe, and a mental reset.",
          "The payoffs are dignity through uninterrupted rest, predictability that protects mental space, permission to breathe without fear of being lazy, a fresh perspective and better attitude for the family, and long-term retention with a stable, peaceful home.",
        ],
      },
      {
        heading: "What makes EzyHelpers different",
        body: [
          "Most maid services focus purely on placement. EzyHelpers believes in protecting the relationship through ongoing communication, proactive mediation, and clear guidelines.",
          "Ongoing communication support keeps families and helpers aligned. Proactive mediation resolves silent issues before they escalate. Training for families and helpers reinforces respectful expectations, and clear guidelines protect everyone's dignity.",
          "This case shows what EzyHelpers stands for: not just providing helpers, but protecting helper-family relationships. Small change, big results, long-term stability.",
        ],
      },
    ],
    takeaways: [
      "Helpers leave because of exhaustion and silence, not work.",
      "Families aren't wrong — they simply lack awareness.",
      "Communication and clarity can save placements.",
      "Structured breaks solve what salary alone cannot.",
      "“Chhote Break, Bade Results” is a retention strategy every household should adopt.",
    ],
    quote: {
      text: "Ab sab theek chal raha hai. Main yahin rehna chahti hoon. A simple break made me feel heard.",
      name: "Palak",
      role: "Live-in Housemaid",
    },
  },
  {
    slug: "kaam-ka-clear-system-helper-bhaagne-ka-chance-kam",
    title: "Kaam Ka Clear System = Helper Bhaagne Ka Chance Kam",
    excerpt:
      "A Bangalore family stopped losing helpers every month by having an honest expectations call before the placement. Clarity replaced confusion.",
    service: "Housekeeping",
    location: "Bangalore, Karnataka",
    publishedAt: "2024-03-01",
    sections: [
      {
        heading: "The house where maids kept running away",
        body: [
          "A young Bangalore couple changed four maids in six months. Each left suddenly with vague excuses like “family issues” or “I can't continue.” On paper, everything looked perfect — neat 2BHK, no kids, no pets — but beneath the surface something pushed helpers away.",
          "The helpers' departures were silent; nothing concrete was shared. Every day brought unexpected additions: deep cleaning, guest prep, dog feeding.",
          "In a survey of 47 recent helpers who quit, only 3 left for better pay. The rest left because of uncertainty.",
        ],
      },
      {
        heading: "The helper's version nobody heard",
        body: [
          "The last maid who left finally admitted: “Madam ka kaam kabhi khatam hi nahi hota.” The work itself wasn't abusive, but the lack of predictability left her mentally exhausted.",
          "Helpers weren't lazy — they were confused. They left not because the house was big but because they didn't know what would be added next.",
        ],
      },
      {
        heading: "The turning point: a clarity conversation",
        body: [
          "EzyHelpers introduced a 15-minute clarity conversation before hiring: routines, occasional tasks, boundaries, and the meaning of daily work were spelled out and acknowledged.",
          "When the same helper joined another household, the process wasn't rushed. A proper clarity discussion was organized before hiring, covering daily work, occasional tasks, timing, behavior, and communication.",
          "“Aapne sab pehle hi bata diya. Ab tension nahi hai.” She knew exactly what to expect — no surprises, no hidden workload.",
        ],
      },
      {
        heading: "Immediate change",
        body: [
          "With expectations out in the open, the helper joined confidently knowing there would be no sudden surprises or hidden workloads.",
          "She arrived on time every day, worked confidently with a known routine, stayed cheerful, communicated openly, and looked in control. The same helper stayed for over one year.",
        ],
      },
      {
        heading: "Helpers fear uncertainty, not work",
        body: [
          "Families blame workload, attitude, or pay. The real fear for helpers is sudden changes, unspoken expectations, and being judged for not guessing new tasks. A clarity discussion reduced turnover by 70%.",
          "We don't just send maids; we ensure both sides start on the same page. We introduce trial sessions, video interviews, structured task conversations, and three-way discussions.",
          "Clear expectations build trust faster than high salaries or strict rules. When clarity exists, confidence grows and retention becomes automatic.",
        ],
      },
      {
        heading: "The family who finally found stability",
        body: [
          "The family realized one honest conversation eliminated months of stress. They stopped adding surprise tasks, kept communication simple, respected boundaries, and understood daily work.",
          "The maid stayed long-term, the home became stable and peaceful, and replacements, frustration, and silent exits disappeared.",
        ],
      },
      {
        heading: "Before you blame the maid",
        body: [
          "When helpers quit, the knee-jerk reaction is to blame them. The reality: work is perfectly managed on paper, but expectations are invisible. Helpers are expected to read minds and match standards that were never explained.",
          "Replace confusion with clear communication and realistic expectations. That fixes what replacements never will.",
          "Helpers don't leave homes — they leave confusion. Give clarity and you get stability.",
        ],
      },
    ],
    takeaways: [
      "Clarity calls reduced helper turnover by 70%.",
      "Open communication prevented silent exits.",
      "Families learned that helpers fear uncertainty, not work.",
      "A stable home replaced constant onboarding stress.",
      "EzyHelpers now includes structured expectation reviews before every placement.",
    ],
    quote: {
      text: "We never realised one simple conversation could solve months of stress. Now the maid is calm, confident, and staying put.",
      name: "Mrs. R.",
      role: "Bangalore Homeowner",
    },
  },
  {
    slug: "salary-time-pe-loyalty-pukka",
    title: "Salary Time Pe = Loyalty Pukka",
    excerpt:
      "A consistent pay date rebuilt trust between Rani and the Verma family. Timely salaries proved to be the most basic yet powerful retention tool.",
    service: "Housekeeping",
    location: "Bangalore, Karnataka",
    publishedAt: "2024-04-01",
    sections: [
      {
        heading: "The hidden crisis: when salary has no date",
        body: [
          "Trust in domestic help is built on keeping promises — especially paying on time. A delayed salary cracks dignity, fuels anxiety, and often triggers a sudden exit.",
          "This story isn't about a bad helper or employer, but about how structured professionalism rebuilt the relationship between Rani and the Verma family.",
        ],
      },
      {
        heading: "The monthly question",
        body: [
          "Every month around the 10th, Rani asked, “Ma'am, salary kab milegi?” Mrs. Verma's answers varied — “this weekend,” “next Tuesday,” “let me check.” Payments arrived between the 8th and 20th, so Rani couldn't plan rent, tuition, or groceries. In September she requested a new house.",
          "The family assumed everything was fine. For Rani, those few days meant anger from her landlord and late tuition payments.",
          "Rani told the support executive: “The work is fine. The family is nice. But I can't live like this anymore.” The unpredictability forced her to borrow ₹500–₹800 and buy groceries in smaller, costlier bundles. “I feel like a beggar in my own job.”",
        ],
      },
      {
        heading: "“We pay her — so what's wrong?”",
        body: [
          "Mrs. Verma was shocked. They paid every month! When asked the exact date, she paused — sometimes early, sometimes mid-month. She found repeated asking annoying: “We're going to pay anyway, right?”",
          "Her flexibility cost Rani actual money. To the Vermas a few days didn't matter; to Rani it meant real expenses and stress.",
          "The Vermas had savings and reserves. Rani lived on ₹25,000 with zero backup. A three-day delay meant late rent, borrowed cash, and expensive groceries. The unpredictability didn't just stress her — it cost her.",
        ],
      },
      {
        heading: "The intervention: a fixed paydate",
        body: [
          "EzyHelpers highlighted the gap in financial worlds and proposed a fixed paydate — the 5th of every month. Mrs. Verma worried about cash or Sundays; the support team suggested UPI, paying early if the 5th fell on a Sunday, or standing bank instructions.",
          "The family committed to paying Rani on the 5th of every month, and Rani confirmed that a standing reminder ensured she received money without chasing anyone.",
          "You know what feels formal? Asking for salary three times. You know what feels friendly? Being so reliable your helper never has to ask.",
        ],
      },
      {
        heading: "Transformation",
        body: [
          "For Rani: no more borrowing, ₹500 saved monthly, and a feeling of respect.",
          "For the Vermas: no reminders or ATM runs, a cheerful and involved Rani, and a relationship that felt more respectful.",
          "For the relationship: payday became a symbol of respect, trust flourished, and harmony replaced tension. Rani now plans her month from the 2nd, and Mrs. Verma admitted she didn't realize irregular payments created tension. Fixed paydays replaced low-grade guilt with peace.",
        ],
      },
      {
        heading: "Platform insights: pay discipline drives loyalty",
        body: [
          "Only 34% of helpers know the exact date they'll be paid. The remaining 66% live in uncertainty. Those with fixed dates stay 2.5× longer — they're happier, more loyal, and more stable.",
          "It's not about paying more — it's about paying predictably. A fixed date takes five minutes to set up and removes weeks of low-grade anxiety. A reminder, instruction, or UPI transfer turns transactional relationships into respectful partnerships.",
        ],
      },
      {
        heading: "What you can do today",
        body: [
          "Ask: “What date is your salary?” If the helper can't answer confidently, pick a date (1st–5th), communicate it clearly, set a reminder, use UPI, and stick to it. Five minutes, zero cost, huge impact.",
          "At EzyHelpers, we listen deeply and treat transfer requests as symptoms, diagnose objectively by engaging both parties to uncover friction, and set up simple systems — like fixed paydays — to remove confusion.",
          "Good helpers leave when basics are missing. We build respectful, long-term relationships with verified helpers and the systems that keep them loyal.",
        ],
      },
    ],
    takeaways: [
      "Predictable pay removed shame and stress for Rani.",
      "The Vermas stopped running to ATMs and worrying about reminders.",
      "Trust deepened, loyalty increased, and Rani became more proactive.",
      "EzyHelpers data shows 66% of helpers live in pay uncertainty; fixed dates keep them 2.5× longer.",
    ],
    quote: {
      text: "I plan my entire month on the 2nd now. That fixed payday made me feel valued, not like I was begging for salary.",
      name: "Rani",
      role: "Housekeeping Helper",
    },
  },
  {
    slug: "small-celebrations-big-bonding",
    title:
      "Small Celebrations, Big Bonding — How One Thoughtful Diwali Gesture Won a Babysitter's Loyalty",
    excerpt:
      "A Diwali gesture made a live-in babysitter feel seen, turning emotional distance into belonging and lifelong loyalty.",
    service: "Babysitter",
    location: "Bangalore, Karnataka",
    publishedAt: "2024-05-05",
    sections: [
      {
        heading: "From loyalty to belonging",
        body: [
          "Families assume loyalty comes from salary or rules, but in live-in care it's shaped by how the helper feels. This story shows how a Bangalore couple built a bond with their babysitter — not through perks, but through one thoughtful Diwali gesture.",
        ],
      },
      {
        heading: "The Sharma family and Kavitha",
        body: [
          "The Sharmas were first-time parents with a 9-month-old and demanding corporate jobs. Kavitha, a 26-year-old from Assam, arrived calm, gentle, and perfect with the baby. But she stayed quiet, never spoke up, and kept to herself.",
          "She did everything right — feeding, playtimes, naps, hygiene. She never initiated conversation or accepted new clothes. She didn't mention her family or festivals, and sat apart during meals.",
          "Mrs. Sharma felt the emotional distance. “She takes care of the baby beautifully, but I don't think she feels comfortable here,” she told her husband. He replied, “Let's give it time.” Yet the gap remained.",
        ],
      },
      {
        heading: "Diwali week reality check",
        body: [
          "Diwali brought sweets, decorations, and new clothes. Kavitha, however, had nothing prepared — no sari, no diya, no celebration. When Mrs. Sharma asked if Kavitha was celebrating, she revealed her mother had passed away and she hadn't celebrated since.",
          "That evening, Mrs. Sharma prepared a gift bag with a silk saree, barfi, and ₹1,000 — not as a bonus, but as a gesture of care. She simply said, “You are part of this home.”",
        ],
      },
      {
        heading: "The Diwali gesture that opened her heart",
        body: [
          "Kavitha accepted the gift quietly. The next morning she decorated the room with marigold strings, rangoli, and left a note saying this felt like her first Diwali since her mother passed. Mrs. Sharma cried.",
          "The smile returned, not just politely but genuinely. She called the baby “our baby” and began contributing to the home. She ate with the family and initiated conversations.",
        ],
      },
      {
        heading: "A loyalty moment that means everything",
        body: [
          "When a neighbor offered Kavitha higher pay, she declined. “Money comes and goes. Respect is what makes me stay,” she told Mrs. Sharma. The couple realized the bond they had built — trust, belonging, and loyalty — was priceless.",
        ],
      },
      {
        heading: "Conclusion: thoughtfulness wins",
        body: [
          "The story isn't about sweets or money — it's about thinking, human connection, and belonging. A ₹1,000 gesture opened the door for emotional security, a happier home, and a babysitter who now stands by the family.",
          "At EzyHelpers we help families act on this lesson every day: loyalty is earned when helpers feel valued, respected, and included.",
        ],
      },
    ],
    takeaways: [
      "Helpers rarely receive personal acknowledgement; a single heartfelt gesture stands out.",
      "Emotional wounds run deep — respect and belonging heal faster than perks.",
      "Feeling “seen” creates loyalty stronger than salary hikes.",
      "Human connection, especially during festivals, is the most powerful retention tool.",
      "Small consistent gestures create long-term bonds.",
    ],
    quote: {
      text: "Money comes and goes. Respect is what makes me stay. That Diwali gesture gave me belonging.",
      name: "Kavitha",
      role: "Babysitter",
    },
  },
  {
    slug: "respect-equals-retention",
    title: "Why Maids Stay Longer: Real Case Study on Respect & Loyalty",
    excerpt:
      "Respect builds loyalty. This case study reveals how one small gesture helped retain a maid for the long term, without raising salary.",
    service: "Part-time Helper",
    location: "Bangalore, Karnataka",
    publishedAt: "2024-01-15",
    sections: [
      {
        heading: "The household retention problem nobody talks about",
        body: [
          "Employee retention is a challenge in every industry, and domestic help is no different. Many Indian families live through the same cycle: a helper joins, works for a few months, and then leaves abruptly — sometimes without notice, sometimes for personal reasons, sometimes because a neighbor offered a slightly higher salary.",
          "The constant turnover disrupts routines, creates stress, and fosters the belief that “good helpers never stay for long.” But what if the real issue is not loyalty but how helpers feel in the homes where they work?",
          "When helpers feel respected, they don't leave — they stay.",
        ],
      },
      {
        heading: "The challenge",
        body: [
          "Nisha, a software professional living in Bangalore, faced recurring helper turnover every few months. Increased salary, adjusted work timings — nothing worked, until respect became the focus.",
          "The family needed a helper who would stay instead of training a replacement every quarter. The solution had to address emotional safety, not just skills.",
        ],
      },
      {
        heading: "A small ritual that changed everything",
        body: [
          "EzyHelpers matched Nisha with Rani and encouraged humane rituals alongside verification: kindness, pauses, and gratitude.",
          "On day one, Nisha asked Rani, “Would you like tea before we start?” That small question became a daily ritual, giving Rani a sense of dignity.",
          "Rani stayed 9+ months, rejected higher offers, and the home regained peace. The intangible respect turned into tangible loyalty.",
        ],
      },
      {
        heading: "The real reason helpers stay",
        body: [
          "The household tasks, timings, and responsibilities were not dramatically different from previous jobs. The real difference was the emotional environment. Rani didn't stay because of a bigger salary or lighter workload — she stayed because Nisha made her feel valued.",
          "What made Rani stay: warm behaviour and kindness, human treatment that acknowledged her dignity, the ritual of offering a cup of tea before work, and feeling seen and valued each day.",
        ],
      },
      {
        heading: "Human psychology behind retention",
        body: [
          "Every worker needs three core emotional experiences to stay engaged. Dignity: “I matter” — the helper feels seen as a person, not a task list. Belonging: “I am part of this place” — small rituals create emotional attachment. Security: “I won't be mistreated here” — trust is earned through calm, kind interactions.",
          "When helpers feel valued, they take ownership, treat the home with care, and protect the family with loyalty. Rani chose to stay even after a neighbour offered ₹2,000 more, because, in her words, “Naya ghar mil jayega, par izzat har jagah nahi milti.”",
        ],
      },
      {
        heading: "Simple actions that build strong loyalty",
        body: [
          "Asking for tea or water before work creates emotional comfort before a long day. Addressing helpers by name instead of “maid” builds dignity and identity. Praising good work aloud reinforces job pride and purpose.",
          "Allowing emergency leaves or flexibility signals trust and empathy. Celebrating birthdays and festivals together creates a sense of belonging. Paying on time and transparently provides financial security and reliability.",
        ],
      },
      {
        heading: "Impact on Nisha's life",
        body: [
          "A clean, organized home every single day without the churn of retraining. Zero disruption from helpers coming and going, which kept the routine steady. Emotional peace and reduced stress for Nisha, balancing parenting and work.",
          "More time for career and family because training new helpers was no longer required. A happy child who formed a bond with Rani and feels safe. A positive, supportive work-home atmosphere where Rani is treated like family.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "This story is a mirror for thousands of homes. Many families want helpers who stay long term. Loyalty does not come from salary or contracts — it comes from humanity. Respect = Retention.",
          "Every helper dreams of working with dignity. Every family dreams of someone who stays. The bridge between these dreams is respect.",
          "This case study is based on a real EzyHelpers customer experience. Names and identifiable details were altered for privacy.",
        ],
      },
    ],
    takeaways: [
      "9+ months retention — the longest in Nisha's experience.",
      "Zero disruption due to frequent job changes.",
      "The helper stayed despite higher salary offers elsewhere.",
      "Emotional peace and reduced stress for the family.",
      "A positive, supportive work-home atmosphere.",
    ],
    quote: {
      text: "Earlier, helpers were temporary. Now Rani feels like family. That tea ritual made her feel valued instead of just a labourer.",
      name: "Nisha",
      role: "Software Professional, Bangalore",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
