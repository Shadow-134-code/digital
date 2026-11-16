// Site links, shared by the top menu, the mobile menu and the footer so they always match.
// "Services" jumps to the service cards on the home page (the full /services page is linked from there).
export const navLinks = [
  ['/work', 'Work'],
  ['/#services', 'Services'],
  ['/about', 'About'],
  ['/faqs', 'FAQs'],
]
export const contactLink = ['/contact', 'Contact']

export const services = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding & visual identity',
    card: 'A clear, distinctive identity that gives your business a consistent voice and visual direction.',
    text: 'We define how your business looks and sounds: logo, colour, typography and the rules that hold them together. You get a system your team can keep using, not just a logo file.',
    tags: ['Logo design', 'Brand identity', 'Brand guidelines', 'Visual systems'],
  },
  {
    id: 'websites',
    number: '02',
    title: 'Website design & development',
    card: 'Thoughtfully designed websites that make your business easy to understand and easy to explore.',
    text: 'From page structure to the final build, we design websites that explain your business quickly and make the next step obvious. WordPress, WooCommerce or a custom build, depending on what the project needs.',
    tags: ['Business websites', 'Landing pages', 'UI / UX design', 'Responsive development', 'WordPress', 'WooCommerce', 'Performance & SEO'],
  },
  {
    id: 'ai-visuals',
    number: '03',
    title: 'AI visuals & creative production',
    card: 'Imaginative worlds, compelling characters and original visual stories, shaped around your brand.',
    text: 'Creative direction, AI generation and careful editing combined to produce concept art, product scenes and cinematic video that would be slow or costly to shoot.',
    tags: ['AI video production', 'Cinematic visuals', 'Concept art', 'AI imagery'],
    featured: true,
  },
  {
    id: 'advertising',
    number: '04',
    title: 'Advertising & campaign creative',
    card: 'Brand and product stories built for the channels and audiences you want to reach.',
    text: 'Product and service ads, UGC-style videos and campaign visuals, planned around your audience and delivered in the sizes each platform needs.',
    tags: ['AI video ads', 'Product campaigns', 'UGC-style videos', 'Real estate creative'],
  },
  {
    id: 'motion',
    number: '05',
    title: 'Motion design & video editing',
    card: 'Purposeful movement, sharp editing and a strong visual rhythm for every message.',
    text: 'Editing, titles and animation that give your message pace and clarity, from a short logo animation to a full promo, trailer or lyric video.',
    tags: ['Lyric videos', 'Logo animation', 'Explainer videos', 'Promos & trailers', 'Post-production'],
  },
  {
    id: 'social',
    number: '06',
    title: 'Social content & graphic design',
    card: 'A consistent creative presence, with content and artwork made for your platforms.',
    text: 'A steady flow of content that clearly belongs together: short-form video, social graphics, campaign artwork and thumbnails.',
    tags: ['Reels & short-form', 'Social media marketing', 'Digital artwork', 'Thumbnails & graphics'],
  },
]

// Live client websites (full-page screenshots). w/h are the image's real size.
export const work = [
  { title: 'Firm Foundation Builders', category: 'Construction website', image: '/work/firm-foundation.webp', w: 1000, h: 6821 },
  { title: 'SaniBonn', category: 'Plumbing & heating website', image: '/work/sanibonn.webp', w: 1000, h: 5132 },
  { title: 'Kum Correct Cleaning Co.', category: 'Cleaning services website', image: '/work/kum-correct.webp', w: 1000, h: 3743 },
]

export const faqGroups = [
  { id: 'general', label: 'General' },
  { id: 'branding', label: 'Branding & design' },
  { id: 'websites', label: 'Websites' },
  { id: 'video', label: 'Video, AI & ads' },
  { id: 'process', label: 'Process & delivery' },
]

