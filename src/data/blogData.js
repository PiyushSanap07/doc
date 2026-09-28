// ─── Blog Data ─────────────────────────────────────────────────
// Editorial posts written for the clinic. Each post carries the
// fields the listing and detail pages render: excerpt, meta,
// rich content blocks, takeaways and tags.
//
// Cover images reuse existing assets/images so no new binaries
// are needed. Replace any `image` with a dedicated blog photo.

import acnePeel from '../assets/images/acne-peel.webp';
import partyPeel from '../assets/images/party-peel.webp';
import prpInjectionHair from '../assets/images/prp-injection-hair.webp';
import botox from '../assets/images/botox.webp';
import hydrafacial from '../assets/images/hydrafacial.webp';
import laserHairReduction from '../assets/images/laser-hair-reduction.webp';

export const blogCategories = [
  { id: 'all', title: 'All Posts', description: 'Every article on skin, hair and aesthetic care.' },
  { id: 'acne', title: 'Acne & Scars', description: 'Breakouts, congestion, post-acne marks and scar revision.' },
  { id: 'pigmentation', title: 'Pigmentation', description: 'Melasma, sun damage, uneven tone and post-inflammatory marks.' },
  { id: 'hair', title: 'Hair & Scalp', description: 'Hair fall, thinning, dandruff and scalp health.' },
  { id: 'anti-aging', title: 'Anti-Aging', description: 'Wrinkles, volume loss, skin laxity and preventive ageing.' },
  { id: 'skincare', title: 'Skincare', description: 'Routines, ingredients, sun protection and barrier repair.' },
  { id: 'laser', title: 'Laser Treatments', description: 'Laser hair reduction, resurfacing and pigmentation lasers.' },
];

