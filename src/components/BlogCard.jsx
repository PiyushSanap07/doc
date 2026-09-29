import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { formatDate } from '../data/blogData';

const BlogCard = ({ post, index = 0, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.07, 0.28) }}
      className="group h-full"
    >
      <Link
        to={`/blog/${post.slug}`}
        className={`flex h-full flex-col overflow-hidden bg-white border border-[#EDE0E8] rounded-2xl hover:border-primary/35 hover:shadow-md shadow-sm transition-all duration-300 ${
          featured ? 'sm:flex-row' : ''
        }`}
      >
        {/* Cover Image */}
        <div className={`relative overflow-hidden shrink-0 ${featured ? 'sm:w-[45%]' : ''}`}>
          <img
            src={post.image}
            alt={post.title}
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
              featured ? 'h-52 sm:h-full sm:min-h-[280px]' : 'h-44'
            }`}
          />
          {/* Category pill on image */}
          <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-widest text-primary bg-white/95 px-2.5 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
          {featured && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-bold text-white bg-black/45 backdrop-blur-sm px-2 py-1 rounded-full">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <h3
            className={`font-serif font-extrabold text-navy leading-snug group-hover:text-primary transition-colors ${
              featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-[1.05rem]'
            }`}
          >
            {post.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-3.5">
            <div className="flex items-center gap-3 text-[11px] text-gray-400 font-semibold">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5 text-primary/70" />
                {formatDate(post.date)}
              </span>
              {!featured && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary/70" />
                  {post.readTime}
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-extrabold text-primary shrink-0">
              Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
