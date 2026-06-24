import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const sourceDir = 'C:/Users/shukl/OneDrive/Documents/New project/original_site_extracted/www.vipinraina.com';
const destFile = './src/data/practiceAreas.js';

const files = fs.readdirSync(sourceDir);
const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'index.htm');

const extractedData = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  const $ = cheerio.load(content);
  
  const title = $('h1.h1-title').text().trim() || $('title').text().trim();
  
  // Extract main content, excluding header and footer
  let mainContent = '';
  $('section.main-case-detail-in, section.pd-60').each((i, el) => {
    mainContent += $(el).html();
  });
  
  if (mainContent) {
    extractedData.push({
      slug: file.replace('.php.html', ''),
      title: title,
      content: mainContent,
    });
  }
}

const jsContent = `export const practiceAreas = ${JSON.stringify(extractedData, null, 2)};`;
fs.writeFileSync(destFile, jsContent, 'utf8');
console.log('Extracted', extractedData.length, 'pages.');
