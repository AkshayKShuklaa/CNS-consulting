import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';

const news = [
  {
    date: '15 Jun, 2026',
    author: 'Consult New Stream',
    title: 'Hidden Financial Traps in Divorce and Property Settlements',
    slug: 'hidden-financial-traps',
    image: '/admin/upload/blog/1002285102.webp'
  },
  {
    date: '03 Jun, 2026',
    author: 'Consult New Stream',
    title: 'Weaponization of Interim Applications in Divorce Cases',
    slug: 'weaponization-of-interim-applications',
    image: '/admin/upload/blog/1039849940.png'
  },
  {
    date: '19 May, 2026',
    author: 'Consult New Stream',
    title: 'False Allegations in Divorce Cases: How Courts in India Handle Them',
    slug: 'false-allegations-in-divorce',
    image: '/admin/upload/blog/1099655464.webp'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const LatestNews = () => {
  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Blog</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
              Latest <span className="text-gold-400">News Feed</span>
            </h2>
          </div>
          <Link 
            to="/blogs" 
            className="group flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
          >
            View All Posts
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-navy-900 border border-white/5 hover:border-teal-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="h-48 w-full relative overflow-hidden flex items-center justify-center bg-navy-900">
                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative z-10 -mt-6 bg-navy-900 rounded-t-3xl">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-teal-400" /> {item.date}</span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-slate-200 mb-6 group-hover:text-teal-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <User size={14} /> By CNS
                  </span>
                  <Link to="/blogs" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 group-hover:bg-teal-500 group-hover:text-navy-900 transition-colors">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;
