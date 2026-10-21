import fs from 'node:fs';
import path from 'node:path';
import {renderToString} from 'react-dom/server';
import App from '../src/App.tsx';
import {FAQS, SERVICES, PHONE_NUMBER_DISPLAY} from '../src/data.ts';

const dist = path.resolve(import.meta.dirname, '../dist');
const envFile = fs.readFileSync(path.resolve(import.meta.dirname, '../.env'), 'utf8');
const SITE_URL = (process.env.VITE_SITE_URL ?? /VITE_SITE_URL=(\S+)/.exec(envFile)?.[1] ?? '').replace(/\/$/, '');
if (!SITE_URL) throw new Error('Falta VITE_SITE_URL');

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Lic. Romina Natalia Mayor | Psicoterapia Sistémica',
      inLanguage: 'es-AR',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#romina`,
      name: 'Romina Natalia Mayor',
      jobTitle: 'Licenciada en Psicología (UBA) - Psicoterapeuta sistémica',
      image: `${SITE_URL}/img/romina-mayor-psicologa.jpg`,
      alumniOf: 'Universidad de Buenos Aires',
      identifier: 'M.N. 62.507',
      knowsAbout: ['Psicoterapia sistémica', 'Terapia de pareja', 'Terapia familiar', 'Terapia individual', 'Supervisión clínica'],
      worksFor: {'@id': `${SITE_URL}/#consultorio`},
    },
    {
      '@type': ['ProfessionalService', 'MedicalBusiness'],
      '@id': `${SITE_URL}/#consultorio`,
      name: 'Lic. Romina Natalia Mayor - Psicoterapia Sistémica',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/img/consultorio-psicoterapia-sistemica.jpg`,
      telephone: PHONE_NUMBER_DISPLAY,
      email: 'mayor.romina@gmail.com',
      medicalSpecialty: 'Psychiatric',
      priceRange: '$$',
      areaServed: [
        {'@type': 'City', name: 'Ciudad Autónoma de Buenos Aires'},
        {'@type': 'AdministrativeArea', name: 'Núñez, CABA'},
        {'@type': 'City', name: 'Vicente López'},
        {'@type': 'Country', name: 'Argentina'},
      ],
      address: {'@type': 'PostalAddress', addressLocality: 'Núñez, Ciudad Autónoma de Buenos Aires', addressCountry: 'AR'},
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
      founder: {'@id': `${SITE_URL}/#romina`},
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de psicoterapia',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: {'@type': 'Service', name: s.title, description: s.shortDesc},
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {'@type': 'Answer', text: f.answer},
      })),
    },
  ],
};

const indexPath = path.join(dist, 'index.html');
const html = fs
  .readFileSync(indexPath, 'utf8')
  .replace('<div id="root"></div>', `<div id="root">${renderToString(<App />)}</div>`)
  .replace('</head>', `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>\n</head>`);
fs.writeFileSync(indexPath, html);

fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`Prerender OK (${SITE_URL}): ${(html.length / 1024).toFixed(0)} KB`);
