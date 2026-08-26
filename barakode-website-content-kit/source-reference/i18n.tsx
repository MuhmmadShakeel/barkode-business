"use client";

/**
 * Lightweight client-side bilingual (English / Arabic) layer.
 *
 * - In-place toggle (no /ar routes): the whole site re-renders in the
 *   chosen language; the choice persists in localStorage.
 * - English is the default. Switching to Arabic also flips the document
 *   to RTL and swaps the body font to an Arabic typeface (see globals.css
 *   + the `--font-arabic` variable wired in app/layout.tsx).
 * - Translation is keyed by the English source string: `t("Services")`.
 *   A missing key falls back to the English text, so partially-translated
 *   UI degrades gracefully (used intentionally for the Privacy-Policy legal
 *   body + the blog article, which stay in English).
 *
 * Arabic is Modern Standard Arabic; proper nouns (Barakode, brand names,
 * tech/framework names) are intentionally kept in their original script.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "en" | "ar";

const STORAGE_KEY = "barakode-lang";

/** English → Arabic dictionary. Keys are the exact English source strings. */
const AR: Record<string, string> = {
  // ── Navigation / chrome ───────────────────────────────────────────
  Home: "الرئيسية",
  Services: "الخدمات",
  Pricing: "الأسعار",
  Projects: "المشاريع",
  Contact: "تواصل",
  "About Us": "من نحن",
  Team: "الفريق",
  Blog: "المدوّنة",
  "Case Studies": "دراسات الحالة",
  "Contact Us": "تواصل معنا",
  "Privacy Policy": "سياسة الخصوصية",
  "based in PAK": "مقرّها باكستان",
  MENU: "القائمة",
  "Open menu": "افتح القائمة",
  "Close menu": "أغلق القائمة",
  "Let's Explore": "لنستكشف",
  "more Barakode": "المزيد من باراكود",
  "Switch to Arabic": "التبديل إلى العربية",
  "Switch to English": "التبديل إلى الإنجليزية",

  // ── Footer ────────────────────────────────────────────────────────
  "Available for new projects": "متاحون لمشاريع جديدة",
  "A full-cycle software development agency engineering web, mobile, AI, and cloud products for startups and enterprises worldwide.":
    "وكالة تطوير برمجيات متكاملة تُهندس منتجات الويب والجوّال والذكاء الاصطناعي والسحابة للشركات الناشئة والمؤسسات حول العالم.",
  Newsletter: "النشرة البريدية",
  "Stay in the loop": "ابقَ على اطّلاع",
  "Occasional notes on building software that ships. No noise.":
    "ملاحظات بين الحين والآخر عن بناء برمجيات تُنجَز فعلاً. بلا تشويش.",
  Sitemap: "خريطة الموقع",
  Legal: "الشؤون القانونية",
  "Have a project?": "لديك مشروع؟",
  "Start a conversation": "لنبدأ محادثة",
  "© 2026 Barakode Technologies. All rights reserved.":
    "© 2026 باراكود تكنولوجيز. جميع الحقوق محفوظة.",
  Subscribe: "اشترك",
  "Back to top": "العودة إلى الأعلى",

  // ── Hero section labels ───────────────────────────────────────────
  "SOFTWARE AGENCY": "وكالة برمجيات",
  "OUR SERVICES": "خدماتنا",
  "ABOUT US": "من نحن",
  PROJECT: "مشروع",
  "DRIVEN BY PRECISION": "نَعمل بدقّة",
  "BLOG INSIGHTS": "رؤى المدوّنة",
  "PRIVACY POLICY": "سياسة الخصوصية",

  // ── Hero bodies ───────────────────────────────────────────────────
  "Barakode Technology is a full-cycle software development agency. We build web, mobile, AI, and cloud products for startups and enterprises worldwide.":
    "باراكود تكنولوجي وكالة تطوير برمجيات متكاملة. نبني منتجات الويب والجوّال والذكاء الاصطناعي والسحابة للشركات الناشئة والمؤسسات حول العالم.",
  "A full-cycle software development agency building web, mobile, AI and cloud products worldwide.":
    "وكالة تطوير برمجيات متكاملة تبني منتجات الويب والجوّال والذكاء الاصطناعي والسحابة حول العالم.",
  "Selected case studies from our recent engineering and design work.":
    "مختارات من دراسات الحالة لأحدث أعمالنا في الهندسة والتصميم.",
  "From web and mobile to AI/ML, cloud, design and QA — explore each service, the stack we use, and how we engage.":
    "من الويب والجوّال إلى الذكاء الاصطناعي والتعلّم الآلي والسحابة والتصميم وضمان الجودة — استكشف كل خدمة، والحزمة التقنية التي نستخدمها، وكيفية تعاوننا.",
  "A deeper look at how we build — across deep learning, computer vision, NLP, generative AI, LLM/RAG systems, mobile apps, and low-level engineering.":
    "نظرة أعمق على أسلوبنا في البناء — عبر التعلّم العميق والرؤية الحاسوبية ومعالجة اللغة الطبيعية والذكاء الاصطناعي التوليدي وأنظمة LLM/RAG وتطبيقات الجوّال والهندسة منخفضة المستوى.",
  "Tell us about your project and we'll respond within 24 hours with a clear plan, honest timeline, and a competitive quote.":
    "أخبِرنا عن مشروعك وسنردّ خلال 24 ساعة بخطة واضحة وجدول زمني صادق وعرض سعر تنافسي.",

  // ── CTAs ──────────────────────────────────────────────────────────
  "Start a Project": "ابدأ مشروعًا",
  "View Our Work": "شاهد أعمالنا",
  "Back to Home": "العودة إلى الرئيسية",

  // ── Section labels ────────────────────────────────────────────────
  "MORE ABOUT US": "المزيد عنّا",
  "TEAM MEMBERS": "أعضاء الفريق",
  "OUR TEAM": "فريقنا",
  "Engineers, strategists, and partners — the people who turn ambitious ideas into reliable, scalable products. Get to know who you'll be working with.":
    "مهندسون واستراتيجيّون وشركاء — الأشخاص الذين يحوّلون الأفكار الطموحة إلى منتجاتٍ موثوقة وقابلة للتوسّع. تعرّف على من ستعمل معهم.",
  AWARDS: "الجوائز",
  TESTIMONIALS: "آراء العملاء",
  "PRICING PLAN": "خطط الأسعار",
  PROCESS: "آلية العمل",
  FAQ: "الأسئلة الشائعة",
  "CONTACT FORM": "نموذج التواصل",
  "OUR PHILOSOPHY": "فلسفتنا",
  "TRUSTED BY TEAMS WORLDWIDE": "موضع ثقة فِرق حول العالم",

  // ── Split headings (white + gold halves) ──────────────────────────
  "What are": "ما هي",
  "What's": "ما هي",
  "our Services": "خدماتنا",
  Explore: "استكشف",
  Pricing_gold: "الأسعار",
  "Answers to": "إجابات على",
  "Your Queries": "استفساراتك",
  "A workflow built for": "آلية عمل مصمّمة لتحقيق",
  Results: "النتائج",
  "View Our": "شاهد",
  Works: "أعمالنا",
  "The people": "الأشخاص",
  "behind Barakode": "خلف باراكود",
  "Clean Code": "كود نظيف",
  "& Real Results": "ونتائج حقيقية",
  What: "ماذا",
  "we do": "نفعل",
  "The roles": "الأدوار",
  "we offer": "نقدّمها",

  // ── Stats ─────────────────────────────────────────────────────────
  "HAPPY CLIENTS": "عملاء سعداء",
  "LINES OF CODE": "أسطر برمجية",
  "ON-TIME DELIVERY": "تسليم في الموعد",

  // ── Services ──────────────────────────────────────────────────────
  "Front-end": "الواجهة الأمامية",
  "Back-end": "الواجهة الخلفية",
  Mobile: "تطبيقات الجوّال",
  "Full-Stack Development": "التطوير المتكامل",
  "Cloud & DevOps": "السحابة و DevOps",
  "UI/UX & Product Design": "تصميم الواجهات وتجربة المستخدم",
  "Service #": "خدمة #",
  "React.js, Next.js, UI/UX Design, Enterprise Applications, Salesforce CRM, Staff Augmentation":
    "React.js، Next.js، تصميم الواجهات وتجربة المستخدم، تطبيقات المؤسسات، Salesforce CRM، تعزيز الفريق",
  "Node.js, Express.js, REST APIs, Database Management, Cloud Services, AWS & Oracle, DevOps, Legacy Modernization":
    "Node.js، Express.js، واجهات REST، إدارة قواعد البيانات، الخدمات السحابية، AWS و Oracle، DevOps، تحديث الأنظمة القديمة",
  "React Native, Flutter, iOS & Android, Cross-platform Apps, PWA Development":
    "React Native، Flutter، iOS و Android، تطبيقات متعددة المنصّات، تطوير تطبيقات الويب التقدّمية (PWA)",
  "We build scalable, high-performance web applications powered by clean architecture, modern frameworks, and enterprise-grade engineering.":
    "نبني تطبيقات ويب قابلة للتوسّع وعالية الأداء، مدعومة ببنية نظيفة وأطر عمل حديثة وهندسة بمعايير المؤسسات.",
  "We architect and manage your entire cloud infrastructure — from CI/CD pipelines to AWS environments — ensuring maximum uptime, bulletproof security, and seamless scalability across every layer of your stack.":
    "نصمّم بنيتك السحابية بالكامل وندِيرها — من خطوط CI/CD إلى بيئات AWS — لضمان أعلى مستويات التشغيل وأمان متين وقابلية توسّع سلسة عبر كل طبقة من حزمتك التقنية.",
  "We define your product's experience — its flow, feel, and function — through research-driven design that turns first-time visitors into loyal users.":
    "نحدّد تجربة منتجك — انسيابه وإحساسه ووظيفته — عبر تصميم قائم على البحث يحوّل الزائر لأول مرة إلى مستخدم وفيّ.",
  "Starts from $3,599": "يبدأ من $3,599",
  "Starts from $1,399": "يبدأ من $1,399",
  "Starts from $599": "يبدأ من $599",

  // ── Pricing ───────────────────────────────────────────────────────
  Standard: "أساسية",
  Custom: "مخصّصة",
  "4-6 Week": "4–6 أسابيع",
  "4-12 Week": "4–12 أسبوعًا",
  "Standard Plan": "الباقة الأساسية",
  "Premium Plan": "الباقة المتميّزة",
  "Have clear requirements and a focused scope? This plan gets you moving fast.":
    "لديك متطلبات واضحة ونطاق محدّد؟ هذه الباقة تنطلق بك بسرعة.",
  "For complex projects requiring full-cycle development from strategy to launch.":
    "للمشاريع المعقّدة التي تتطلّب تطويرًا متكاملًا من الاستراتيجية حتى الإطلاق.",
  Popular: "الأكثر طلبًا",
  Exculvsive: "حصرية",
  from: "من",
  "/project": "/للمشروع",
  "What's included:": "ما الذي تتضمّنه:",
  "Requirements & scope definition": "تحديد المتطلبات والنطاق",
  "UI/UX design in Figma": "تصميم الواجهة وتجربة المستخدم في Figma",
  "Development in React or WordPress": "التطوير باستخدام React أو WordPress",
  "Remote & online collaboration": "تعاون عن بُعد وعبر الإنترنت",
  "Delivery within business days, no weekends":
    "التسليم خلال أيام العمل، دون عطلات نهاية الأسبوع",
  "Full discovery & architecture planning": "اكتشاف شامل وتخطيط للبنية",
  "Custom UI/UX design in Figma":
    "تصميم مخصّص للواجهة وتجربة المستخدم في Figma",
  "Advanced development in React, Node.js, or Flutter":
    "تطوير متقدّم باستخدام React أو Node.js أو Flutter",
  "Cloud deployment & DevOps setup": "النشر السحابي وإعداد DevOps",
  "Fully responsive & performance optimized": "متجاوب بالكامل ومُحسّن للأداء",
  "Dedicated project manager & weekly reports":
    "مدير مشروع مخصّص وتقارير أسبوعية",

  // ── Process ───────────────────────────────────────────────────────
  "Step 1": "الخطوة 1",
  "Step 2": "الخطوة 2",
  "Step 3": "الخطوة 3",
  "Step 4": "الخطوة 4",
  Discovery: "الاكتشاف",
  Development: "التطوير",
  "QA & Delivery": "ضمان الجودة والتسليم",
  "Support & Growth": "الدعم والنموّ",
  "We analyze your business requirements, define project scope, and deliver a clear roadmap with accurate cost and timeline estimates.":
    "نحلّل متطلبات عملك، ونحدّد نطاق المشروع، ونقدّم خارطة طريق واضحة مع تقديرات دقيقة للتكلفة والجدول الزمني.",
  "We engineer the product with clean, modular architecture — using your stack of choice and shipping reviewable increments every sprint.":
    "نهندس المنتج ببنية نظيفة ومعيارية — باستخدام التقنيات التي تختارها وتسليم إصدارات قابلة للمراجعة في كل دورة عمل.",
  "We harden the build with automated and manual QA across browsers, devices, and edge cases before a structured, low-risk launch.":
    "نعزّز المنتج باختبارات جودة آلية ويدوية عبر المتصفحات والأجهزة والحالات الحديّة قبل إطلاق منظّم ومنخفض المخاطر.",
  "Post-launch we monitor, iterate, and scale — handling infrastructure, security patches, and feature growth as your business evolves.":
    "بعد الإطلاق نراقب ونحسّن ونوسّع — متكفّلين بالبنية التحتية وتحديثات الأمان وتطوير الميزات مع نموّ عملك.",

  // ── Testimonials ──────────────────────────────────────────────────
  "Excellent Work!": "عمل ممتاز!",
  "Impressive Results!": "نتائج مبهرة!",
  "Exceptional Team!": "فريق استثنائي!",
  "Love to partner again": "نودّ التعاون مجددًا",
  "Best delivery ever!": "أفضل تسليم على الإطلاق!",
  "The Barakode team delivered ahead of schedule and the build was rock-solid from day one.":
    "سلّم فريق باراكود قبل الموعد المحدّد، وكان المنتج متينًا منذ اليوم الأول.",
  "Building enterprise software in our regulated industry is complex, Brakode handled it flawlessly.":
    "بناء برمجيات المؤسسات في قطاعنا الخاضع للتنظيم أمر معقّد، وقد تعامل باراكود معه بإتقان تام.",
  "Communication was clear at every sprint and the final product exceeded what we mapped on paper.":
    "كان التواصل واضحًا في كل دورة عمل، وفاق المنتج النهائي ما خطّطنا له على الورق.",
  "Brakode transformed our legacy system into a modern cloud platform that scaled 10x within months.":
    "حوّل باراكود نظامنا القديم إلى منصّة سحابية حديثة توسّعت عشرة أضعاف خلال أشهر.",
  "From discovery to launch, every milestone was on time and every estimate was honest.":
    "من الاكتشاف حتى الإطلاق، أُنجزت كل مرحلة في موعدها وكان كل تقدير صادقًا.",
  "Founder, Loopify App": "مؤسّس تطبيق Loopify",
  "Senior Director, FinSecure Global": "مدير أوّل، FinSecure Global",
  "Product Lead, Nexus Labs": "قائد المنتج، Nexus Labs",
  "VP Engineering, DataBridge Corp": "نائب رئيس الهندسة، DataBridge Corp",
  "CTO at NovaTech Inc": "المدير التقني في NovaTech Inc",

  // ── Team roles ────────────────────────────────────────────────────
  "CEO Founder": "الرئيس التنفيذي والمؤسّس",
  "Full-Stack Developer": "مطوّر متكامل",
  "UI/UX Designer": "مصمّم واجهات وتجربة المستخدم",
  "BD Manager": "مدير تطوير الأعمال",

  // ── Awards ────────────────────────────────────────────────────────
  "Brand Name": "اسم الجهة",
  "Prize Name": "اسم الجائزة",
  Date: "التاريخ",
  "Top Software Development Company 2024": "أفضل شركة تطوير برمجيات 2024",
  "Best Web & Mobile App Development Agency 2024":
    "أفضل وكالة لتطوير الويب وتطبيقات الجوّال 2024",
  "Site of the Day — Enterprise SaaS Platform":
    "موقع اليوم — منصّة SaaS للمؤسسات",
  "Technology Fast 500 — Fastest Growing Tech Companies":
    "Technology Fast 500 — أسرع شركات التقنية نموًّا",
  "Top 10 Emerging Software Agencies — USA 2023":
    "أفضل 10 وكالات برمجيات صاعدة — الولايات المتحدة 2023",

  // ── FAQ ───────────────────────────────────────────────────────────
  "What is your typical project timeline?":
    "ما هو الجدول الزمني المعتاد لمشاريعكم؟",
  "It depends on the scope! Simple integrations take about 1–2 weeks, while full web or mobile applications usually take 6–16 weeks.":
    "يعتمد ذلك على النطاق! تستغرق عمليات الدمج البسيطة نحو أسبوع إلى أسبوعين، بينما تستغرق تطبيقات الويب أو الجوّال الكاملة عادةً من 6 إلى 16 أسبوعًا.",
  "What services does your agency offer?":
    "ما الخدمات التي تقدّمها وكالتكم؟",
  "Full-stack web and mobile development, AI/ML integration, cloud and DevOps, UI/UX design, and staff augmentation.":
    "تطوير ويب وجوّال متكامل، ودمج الذكاء الاصطناعي والتعلّم الآلي، والسحابة و DevOps، وتصميم الواجهات وتجربة المستخدم، وتعزيز الفريق.",
  "What is your revision policy?": "ما هي سياسة التعديلات لديكم؟",
  "Each milestone includes two structured revision rounds. Larger scope changes are quoted transparently before any additional work begins.":
    "تتضمّن كل مرحلة جولتَي تعديل منظّمتين. أما التغييرات الأكبر في النطاق فتُسعَّر بشفافية قبل بدء أي عمل إضافي.",
  "How do we get started working together?": "كيف نبدأ العمل معًا؟",
  "Send us a brief through the contact form. We respond within 24 hours with a clear plan, honest timeline, and a competitive quote.":
    "أرسل لنا موجزًا عبر نموذج التواصل. سنردّ خلال 24 ساعة بخطة واضحة وجدول زمني صادق وعرض سعر تنافسي.",
  "Will I own the rights to the code?": "هل سأملك حقوق الكود؟",
  "Yes — full IP transfer is included with every engagement upon final delivery and payment.":
    "نعم — يشمل كل تعاقد نقلًا كاملًا للملكية الفكرية عند التسليم النهائي والدفع.",
  "How do you approach a new software project?":
    "كيف تتعاملون مع مشروع برمجي جديد؟",
  "Discovery first. We map requirements, define architecture, lock the stack, and only then start engineering with weekly demos.":
    "الاكتشاف أولًا. نحدّد المتطلبات، ونرسم البنية، ونثبّت التقنيات، ثم نبدأ الهندسة مع عروض أسبوعية.",

  // ── Contact form ──────────────────────────────────────────────────
  "Get in Touch": "تواصل معنا",
  "Your Name": "اسمك",
  "Your full name": "اسمك الكامل",
  "Enter the Email": "أدخل البريد الإلكتروني",
  "Your Phone": "هاتفك",
  "Enter your phone number": "أدخل رقم هاتفك",
  "I'm interested in...": "أنا مهتمّ بـ...",
  Select: "اختر",
  "More About The Project": "المزيد عن المشروع",
  "Type Here...": "اكتب هنا...",
  Submit: "إرسال",
  "Sending...": "جارٍ الإرسال...",
  "Please add your name.": "يرجى إدخال اسمك.",
  "Please add your email.": "يرجى إدخال بريدك الإلكتروني.",
  "Please use a valid email address.":
    "يرجى إدخال عنوان بريد إلكتروني صحيح.",
  "Web Development": "تطوير الويب",
  "Mobile App Development": "تطوير تطبيقات الجوّال",
  "AI & Machine Learning": "الذكاء الاصطناعي والتعلّم الآلي",
  "Enterprise Software": "برمجيات المؤسسات",
  "UI/UX Design": "تصميم الواجهات وتجربة المستخدم",
  "Staff Augmentation": "تعزيز الفريق",
  Other: "أخرى",

  // ── Projects ──────────────────────────────────────────────────────
  Development_cat: "تطوير",
  "Gman Stitching Platform": "منصّة Gman للخياطة",
  "Beyut Libya — Real Estate Platform": "بيوت ليبيا — منصّة عقارية",
  "OpenInterview — Video Interview Platform":
    "OpenInterview — منصّة مقابلات بالفيديو",
  "2023 — by Barakode": "2023 — بواسطة باراكود",
  "2025 — by Barakode": "2025 — بواسطة باراكود",
  "Engineered for scale": "مُهندَس للتوسّع",

  // ── Blog ──────────────────────────────────────────────────────────
  "Why Every Project Needs a Technical Roadmap":
    "لماذا يحتاج كل مشروع إلى خارطة طريق تقنية",

  // ── CTA section ───────────────────────────────────────────────────
  "Let's Discuss Your": "لنناقش مشروعك",
  "Next Project": "القادم",
  "Ready to build something exceptional? Share your idea and we'll respond with a clear plan, honest timeline, and competitive quote within 24 hours.":
    "مستعدّ لبناء شيء استثنائي؟ شارك فكرتك وسنردّ بخطة واضحة وجدول زمني صادق وعرض سعر تنافسي خلال 24 ساعة.",

  // ── Watermarks ────────────────────────────────────────────────────
  "Built Different": "نَصنع الفرق",
  "Engineered for Results": "مُهندَس لتحقيق النتائج",
  "Driven by Precision": "نَعمل بدقّة",

  // ── 404 ───────────────────────────────────────────────────────────
  "Page ": "الصفحة ",
  " Found": " غير موجودة",
  "The page you're looking for doesn't exist or has been moved. Head back to the homepage to continue exploring.":
    "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. عُد إلى الصفحة الرئيسية لمواصلة التصفّح.",
};

