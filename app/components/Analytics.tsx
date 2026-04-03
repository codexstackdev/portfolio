"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type EntryProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
};

const Analytics = ({
  image,
  title,
  subtitle,
  description,
  index,
}: EntryProps) => {
  return (
    <motion.div
      variants={item}
      key={index}
      className="group rounded-2xl border border-white/6 bg-white/2 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 md:flex md:items-center"
    >
      <div
        className={`relative aspect-video md:aspect-auto md:w-1/2 md:h-72 overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text */}
      <div className="p-6 md:p-8 md:w-1/2">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
          {subtitle}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Analytics;
