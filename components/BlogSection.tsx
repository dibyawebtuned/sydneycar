"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Variants } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const PRIMARY_BLUE = "#0c55a6";
const HEADING_COLOR = "#1e1e1e";

const blogPosts = [
  {
    id: 1,
    imagePath: "/blog/blog1.png",
    category: "Cash For Cars",
    title: "How to Get the Best Cash for Your Old Car in Sydney",
    description:
      "Discover proven ways to boost your car's value before selling it — and find out how to get top cash offers in Sydney.",
    link: "#blog-post-1",
  },
  {
    id: 2,
    imagePath: "/blog/blog2.png",
    category: "Cash For Cars",
    title: "Top Tips to Sell Your Scrap Car Fast in Sydney",
    description:
      "Learn expert strategies to prepare your scrap car and attract the best offers — saving time and earning more cash.",
    link: "#blog-post-2",
  },
];

// --- Animation Variants ---
const fadeUpVariant:Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
}

// --- Blog Card Component ---
const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <Link href="/blog-detail">
    <motion.div
      className="group rounded-2xl transition-shadow duration-300 overflow-hidden flex flex-col sm:flex-row border border-transparent hover:border-gray-100 hover:shadow-xl cursor-pointer bg-white "
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      {/* --- Image --- */}
      <div className="relative w-full sm:w-1/2 lg:w-2/5 h-[250px] sm:min-h-full overflow-hidden rounded-2xl">
        <Image
          src={post.imagePath}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* --- Content --- */}
      <div className="w-full sm:w-1/2 lg:w-3/5 p-6 sm:p-8 flex flex-col justify-center relative">
        {/* Category Tag */}
        <div className="absolute top-0 -right-3.5 transform -translate-y-1/2 -translate-x-4 sm:relative sm:transform-none">
          <div
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide px-3 py-1 rounded-full text-white font-cabinet"
            style={{ backgroundColor: "#00B8A6" }}
          >
            <span className="w-2 h-2 bg-white rounded-full border border-white"></span>
            {post.category}
          </div>
        </div>

        {/* Title + Description */}
        <div className="mt-4 sm:mt-0 block">
          <h3 className="text-2xl font-bold mb-2.5 leading-snug transition-colors duration-200 group-hover:text-[#044E9E] font-cabinet text-[#1e1e1e]">
            {post.title}
          </h3>
          <p className={`text-[#6A6A6A] text-[14px] ${inter.className}`}>
            {post.description}
          </p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

// --- Blog Section Component ---
const BlogSection: React.FC = () => {
  return (
    <section id="blogs" className="py-15 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[25px]">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="flex items-center gap-2.5 w-[48%]">
            <h3
              className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet"
              style={{ color: PRIMARY_BLUE }}
            >
              BLOGS
            </h3>
            <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-cabinet font-extrabold"
            style={{ color: HEADING_COLOR }}
          >
            TIPS, INSIGHTS &{" "}
            <span className="relative inline-block">
              <span className="absolute left-0 bottom-2 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
              <span className="relative text-[#1F4A93] font-extrabold">
                ADVICE
              </span>
            </span>{" "}
          </h2>
        </motion.div>

        {/* --- Blog Cards --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
