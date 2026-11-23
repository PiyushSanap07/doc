import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Lightbulb,
  CheckCircle2,
  Phone,
  FileQuestion,
  Tag as TagIcon,
} from 'lucide-react';
import { getPostBySlug, getRelatedPosts, getAllPosts, formatDate } from '../data/blogData';
import { doctorData } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';

// Renders a single content block from the post's `content` array
const ContentBlock = ({ block }) => {
  if (block.type === 'heading') {
    return (
      <h2 className="text-lg sm:text-xl font-extrabold text-black tracking-tight mt-8 mb-3 flex items-center gap-2">
        <span className="w-1.5 h-4.5 bg-primary rounded-full" />
        {block.text}
      </h2>
    );
  }

  if (block.type === 'list') {
    return (
      <ul className="space-y-2.5 my-4">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
            <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'image') {
    return (
      <figure className="my-7 overflow-hidden rounded-xl border border-gray-200/80 bg-[#FAF0F5]">
        <img
          src={block.src}
          alt={block.alt}
          loading="lazy"
          decoding="async"
          className="block w-full max-h-[28rem] object-cover"
        />
        {block.caption && (
          <figcaption className="px-4 py-3 text-xs sm:text-sm leading-relaxed text-gray-600">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block.type === 'callout') {
    return (
      <div className="my-6 p-4 sm:p-5 rounded-xl bg-[#FAF0F5] border-l-4 border-primary">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-extrabold text-black mb-1">{block.title}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{block.text}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <p className="text-sm sm:text-[15px] text-gray-700 leading-[1.8] my-4">
      {block.text}
    </p>
  );
};

const BlogDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/blog');
    }
  };

  const handleBookClick = () => { window.location.href = 'tel:+917498314453'; };

  useEffect(() => {
    window.scrollTo(0, 0);

    const current = getPostBySlug(slug);
    if (current?.image) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = current.image;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      return () => { document.head.removeChild(link); };
    }
  }, [slug]);

  useEffect(() => {
    if (!post) return undefined;

    const canonicalUrl = `https://drnehashinde.com/blog/${post.slug}`;
    const imageUrl = new URL(post.image, window.location.origin).href;
    const description = post.metaDescription || post.excerpt;
    const restore = [];
    const previousTitle = document.title;

    document.title = post.metaTitle || `${post.title} | Dr. Neha Shinde`;
    restore.push(() => { document.title = previousTitle; });

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      const created = !element;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      const previousContent = element.getAttribute('content');
      element.setAttribute('content', content);
      restore.push(() => {
        if (created) element.remove();
        else if (previousContent !== null) element.setAttribute('content', previousContent);
      });
    };

    let canonical = document.head.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = canonicalUrl;
    restore.push(() => {
      if (createdCanonical) canonical.remove();
      else canonical.href = previousCanonical;
    });

    setMeta('name', 'description', description);
    setMeta('name', 'author', doctorData.name);
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:title', post.metaTitle || post.title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'article:published_time', post.date);
    setMeta('property', 'article:section', post.category);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', post.metaTitle || post.title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    const structuredData = document.createElement('script');
    structuredData.type = 'application/ld+json';
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description,
      image: imageUrl,
      datePublished: `${post.date}T00:00:00+05:30`,
      author: {
        '@type': 'Person',
        name: doctorData.name,
        jobTitle: doctorData.role,
      },
      publisher: {
        '@type': 'Organization',
        name: `${doctorData.name} Skin Clinic`,
        url: 'https://drnehashinde.com',
      },
      mainEntityOfPage: canonicalUrl,
      articleSection: post.category,
      keywords: post.tags?.join(', '),
      inLanguage: 'en-IN',
    });
    document.head.appendChild(structuredData);
    restore.push(() => structuredData.remove());

    return () => restore.reverse().forEach((restoreEntry) => restoreEntry());
  }, [post]);

  // 404 fallback
  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
        <ScrollProgress />
        <Navbar onBookClick={handleBookClick} />
        <div className="pt-32 pb-24 text-center max-w-md mx-auto px-4 flex-1">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF0F5] text-primary flex items-center justify-center mx-auto mb-4">
            <FileQuestion className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-3">Article Not Found</h1>
          <p className="text-black mb-6 text-sm sm:text-base leading-relaxed font-normal">
            The article you are looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-md hover:bg-primary-dark transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);
  const sidebarPosts = [
    ...relatedPosts,
    ...getAllPosts().filter((item) => item.slug !== post.slug && !relatedPosts.some((related) => related.slug === item.slug)),
  ].slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="pt-20 sm:pt-24 pb-16 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Back Navigation (Only Arrow) */}
          <div className="pt-1 pb-3 sm:pb-4 flex items-center">
            <button
              type="button"
              onClick={handleBack}
              aria-label="Back to Blog"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#EDE0E8] flex items-center justify-center text-navy hover:text-primary hover:border-primary/50 hover:bg-mint transition-all shadow-xs cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 sm:mb-8 max-w-4xl"
          >
            <div className="inline-block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-primary bg-[#FAF0F5] px-3 py-1 rounded-full mb-3">
              {post.category}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-[1.2] mb-3">
              {post.title}
            </h1>
            <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-4 max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-500 font-medium pt-3 border-t border-gray-100">
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-[9px] font-black text-primary">Dr</span>
                </div>
                <span className="font-bold text-navy">{doctorData.name}</span>
                <span className="text-gray-400">· {doctorData.role}</span>
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <CalendarDays className="w-3.5 h-3.5 text-primary" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {post.readTime}
              </span>
            </div>
          </motion.header>

          {/* Body + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Article Body */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="lg:col-span-8"
            >
              {/* Featured Image: Elegantly sized, not overwhelming */}
              <div className="overflow-hidden rounded-2xl border border-[#EDE0E8] shadow-xs mb-8 bg-mint">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-52 sm:h-64 md:h-72 object-cover"
                />
              </div>
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                  <TagIcon className="w-4 h-4 text-primary" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] sm:text-xs font-bold text-primary bg-[#FAF0F5] px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Card */}
              <div className="mt-8 p-5 rounded-2xl border border-gray-200/80 bg-mint/40">
                <p className="text-sm font-extrabold text-black">{doctorData.name}</p>
                <p className="text-xs text-gray-600 font-semibold mt-0.5">{doctorData.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed mt-2.5">
                  {doctorData.tagline}
                </p>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-4">

              <section className="border border-[#EDE0E8] bg-white rounded-xl p-4 sm:p-5" aria-labelledby="related-heading">
                <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 mb-2">
                  <h2 id="related-heading" className="text-base sm:text-lg font-extrabold text-black">Related reads</h2>
                  <Link to="/blog" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                    View all <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <ul className="divide-y divide-gray-100">
                  {sidebarPosts.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/blog/${item.slug}`} className="group flex items-center gap-3 py-3">
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-16 h-[3.25rem] rounded-md object-cover shrink-0 group-hover:opacity-90 transition-opacity"
                        />
                        <span className="min-w-0">
                          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-mint px-2 py-0.5 rounded-full mb-1">{item.category}</span>
                          <span className="block text-sm leading-snug font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">{item.title}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Key Takeaways */}
              {post.keyTakeaways?.length > 0 && (
                <div className="p-5 rounded-xl border border-primary/20 bg-white shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8C486E] to-[#C98664]" />
                  <h2 className="flex items-center gap-2 text-sm font-extrabold text-black mb-3.5">
                    <Lightbulb className="w-4.5 h-4.5 text-primary" />
                    Key Takeaways
                  </h2>
                  <ul className="space-y-2.5">
                    {post.keyTakeaways.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Consultation CTA */}
              <div className="p-5 rounded-xl bg-[#F4EDF1] border border-primary/15">
                <h2 className="text-sm font-extrabold text-black mb-1.5">
                  Still dealing with this?
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Book a consultation at our Nashik clinic for a diagnosis and a plan built around your skin.
                </p>
                <a
                  href={`tel:${doctorData.clinic.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-dark transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  {doctorData.clinic.phone}
                </a>
              </div>
            </aside>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