export const faqs = [
  // General
  { group: 'general', q: 'What does HZ Digital Solutions do?', a: 'We design brand identities, build websites and online stores, and produce AI visuals, video ads, motion graphics and social content. You can hire us for one focused project or keep us on as an ongoing creative partner.' },
  { group: 'general', q: 'Do you work with international clients?', a: 'Yes. We work remotely with clients in different countries and time zones. Briefs, reviews and approvals happen over email and video calls, so location is rarely a barrier.' },
  { group: 'general', q: 'How much does a project cost?', a: 'Every project is quoted from your brief, because cost depends on the scope, the number of pages or deliverables and the timeline. Send us the details and you will get a clear written quote before any work begins.' },
  { group: 'general', q: 'How long does a project take?', a: 'It depends on the size of the work. A set of thumbnails moves much faster than a full website or brand identity. We agree a schedule with review dates at the start, so you always know what happens next.' },

  // Branding & design
  { group: 'branding', q: 'Can you create a complete brand identity?', a: 'Yes. We can develop your logo, colour palette, typography and guidelines, then apply them to your website, social channels and marketing materials. The exact deliverables are agreed in your project scope.' },
  { group: 'branding', q: 'Can you refresh our brand without changing the logo?', a: 'Yes. We can keep your logo and improve everything around it: typography, colour, layouts and imagery, so the brand looks more consistent without starting from zero.' },
  { group: 'branding', q: 'Can you work within our existing brand guidelines?', a: 'Absolutely. Share your logo, guidelines and recent materials and we will design within them. If something in the guidelines is holding the brand back, we will tell you and suggest how to refine it.' },
  { group: 'branding', q: 'Do you design social media content and thumbnails?', a: 'Yes. We create social graphics, campaign artwork, YouTube and lyric video thumbnails and short-form creative, either as single pieces or as a matching set for a launch or campaign.' },

  // Websites
  { group: 'websites', q: 'Which platforms do you build websites on?', a: 'Most business sites are built on WordPress so you can edit them yourself, and online stores on WooCommerce. When a project needs more speed or custom features, we build it with modern frameworks instead. We recommend the option that fits your goals and budget.' },
  { group: 'websites', q: 'Can you redesign our existing website?', a: 'Yes. We review your current structure, content and visitor journey, keep what works and rebuild what does not. This can include a full redesign, a WordPress rebuild, mobile fixes or performance improvements.' },
  { group: 'websites', q: 'Will my website work well on phones?', a: 'Yes. Every layout is designed for mobile, tablet and desktop, and we test navigation, text, forms and key actions on each before launch.' },
  { group: 'websites', q: 'Can I update the website myself after launch?', a: 'Yes, for content-managed sites. We set up editable pages and show you how to change text, images and products. If you would rather not, we can also handle updates, new pages and improvements for you.' },
  { group: 'websites', q: 'Do you build online stores?', a: 'Yes. We design and build ecommerce sites, including product pages, collections and checkout. Payments, delivery options and stock management are planned with you before development starts.' },

  // Video, AI & ads
  { group: 'video', q: 'What can you create with AI visuals?', a: 'Concept art, product scenes, campaign imagery and cinematic video. Your logo, products and brand colours can be included, and we combine AI generation with editing and creative direction so the result fits your brand rather than looking generic.' },
  { group: 'video', q: 'Can you make video ads for my brand?', a: 'Yes. We can shape the idea, write the script or storyboard and produce the final ad, whether it is a product commercial, a service promo or a UGC-style video. We deliver landscape, square and vertical versions for the platforms you use.' },
  { group: 'video', q: 'Can you edit footage we already have?', a: 'Yes. Send us your raw footage and we will handle the edit, pacing, titles, motion graphics, colour and sound finishing. We check the files first and tell you if anything limits the final result.' },
  { group: 'video', q: 'Do you make logo animations, explainers and lyric videos?', a: 'Yes. Our motion work covers logo animations, explainer videos, promos, trailers and lyric videos. Style, length and required assets are agreed before animation begins.' },

  // Process & delivery
  { group: 'process', q: 'What does the process look like?', a: 'We start with your goals and a short brief, agree the scope and price, then develop a direction for you to approve. After that we move through design and production with planned review points, and finish with final checks and delivery or launch.' },
  { group: 'process', q: 'What should I prepare before we start?', a: 'A short overview of your business, what you want to achieve, any brand assets you already have and a few examples you like. If something is missing, we will help you work it out.' },
  { group: 'process', q: 'How do feedback and revisions work?', a: 'Each project has agreed review stages and a set number of revision rounds. Collecting feedback in one place for each round keeps changes clear and the project on schedule.' },
  { group: 'process', q: 'Who owns the final work, and which files do I get?', a: 'Ownership and usage rights are written into your project agreement. Delivery files depend on the work, for example logo packages, high-resolution images, video exports or website access, and we confirm whether editable source files are included before we begin.' },
  { group: 'process', q: 'What happens after launch?', a: 'We check that everything works on the live site, hand over your files and logins, and show you how to manage what you need to. If something does not work as agreed, we fix it. Ongoing updates, new pages or fresh content can be arranged whenever you need them.' },
]
