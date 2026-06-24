import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const sourceDir = 'C:/Users/shukl/OneDrive/Documents/New project/original_site_extracted/www.vipinraina.com';

const filesToExtract = {
  'our-team.php.html': './src/pages/OurTeam.jsx',
  'judgement.php.html': './src/pages/Judgements.jsx',
  'blog.php.html': './src/pages/Blogs.jsx',
  'join-our-team.php.html': './src/pages/JoinOurTeam.jsx',
};

const titles = {
  'our-team.php.html': 'Our Team',
  'judgement.php.html': 'Judgements',
  'blog.php.html': 'Blogs',
  'join-our-team.php.html': 'Join Our Team',
};

for (const [file, dest] of Object.entries(filesToExtract)) {
  const content = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  const $ = cheerio.load(content);
  
  let mainContent = '';
  // Extract sections that are not header/footer/banner
  $('section:not(.site-header):not(.main-footer):not(.main-banner-in)').each((i, el) => {
    mainContent += $(el).html();
  });

  const jsxContent = `import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-400 mb-8">${titles[file]}</h1>
          <div 
            className="prose prose-invert prose-lg max-w-none 
                       prose-headings:font-serif prose-headings:text-teal-400 
                       prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 
                       prose-h3:text-2xl prose-h3:text-slate-200
                       prose-h4:text-xl prose-h4:text-slate-200 
                       prose-p:text-slate-300 prose-p:leading-relaxed 
                       prose-li:text-slate-300 prose-img:rounded-2xl prose-img:shadow-lg prose-img:mx-auto"
            dangerouslySetInnerHTML={{ __html: \`${mainContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
`;

  fs.writeFileSync(dest, jsxContent, 'utf8');
}
console.log('Extracted other pages.');
