import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, X, BookOpen } from 'lucide-react';
import { blogCategories, getAllPosts, getFeaturedPosts } from '../data/blogData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';
import BlogCard from './BlogCard';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const handleBookClick = () => { window.location.href = 'tel:+917498314453'; };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const posts = useMemo(() => getAllPosts(), []);
  const featuredPosts = useMemo(() => getFeaturedPosts(), []);

  const trimmedQuery = query.trim().toLowerCase();
  const isSearching = trimmedQuery.length > 0;

  // Featured highlight is only shown on the unfiltered, unsearched view
  const showFeatured = activeCategory === 'all' && !isSearching;
  const featuredSlugs = showFeatured ? new Set(featuredPosts.map((p) => p.slug)) : new Set();

  const visiblePosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.categoryId === activeCategory;
      if (!matchesCategory) return false;
      if (!isSearching) return true;
      const haystack = [post.title, post.excerpt, post.category, ...post.tags]
        .join(' ')
        .toLowerCase();
      return haystack.includes(trimmedQuery);
    });
  }, [posts, activeCategory, isSearching, trimmedQuery]);

  const gridPosts = showFeatured ? visiblePosts.filter((p) => !featuredSlugs.has(p.slug)) : visiblePosts;

  const resetFilters = () => {
    setActiveCategory('all');
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="flex-1 pt-20 sm:pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Breadcrumb */}
          <div className="pt-4 mb-4">
            <Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black hover:text-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-100"
          >
            <SectionLabel>DERMATOLOGY INSIGHTS</SectionLabel>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mt-0.5 sm:mt-1">
              Skin, Hair &amp;{' '}
              <span className="bg-gradient-to-r from-[#8C486E] via-[#A86389] to-[#C98664] bg-clip-text text-transparent">
                Aesthetic Insights
              </span>
            </h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-black max-w-2xl font-normal leading-relaxed">
              Practical, evidence-based answers to the skin and hair questions we are asked most often in clinic — written by Dr. Neha Shinde.
            </p>
          </motion.div>

          {/* Featured Post */}
          {showFeatured && featuredPosts.length > 0 && (
            <section className="mb-10 sm:mb-14">
              <h2 className="text-lg sm:text-xl font-extrabold text-black tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-primary rounded-full" />
                Featured Reads
              </h2>
              <div className="grid grid-cols-1 gap-5">
                {featuredPosts.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} featured />
                ))}
              </div>
            </section>
          )}

          {/* Filters: category pills + search */}
          <div className="flex flex-col gap-4 mb-7 sm:mb-9">
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-md border transition-colors ${
                      isActive
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-black/80 border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, conditions or treatments…"
                aria-label="Search blog articles"
                className="w-full pl-9 pr-9 py-2.5 text-sm rounded-md border border-gray-200 bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md text-gray-400 hover:text-primary hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          {visiblePosts.length > 0 && (
            <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-4">
              Showing {visiblePosts.length} {visiblePosts.length === 1 ? 'article' : 'articles'}
            </p>
          )}

          {/* Posts Grid */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center border border-dashed border-gray-200 rounded-2xl px-6 py-16 bg-mint/30">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF0F5] text-primary flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7" />
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-black mb-2">No articles found</h2>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mb-5">
                We couldn't find anything matching your search. Try a different term or browse all articles.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-xs sm:text-sm rounded-md hover:bg-primary-dark transition-colors shadow-sm cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
