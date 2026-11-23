import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, ArrowRight, ArrowLeft, Phone, Mail, Clock, CalendarDays,
  BookOpen, Droplets, Leaf, Sparkles, ChevronDown,
  Sun, Heart, CheckCircle2, Star, TrendingUp,
} from 'lucide-react';
import { blogCategories, getAllPosts, formatDate } from '../data/blogData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import { doctorData } from '../data/portfolioData';

/* ─── Category Icon Mapping ────────────────────────────────── */
const CATEGORY_ICONS = {
  skincare: Leaf,
  acne: Droplets,
  'anti-aging': Sparkles,
  pigmentation: Sun,
  hair: Star,
  lifestyle: Heart,
  ingredients: TrendingUp,
  'skin-types': BookOpen,
  all: BookOpen,
};

function CategoryBadge({ label, className = '' }) {
  return (
    <span className={`inline-block text-[10px] font-extrabold uppercase tracking-widest text-primary bg-mint px-2.5 py-0.5 rounded-full ${className}`}>
      {label}
    </span>
  );
}

/* ─── Sidebar: Related Post Item ─────────────────────────────── */
function RelatedPostItem({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`} className="group flex items-start gap-3 py-3 first:pt-0">
        <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-mint">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="min-w-0 flex-1">
          <CategoryBadge label={post.category} className="mb-0.5" />
          <p className="text-xs font-bold text-navy leading-snug group-hover:text-primary transition-colors line-clamp-2 mt-1">
            {post.title}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
            {formatDate(post.date)}
          </p>
        </div>
      </Link>
    </li>
  );
}

/* ─── Sidebar: Category Item (Reference Style) ───────────────── */
function CategoryItem({ cat, count, isActive, onClick }) {
  const Icon = CATEGORY_ICONS[cat.id] || BookOpen;
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isActive}
        className={`w-full flex items-center justify-between gap-2.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-all duration-200 group cursor-pointer ${
          isActive
            ? 'bg-primary text-white font-bold shadow-xs'
            : 'hover:bg-mint text-gray-700 font-semibold hover:text-primary'
        }`}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
            isActive ? 'bg-white/20 text-white' : 'bg-mint text-primary group-hover:bg-primary/10'
          }`}>
            <Icon className="w-3.5 h-3.5" />
          </span>
          <span className="truncate">{cat.title}</span>
        </span>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
        }`}>
          {count}
        </span>
      </button>
    </li>
  );
}

/* ─── Featured Lead Post ─────────────────────────────────────── */
function LeadArticleCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-[#EDE0E8] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center p-5 sm:p-7 order-2 md:order-1">
          <CategoryBadge label={post.category} className="mb-2.5 self-start" />
          <Link to={`/blog/${post.slug}`}>
            <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-extrabold text-navy leading-snug hover:text-primary transition-colors mb-2.5">
              {post.title}
            </h2>
          </Link>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-gray-400 font-semibold mb-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5 text-primary" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-primary font-bold">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-[8px] font-black text-primary">Dr</span>
              </div>
              {doctorData.name}
            </span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="self-stretch sm:self-start text-center sm:text-left inline-flex items-center justify-center gap-2 px-4.5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-xs"
          >
            Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="md:col-span-5 relative overflow-hidden min-h-[190px] sm:min-h-[230px] order-1 md:order-2 bg-mint">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Regular Blog Card ───────────────────────────────────────── */
function ArticleCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
      className="group"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="flex flex-col h-full bg-white border border-[#EDE0E8] rounded-2xl overflow-hidden hover:shadow-md hover:border-primary/40 transition-all duration-300 shadow-xs"
      >
        <div className="relative overflow-hidden h-40 sm:h-44 bg-mint">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge label={post.category} />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4 sm:p-5">
          <h3 className="font-serif text-base font-bold text-navy leading-snug group-hover:text-primary transition-colors mb-2">
            {post.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-gray-100 pt-3 gap-2">
            <div className="flex items-center gap-2.5 text-[11px] text-gray-400 font-semibold">
              <span className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5 text-primary/70" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary/70" />
                {post.readTime}
              </span>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-primary shrink-0">
              Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/*                        MAIN BLOG PAGE                        */
/* ══════════════════════════════════════════════════════════════ */
const Blog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleBookClick = () => { window.location.href = 'tel:+917498314453'; };
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const posts = useMemo(() => getAllPosts(), []);
  const leadPost = posts[0];

  /* SEO */
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Dermatology Blog | Skin, Hair & Skincare Tips in Nashik | Dr. Neha Shinde';
    return () => { document.title = prevTitle; };
  }, []);

  /* Filter */
  const trimmedQ = query.trim().toLowerCase();
  const isSearching = trimmedQ.length > 0;
  const showLead = activeCategory === 'all' && !isSearching && Boolean(leadPost);

  const visiblePosts = useMemo(() => posts.filter(p => {
    const matchesCat = activeCategory === 'all' || p.categoryId === activeCategory;
    if (!matchesCat) return false;
    if (!isSearching) return true;
    return [p.title, p.excerpt, p.category, ...(p.tags || [])].join(' ').toLowerCase().includes(trimmedQ);
  }), [posts, activeCategory, isSearching, trimmedQ]);

  const gridPosts = showLead ? visiblePosts.filter(p => p.slug !== leadPost.slug) : visiblePosts;

  const resetFilters = () => { setActiveCategory('all'); setQuery(''); };

  const countFor = id => id === 'all' ? posts.length : posts.filter(p => p.categoryId === id).length;
  const relatedPosts = posts.filter(p => p.slug !== leadPost?.slug).slice(0, 5);

  return (
    <div className="min-h-screen bg-[#FAF8F7] text-navy font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-24">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              TOP BAR: BACK BUTTON (ONLY ARROW)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="pt-1 pb-3 sm:pb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              aria-label="Go back"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#EDE0E8] flex items-center justify-center text-navy hover:text-primary hover:border-primary/50 hover:bg-mint transition-all shadow-xs cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              HERO BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-2xl mb-8 sm:mb-10"
            style={{ background: 'linear-gradient(120deg, #F4EBF1 0%, #FBF2F6 50%, #F9EEF4 100%)' }}
          >
            <span className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-primary/5 pointer-events-none" />
            <span className="absolute -bottom-10 left-1/4 w-48 h-48 rounded-full bg-accent/8 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-stretch relative z-10">
              {/* Left: Copy & Search */}
              <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-14 lg:w-[55%]">
                <span className="inline-block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-2.5">
                  Skincare Blog
                </span>
                <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.12] sm:leading-[1.08] tracking-tight">
                  Healthy Skin,<br />
                  <span className="text-primary">Happier You</span>
                </h1>
                <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-600 leading-relaxed max-w-md">
                  Expert tips, dermatologist advice and clinical routines to help you achieve clear, radiant and healthy skin.
                </p>

                {/* Search bar */}
                <div className="relative mt-5 sm:mt-6 w-full max-w-sm">
                  <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    type="search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search articles..."
                    aria-label="Search dermatology articles"
                    className="w-full h-11 sm:h-12 pl-10 sm:pl-11 pr-10 text-xs sm:text-sm rounded-full border border-[#E8D8E4] bg-white/90 backdrop-blur-sm text-black placeholder:text-gray-400 shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right: Hero image */}
              <div className="hidden lg:block lg:w-[45%] relative overflow-hidden min-h-[320px]">
                {leadPost && (
                  <img
                    src={leadPost.image}
                    alt="Dermatology skincare hero"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="eager"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4EBF1]/70 via-[#F4EBF1]/20 to-transparent" />
                <div className="absolute bottom-8 right-7 text-right pointer-events-none select-none">
                  <span className="block font-serif italic text-white/90 text-xl leading-tight drop-shadow-lg">
                    Good<br />Skin<br />Takes<br />
                    <span className="text-accent font-bold">Care ♡</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              MAIN 2-COLUMN LAYOUT (Matching Reference Structure)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* ══ LEFT: Articles Section (8 cols) ══════════════ */}
            <section id="article-list" className="lg:col-span-8" aria-labelledby="articles-heading">

              {/* Header with Title and Mobile Quick-Category Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 mb-6 border-b border-[#EDE0E8]">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary mb-0.5">
                    {isSearching ? 'SEARCH RESULTS' : activeCategory === 'all' ? 'FROM DR. NEHA SHINDE' : 'TOPIC'}
                  </p>
                  <h2 id="articles-heading" className="font-serif text-lg sm:text-2xl font-bold text-navy">
                    {isSearching
                      ? `Results for "${query}"`
                      : activeCategory === 'all'
                        ? 'Latest Articles'
                        : blogCategories.find(c => c.id === activeCategory)?.title}
                  </h2>
                </div>

                {/* Compact Category Selector for Easy Handling on Mobile & Quick Access */}
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <div className="relative">
                    <select
                      value={activeCategory}
                      onChange={e => {
                        setActiveCategory(e.target.value);
                        setQuery('');
                      }}
                      aria-label="Filter articles by category"
                      className="appearance-none bg-white border border-[#EDE0E8] text-xs font-bold text-navy rounded-xl pl-3.5 pr-8 py-2 shadow-2xs hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer transition-all"
                    >
                      {blogCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title} ({countFor(cat.id)})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-primary pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
                  </div>

                  {activeCategory !== 'all' && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-xs font-bold text-gray-400 hover:text-primary transition-colors cursor-pointer px-1"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* Featured Lead Post */}
              {showLead && <LeadArticleCard post={leadPost} />}

              {/* Grid of Articles */}
              {gridPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {gridPosts.map((post, i) => (
                    <ArticleCard key={post.slug} post={post} index={i} />
                  ))}
                </div>
              ) : !showLead && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center py-16 sm:py-20 border border-dashed border-primary/20 rounded-2xl bg-white/60 px-4 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-mint flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">No articles found</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-6 max-w-xs">
                    Try a different keyword or browse all skin &amp; hair articles.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="px-6 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors cursor-pointer"
                  >
                    Browse All Articles
                  </button>
                </motion.div>
              )}
            </section>

            {/* ══ RIGHT: Sidebar (4 cols - Reference Layout) ════ */}
            <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24 self-start w-full">

              {/* ── 1. Categories (Placed at TOP of Sidebar for Immediate Desktop Access) ── */}
              <div className="bg-white border border-[#EDE0E8] rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
                  <h2 className="font-serif text-base font-bold text-navy">
                    Categories
                  </h2>
                  {activeCategory !== 'all' && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-xs font-bold text-primary hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  )}
                </div>
                <ul className="space-y-1">
                  {blogCategories.map(cat => (
                    <CategoryItem
                      key={cat.id}
                      cat={cat}
                      count={countFor(cat.id)}
                      isActive={activeCategory === cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setQuery('');
                        window.scrollTo({ top: 350, behavior: 'smooth' });
                      }}
                    />
                  ))}
                </ul>
              </div>

              {/* ── 2. Related Posts ── */}
              <div className="bg-white border border-[#EDE0E8] rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-1 border-b border-gray-100">
                  <h2 className="font-serif text-base font-bold text-navy">Related Posts</h2>
                  <Link
                    to="/blog"
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    View All <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <ul className="divide-y divide-gray-100">
                  {relatedPosts.map(post => (
                    <RelatedPostItem key={post.slug} post={post} />
                  ))}
                </ul>
              </div>

              {/* ── 3. Stay Updated (Newsletter) ── */}
              <div
                className="rounded-2xl p-6 border border-primary/15 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #F4EBF1 0%, #FBF2F6 100%)' }}
              >
                <span className="absolute top-0 right-0 w-28 h-28 rounded-full bg-primary/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary mb-2 relative z-10">
                  STAY UPDATED
                </p>
                <h3 className="font-serif text-lg font-bold text-navy leading-snug relative z-10 mb-2">
                  Skincare Tips<br />Straight to Your Inbox
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed relative z-10 mb-4">
                  Get expert advice, dermatologist tips and clinical skincare guides delivered monthly.
                </p>

                <AnimatePresence mode="wait">
                  {subscribed ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-xs sm:text-sm font-bold text-primary bg-white/80 px-4 py-3 rounded-xl border border-primary/20"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Subscribed! Thank you.
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={e => {
                        e.preventDefault();
                        if (email.trim()) { setSubscribed(true); setEmail(''); }
                      }}
                      className="flex flex-col gap-2.5 relative z-10"
                    >
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Your email address"
                          required
                          className="w-full h-11 pl-10 pr-3 text-xs sm:text-sm rounded-xl border border-primary/20 bg-white placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full h-11 bg-navy text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-[#210A18] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                      >
                        Subscribe <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* ── 4. Book Consultation CTA ── */}
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-xs">
                {leadPost && (
                  <img
                    src={leadPost.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-[#5A2040]/95" />
                <div className="relative z-10 p-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/60 mb-1.5">
                    PERSONALISED CARE
                  </p>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug mb-2">
                    Book Your Skin Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                    Personalised care for your unique skin needs at Dr. Neha Shinde's Nashik dermatology clinic.
                  </p>
                  <a
                    href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 bg-white text-primary text-xs sm:text-sm font-bold rounded-xl hover:bg-mint transition-colors shadow-xs cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    Book Appointment →
                  </a>
                </div>
              </div>

            </aside>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
