import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { practiceAreas } from '../data/practiceAreas';

const PracticeArea = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Find the practice area matching the slug
    const area = practiceAreas.find(p => p.slug === slug);
    setData(area);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data && data !== null) {
    return <Navigate to="/" />;
  }

  if (!data) return <div className="min-h-screen bg-navy-900" />;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Dynamic Content Container */}
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {/* We render the raw HTML extracted from the original site inside a stylized container */}
          <div 
            className="prose prose-invert prose-lg max-w-none 
                       prose-headings:font-serif prose-headings:text-teal-400 
                       prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 
                       prose-h4:text-xl prose-h4:text-slate-200 
                       prose-p:text-slate-300 prose-p:leading-relaxed 
                       prose-li:text-slate-300 prose-img:rounded-2xl prose-img:shadow-lg prose-img:mx-auto"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeArea;
