// ─── Services Data ────────────────────────────────────────────
// All services organized by category, matching the clinic's offerings.
// Each service includes detail-page content: description, benefits,
// aftercare, side effects, duration, sessions, and ideal-for tags.

import acnePeel from '../assets/images/acne-peel.webp';
import glowPeel from '../assets/images/glow-peel.webp';
import partyPeel from '../assets/images/party-peel.webp';
import yellowPeel from '../assets/images/yellow-peel.webp';
import antiagingPeel from '../assets/images/antiaging-peel.webp';
import dermaplaning from '../assets/images/dermaplaning.webp';
import phenolPeel from '../assets/images/phenol-peel.webp';
import scalpPeel from '../assets/images/scalp-peel.webp';
import bodyPeel from '../assets/images/body-peel.webp';
import cleanup from '../assets/images/cleanup.webp';
import hydrafacial from '../assets/images/hydrafacial.webp';
import medifacial from '../assets/images/medifacial.webp';
import oxygenoFacial from '../assets/images/oxygeno-facial.webp';
import vampirePrpFacial from '../assets/images/vampire-prp-facial.webp';
import fireIceFacials from '../assets/images/fire-ice-facials.webp';
import hairTransplant from '../assets/images/hair-transplant.webp';
import prpInjectionHair from '../assets/images/prp-injection-hair.webp';
import gfcInjection from '../assets/images/gfc-injection.webp';
import hairBotox from '../assets/images/hair-botox.webp';
import micropigmentationScalp from '../assets/images/micropigmentation-scalp.webp';
import mesoHair from '../assets/images/meso-hair.webp';
import qSwitchLaser from '../assets/images/q-switch-laser.webp';
import laserHairReduction from '../assets/images/laser-hair-reduction.webp';
import rfCautery from '../assets/images/rf-cautery.webp';
import dermaroller from '../assets/images/dermaroller.webp';
import fractionalCo2Laser from '../assets/images/fractional-co2-laser.webp';
import hifu from '../assets/images/hifu.webp';
import lipolysis from '../assets/images/lipolysis.webp';
import ivGlutathione from '../assets/images/iv-glutathione.webp';
import botox from '../assets/images/botox.webp';
import mesobotox from '../assets/images/mesobotox.webp';
import fillers from '../assets/images/fillers.webp';
import profhilo from '../assets/images/profhilo.webp';
import prpInjectable from '../assets/images/prp-injectable.webp';
import skinBoosters from '../assets/images/skin-boosters.webp';
import pdoThreadLift from '../assets/images/pdo-thread-lift.webp';
import dermapenMicroneedling from '../assets/images/dermapen-microneedling.webp';
import nailSurgery from '../assets/images/nail-surgery.webp';
import dermatosurgery from '../assets/images/dermatosurgery.webp';
import oldScarTreatment from '../assets/images/old-scar-treatment.webp';
import skinBiopsy from '../assets/images/skin-biopsy.webp';
import earPiercing from '../assets/images/ear-piercing.webp';
import eyebrowMicroblading from '../assets/images/eyebrow-microblading.webp';
import cosmeticGynecology from '../assets/images/cosmetic-gynecology.webp';

