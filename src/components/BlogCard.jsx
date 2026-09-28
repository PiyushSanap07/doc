import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { formatDate } from '../data/blogData';

const BlogCard = ({ post, index = 0, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.24) }}
      className="group h-full"
    >
      <Link
        to={`/blog/${post.slug}`}
        className={`flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xs transition-all hover:shadow-md ${featured ? 'sm:flex-row' : ''}`}
      >
        {/* Cover Image */}
        <div className={`relative overflow-hidden bg-mint shrink-0 ${featured ? 'sm:w-[46%]' : ''}`}>
          <img
            src={post.image}
            alt={post.title}
            loading={index < 3 ? 'eager' : 'lazy'}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${featured ? 'h-52 sm:h-full sm:min-h-[280px]' : 'h-44'}`}
          />
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-primary bg-white/95 px-2.5 py-1 rounded-md shadow-sm">
            {post.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3
            className={`font-extrabold text-black leading-snug group-hover:text-primary transition-colors ${featured ? 'text-lg sm:text-xl' : 'text-base sm:text-[17px]'}`}
          >
            {post.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-3.5">
            <div className="flex items-center gap-3 text-[11px] text-gray-500 font-semibold">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5 text-primary" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary" />
                {post.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary shrink-0">
              Read
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