export const blogPosts = [
  {
    slug: 'why-acne-happens-and-what-actually-clears-it',
    title: 'Why Acne Happens and What Actually Clears It',
    excerpt:
      'Pimple creams, scrubs and folk remedies make it worse for most people. Here is how acne really forms, and the three-step logic behind treatment that works.',
    categoryId: 'acne',
    category: 'Acne & Scars',
    image: acnePeel,
    date: '2026-08-24',
    readTime: '6 min read',
    featured: true,
    tags: ['Acne', 'Breakouts', 'Oily skin', 'Acne marks'],
    content: [
      {
        type: 'paragraph',
        text: 'Acne is not a hygiene problem. Most people with active breakouts wash their face twice a day, scrub with a loofah and sleep on a clean pillowcase — and it still keeps coming back. That is because acne is driven from inside the pore, not on the surface of the skin.',
      },
      {
        type: 'heading',
        text: 'The three things that cause a pimple',
      },
      {
        type: 'list',
        items: [
          'Excess sebum — oil production rises with hormones, and the pore is already narrow to begin with.',
          'Dead skin cells — they clump inside the pore and form a plug.',
          'Cutibacterium acnes — a bacteria that feeds on sebum and triggers inflammation.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Hormonal acne tends to appear on the lower face, along the jawline and on the chest. If yours cycles with your period, no amount of topical cream will fix it on its own — the oil production has to be addressed from inside.',
      },
      {
        type: 'heading',
        text: 'Why harsh routines backfire',
      },
      {
        type: 'paragraph',
        text: 'Squeezing, scrubs, alcohol-based toners and physical scrubs all push inflammation deeper and rupture the follicle wall. That rupture is what turns a temporary spot into a dark post-inflammatory mark or a permanent scar. The more you treat acne aggressively at home, the longer the marks take to fade.',
      },
      {
        type: 'callout',
        title: 'The rule we repeat in clinic',
        text: 'Treat the oil, unclog gently, and protect with sunscreen. Everything else is optional detail.',
      },
      {
        type: 'heading',
        text: 'What a proper plan looks like',
      },
      {
        type: 'paragraph',
        text: 'Start with a prescription retinoid or benzoyl peroxide to keep the pore clear and reduce bacteria. Once there is no active inflammation, move to scar work — chemical peels, microneedling or fractional CO2 laser depending on how deep the scars are. Pigmentary marks respond to sunscreen and topical lighteners; indented scars need device-based treatment.',
      },
      {
        type: 'paragraph',
        text: 'Consistency over intensity. Most patients see acne begin to settle at 6 to 8 weeks, and clearer skin by 3 to 4 months. If you have not improved after that, the diagnosis is usually wrong rather than the treatment being too weak.',
      },
    ],
    keyTakeaways: [
      'Acne starts inside the pore — it is not caused by dirt.',
      'Squeezing and scrubbing cause the marks and scars you are trying to avoid.',
      'Sunscreen is the single most effective step for fading post-acne marks.',
      'Hormonal acne on the jawline usually needs systemic support, not just creams.',
    ],
  },
  {
    slug: 'melasma-why-it-comes-back-and-how-to-keep-it-away',
    title: 'Melasma: Why It Keeps Coming Back',
    excerpt:
      'Melasma fades, then returns within months. That is not failure — it is how this condition behaves. Understanding the trigger is what keeps it away.',
    categoryId: 'pigmentation',
    category: 'Pigmentation',
    image: partyPeel,
    date: '2026-08-11',
    readTime: '5 min read',
    featured: true,
    tags: ['Melasma', 'Uneven skin tone', 'Hormones', 'Sun protection'],
    content: [
      {
        type: 'paragraph',
        text: 'Melasma shows up as symmetrical, muddy-brown patches on the cheeks, forehead and upper lip. It is one of the most common pigmentation concerns I see, and also the one patients are most frustrated by — because it responds to treatment, then quietly returns.',
      },
      { type: 'heading', text: 'Three triggers, all at once' },
      {
        type: 'list',
        items: [
          'Hormones — pregnancy, hormonal contraception and PCOS all raise melanin production.',
          'UV exposure — even indirect, everyday light through a window is enough to restart it.',
          'Heat and visible light — hot water, steam, intense exercise and blue light can aggravate it too.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Melasma is a chronic relapsing condition, not a one-time problem. Treatment works in two phases: active phase to fade what is there, and maintenance phase to stop it returning. Patients who skip the second phase are the ones who end up back in clinic.',
      },
      { type: 'heading', text: 'Building the maintenance routine' },
      {
        type: 'list',
        items: [
          'A broad-spectrum SPF 50 sunscreen applied generously and reapplied every 3 hours — tinted versions with iron oxide help more than untinted ones.',
          'A daily lightener such as tranexamic acid, azelaic acid or hydroquinone in supervised cycles.',
          'Gentle cleansing, since over-cleansing and hot water both irritate the barrier.',
          'In-clinic peels or Q-switched laser to reset the pigment, spaced 3 to 4 weeks apart.',
        ],
      },
      {
        type: 'callout',
        title: 'If you are pregnant or planning to conceive',
        text: 'Tell your dermatologist before starting any pigment treatment. Some lighteners and lasers are not appropriate during pregnancy, but daily sun protection is safe and still the most important step.',
      },
      {
        type: 'paragraph',
        text: 'Expect a timeline measured in months, not weeks. With the right combination and strict photoprotection, most patients see meaningful lightening in 2 to 3 months and a stable result by 6.',
      },
    ],
    keyTakeaways: [
      'Melasma is hormone, sun and heat driven — it is chronic, not a one-off.',
      'Treatment has two phases: fading, then maintaining.',
      'Tinted sunscreen with iron oxide blocks visible light that plain SPF misses.',
      'Skipping maintenance is why most melasma appears to "come back".',
    ],
  },
  {
    slug: 'hair-fall-in-women-causes-and-doctor-backed-fixes',
    title: 'Hair Fall in Women: Causes and Doctor-Backed Fixes',
    excerpt:
      'Shedding 50 to 100 strands a day is normal. Shedding more than that for more than three months is not — and it usually has a findable cause.',
    categoryId: 'hair',
    category: 'Hair & Scalp',
    image: prpInjectionHair,
    date: '2026-07-29',
    readTime: '6 min read',
    featured: false,
    tags: ['Hair fall', 'Thinning', 'Hair density', 'PRP'],
    content: [
      {
        type: 'paragraph',
        text: 'Losing some hair every day is normal — roughly 50 to 100 strands. What patients notice as "hair fall" is usually a shift in the ratio between shedding and regrowth, or a shortening of the growth phase so the follicle produces a thinner, shorter hair with each cycle.',
      },
      { type: 'heading', text: 'Causes I check first' },
      {
        type: 'list',
        items: [
          'Iron deficiency — low ferritin is the single most common correctable cause in women, even when haemoglobin looks normal.',
          'Thyroid dysfunction — hypo or hyperthyroidism both disrupt the growth cycle.',
          'Post-partum telogen effluvium — a surge in shedding 2 to 4 months after delivery, which usually recovers on its own.',
          'PCOS — high androgens cause thinning across the crown with a widening parting.',
          'Deficient vitamin D or biotin, significant weight change, chronic stress or illness in the preceding few months.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A good consultation starts with blood work, not with a supplement. Ferritin, thyroid, vitamin D and a full blood count tell us whether you are treating a deficiency or a structural problem. Without that, you are guessing.',
      },
      { type: 'heading', text: 'Once the cause is treated' },
      {
        type: 'paragraph',
        text: 'Correcting the trigger usually stops the shedding within three to six months. Density takes longer to rebuild because hair grows about a centimetre a month. Options that support regrowth include topical minoxidil, platelet-rich plasma, mesotherapy for the scalp, and low-level laser therapy — chosen according to whether your loss is diffuse or patterned.',
      },
      {
        type: 'callout',
        title: 'Be patient with the timeline',
        text: 'Shedding should reduce within 3 to 6 months of fixing the cause. Visible density takes 6 to 12 months, because that is simply how long hair takes to grow. Judge the treatment at 6 months, not 6 weeks.',
      },
      {
        type: 'paragraph',
        text: 'Avoid tight styles, chemical straightening and crash dieting, all of which pull on or stress the follicle. A gentle wash routine matters more than most people expect — washing your hair does not cause it to fall out.',
      },
    ],
    keyTakeaways: [
      '50 to 100 strands a day is normal shedding.',
      'Get tested for ferritin and thyroid before buying any supplement.',
      'Fixing the cause stops shedding in 3 to 6 months; density takes longer.',
      'Washing your hair does not cause hair fall.',
    ],
  },
  {
    slug: 'botox-fillers-or-skin-boosters-which-one-do-you-need',
    title: 'Botox, Fillers or Skin Boosters: Which One Do You Need?',
    excerpt:
      'The three most requested treatments solve three different problems. Choosing the right one is less about age and more about what is actually changing.',
    categoryId: 'anti-aging',
    category: 'Anti-Aging',
    image: botox,
    date: '2026-07-15',
    readTime: '5 min read',
    featured: false,
    tags: ['Botox', 'Fillers', 'Skin boosters', 'Preventive ageing'],
    content: [
      {
        type: 'paragraph',
        text: 'These treatments get grouped together, but they address different things. Picking the wrong one is the most common reason patients feel disappointed — and why I ask about the concern before I ask about the age.',
      },
      { type: 'heading', text: 'What each one actually does' },
      {
        type: 'list',
        items: [
          'Botulinum toxin relaxes the muscle that creates a line. It softens expression lines — crow\'s feet, frown lines, forehead lines — and prevents them deepening. It does not add volume.',
          'Fillers restore or add volume that has been lost: cheeks, lips, under-eyes, nasolabial folds. Too much in the wrong place is how people end up looking different rather than refreshed.',
          'Skin boosters are hydrating injectables placed under the skin to improve glow, texture and elasticity over a course of sessions. Results build gradually and are subtle by design.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A practical rule: if the line disappears when you relax your face, it is muscle-driven and Botox is the tool. If there is a shadow or hollow that does not disappear when you relax, it is volume loss and needs filler. If your skin simply looks tired and dull, start with a booster and good skincare before injecting anything.',
      },
      { type: 'heading', text: 'On starting early' },
      {
        type: 'paragraph',
        text: 'Preventive Botox is reasonable from the late twenties or early thirties if you are forming lines at rest. The goal is subtle relaxation that leaves your expression intact. Over-treatment is the real risk, not early treatment — so the right dose and a practitioner who understands facial anatomy matter more than the age on the box.',
      },
      {
        type: 'callout',
        title: 'Every injectable has a medical name and a trained injector',
        text: 'Only ever accept a product whose brand, batch number and expiry you are told before injection. If a practitioner cannot name the product, that is a reason to leave.',
      },
      {
        type: 'paragraph',
        text: 'Sun protection and a consistent retinoid-based routine remain the highest-return anti-ageing measures. Injectables are maintenance on top of that foundation, not a replacement for it.',
      },
    ],
    keyTakeaways: [
      'Botox relaxes muscle. Fillers replace volume. Boosters hydrate.',
      'Lines that vanish when you relax the face respond to Botox; hollows need filler.',
      'Subtle dosing and correct anatomy matter more than age or brand loyalty.',
      'Sunscreen and retinoids outperform injectables as long-term anti-ageing.',
    ],
  },
  {
    slug: 'dermatologist-morning-to-night-routine-for-humid-climate',
    title: 'A Dermatologist’s Morning-to-Night Routine for Humid Weather',
    excerpt:
      'Humidity changes how your skin behaves. A routine that works in dry weather can congest pores in monsoon months unless you adjust a few steps.',
    categoryId: 'skincare',
    category: 'Skincare',
    image: hydrafacial,
    date: '2026-06-30',
    readTime: '5 min read',
    featured: false,
    tags: ['Skincare routine', 'Humidity', 'Sunscreen', 'Barrier repair'],
    content: [
      {
        type: 'paragraph',
        text: 'Nashik has a genuinely humid monsoon, and humidity does something specific to skin: it raises the amount of water vapour in the stratum corneum, so cells swell and hold onto more water. Pores appear tighter but congest more easily, and heavier products sit on the surface instead of absorbing.',
      },
      { type: 'heading', text: 'Morning' },
      {
        type: 'list',
        items: [
          'Gentle cleanse, or just water if you are not oily.',
          'A lightweight hydrating serum — hyaluronic acid or niacinamide.',
          'Sunscreen SPF 50 as the last step. This one does not change with the season.',
        ],
      },
      { type: 'heading', text: 'Night' },
      {
        type: 'list',
        items: [
          'Cleanse properly — this is the step to double down on in humid months, as sweat and oil accumulate.',
          'Active treatment: a retinoid two or three nights a week, working up gradually.',
          'A lighter moisturiser than you use in winter, or your heavier cream will feel suffocating and may clog.',
        ],
      },
      {
        type: 'heading', text: 'What to loosen up when humidity rises',
      },
      {
        type: 'list',
        items: [
          'Drop rich occlusive creams and facial oils — they trap sweat and cause congestion.',
          'Retinoids can irritate more in humidity; reduce frequency if you feel stinging.',
          'Switch pillowcases more often, and never sleep on a wet or sweaty face.',
        ],
      },
      {
        type: 'callout',
        title: 'The most common mistake',
        text: 'Reacting to oily skin by stripping it. Removing the oil barrier makes the skin produce more oil and inflames the follicles. Cleanse gently and moisturise — that combination actually reduces oil.',
      },
      {
        type: 'paragraph',
        text: 'Introduce any new active product one at a time, two weeks apart, so you know what is helping and what is irritating. And if your skin is stinging, tight or flaky, stop actives and repair the barrier with a plain moisturiser for two weeks before doing anything else.',
      },
    ],
    keyTakeaways: [
      'Humidity swells skin cells, tightens the look of pores and increases congestion.',
      'Double down on cleansing at night; lighten creams and drop facial oils.',
      'Sunscreen is the one step that never changes with the season.',
      'Never strip oil to treat oil — it triggers more oil and inflammation.',
    ],
  },
  {
    slug: 'laser-hair-reduction-how-many-sessions-really',
    title: 'Laser Hair Reduction: How Many Sessions You Really Need',
    excerpt:
      'The number everyone quotes is a guess. Density, skin tone, hair colour and the area treated all decide your actual session count.',
    categoryId: 'laser',
    category: 'Laser Treatments',
    image: laserHairReduction,
    date: '2026-06-12',
    readTime: '5 min read',
    featured: false,
    tags: ['Laser hair removal', 'Hair reduction', 'Alexandrian', 'Underarms'],
    content: [
      {
        type: 'paragraph',
        text: 'First, the important word: laser hair reduction, not removal. Lasers damage the follicle to slow growth and thin the hair. You will never be completely hair-free, and anyone promising permanent removal is overpromising.',
      },
      { type: 'heading', text: 'What determines your session count' },
      {
        type: 'list',
        items: [
          'Hair density and thickness in the area — dense beard or full legs need more than underarms.',
          'Skin tone — lighter skin with dark hair responds fastest, since the laser targets melanin in the hair.',
          'Hair colour — very fair or grey hair has little pigment to target, so it responds poorly. Laser does not work well on grey hair.',
          'Hormonal influence — areas driven by androgens, such as the chin and jaw, often need maintenance sessions.',
        ],
      },
      { type: 'heading', text: 'The realistic timeline' },
      {
        type: 'paragraph',
        text: 'Most patients need 6 to 8 sessions spaced 4 to 6 weeks apart, because hair grows in cycles and only the follicles in the active growth phase are affected by any given session. This is why going weekly doubles the appointments without improving the result.',
      },
      {
        type: 'callout',
        title: 'Why you must not tan between sessions',
        text: 'Tanned skin has more melanin, so the laser can’t distinguish pigment in the hair from pigment in the skin. This is how burns happen. Avoid sun exposure and self-tanners for two weeks before and after each session.',
      },
      { type: 'heading', text: 'After each session' },
      {
        type: 'list',
        items: [
          'Expect perifollicular redness and mild swelling for a few hours — this is normal and settles.',
          'Avoid gym, saunas, steam, swimming pools and retinoids for 24 to 48 hours.',
          'Shedding happens around days 7 to 14, so hair may suddenly appear to regrow before it falls out. Do not panic and do not pluck it.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Expect to book occasional top-up sessions every few months. Hair that is hormonally active will never fully stop responding, so maintenance is part of the treatment rather than a sign it failed.',
      },
    ],
    keyTakeaways: [
      'Laser reduces hair permanently-ish; it does not remove it forever.',
      'Expect 6 to 8 sessions spaced 4 to 6 weeks apart, not weekly.',
      'Dark hair on lighter skin responds best. Laser does not work on grey hair.',
      'Shedding at day 7 to 14 is the treatment working — do not pluck it.',
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────

// Format an ISO date string as "24 Aug 2026"
export const formatDate = (iso) => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

// Newest first
const byNewest = (a, b) => new Date(b.date) - new Date(a.date);

export const getAllPosts = () => [...blogPosts].sort(byNewest);

export const getFeaturedPosts = () =>
  blogPosts.filter((p) => p.featured).sort(byNewest);

export const getPostBySlug = (slug) =>
  blogPosts.find((p) => p.slug === slug) || null;

// Other posts in the same category, newest first
export const getRelatedPosts = (slug, limit = 3) => {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => p.slug !== slug && p.categoryId === post.categoryId)
    .sort(byNewest)
    .slice(0, limit);
};