export const serviceCategories = [
  {
    id: 'peels',
    title: 'Peels',
    services: [
      {
        slug: 'acne-peel',
        name: 'Acne Peel',
        description: 'Acne peel is a medical-grade chemical exfoliation treatment for persistent acne, oily skin and post-acne marks, available at our dermatology clinic in Nashik. It removes dead skin buildup, unclogs congested pores and controls excess oil production at the source rather than simply drying the surface. Dr. Neha Shinde examines your acne pattern, skin type and scarring before selecting the peel strength, so the treatment works with your skin instead of irritating it. Patients typically notice fewer active breakouts within a few weeks, along with smoother texture and lighter post-inflammatory marks. Acne peels suit teenagers and adults and can be combined with microneedling or laser sessions for deeper, longer-lasting correction of acne scars.',
        keyBenefits: ['Reduces active acne', 'Unclogs pores', 'Improves acne scars', 'Controls oil production', 'Improves skin texture'],
        afterCare: ['Use sunscreen regularly', 'Avoid direct sun exposure', 'Keep skin moisturized'],
        sideEffects: ['Mild redness for 1-2 days', 'Temporary peeling'],
        duration: '30 minutes',
        sessions: '3–6 sessions',
        idealFor: ['Acne', 'Oily skin', 'Acne marks'],
        image: acnePeel,
      },
      {
        slug: 'glow-peel',
        name: 'Glow Peel',
        description: 'Glow peel is a superficial chemical peel that brightens dull, tired skin and restores radiance, and it is one of the treatments offered at our Nashik clinic. Using a mild acid formula, it exfoliates the outer layer of the skin, lifts away dead cells and uneven pigment, and reveals a clearer, more luminous complexion over a course of sessions. It works especially well for patients dealing with dullness, uneven skin tone and post-acne marks caused by the humid climate and strong sun exposure common in Nashik. The procedure takes about twenty minutes with no downtime, making it ideal before weddings, functions and other important events. Most patients see visible brightness immediately, with fuller results building across a course of sessions.',
        keyBenefits: ['Brighter-looking skin', 'Evens skin tone', 'Reduces dullness', 'Smooths skin texture', 'Non-invasive treatment'],
        afterCare: ['Apply SPF 50 sunscreen', 'Avoid exfoliating products for 3 days', 'Use gentle cleanser'],
        sideEffects: ['Mild tingling during treatment', 'Slight redness for a few hours'],
        duration: '20 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Dull skin', 'Uneven tone', 'Pre-event glow'],
        image: glowPeel,
      },
      {
        slug: 'party-peel',
        name: 'Party Peel',
        description: 'Party peel is a quick chemical peel designed to give you a brighter appearance before a wedding, reception, function or any other important event. It is chosen by patients in Nashik who want a fresh-looking complexion with minimal recovery, and it combines mild acids to smooth the skin surface, tighten the appearance of pores and brighten dull tone in a short visit. The treatment typically takes around fifteen minutes, with little to no downtime afterwards, so you can usually return to your normal routine the same day. Some patients notice a brighter appearance after the session. Your dermatologist will assess your skin beforehand and may recommend combining it with a hydrafacial for an even better result.',
        keyBenefits: ['Brighter appearance', 'Minimal downtime', 'Smooths fine lines', 'Hydrates skin', 'Pre-event option'],
        afterCare: ['Use hydrating moisturizer', 'Apply sunscreen', 'Avoid harsh products for 24 hours'],
        sideEffects: ['Minimal to no side effects', 'Slight warmth during application'],
        duration: '15 minutes',
        sessions: '1–3 sessions',
        idealFor: ['Pre-event prep', 'All skin types', 'Quick glow'],
        image: partyPeel,
      },
      {
        slug: 'yellow-peel',
        name: 'Yellow Peel',
        description: 'Yellow peel, also known as a retinol peel, is a medium-depth chemical peel used to treat pigmentation, sun damage and fine lines, and it is a cornerstone treatment at our Nashik dermatology clinic. Its retinoid-based formula penetrates deeper than superficial peels to stimulate cell turnover, fade dark patches and melasma, and boost collagen production for firmer skin. It is especially effective for Indian skin types prone to tanning and post-inflammatory pigmentation, which are common concerns for patients in Nashik. Most people see clearer, more even skin after two to three sessions, with continued improvement as collagen builds over the following weeks. Mild peeling for a few days is expected and is a normal part of the healing process.',
        keyBenefits: ['Treats pigmentation', 'Reduces fine lines', 'Boosts collagen production', 'Improves photodamaged skin', 'Even skin tone'],
        afterCare: ['Strict sun avoidance for 1 week', 'Moisturize frequently', 'Do not peel skin manually'],
        sideEffects: ['Peeling for 3-5 days', 'Mild redness and dryness'],
        duration: '30 minutes',
        sessions: '3–4 sessions',
        idealFor: ['Pigmentation', 'Sun damage', 'Fine lines'],
        image: yellowPeel,
      },
      {
        slug: 'antiaging-peel',
        name: 'Antiaging Peel',
        description: 'Antiaging peel combines glycolic acid and lactic acid to soften fine lines, wrinkles and age spots while stimulating collagen renewal for firmer, more youthful-looking skin. It is a popular choice among patients in Nashik who want visible age-related improvement without surgery or a long recovery period. The glycolic component resurfaces the upper layers of skin to smooth texture and fade pigmentation, while lactic acid hydrates and exfoliates at the same time, making the treatment suitable even for drier or more sensitive skin. Most patients notice smoother skin and a brighter tone after the first session, with firmer, more defined results over a course of four to six treatments. Daily sun protection is essential to protect and maintain your results.',
        keyBenefits: ['Reduces fine lines and wrinkles', 'Stimulates collagen', 'Fades age spots', 'Tightens skin', 'Restores youthful glow'],
        afterCare: ['Use anti-aging moisturizer', 'Apply sunscreen daily', 'Avoid retinol for 3 days post-treatment'],
        sideEffects: ['Peeling for 2-4 days', 'Temporary tightness'],
        duration: '30 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Aging skin', 'Wrinkles', 'Mature skin'],
        image: antiagingPeel,
      },
      {
        slug: 'dermaplaning',
        name: 'Dermaplaning',
        description: 'Dermaplaning is a physical exfoliation treatment in which a sterile surgical blade is used to gently remove dead skin cells and fine vellus hair, often called peach fuzz, leaving the skin visibly smoother and brighter. It is a treatment offered at our Nashik clinic, particularly for patients preparing for an event or struggling with uneven texture and clogged pores. Unlike harsh scrubs, dermaplaning removes buildup with minimal downtime, and it also allows skincare products and makeup to sit more smoothly on the skin afterwards. The treatment takes about thirty minutes and may suit many skin types. Results are visible straight after treatment, with mild redness that usually settles within a few hours.',
        keyBenefits: ['Removes peach fuzz', 'Smooth skin texture', 'Better product absorption', 'Flawless makeup application', 'No downtime'],
        afterCare: ['Avoid sun exposure', 'Use gentle skincare', 'Apply hydrating serum'],
        sideEffects: ['Slight redness immediately after', 'Temporary sensitivity'],
        duration: '30 minutes',
        sessions: 'Monthly maintenance',
        idealFor: ['Dull skin', 'Peach fuzz', 'Uneven texture'],
        image: dermaplaning,
      },
      {
        slug: 'phenol-peel',
        name: 'Phenol Peel',
        description: 'Phenol peel is a deep chemical peel reserved for patients with significant sun damage, deep wrinkles and severe scarring, and it is a deeper resurfacing option offered at our Nashik clinic. Its deeply penetrating formula works below the surface to remodel damaged collagen, soften deep lines and even out weathered skin. It is often considered when lighter peels and laser sessions have not delivered the improvement a patient is looking for. Because the treatment is intensive, it involves a longer healing period of around one to two weeks with significant peeling, and results are monitored closely with a tailored aftercare plan. For the right candidate, the result can be smooth and long-lasting.',
        keyBenefits: ['Treats deep wrinkles', 'Improves sun-damaged skin', 'Skin rejuvenation', 'Long-lasting results', 'Treats deep scars'],
        afterCare: ['Follow strict post-care protocol', 'Complete sun avoidance for 2 weeks', 'Use prescribed medications'],
        sideEffects: ['Significant peeling for 7-14 days', 'Redness lasting several weeks', 'Requires downtime'],
        duration: '45-60 minutes',
        sessions: '1 session',
        idealFor: ['Deep wrinkles', 'Severe sun damage', 'Deep scars'],
        image: phenolPeel,
      },
      {
        slug: 'scalp-peel',
        name: 'Scalp Peel',
        description: 'Scalp peel is a specialised exfoliation treatment designed for the scalp rather than the face, and it addresses dandruff, excess sebum, itchiness and product buildup that can slow down healthy hair growth. Popular with patients at our Nashik hair and skin clinic, it clears away dead skin and excess oil from the scalp, relieves a flaky or irritated feeling, and creates a cleaner environment for hair to grow thicker over time. It is particularly helpful for people dealing with humidity-related scalp issues, oily roots or an itchy scalp that feels worse in warmer months. The treatment takes about thirty minutes, involves no downtime, and is often paired with PRP or mesotherapy for fuller results.',
        keyBenefits: ['Removes scalp buildup', 'Treats dandruff', 'Promotes hair growth', 'Reduces itchiness', 'Balances scalp oil'],
        afterCare: ['Use mild shampoo', 'Avoid heat styling for 24 hours', 'Massage scalp gently'],
        sideEffects: ['Slight tingling', 'Temporary dryness'],
        duration: '30 minutes',
        sessions: '3–5 sessions',
        idealFor: ['Dandruff', 'Oily scalp', 'Hair thinning'],
        image: scalpPeel,
      },
      {
        slug: 'body-peel',
        name: 'Body Peel',
        description: 'Body peel is a chemical exfoliation treatment applied to areas of the body such as the back, shoulders, arms and legs, and it is a practical solution for body acne, dark patches, keratosis pilaris and rough, uneven texture. Many patients in Nashik seek it because back and arm acne is common in our humid climate and is often missed by everyday body care. The treatment removes dead skin and excess buildup from treated areas, clears congested pores, reduces body pigmentation and smooths rough patches such as chicken skin. Sessions take about thirty to forty-five minutes and can be combined with dermaplaning or laser resurfacing for more comprehensive results. Mild peeling for a couple of days is normal and settles quickly.',
        keyBenefits: ['Treats body acne', 'Reduces pigmentation', 'Smooths rough skin', 'Improves KP (chicken skin)', 'Even body skin tone'],
        afterCare: ['Moisturize treated areas', 'Avoid tight clothing', 'Use sunscreen on exposed areas'],
        sideEffects: ['Mild peeling for 2-3 days', 'Temporary redness'],
        duration: '30-45 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Body acne', 'Rough skin', 'Dark patches'],
        image: bodyPeel,
      },
    ]
  },
  {
    id: 'facials',
    title: 'Facials',
    services: [
      {
        slug: 'cleanup',
        name: 'Cleanup',
        description: 'A professional skin cleanup is a regularly booked treatment at our Nashik dermatology clinic, and it can be a useful first step in a skincare routine. The treatment combines gentle steaming, deep cleansing and careful extraction of blackheads and whiteheads, followed by a soothing mask that calms, hydrates and balances the skin. By clearing out congestion it reduces the frequency of breakouts and leaves skin noticeably cleaner and fresher, which makes it a monthly maintenance option for many skin types. It is especially useful for teenagers and adults in Nashik who deal with oily, congested skin and frequent breakouts and who want visible results without any downtime. Mild redness straight after extraction usually settles within an hour.',
        keyBenefits: ['Deep cleanses pores', 'Removes blackheads & whiteheads', 'Refreshes dull skin', 'Prevents breakouts', 'Improves skin clarity'],
        afterCare: ['Avoid touching your face', 'Use non-comedogenic products', 'Apply sunscreen'],
        sideEffects: ['Mild redness post-extraction', 'Temporary sensitivity'],
        duration: '45 minutes',
        sessions: 'Monthly',
        idealFor: ['All skin types', 'Congested skin', 'Regular maintenance'],
        image: cleanup,
      },
      {
        slug: 'hydrafacial',
        name: 'Hydrafacial',
        description: 'Hydrafacial is a multi-step, medical-grade facial that cleanses, exfoliates, extracts and hydrates the skin in a single comfortable session, and it is a treatment offered at our Nashik clinic. Using vortex technology, it lifts away dead skin and debris from the pores while simultaneously delivering antioxidant-rich serums, leaving skin hydrated, clear and visibly glowing with minimal downtime. It may be suitable for anyone dealing with dullness, dehydration, enlarged pores, blackheads or early fine lines, and the results may be noticeable after the appointment. Some patients in Nashik book a hydrafacial once a month to maintain clarity and hydration, and it also works well as a preparatory treatment before weddings and other celebrations.',
        keyBenefits: ['Deep hydration', 'Pore cleansing & extraction', 'Reduces fine lines', 'Improves skin elasticity', 'Visible results'],
        afterCare: ['Avoid makeup for 6 hours', 'Use SPF daily', 'Stay hydrated'],
        sideEffects: ['Minimal to none', 'Slight redness for 30 minutes'],
        duration: '45 minutes',
        sessions: 'Monthly',
        idealFor: ['Dehydrated skin', 'Fine lines', 'Dull complexion'],
        image: hydrafacial,
      },
      {
        slug: 'medifacial',
        name: 'Medifacial',
        description: 'A medifacial is a customised, doctor-led facial that goes beyond a standard salon treatment by combining clinical-grade actives with techniques chosen specifically for your skin concern. It is widely recommended at our Nashik clinic for patients dealing with acne, pigmentation and early signs of ageing who have not seen results from over-the-counter products. Instead of applying a fixed protocol, Dr. Neha Shinde assesses your skin type, barrier condition and priorities, then layers medical-grade ingredients to target the issue directly and allow deeper penetration. Most patients notice brighter tone, smoother texture and calmer skin after the first session, with stronger improvement across a course of treatments. It is ideal for anyone who wants a targeted, clinical approach to skin concerns.',
        keyBenefits: ['Customized to skin type', 'Medical-grade ingredients', 'Targets specific concerns', 'Deeper penetration', 'Clinical results'],
        afterCare: ['Follow prescribed skincare', 'Avoid sun exposure', 'Use gentle products'],
        sideEffects: ['Mild redness', 'Temporary tightness'],
        duration: '60 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Acne', 'Pigmentation', 'Anti-aging'],
        image: medifacial,
      },
      {
        slug: 'oxygeno-facial',
        name: 'Oxygeno Facial',
        description: 'An oxygeno facial uses pure oxygen infusion technology to flood the skin with oxygen and nourishing serums, delivering a deep hydration and revitalisation that ordinary moisturisers cannot match. It is one of the more advanced facials offered at our Nashik clinic, and patients with tired, dull or dehydrated skin love it for the immediate glow it produces. The oxygen boosts cellular metabolism, improves microcirculation and helps active ingredients absorb more deeply, so skin looks plumper, fresher and healthier within a single session. It is an excellent pre-event treatment before a wedding or function, with no downtime at all, and it works well alongside hydrafacial or skin booster sessions for longer-lasting radiance.',
        keyBenefits: ['Oxygen-rich skin nourishment', 'Boosts cellular renewal', 'Improves blood circulation', 'Deep hydration', 'Natural radiance'],
        afterCare: ['Stay hydrated', 'Use gentle moisturizer', 'Apply sunscreen'],
        sideEffects: ['No downtime', 'Slight tingling during treatment'],
        duration: '45 minutes',
        sessions: '4–8 sessions',
        idealFor: ['Tired skin', 'Dehydration', 'Pre-event glow'],
        image: oxygenoFacial,
      },
      {
        slug: 'vampire-prp-facial',
        name: 'Vampire (PRP) Facial',
        description: 'The Vampire facial, or PRP facial, combines microneedling with platelet-rich plasma made from your own blood to repair, renew and rejuvenate skin naturally. It is a treatment offered at our Nashik clinic for patients with acne scars, open pores, uneven texture and early fine lines who want results without synthetic fillers. Creating controlled micro-channels in the skin allows your own concentrated growth factors to reach deeper layers, stimulating collagen production and encouraging the skin to heal itself over the following weeks. Most patients notice fresher skin within days and continued improvement in scars and texture over three to four sessions. Mild redness for a day or two and occasional light bruising can occur.',
        keyBenefits: ['Natural rejuvenation using own blood', 'Stimulates collagen', 'Reduces scars & fine lines', 'Improves skin texture', 'Tightens skin'],
        afterCare: ['Avoid washing face for 12 hours', 'No makeup for 24 hours', 'Avoid sun and heat'],
        sideEffects: ['Redness for 1-2 days', 'Mild bruising', 'Pinpoint bleeding during treatment'],
        duration: '60 minutes',
        sessions: '3–4 sessions',
        idealFor: ['Acne scars', 'Fine lines', 'Skin rejuvenation'],
        image: vampirePrpFacial,
      },
      {
        slug: 'fire-ice-facials',
        name: 'Fire & Ice Facials',
        description: 'A Fire and Ice facial is a clinical resurfacing treatment that combines an intense glycolic acid and retinol masque, the fire stage, with a cooling hyaluronic acid mask, the ice stage, to resurface skin and calm it in a single session. It is a favourite among patients in Nashik who want a genuine glow, smoother texture and refined pores before an important event. The glycolic and retinol stage lifts dead surface cells, softens fine lines and evens out pigmentation, while the cooling hyaluronic layer deeply hydrates and seals the treatment in. Expect visible brightening straight away with no significant downtime, and most patients follow a course of three to six sessions to build longer-lasting results.',
        keyBenefits: ['Resurfaces skin', 'Reduces fine lines', 'Evens skin tone', 'Plumps & hydrates', 'Red carpet-ready skin'],
        afterCare: ['Use calming moisturizer', 'Avoid actives for 48 hours', 'Apply SPF'],
        sideEffects: ['Warmth during "fire" phase', 'Mild tingling', 'Slight redness'],
        duration: '45 minutes',
        sessions: '3–6 sessions',
        idealFor: ['Dull skin', 'Uneven texture', 'Pre-event glow'],
        image: fireIceFacials,
      },
    ]
  },
  {
    id: 'hair-scalp',
    title: 'Hair & Scalp',
    services: [
      {
        slug: 'hair-transplant',
        name: 'Hair Transplant',
        description: 'Hair transplant is a surgical procedure that moves healthy hair follicles from a permanent donor area to thinning or balding regions, giving a natural-looking result that can be long-lasting. It is a surgical option offered at our Nashik clinic for men and women dealing with male pattern baldness, a receding hairline, thinning crowns or hair loss after stress or illness. Because transplanted follicles retain their original growth pattern, they continue to grow normally and need no special long-term maintenance. The procedure is performed under local anaesthesia over a single session, and patients typically see new growth begin to appear around three to six months, with fuller density over the following year.',
        keyBenefits: ['Long-lasting hair restoration', 'Natural-looking results', 'Improved hairline', 'Boosts confidence', 'Single-session procedure'],
        afterCare: ['Follow post-surgery care instructions', 'Avoid strenuous activity for 2 weeks', 'Sleep elevated for first week'],
        sideEffects: ['Swelling for 3-5 days', 'Temporary numbness', 'Scabbing at graft sites'],
        duration: '4-8 hours',
        sessions: '1 session',
        idealFor: ['Male pattern baldness', 'Receding hairline', 'Hair thinning'],
        image: hairTransplant,
      },
      {
        slug: 'prp-injection-hair',
        name: 'PRP Injection',
        description: 'PRP injection for hair uses platelet-rich plasma made from your own blood, which is injected into the scalp to stimulate hair follicles. It is a treatment offered for hair fall at our Nashik clinic, and it may be considered for women experiencing pattern hair loss and for men in the early stages of alopecia. Because the plasma is derived from your own body, the risk of an allergic reaction is low, and it works alongside any medication or minoxidil you may already be using. Most patients notice reduced hair fall within a few weeks and new growth over three to four months, with a course of four to six sessions.',
        keyBenefits: ['Stimulates hair growth', 'Reduces hair fall', 'Strengthens hair follicles', 'Natural treatment', 'No allergic reactions'],
        afterCare: ['Avoid washing hair for 24 hours', 'No heat styling for 48 hours', 'Gentle scalp care'],
        sideEffects: ['Mild scalp tenderness', 'Slight swelling at injection sites', 'Temporary headache'],
        duration: '45 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Hair fall', 'Thinning hair', 'Alopecia'],
        image: prpInjectionHair,
      },
      {
        slug: 'gfc-injection',
        name: 'GFC Injection',
        description: 'GFC injection, short for Growth Factor Concentrate, is an advanced hair restoration treatment that delivers a much higher concentration of growth factors directly to the hair follicles than standard PRP. It is offered at our Nashik clinic for patients with significant hair fall, thinning hair or androgenetic alopecia who need a stronger response. The concentrated growth factors are injected into the scalp to reactivate dormant follicles, increase hair density and reduce ongoing shedding, making it a considered step-up option for severe or long-standing hair loss. The procedure is quick, uses your own blood so there is no risk of allergy, and most patients see reduced shedding and visible new growth across a course of three to four sessions spaced a few weeks apart.',
        keyBenefits: ['Higher growth factor concentration', 'Superior to traditional PRP', 'Promotes dense hair growth', 'Reduces hair thinning', 'Safe and effective'],
        afterCare: ['Avoid hair wash for 12 hours', 'No harsh chemical treatments', 'Follow prescribed supplements'],
        sideEffects: ['Mild discomfort at injection site', 'Slight redness on scalp'],
        duration: '45 minutes',
        sessions: '3–4 sessions',
        idealFor: ['Severe hair fall', 'Androgenetic alopecia', 'Hair thinning'],
        image: gfcInjection,
      },
      {
        slug: 'hair-botox',
        name: 'Hair Botox',
        description: 'Hair botox is a deep conditioning and repair treatment that fills in damaged and broken hair fibres with a protein-based filler, leaving hair visibly smoother, shinier and fuller. It is an increasingly popular service at our Nashik clinic for anyone dealing with frizz, dryness, split ends, dull colour-treated hair or heat damage. Unlike harsh chemical treatments, hair botox works without changing the structure of your hair and involves no harmful bleaching, so it is suitable for all hair types, including coloured and chemically treated hair. The treatment takes around ninety minutes and results typically last two to four months. It is an excellent choice before weddings, functions and photoshoots, and pairs well with a scalp peel or PRP for hair fall.',
        keyBenefits: ['Deep conditioning', 'Repairs damaged hair', 'Adds shine & volume', 'Reduces frizz', 'No harsh chemicals'],
        afterCare: ['Use sulfate-free shampoo', 'Avoid chlorine and salt water', 'Regular deep conditioning'],
        sideEffects: ['None typically', 'Results last 2-4 months'],
        duration: '90 minutes',
        sessions: 'Every 3-4 months',
        idealFor: ['Damaged hair', 'Frizzy hair', 'Dull hair'],
        image: hairBotox,
      },
      {
        slug: 'micropigmentation-scalp',
        name: 'Micropigmentation Scalp',
        description: 'Scalp micropigmentation, also called SMP, is a non-surgical cosmetic tattoo technique that creates the appearance of tiny hair follicles across the scalp, giving the impression of fuller hair or a clean shaved-head look. It is a practical option offered at our Nashik clinic for people with bald patches, thinning hair, alopecia or scalp scars who want an immediate, convincing result. The pigment is deposited into the upper layers of the skin using single-use needles, and the outcome can be tailored in shape, density and shade to blend naturally with your existing hair. Most patients require two to three sessions to achieve the desired density, with very little downtime and results that last several years before a top-up is needed.',
        keyBenefits: ['Creates fuller hair appearance', 'Camouflages scars', 'Non-surgical solution', 'Immediate results', 'Low maintenance'],
        afterCare: ['Keep scalp dry for 4 days', 'Avoid sun exposure', 'No swimming for 1 week'],
        sideEffects: ['Mild redness for 1-2 days', 'Slight tenderness'],
        duration: '2-4 hours',
        sessions: '2–3 sessions',
        idealFor: ['Bald spots', 'Thinning hair', 'Scar camouflage'],
        image: micropigmentationScalp,
      },
      {
        slug: 'meso-hair',
        name: 'Meso Hair',
        description: 'Meso hair, or scalp mesotherapy, is a non-surgical treatment for hair fall in which a customised cocktail of vitamins, minerals, amino acids and growth factors is delivered directly into the scalp through micro-injections. It is offered at our Nashik clinic for patients experiencing hair fall, weak or brittle hair, or thinning linked to stress, nutrition or hormonal changes. By placing the nutrients directly where the follicles need them, mesotherapy improves scalp circulation, strengthens existing follicles and stimulates new growth over time. The formulation is tailored to your underlying cause of hair loss, which makes it a versatile option that pairs effectively with PRP or GFC injections for stronger and faster results across a course of six to eight sessions.',
        keyBenefits: ['Nourishes hair follicles', 'Reduces hair fall', 'Promotes new growth', 'Improves scalp health', 'Customized cocktail'],
        afterCare: ['Avoid hair wash for 12 hours', 'Gentle scalp massage', 'Stay hydrated'],
        sideEffects: ['Mild discomfort during injection', 'Temporary redness on scalp'],
        duration: '30 minutes',
        sessions: '6–8 sessions',
        idealFor: ['Hair fall', 'Weak hair', 'Nutrient deficiency'],
        image: mesoHair,
      },
    ]
  },
  {
    id: 'energy-based',
    title: 'Energy Based Devices',
    services: [
      {
        slug: 'q-switch-laser',
        name: 'Q Switch Laser',
        description: 'Q-switched laser is a non-invasive laser treatment used to treat pigmentation, dark spots, melasma and tattoos, and it is one of the treatments offered at our Nashik dermatology clinic. The laser delivers extremely short, high-energy pulses that selectively break down excess pigment without damaging the surrounding skin, so the treated area clears gradually over a series of sessions. It is especially helpful for Indian skin tones that are prone to post-inflammatory hyperpigmentation, a common concern for patients in Nashik dealing with sun-induced tanning and melasma. Most people need four to eight sessions depending on the depth of the pigment, and results can be noticeable for tattoos and stubborn dark patches. Sun protection between sessions is essential.',
        keyBenefits: ['Removes pigmentation', 'Tattoo removal', 'Evens skin tone', 'Reduces dark spots', 'Stimulates collagen'],
        afterCare: ['Strict sun protection', 'Avoid bleaching creams', 'Use prescribed creams only'],
        sideEffects: ['Mild redness and warmth', 'Temporary darkening of treated spots', 'Slight swelling'],
        duration: '20-30 minutes',
        sessions: '4–8 sessions',
        idealFor: ['Pigmentation', 'Tattoo removal', 'Melasma'],
        image: qSwitchLaser,
      },
      {
        slug: 'laser-hair-reduction',
        name: 'Laser Hair Reduction',
        description: 'Laser hair reduction uses concentrated light energy to target and destroy hair follicles at the follicle bulb, providing long-lasting reduction in unwanted body and facial hair with each session. It is widely requested at our Nashik clinic by patients tired of shaving, waxing, ingrown hairs and the irritation caused by frequent hair removal. Because the treatment disables the follicle rather than simply cutting the hair, regrowth becomes progressively finer and sparser over a course of six to eight sessions, with many patients reporting smooth, clear skin and far fewer ingrown hairs. It can be performed on most body areas and works well on Indian skin when settings are adjusted carefully. Sessions take between fifteen minutes and an hour depending on the area.',
        keyBenefits: ['Long-lasting hair reduction', 'Precision targeting', 'Smooth skin', 'Reduces ingrown hairs', 'Suitable for most body areas'],
        afterCare: ['Avoid sun exposure', 'No waxing between sessions', 'Apply soothing gel'],
        sideEffects: ['Mild redness for a few hours', 'Slight swelling around follicles', 'Temporary sensitivity'],
        duration: '15-60 minutes',
        sessions: '6–8 sessions',
        idealFor: ['Unwanted hair', 'Ingrown hairs', 'All body areas'],
        image: laserHairReduction,
      },
      {
        slug: 'rf-cautery',
        name: 'RF Cautery',
        description: 'RF cautery, or radiofrequency cautery, is a quick and precise treatment for removing skin tags, moles, warts, milia and other small skin growths using radiofrequency energy. It is a common service at our Nashik clinic because it is fast, largely bloodless and leaves minimal scarring compared with traditional surgical removal. The growth is cauterised at the base, sealing it off and allowing it to heal cleanly without stitches, and multiple small growths can often be treated in a single short appointment. It is especially useful for patients who get irritated skin tags around the neck, underarms or from friction. Healing is straightforward, with a small scab that typically falls away within about a week.',
        keyBenefits: ['Precise removal', 'Minimal scarring', 'Quick procedure', 'Treats multiple growths', 'Safe and effective'],
        afterCare: ['Keep area clean and dry', 'Avoid picking at scabs', 'Apply antibiotic cream'],
        sideEffects: ['Mild discomfort during procedure', 'Temporary redness', 'Scabbing for 5-7 days'],
        duration: '15-30 minutes',
        sessions: '1 session',
        idealFor: ['Skin tags', 'Moles', 'Warts'],
        image: rfCautery,
      },
      {
        slug: 'dermaroller',
        name: 'Dermaroller',
        description: 'A dermaroller, or microneedling device, creates controlled micro-injuries across the skin surface using fine needles, which triggers the natural healing response of the body and stimulates new collagen and elastin production. It is a treatment offered at our Nashik clinic for acne scars, large pores, uneven texture and early fine lines. The tiny channels created by the needles also allow therapeutic serums to penetrate far more deeply, which means you get both skin resurfacing and a boost of active ingredients in one session. Most patients see visible improvement in scar texture across four to six sessions, with mild redness for a day or two that settles quickly and no real downtime.',
        keyBenefits: ['Stimulates collagen', 'Reduces acne scars', 'Improves skin texture', 'Enhances product absorption', 'Minimally invasive'],
        afterCare: ['Avoid sun exposure for 48 hours', 'Use only prescribed serums', 'No makeup for 24 hours'],
        sideEffects: ['Redness for 24-48 hours', 'Mild swelling', 'Temporary skin sensitivity'],
        duration: '30-45 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Acne scars', 'Fine lines', 'Large pores'],
        image: dermaroller,
      },
      {
        slug: 'fractional-co2-laser',
        name: 'Fractional CO2 Laser',
        description: 'Fractional CO2 laser is an advanced resurfacing treatment that creates microscopic columns of controlled thermal injury in the skin, stimulating deep collagen remodeling to improve deep scars, wrinkles and skin laxity from within. It is a resurfacing treatment offered at our Nashik clinic, and it is considered by patients with severe acne scarring, deep-set surgical or burn scars, pronounced wrinkles or loose, sagging skin that lighter treatments may not address. Because only a fraction of the skin is treated at a time, the surrounding healthy tissue speeds up healing, though a downtime of one to two weeks with redness and crusting is expected. Most patients need two to four sessions for meaningful, long-lasting correction.',
        keyBenefits: ['Deep skin resurfacing', 'Treats severe scars', 'Reduces deep wrinkles', 'Tightens skin', 'Long-lasting results'],
        afterCare: ['Strict sun avoidance for 2 weeks', 'Use prescribed healing ointment', 'Keep skin moist'],
        sideEffects: ['Redness for 5-7 days', 'Peeling and crusting', 'Downtime of 1-2 weeks'],
        duration: '30-45 minutes',
        sessions: '2–4 sessions',
        idealFor: ['Deep scars', 'Wrinkles', 'Skin resurfacing'],
        image: fractionalCo2Laser,
      },
      {
        slug: 'hifu',
        name: 'HIFU',
        description: 'HIFU, or High-Intensity Focused Ultrasound, is a non-invasive skin tightening and lifting treatment that uses focused ultrasound energy to stimulate collagen deep beneath the surface of the skin. It is a commonly used anti-ageing treatment at our Nashik clinic for patients with sagging cheeks, a softened jawline, jowls, neck laxity or a loss of definition who want results without surgery. Unlike lasers, HIFU reaches deeper into the underlying layers, encouraging the skin to rebuild its own collagen over the following two to six months, so improvement continues to be visible long after your appointment. The procedure takes under an hour, requires no downtime and typically needs repeating once or twice a year to maintain results.',
        keyBenefits: ['Non-surgical face lift', 'Skin tightening', 'Collagen stimulation', 'No downtime', 'Results improve over months'],
        afterCare: ['Stay hydrated', 'Avoid extreme heat', 'Use moisturizer regularly'],
        sideEffects: ['Mild discomfort during treatment', 'Temporary redness', 'Slight tingling'],
        duration: '45-60 minutes',
        sessions: '1–2 sessions yearly',
        idealFor: ['Sagging skin', 'Jawline definition', 'Skin laxity'],
        image: hifu,
      },
      {
        slug: 'lipolysis',
        name: 'Lipolysis',
        description: 'Lipolysis is a non-surgical fat reduction and body contouring treatment that breaks down stubborn, localised fat deposits in targeted areas using laser, radiofrequency or injection-based techniques. It is offered at our Nashik clinic for patients who struggle with a double chin, love handles, a fuller lower face or resistant fat that does not respond to diet and exercise alone. The treatment targets fat cells in the chosen area while leaving surrounding tissue intact, so fullness can be reduced without the loose, sagging skin that often follows weight loss. Results appear gradually over several weeks as the body clears the released fat, and most patients need two to four sessions to reach their desired contour.',
        keyBenefits: ['Non-surgical fat reduction', 'Targets stubborn fat', 'Body contouring', 'Minimal downtime', 'Gradual natural results'],
        afterCare: ['Wear compression garment', 'Stay hydrated', 'Light exercise after 48 hours'],
        sideEffects: ['Swelling at treatment area', 'Mild bruising', 'Temporary numbness'],
        duration: '30-60 minutes',
        sessions: '2–4 sessions',
        idealFor: ['Double chin', 'Love handles', 'Stubborn fat'],
        image: lipolysis,
      },
    ]
  },
  {
    id: 'injectables',
    title: 'Injectables',
    services: [
      {
        slug: 'iv-glutathione',
        name: 'IV Glutathione',
        description: 'IV glutathione is an intravenous infusion that delivers the powerful antioxidant glutathione directly into the bloodstream, supporting skin brightening, detoxification and an even, healthy glow from within. It is a popular wellness and skin treatment at our Nashik clinic for patients with dull, tired or unevenly pigmented skin who want visible luminosity without any downtime. Because the antioxidant is delivered directly rather than through digestion, the body absorbs it far more efficiently than it can from creams or oral supplements, which is why many patients in Nashik choose it as part of a course for lasting brightness. Most people book a series of eight to twelve sessions and report a noticeable improvement in skin tone and clarity.',
        keyBenefits: ['Skin brightening', 'Powerful antioxidant', 'Detoxification', 'Reduces melanin production', 'Improves overall skin health'],
        afterCare: ['Stay hydrated', 'Continue regular skincare', 'Maintain healthy diet'],
        sideEffects: ['Mild discomfort at IV site', 'Rare allergic reaction'],
        duration: '30-45 minutes',
        sessions: '8–12 sessions',
        idealFor: ['Skin brightening', 'Detox', 'Dull complexion'],
        image: ivGlutathione,
      },
      {
        slug: 'botox',
        name: 'Botox',
        description: 'Botox, or botulinum toxin, is a widely used non-surgical anti-ageing treatment, used to soften dynamic wrinkles such as forehead lines, frown lines, crow\'s feet and lines around the mouth. It is a treatment offered at our Nashik clinic, and it works by temporarily relaxing the specific muscles responsible for repeated movement, which both smooths existing lines and prevents new ones from forming. The procedure takes only about fifteen minutes with no downtime, and results begin to appear within four to six days and last three to six months depending on the individual. Our approach is always conservative and tailored so your expression stays natural rather than frozen.',
        keyBenefits: ['Smooths wrinkles', 'Prevents new lines', 'Non-surgical', 'Quick procedure', 'Natural-looking results'],
        afterCare: ['Stay upright for 4 hours', 'No exercise for 24 hours', 'Avoid rubbing treated area'],
        sideEffects: ['Mild bruising at injection site', 'Temporary headache', 'Slight swelling'],
        duration: '15-20 minutes',
        sessions: 'Every 4-6 months',
        idealFor: ['Forehead lines', 'Crow\'s feet', 'Frown lines'],
        image: botox,
      },
      {
        slug: 'mesobotox',
        name: 'Mesobotox',
        description: 'Mesobotox is a skin-refining treatment in which a very small amount of diluted Botox is delivered through multiple superficial micro-injections across the skin instead of being injected into one specific muscle. It may be an option at our Nashik clinic for patients with large pores, oily skin and a bumpy texture who want refinement without losing their natural expression. Because the product is spread across the skin rather than placed in a single muscle, it reduces pore size, smooths the surface, controls excess oil and creates the popular glass-skin effect, while aiming to preserve natural facial movement. The treatment takes about half an hour, with tiny injection marks that settle within a few hours, and results last three to four months.',
        keyBenefits: ['Reduces pore size', 'Controls oil production', 'Glass-skin effect', 'Preserves natural expressions', 'Skin tightening'],
        afterCare: ['No touching treated area for 4 hours', 'Avoid intense exercise for 24 hours', 'Skip makeup for 12 hours'],
        sideEffects: ['Tiny injection marks', 'Mild redness', 'Temporary sensitivity'],
        duration: '20-30 minutes',
        sessions: 'Every 3-4 months',
        idealFor: ['Large pores', 'Oily skin', 'Skin refinement'],
        image: mesobotox,
      },
      {
        slug: 'fillers',
        name: 'Fillers',
        description: 'Fillers are injectable hyaluronic acid gels used to restore lost facial volume, enhance features such as the lips and cheeks and smooth deep lines, and they are among the injectable treatments offered at our Nashik clinic. As we age, natural fat and collagen beneath the skin reduce, which is why cheeks look hollow, the jawline softens and deep lines appear. By placing carefully measured filler beneath the surface, lost structure can be rebuilt and the face defined without adding weight or changing your character. Most results are visible immediately, and depending on the area treated they typically last twelve to eighteen months. Injectable procedures are performed by a qualified medical practitioner after consultation.',
        keyBenefits: ['Restores facial volume', 'Enhances lips & cheeks', 'Smooths deep lines', 'Immediate results', 'Natural-looking enhancement'],
        afterCare: ['Avoid extreme heat for 48 hours', 'No strenuous exercise for 24 hours', 'Avoid pressing treated area'],
        sideEffects: ['Swelling for 2-3 days', 'Mild bruising', 'Temporary tenderness'],
        duration: '30-45 minutes',
        sessions: 'Every 12-18 months',
        idealFor: ['Volume loss', 'Lip enhancement', 'Deep folds'],
        image: fillers,
      },
      {
        slug: 'profhilo',
        name: 'Profhilo',
        description: 'Profhilo is a bio-remodeling injectable that delivers a very pure, concentrated form of hyaluronic acid into five specific points in the face, working from the inside out to hydrate and rebuild skin quality. It is one of the standout treatments at our Nashik clinic for patients with skin laxity, dehydration, dullness and fine lines who want overall improvement rather than a change to one particular feature. Unlike traditional fillers that add volume in a single spot, Profhilo spreads through the tissue and stimulates your own collagen and elastin production, so skin gradually looks firmer, smoother and more radiant over four to eight weeks. It takes about twenty minutes, and a course of two sessions four weeks apart is recommended.',
        keyBenefits: ['Deep skin hydration', 'Bio-remodeling', 'Stimulates collagen & elastin', 'Improves skin laxity', 'Natural results'],
        afterCare: ['Avoid makeup for 24 hours', 'No saunas or steam rooms for 48 hours', 'Stay hydrated'],
        sideEffects: ['Small bumps at injection points (resolve in hours)', 'Mild redness', 'Slight tenderness'],
        duration: '15-20 minutes',
        sessions: '2 sessions (4 weeks apart)',
        idealFor: ['Skin laxity', 'Dehydrated skin', 'Fine lines'],
        image: profhilo,
      },
      {
        slug: 'prp-injectable',
        name: 'PRP',
        description: 'PRP injectable, or platelet-rich plasma skin treatment, uses concentrated growth factors taken from your own blood to rejuvenate skin naturally without any synthetic material. It is offered at our Nashik clinic for patients looking to soften fine lines, improve under-eye circles, brighten dull tone, tighten mildly loose skin or reduce the appearance of acne scars. Because the plasma comes from your own body, it is generally well tolerated and the risk of an allergic reaction is low. It works by stimulating your skin to produce fresh collagen and repair itself over the following weeks, so results build gradually and look natural rather than immediate. Most patients have a course of three to four sessions, with mild bruising for a day or two being the main temporary side effect.',
        keyBenefits: ['Natural rejuvenation', 'Collagen stimulation', 'Improves skin texture', 'Reduces fine lines', 'Uses your own blood'],
        afterCare: ['Avoid sun for 48 hours', 'No intense exercise for 24 hours', 'Use gentle skincare'],
        sideEffects: ['Mild bruising', 'Redness for 1-2 days', 'Temporary swelling'],
        duration: '45 minutes',
        sessions: '3–4 sessions',
        idealFor: ['Skin rejuvenation', 'Under-eye circles', 'Fine lines'],
        image: prpInjectable,
      },
      {
        slug: 'skin-boosters',
        name: 'Skin Boosters',
        description: 'Skin boosters are micro-injections of pure hyaluronic acid placed into the skin rather than beneath it, delivering a deep hydration that surface serums and creams simply cannot reach. They are a favourite at our Nashik clinic for patients with dehydrated, dull or finely lined skin who want a genuine dewy, luminous glow rather than a temporary surface shine. As these water-loving molecules spread through the deeper layers of the skin, they plump the surface, smooth fine lines and improve elasticity from within, and because they are placed across the face rather than in one spot the result is an even, natural-looking radiance. Most patients see a visible difference within a week and are treated with three sessions spaced two to four weeks apart.',
        keyBenefits: ['Deep hydration', 'Improved skin elasticity', 'Natural glow', 'Fine line reduction', 'Long-lasting results'],
        afterCare: ['Avoid makeup for 12 hours', 'Use sunscreen daily', 'Stay hydrated'],
        sideEffects: ['Small injection marks', 'Mild redness for a few hours', 'Slight tenderness'],
        duration: '30 minutes',
        sessions: '3 sessions (2-4 weeks apart)',
        idealFor: ['Dehydrated skin', 'Dull complexion', 'Fine lines'],
        image: skinBoosters,
      },
      {
        slug: 'pdo-thread-lift',
        name: 'PDO Thread Lift',
        description: 'A PDO thread lift is a minimally invasive procedure in which very fine, absorbable polydioxanone threads are placed under the skin of the face and neck to lift and tighten sagging tissue. It is a popular option at our Nashik clinic for patients with jowls, sagging cheeks, nasolabial folds and neck laxity who want a lift without a facelift or the downtime of surgery. The threads provide an immediate lifting effect as they are placed, and as the body absorbs them over the following months they trigger a natural collagen response, so skin continues to tighten and improve long after the appointment. The procedure takes about an hour, most people return to work within a few days, and results can last up to two years.',
        keyBenefits: ['Immediate lifting effect', 'Stimulates collagen', 'Non-surgical lift', 'Minimal downtime', 'Natural-looking results'],
        afterCare: ['Avoid wide mouth opening for 2 weeks', 'Sleep face-up for 1 week', 'No facial massages for 4 weeks'],
        sideEffects: ['Swelling for 3-5 days', 'Mild bruising', 'Temporary pulling sensation'],
        duration: '45-60 minutes',
        sessions: '1 session',
        idealFor: ['Sagging jowls', 'Nasolabial folds', 'Neck laxity'],
        image: pdoThreadLift,
      },
    ]
  },
  {
    id: 'other-procedures',
    title: 'Other Procedures',
    services: [
      {
        slug: 'dermapen-microneedling',
        name: 'Dermapen Microneedling',
        description: 'Dermapen microneedling is an automated device that creates precise, controlled micro-channels in the skin at an adjustable depth, stimulating collagen production and allowing therapeutic serums to absorb far more effectively. It is a cornerstone treatment at our Nashik clinic for patients with acne scars, stretch marks, large pores and uneven skin texture. Because the needle depth can be set exactly for each area of the face, Dermapen is more precise than a traditional dermaroller and is able to treat scarred and delicate areas safely. Most patients see smoother texture and gradually fading scars across four to six sessions, and the treatment can be combined with PRP or serums for significantly stronger results. Mild redness for a day or two is expected.',
        keyBenefits: ['Precise needle depth control', 'Stimulates collagen', 'Reduces scars & stretch marks', 'Enhanced serum absorption', 'Minimal downtime'],
        afterCare: ['Avoid sun exposure for 48 hours', 'Use recommended serums', 'No makeup for 24 hours'],
        sideEffects: ['Redness for 24-48 hours', 'Mild swelling', 'Pinpoint bleeding during treatment'],
        duration: '30-45 minutes',
        sessions: '4–6 sessions',
        idealFor: ['Acne scars', 'Stretch marks', 'Skin rejuvenation'],
        image: dermapenMicroneedling,
      },
      {
        slug: 'cosmetic-gynecology',
        name: 'Cosmetic Gynecology Nonsurgical',
        description: 'Non-surgical cosmetic gynecology is a discreet, medically supervised treatment for intimate area concerns such as vaginal laxity, reduced sensitivity, dryness and pigmentation, using gentle laser and radiofrequency technology without any surgery. It is one of the more sensitive services offered at our Nashik clinic, and we are especially committed to privacy, respectful handling and clear explanation at every stage. As energy is delivered to the deeper tissue, collagen production is stimulated so tightness, comfort and appearance naturally improve over time, with no incisions, no stitches and very little downtime. Most patients need three to four sessions spaced a few weeks apart, and many report improved physical comfort as well as greater confidence.',
        keyBenefits: ['Non-surgical treatment', 'Vaginal rejuvenation', 'Improves laxity', 'Pigmentation correction', 'Minimal downtime'],
        afterCare: ['Avoid intercourse for 48 hours', 'Use gentle hygiene products', 'Follow up as scheduled'],
        sideEffects: ['Mild discomfort', 'Temporary sensitivity', 'Slight redness'],
        duration: '30-45 minutes',
        sessions: '3–4 sessions',
        idealFor: ['Vaginal laxity', 'Intimate area concerns', 'Post-pregnancy care'],
          image: cosmeticGynecology,
      },
      {
        slug: 'nail-surgery',
        name: 'Nail Surgery',
        description: 'Nail surgery is a minor surgical procedure carried out under local anaesthesia to treat chronic nail problems such as ingrown toenails, infected or thickened nails, nail bed growths and ingrown nails that keep recurring. It is offered at our Nashik clinic for patients who have tried conservative treatments for months without lasting relief and who need a more definitive approach than temporary padding or repeated antibiotics. Removing the offending part of the nail, or treating the underlying bone, addresses the cause rather than the symptom, which can reduce the chance of recurrence. The appointment takes between thirty minutes and an hour, most people return to normal footwear within a few days, and we guide you carefully through dressing and wound care afterwards.',
        keyBenefits: ['Correction of the affected nail', 'Relief from pain', 'Treats chronic infections', 'Reduces recurrence', 'Done under local anesthesia'],
        afterCare: ['Keep dressing dry', 'Follow wound care instructions', 'Avoid tight footwear'],
        sideEffects: ['Post-surgical pain', 'Swelling', 'Temporary difficulty walking'],
        duration: '30-60 minutes',
        sessions: '1 session',
        idealFor: ['Ingrown toenails', 'Nail infections', 'Nail bed tumors'],
        image: nailSurgery,
      },
      {
        slug: 'dermatosurgery',
        name: 'Dermatosurgery',
        description: 'Dermatosurgery refers to minor surgical procedures carried out by a trained dermatologist under local anaesthesia, including cyst removal, lipoma excision, skin lesion removal, mole excision and surgical scar revision. It is an important part of our Nashik clinic because some skin conditions cannot be resolved with creams, peels or laser alone and require removal for both medical and cosmetic reasons. Every procedure is performed in a sterile, clinical setting, and any tissue removed is sent for histopathology where relevant so that a proper diagnosis is always confirmed. Most treatments take between thirty minutes and ninety minutes, need only simple wound care, and leave a minimal scar thanks to careful technique and precise closure.',
        keyBenefits: ['Surgical treatment', 'Biopsy & diagnosis', 'Scar revision', 'Cyst & lipoma removal', 'Scar-conscious technique'],
        afterCare: ['Keep wound clean and dry', 'Follow suture care instructions', 'Attend follow-up visits'],
        sideEffects: ['Mild pain at site', 'Swelling', 'Temporary bruising'],
        duration: '30-90 minutes',
        sessions: '1 session',
        idealFor: ['Cysts', 'Lipomas', 'Skin lesions'],
        image: dermatosurgery,
      },
      {
        slug: 'old-scar-treatment',
        name: 'Old Scar Treatment',
        description: 'Treatment for old scars is designed to improve the appearance of mature, fully settled scars left by previous surgery, burns, injuries or acne, including raised, depressed, red, dark or tethered scars. Because an old scar has usually been in place for years, it needs a planned multi-modal approach rather than a single procedure, and this is what our Nashik clinic provides. Depending on the type of scar, your dermatologist may combine subcision to release the scar bands, microneedling or fractional laser to build new collagen and smooth the surface, and filler injections to lift a depressed area. Most patients require four to eight sessions, and the improvement, although gradual, is often very noticeable.',
        keyBenefits: ['Multi-modal approach', 'Improves scar appearance', 'Smooths skin texture', 'Boosts collagen at scar site', 'Customized treatment plan'],
        afterCare: ['Use sunscreen on treated area', 'Follow prescribed scar care', 'Avoid picking at treated skin'],
        sideEffects: ['Redness for 2-3 days', 'Mild swelling', 'Temporary darkening of scars'],
        duration: '30-60 minutes',
        sessions: '4–8 sessions',
        idealFor: ['Old surgical scars', 'Burn scars', 'Injury scars'],
        image: oldScarTreatment,
      },
      {
        slug: 'skin-biopsy',
        name: 'Skin Biopsy',
        description: 'Skin biopsy is a small, quick diagnostic procedure in which a carefully chosen sample of skin tissue is removed and examined under a microscope to identify the exact cause of a lesion. It is offered at our Nashik clinic for patients with a suspicious mole or growth that is changing in size, shape or colour, a non-healing ulcer, a persistent unexplained rash or a lesion that has been treated unsuccessfully. A biopsy is the most reliable way to confirm or rule out skin cancer, including melanoma, and it also guides the treatment plan for conditions that look similar on the surface but are very different underneath. The procedure takes about fifteen to twenty minutes under local anaesthesia.',
        keyBenefits: ['Accurate diagnosis', 'Guides treatment planning', 'Detects skin cancers early', 'Simple outpatient procedure', 'Minimal discomfort'],
        afterCare: ['Keep biopsy site clean', 'Change dressing daily', 'Avoid strenuous activity for 24 hours'],
        sideEffects: ['Mild pain at site', 'Small scar', 'Minimal bleeding'],
        duration: '15-20 minutes',
        sessions: '1 session',
        idealFor: ['Suspicious lesions', 'Chronic rashes', 'Diagnostic evaluation'],
        image: skinBiopsy,
      },
      {
        slug: 'ear-piercing',
        name: 'Ear Piercing',
        description: 'Medical ear piercing is performed using sterile, single-use devices in a clinical setting by a dermatologist, which helps reduce the risk of infection compared with piercing done at a jewellery counter or retail kiosk. It is one of the services offered at our Nashik clinic for adults, teenagers and children who want precise placement and professional aftercare guidance. It may be a safer option for anyone with a history of keloids, diabetes, a weakened immune system or a previous pierced-ear infection, and the procedure itself takes about ten minutes with only mild soreness afterwards. We also provide clear aftercare instructions, since most complications come from poor cleaning rather than the piercing itself.',
        keyBenefits: ['Sterile medical environment', 'Reduced infection risk', 'Precise placement', 'Professional aftercare guidance', 'Suitable for many ages'],
        afterCare: ['Clean with antiseptic solution daily', 'Avoid touching with dirty hands', 'Keep earrings in for 6 weeks'],
        sideEffects: ['Mild soreness for 1-2 days', 'Slight swelling', 'Rare infection risk'],
        duration: '10 minutes',
        sessions: '1 session',
        idealFor: ['Safe piercing', 'Children', 'All ages'],
        image: earPiercing,
      },
      {
        slug: 'eyebrow-microblading',
        name: 'Eyebrow Microblading',
        description: 'Eyebrow microblading is a semi-permanent cosmetic tattooing technique in which fine, hand-crafted strokes are placed into the upper layers of the skin to create natural-looking, hair-like brows. It is a service offered at our Nashik clinic for people with sparse brows, over-plucked brows, uneven or asymmetric brows, or hair loss caused by thyroid problems, stress or ageing. Because each stroke is designed to match your natural hair direction, colour and density, the result is designed to look natural rather than drawn on, and it can reduce the time spent filling in brows every morning. The appointment takes around one and a half to two hours, and a touch-up after healing is usually recommended to perfect the colour and shape.',
        keyBenefits: ['Natural-looking brows', 'Semi-permanent results', 'Customized shape & color', 'Time-saving daily routine', 'Waterproof results'],
        afterCare: ['Keep brows dry for 10 days', 'Avoid sun exposure', 'No picking at scabs'],
        sideEffects: ['Mild redness and swelling', 'Scabbing during healing', 'Color may initially appear darker'],
        duration: '90-120 minutes',
        sessions: '1 session + 1 touch-up',
        idealFor: ['Sparse brows', 'Over-plucked brows', 'Asymmetric brows'],
        image: eyebrowMicroblading,
      },
    ]
  },
];

// Helper to get all services as a flat array
export const getAllServices = () => {
  return serviceCategories.flatMap(cat =>
    cat.services.map(s => ({ ...s, category: cat.title, categoryId: cat.id }))
  );
};

// Helper to find a single service by slug
export const getServiceBySlug = (slug) => {
  for (const cat of serviceCategories) {
    const found = cat.services.find(s => s.slug === slug);
    if (found) return { ...found, category: cat.title, categoryId: cat.id };
  }
  return null;
};
