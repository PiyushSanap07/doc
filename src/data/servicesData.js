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
        description: 'Acne peel is a medical chemical exfoliation treatment that removes dead skin cells, unclogs pores and reduces acne breakouts. It also helps improve acne scars and skin texture.',
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
        description: 'Glow peel is a superficial chemical peel designed to brighten dull skin, improve radiance and give an instant glow. It gently exfoliates the outer layer for a luminous complexion.',
        keyBenefits: ['Instant skin brightening', 'Evens skin tone', 'Reduces dullness', 'Smooths skin texture', 'Non-invasive treatment'],
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
        description: 'Party peel is a quick, no-downtime peel that gives instant radiance and a fresh look perfect before special events. It combines mild acids to provide a smooth, glowing complexion.',
        keyBenefits: ['Instant glow', 'No downtime', 'Smooths fine lines', 'Hydrates skin', 'Perfect pre-event treatment'],
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
        description: 'Yellow peel (Retinol peel) is a medium-depth chemical peel that uses retinoid acid to treat pigmentation, fine lines, and photodamage. It promotes cell turnover and collagen production.',
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
        description: 'Anti-aging peel combines glycolic and lactic acids to target fine lines, wrinkles, and age spots. It stimulates collagen renewal for firmer, more youthful-looking skin.',
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
        description: 'Dermaplaning is a physical exfoliation procedure using a sterile surgical blade to gently remove dead skin cells and fine vellus hair (peach fuzz), revealing smoother, brighter skin.',
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
        description: 'Phenol peel is a deep chemical peel that addresses severe wrinkles, deep scars, and significant sun damage. It provides dramatic improvement in skin texture and appearance.',
        keyBenefits: ['Treats deep wrinkles', 'Removes severe sun damage', 'Dramatic skin rejuvenation', 'Long-lasting results', 'Treats deep scars'],
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
        description: 'Scalp peel is a specialized exfoliation treatment for the scalp that removes buildup, dead skin, and excess sebum. It helps treat dandruff, itchy scalp, and promotes healthier hair growth.',
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
        description: 'Body peel is a chemical exfoliation treatment applied to body areas like back, arms, and legs. It treats body acne, pigmentation, keratosis pilaris, and rough skin texture.',
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
        description: 'Professional skin cleanup involves deep cleansing, steaming, extraction of blackheads and whiteheads, followed by a soothing mask. It refreshes and purifies the skin for a clear complexion.',
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
        description: 'Hydrafacial is a multi-step medical-grade facial that cleanses, extracts, and hydrates the skin using patented vortex technology. It delivers instant results with no downtime.',
        keyBenefits: ['Deep hydration', 'Pore cleansing & extraction', 'Reduces fine lines', 'Improves skin elasticity', 'Instant visible results'],
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
        description: 'Medifacial is a customized medical facial tailored to your specific skin concerns. It combines clinical-grade ingredients and techniques for targeted skin rejuvenation and repair.',
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
        description: 'Oxygeno facial uses oxygen infusion technology to deeply nourish, hydrate, and revitalize the skin. It boosts cellular metabolism and promotes a natural, healthy glow from within.',
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
        description: 'Vampire facial combines microneedling with Platelet-Rich Plasma (PRP) derived from your own blood. It stimulates collagen production, repairs skin damage, and promotes youthful regeneration.',
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
        description: 'Fire & Ice facial is a clinical resurfacing treatment that combines intensive glycolic and retinol masque (fire) with a soothing hyaluronic acid mask (ice) for dramatic skin renewal.',
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
        description: 'Hair transplant is a surgical procedure that moves hair follicles from a donor area to balding or thinning regions. It provides a permanent, natural-looking solution for hair loss.',
        keyBenefits: ['Permanent hair restoration', 'Natural-looking results', 'Improved hairline', 'Boosts confidence', 'One-time procedure'],
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
        description: 'PRP (Platelet-Rich Plasma) injection for hair involves injecting concentrated growth factors from your own blood into the scalp to stimulate hair follicles and promote new hair growth.',
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
        description: 'GFC (Growth Factor Concentrate) injection is an advanced hair restoration treatment that delivers a high concentration of growth factors directly to hair follicles for superior hair regrowth.',
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
        description: 'Hair Botox is a deep conditioning treatment that fills in damaged and broken hair fibers with a filler, making hair appear smoother, shinier, and more voluminous without chemicals.',
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
        description: 'Scalp micropigmentation (SMP) is a non-surgical cosmetic tattoo procedure that creates the appearance of tiny hair follicles on the scalp, giving an illusion of fuller hair or a shaved head look.',
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
        description: 'Mesotherapy for hair involves micro-injections of vitamins, minerals, amino acids, and growth factors directly into the scalp to nourish hair follicles and combat hair loss.',
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
        description: 'Q-Switch laser is a non-invasive laser technology that delivers short, high-energy pulses to target and break down pigmentation, tattoo ink, and skin discoloration without damaging surrounding tissue.',
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
        description: 'Laser hair reduction uses concentrated light beams to target and destroy hair follicles, providing long-lasting reduction in unwanted body and facial hair growth.',
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
        description: 'RF (Radiofrequency) cautery is a minimally invasive procedure that uses radiofrequency energy to remove skin tags, moles, warts, and other small skin growths safely and precisely.',
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
        description: 'Dermaroller (microneedling) creates controlled micro-injuries on the skin surface using fine needles, stimulating the body\'s natural healing response and collagen production for skin rejuvenation.',
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
        description: 'Fractional CO2 laser is an advanced skin resurfacing treatment that creates microscopic columns of thermal damage to stimulate deep collagen remodeling and treat scars, wrinkles, and skin laxity.',
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
        description: 'HIFU (High-Intensity Focused Ultrasound) is a non-invasive skin tightening treatment that uses focused ultrasound energy to stimulate collagen deep within the skin for lifting and firming effects.',
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
        description: 'Lipolysis is a non-surgical fat reduction treatment that uses laser, radiofrequency, or injection-based techniques to break down stubborn fat deposits in targeted body areas.',
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
        description: 'IV Glutathione infusion delivers the powerful antioxidant directly into the bloodstream for skin brightening, detoxification, and overall skin health improvement from within.',
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
        description: 'Botox (Botulinum toxin) injections temporarily relax facial muscles to smooth dynamic wrinkles like frown lines, crow\'s feet, and forehead lines for a refreshed, youthful appearance.',
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
        description: 'Mesobotox involves superficial micro-injections of diluted Botox into the skin to reduce pore size, control oil production, and create a smooth, glass-skin effect without freezing expressions.',
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
        description: 'Dermal fillers are injectable hyaluronic acid-based gels used to restore facial volume, enhance features like lips and cheeks, and smooth deep lines for a youthful, contoured appearance.',
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
        description: 'Profhilo is a bio-remodeling injectable that delivers ultra-pure hyaluronic acid to deeply hydrate the skin and stimulate collagen and elastin production for overall skin quality improvement.',
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
        description: 'PRP (Platelet-Rich Plasma) facial injections use concentrated growth factors from your own blood to rejuvenate skin, stimulate collagen, and improve skin texture and tone naturally.',
        keyBenefits: ['Natural rejuvenation', 'Collagen stimulation', 'Improves skin texture', 'Reduces fine lines', 'Safe (uses own blood)'],
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
        description: 'Skin boosters are micro-injections of hyaluronic acid delivered into the skin to provide deep hydration, improve elasticity, and restore a dewy, luminous complexion from within.',
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
        description: 'PDO thread lift is a minimally invasive procedure using absorbable polydioxanone threads to lift and tighten sagging skin, providing an instant lifting effect while stimulating collagen production.',
        keyBenefits: ['Instant lifting effect', 'Stimulates collagen', 'Non-surgical facelift', 'Minimal downtime', 'Natural-looking results'],
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
        description: 'Dermapen microneedling is an advanced automated microneedling device that creates precise micro-channels in the skin to stimulate collagen production and enhance absorption of therapeutic serums.',
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
        description: 'Non-surgical cosmetic gynecology includes treatments like vaginal rejuvenation, tightening, and pigmentation correction using laser and radiofrequency technology without surgical intervention.',
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
        description: 'Nail surgery involves surgical treatment of nail conditions like ingrown toenails, nail bed tumors, and chronic nail infections under local anesthesia for definitive correction.',
        keyBenefits: ['Permanent correction', 'Relief from pain', 'Treats chronic infections', 'Prevents recurrence', 'Done under local anesthesia'],
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
        description: 'Dermatosurgery encompasses surgical procedures for skin conditions including cyst removal, lipoma excision, scar revision, and biopsy under local anesthesia by a trained dermatosurgeon.',
        keyBenefits: ['Definitive treatment', 'Biopsy & diagnosis', 'Scar revision', 'Cyst & lipoma removal', 'Minimal scarring techniques'],
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
        description: 'Old scar treatment combines multiple modalities including laser therapy, microneedling, subcision, and filler injections to significantly improve the appearance of mature, settled scars.',
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
        description: 'Skin biopsy is a diagnostic procedure where a small sample of skin tissue is removed and examined under a microscope to diagnose skin conditions, rashes, infections, or suspected skin cancers.',
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
        description: 'Medical ear piercing is performed under sterile conditions by a dermatologist using sterile single-use devices, ensuring minimal risk of infection and proper placement.',
        keyBenefits: ['Sterile medical environment', 'Minimal infection risk', 'Precise placement', 'Professional aftercare guidance', 'Safe for all ages'],
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
        description: 'Eyebrow microblading is a semi-permanent cosmetic tattooing technique that creates natural-looking, hair-like strokes to enhance, reshape, or fill in sparse eyebrows.',
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
