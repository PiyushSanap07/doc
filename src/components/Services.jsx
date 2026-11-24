import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Layers,
  Phone,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { getAllServices, serviceCategories } from '../data/servicesData';
import { doctorData } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';
import { openAppointmentModal } from '../lib/appointmentModal';

const allServices = getAllServices();

const categoryTabs = [
  { id: 'all', title: 'All treatments', count: allServices.length },
  ...serviceCategories.map((category) => ({
    id: category.id,
    title: category.title,
    count: category.services.length,
  })),
];

const ease = [0.22, 1, 0.36, 1];

const ServiceCard = ({ service, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.45, delay: Math.min(index, 5) * 0.05, ease }}
    className="h-full"
  >
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_45px_-28px_rgba(28,18,25,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-deep">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cream to-mint">
            <Sparkles className="h-8 w-8 text-primary/60" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur-xs">
          {service.category}
        </span>
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
          {service.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-[1.75] text-muted">
          {service.description}
        </p>

        {service.idealFor?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.idealFor.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-mint px-2.5 py-1 text-[10px] font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line pt-4 text-[10px] font-medium text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span className="truncate">{service.duration}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span className="truncate">{service.sessions}</span>
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = useMemo(() => {
    const term = query.trim().toLowerCase();

    return allServices.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.categoryId === activeCategory;
      const searchableText = [
        service.name,
        service.category,
        service.description,
        ...(service.idealFor || []),
        ...(service.keyBenefits || []),
      ]
        .join(' ')
        .toLowerCase();

      return matchesCategory && (!term || searchableText.includes(term));
    });
  }, [activeCategory, query]);

  const activeCategoryData = serviceCategories.find(
    (category) => category.id === activeCategory
  );
  const showGroups = activeCategory === 'all' && !query.trim();

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={openAppointmentModal} />

      <main className="flex-1 pt-16 sm:pt-20">
        <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-cream via-cream/60 to-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-gold-light/60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-16 top-12 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-8 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-12 lg:px-12">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <SectionLabel>OUR CLINICAL OFFERINGS</SectionLabel>
              <h1 className="mt-5 max-w-3xl font-display text-[2rem] xs:text-[2.4rem] sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
                Advanced care for{' '}
                <em className="font-normal italic text-primary">
                  skin, hair &amp; aesthetics
                </em>
              </h1>
              <p className="mt-5 max-w-2xl text-sm sm:text-base text-muted leading-[1.85]">
                Explore consultation-led dermatology, hair restoration and aesthetic
                treatments, tailored to your skin type, concern and goals.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <div className="border border-line bg-white/85 px-6 py-5 backdrop-blur-sm">
                <div className="flex items-end justify-between border-b border-line pb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      Treatment index
                    </p>
                    <p className="mt-1 font-display text-4xl text-ink">
                      {allServices.length}
                    </p>
                  </div>
                  <span className="mb-1 text-xs text-muted">clinical services</span>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-muted">Specialties</dt>
                    <dd className="mt-0.5 font-bold text-ink">
                      {serviceCategories.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Approach</dt>
                    <dd className="mt-0.5 font-bold text-ink">Personalised</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="sticky top-16 z-30 border-b border-line bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categoryTabs.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${
                      isActive
                        ? 'border-primary bg-primary text-white shadow-sm'
                        : 'border-line bg-white text-muted hover:border-primary/50 hover:text-primary'
                    }`}
                  >
                    {tab.title}
                    <span
                      className={`ml-1.5 text-[9px] ${
                        isActive ? 'text-white/70' : 'text-muted-light'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full shrink-0 lg:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search treatments or concerns"
                aria-label="Search treatments"
                className="h-10 w-full rounded-full border border-line bg-cream/50 pl-9 pr-9 text-xs text-ink outline-none transition-colors placeholder:text-muted-light focus:border-primary focus:bg-white"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-light transition-colors hover:text-primary"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease }}
                  className="border border-dashed border-line bg-cream/50 px-6 py-16 text-center"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-primary shadow-sm">
                    <Search className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 font-display text-xl text-ink">
                    No treatments found
                  </h2>
                  <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted">
                    Try a different concern or browse the full treatment index.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('all');
                      setQuery('');
                    }}
                    className="mt-6 border border-primary px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Reset filters
                  </button>
                </motion.div>
              ) : showGroups ? (
                <motion.div
                  key="groups"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="space-y-12 sm:space-y-16"
                >
                  {serviceCategories.map((category, categoryIndex) => {
                    const services = filteredServices.filter(
                      (service) => service.categoryId === category.id
                    );
                    if (services.length === 0) return null;

                    return (
                      <div key={category.id}>
                        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
                          <div className="flex items-center gap-4">
                            <span className="font-display text-2xl text-gold/70">
                              {String(categoryIndex + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <h2 className="font-display text-xl sm:text-2xl text-ink">
                                {category.title}
                              </h2>
                              <p className="mt-1 text-[11px] text-muted">
                                {services.length} treatments
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveCategory(category.id)}
                            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary"
                          >
                            View category
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {services.map((service, index) => (
                            <ServiceCard
                              key={service.slug}
                              service={service}
                              index={index}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="filtered"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                        {activeCategoryData ? 'Category' : 'Search results'}
                      </p>
                      <h2 className="mt-1 font-display text-2xl text-ink">
                        {activeCategoryData?.title ||
                          `Results for “${query.trim()}”`}
                      </h2>
                    </div>
                    <p className="text-xs text-muted">
                      {filteredServices.length} treatments
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredServices.map((service, index) => (
                      <ServiceCard
                        key={service.slug}
                        service={service}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease }}
              className="mt-12 flex flex-col gap-6 border border-line bg-cream px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10"
            >
              <div className="max-w-xl">
                <SectionLabel>NOT SURE WHERE TO START?</SectionLabel>
                <h2 className="mt-3 font-display text-xl sm:text-2xl text-ink">
                  Let&apos;s find the right treatment for your skin.
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Dr. Shinde reviews your concern, skin type and goals before
                  recommending a personalised plan.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={openAppointmentModal}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 bg-primary px-6 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-dark"
                >
                  Book consultation
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-line bg-white px-6 text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call clinic
                </a>
              </div>
            </motion.section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