/**
 * Per-page hero headings. The hero renders three fixed lines
 * (white / gold / white); Arabic word order differs from English and
 * the word "Software" is reused across pages, so a word-by-word map is
 * ambiguous. Instead we key the whole triplet by its English source.
 */
const HERO_AR: Record<string, { white: string; gold: string; trailing: string }> = {
  "Software|Development|Agency": { white: "وكالة", gold: "تطوير", trailing: "برمجيات" },
  "Software|Services|Listed": { white: "خدماتنا", gold: "البرمجية", trailing: "المتكاملة" },
  "What|We Build|Best": { white: "ماذا", gold: "نبني", trailing: "بإتقان" },
  "Engineering|in depth|Barakode": { white: "هندسة", gold: "بعمق", trailing: "باراكود" },
  "Pick Your|Pricing|Option": { white: "اختر", gold: "باقتك", trailing: "المناسبة" },
  "Featured|Works|Barakode": { white: "أعمال", gold: "باراكود", trailing: "المميّزة" },
  "Start With|Barakode|Today": { white: "ابدأ مع", gold: "باراكود", trailing: "اليوم" },
  "Explore|Blog|Insights": { white: "استكشف", gold: "رؤى", trailing: "المدوّنة" },
  "Privacy|Policy|Outline": { white: "سياسة", gold: "الخصوصية", trailing: "المُوجَزة" },
  "The minds|behind Barakode|": { white: "العقول", gold: "خلف باراكود", trailing: "" },
};

