import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
import { getPostBySlug, getRelatedPosts, formatDate } from '../data/blogData';
import { doctorData } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SectionLabel from './SectionLabel';
import BlogCard from './BlogCard';

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
  const { slug } = useParams();
  const post = getPostBySlug(slug);

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

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased flex flex-col">
      <ScrollProgress />
      <Navbar onBookClick={handleBookClick} />

      <main className="pt-20 sm:pt-24 pb-16 flex-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Breadcrumb */}
          <div className="pt-4 mb-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mb-6 sm:mb-8"
          >
            <SectionLabel className="!mb-1">{post.category}</SectionLabel>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-black tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-600 font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-primary" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
              <span className="text-primary">{doctorData.name}</span>
              <span className="text-gray-400">•</span>
              <span>{doctorData.role}</span>
            </div>
          </motion.header>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden border border-gray-200/80 mb-8 sm:mb-10 bg-mint"
          >
            <img
              src={post.image}
              alt={post.title}
              fetchPriority="high"
              className="w-full h-56 sm:h-80 lg:h-[26rem] object-cover"
            />
          </motion.div>

          {/* Body + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Article Body */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="lg:col-span-8"
            >
              <p className="text-base sm:text-lg text-black font-medium leading-relaxed pb-5 border-b border-gray-100 mb-2">
                {post.excerpt}
              </p>

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

              {/* Key Takeaways */}
              {post.keyTakeaways?.length > 0 && (
                <div className="p-5 rounded-2xl border-2 border-primary/20 bg-white shadow-2xs relative overflow-hidden">
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
              <div className="p-5 rounded-2xl bg-[#FAF0F5] border border-primary/15">
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary rounded-full" />
                  More in {post.category}
                </h2>
                <Link
                  to="/blog"
                  className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                >
                  All articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedPosts.map((p, i) => (
                  <BlogCard key={p.slug} post={p} index={i} />
                ))}
              </div>
            </motion.section>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