type Translate = (en: string) => string;

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Translate;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server + first client render are always English to avoid a hydration
  // mismatch; the stored preference is applied right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {
      /* localStorage unavailable — stay on default */
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "en" ? "ar" : "en"),
    [lang, setLang]
  );

  const t = useCallback<Translate>(
    (en) => (lang === "ar" ? AR[en] ?? en : en),
    [lang]
  );

  return (
    <LanguageContext.Provider
      value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, toggle, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback if a component renders outside the provider (e.g. tests).
    return {
      lang: "en",
      dir: "ltr",
      setLang: () => {},
      toggle: () => {},
      t: (en) => en,
    };
  }
  return ctx;
}

/** Convenience hook returning just the translate function. */
export function useT(): Translate {
  return useLang().t;
}

/**
 * Resolve a hero heading triplet for the active language. Falls back to
 * the original English words if no Arabic mapping exists.
 */
export function useHeroHeading(
  white: string,
  gold: string,
  trailing?: string
): { white: string; gold: string; trailing?: string } {
  const { lang } = useLang();
  if (lang !== "ar") return { white, gold, trailing };
  const key = `${white}|${gold}|${trailing ?? ""}`;
  const mapped = HERO_AR[key];
  if (mapped) {
    return {
      white: mapped.white,
      gold: mapped.gold,
      trailing: trailing ? mapped.trailing : undefined,
    };
  }
  // Word-level fallback.
  return {
    white: AR[white] ?? white,
    gold: AR[gold] ?? gold,
    trailing: trailing ? AR[trailing] ?? trailing : undefined,
  };
}
