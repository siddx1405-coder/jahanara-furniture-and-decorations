import { useEffect, useState, type ReactNode } from "react";
import bedroom from "./assets/portfolio/bedroom.jpg";
import wardrobe from "./assets/portfolio/wardrobe.jpg";
import livingRoom from "./assets/portfolio/living-room.jpg";
import wallDecoration from "./assets/portfolio/wall-decoration.jpg";
import carpet from "./assets/portfolio/carpet.jpg";
import bedFlooring from "./assets/portfolio/bed-flooring.jpg";
import curtains from "./assets/portfolio/curtains.jpg";
import curvedSofa from "./assets/portfolio/curved-sofa.jpg";
import majlisFlooring from "./assets/portfolio/majlis-flooring.jpg";
import completeInterior from "./assets/portfolio/complete-interior.jpg";

type Language = "ar" | "en";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.45L3.5 20.5l1.43-4.27A8.5 8.5 0 1 1 20.5 11.6Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M8.05 7.7c.2-.44.4-.45.73-.46h.62c.18 0 .38.04.48.33.11.3.78 1.9.85 2.04.07.14.12.3.02.47-.09.18-.14.29-.28.44-.14.16-.3.35-.42.47-.14.14-.28.29-.12.57.17.28.74 1.22 1.59 1.97 1.1.97 2.02 1.27 2.3 1.4.28.14.45.12.61-.07.17-.19.71-.82.9-1.1.2-.28.39-.23.65-.14.27.1 1.69.8 1.98.94.28.14.47.21.54.33.07.12.07.68-.16 1.33-.23.66-1.36 1.26-1.87 1.34-.48.08-1.1.12-1.78-.1-.41-.13-.95-.3-1.63-.6a9.25 9.25 0 0 1-3.72-3.29c-1.03-1.4-1.72-3.13-1.92-3.65-.2-.52-.02-1.28.2-1.72l.43-.5Z"
      fill="currentColor"
    />
  </svg>
);

const Icon = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ArrowIcon = ({ rtl }: { rtl: boolean }) => (
  <Icon className="size-4">
    <path d={rtl ? "M19 12H5m6 6-6-6 6-6" : "M5 12h14m-6-6 6 6-6 6"} />
  </Icon>
);

const content = {
  ar: {
    brand: "جهان آرا",
    brandSub: "للأثاث والديكور",
    nav: ["الرئيسية", "خدماتنا", "أعمالنا", "من نحن", "تواصل معنا"],
    heroKicker: "تصميم • تنفيذ • أناقة",
    heroTitle: (
      <>
        نصنع من منزلك
        <br />
        <em>حكاية جمال</em>
      </>
    ),
    heroText:
      "حلول متكاملة للأثاث والديكور الداخلي، مصممة بعناية لتمنح كل زاوية طابعاً استثنائياً يعكس ذوقك.",
    explore: "اكتشف أعمالنا",
    quote: "اطلب استشارة",
    stat1: "حلول متكاملة",
    stat2: "تفصيل حسب الطلب",
    scroll: "اكتشف المزيد",
    servicesKicker: "ما نقدمه",
    servicesTitle: "كل ما يحتاجه منزلك، في مكان واحد",
    servicesText: "من الفكرة الأولى وحتى أدق اللمسات النهائية، نصنع مساحات تجمع بين الراحة والجمال.",
    services: [
      ["الكنب والمجالس", "تصاميم عصرية وكلاسيكية تُنفذ حسب المقاس والذوق.", "sofa"],
      ["السجاد", "تشكيلة أنيقة من السجاد تناسب مختلف المساحات.", "rug"],
      ["الستائر", "ستائر وبلائنز بتفصيل دقيق وخامات منتقاة.", "curtain"],
      ["ورق الجدران", "نقوش وخامات تضيف عمقاً وشخصية إلى الجدران.", "wall"],
      ["أرضيات SPC", "أرضيات عملية، متينة، ومقاومة للماء.", "floor"],
      ["الأرضيات الخشبية", "دفء الخشب وأناقة التشطيبات الاحترافية.", "wood"],
      ["الديكور الداخلي", "تصميم وتنفيذ متكامل لمساحات متناغمة.", "decor"],
      ["خزائن المطابخ والغرف", "حلول تخزين ذكية مصممة خصيصاً لمساحتك.", "cabinet"],
    ],
    portfolioKicker: "مختارات من أعمالنا",
    portfolioTitle: "مساحات صُممت لتُلهم",
    portfolioText: "تفاصيل مدروسة، خامات راقية، وتنفيذ يعكس الحرفية في كل مشروع.",
    all: "الكل",
    viewProject: "عرض المشروع",
    projectLabels: [
      "تصميم داخلي متكامل",
      "غرفة نوم مخصصة",
      "خزائن غرف",
      "ديكور الجدران",
      "سجاد ومجلس",
      "أرضيات خشبية",
      "ستائر",
      "كنب منحني",
      "مجلس وأرضيات",
      "غرفة معيشة متكاملة",
    ],
    aboutKicker: "عن جهان آرا",
    aboutTitle: "نؤمن أن الجمال يبدأ من التفاصيل",
    aboutText:
      "في جهان آرا للأثاث والديكور، نحوّل رؤيتك إلى مساحة حقيقية تنبض بالذوق والراحة. نهتم بكل تفصيل، من اختيار الخامات إلى دقة التنفيذ، لنقدم لك نتيجة تليق بمنزلك.",
    quality: "جودة نثق بها",
    qualityText: "خامات مختارة وتنفيذ بإشراف محترف.",
    custom: "تصميم لك وحدك",
    customText: "كل مشروع يُصمم وفق مساحتك واحتياجك.",
    contactKicker: "لنبدأ مشروعك",
    contactTitle: "منزل أحلامك أقرب مما تتخيل",
    contactText: "تواصل معنا اليوم لمعاينة المساحة والحصول على استشارة تناسب احتياجاتك.",
    whatsapp: "تواصل عبر واتساب",
    call: "اتصل بنا",
    visit: "موقعنا",
    location: "أم الدوم، معيذر — قطر",
    email: "البريد الإلكتروني",
    footerText: "نصمم مساحات أنيقة، مريحة، ومصنوعة لتدوم.",
    rights: "جميع الحقوق محفوظة.",
    close: "إغلاق",
  },
  en: {
    brand: "Jahan-ara",
    brandSub: "Furniture & Decorations",
    nav: ["Home", "Services", "Projects", "About", "Contact"],
    heroKicker: "DESIGN • CRAFT • ELEGANCE",
    heroTitle: (
      <>
        We turn your home
        <br />
        into a <em>beautiful story</em>
      </>
    ),
    heroText:
      "Complete furniture and interior solutions, thoughtfully made to give every corner a distinctive character that reflects your taste.",
    explore: "Explore our work",
    quote: "Get a consultation",
    stat1: "Complete solutions",
    stat2: "Made to measure",
    scroll: "Discover more",
    servicesKicker: "WHAT WE DO",
    servicesTitle: "Everything your home needs, in one place",
    servicesText:
      "From the first idea to the final detail, we create spaces that balance comfort and beauty.",
    services: [
      ["Sofas & Majlis", "Modern and classic pieces made to your dimensions and taste.", "sofa"],
      ["Carpets", "An elegant selection of carpets for every kind of space.", "rug"],
      ["Curtains", "Curtains and blinds tailored with precision in selected fabrics.", "curtain"],
      ["Wallpaper", "Textures and patterns that add depth and personality.", "wall"],
      ["SPC Flooring", "Practical, durable, and water-resistant flooring.", "floor"],
      ["Wood Flooring", "The warmth of wood with expert finishing.", "wood"],
      ["Interior Decoration", "Complete design and execution for harmonious spaces.", "decor"],
      ["Kitchen & Room Cabinets", "Smart storage designed specifically for your space.", "cabinet"],
    ],
    portfolioKicker: "SELECTED PROJECTS",
    portfolioTitle: "Spaces designed to inspire",
    portfolioText:
      "Considered details, premium materials, and craftsmanship reflected in every project.",
    all: "All",
    viewProject: "View project",
    projectLabels: [
      "Complete interior",
      "Custom bedroom",
      "Room cabinets",
      "Feature wall",
      "Carpet & majlis",
      "Wood flooring",
      "Curtains",
      "Curved sofa",
      "Majlis & flooring",
      "Complete living room",
    ],
    aboutKicker: "ABOUT JAHAN-ARA",
    aboutTitle: "We believe beauty begins in the details",
    aboutText:
      "At Jahan-ara Furniture & Decorations, we turn your vision into a real space filled with style and comfort. From material selection to precise installation, every detail matters.",
    quality: "Quality we trust",
    qualityText: "Selected materials and professionally supervised work.",
    custom: "Made just for you",
    customText: "Every project is designed around your space and needs.",
    contactKicker: "START YOUR PROJECT",
    contactTitle: "Your dream home is closer than you think",
    contactText: "Contact us today for a site visit and a consultation tailored to your needs.",
    whatsapp: "Chat on WhatsApp",
    call: "Call us",
    visit: "Our location",
    location: "Umm Al Dhoom, Muaither — Qatar",
    email: "Email",
    footerText: "Elegant, comfortable spaces, made to last.",
    rights: "All rights reserved.",
    close: "Close",
  },
};

const servicePaths: Record<string, ReactNode> = {
  sofa: (
    <>
      <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M4 10a2 2 0 0 0-2 2v5h20v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-2-2Z" />
      <path d="M4 17v2m16-2v2" />
    </>
  ),
  rug: (
    <>
      <path d="M6 3h12v18H6z" />
      <path d="m9 3 3 3 3-3M9 21l3-3 3 3M9 9h6v6H9z" />
    </>
  ),
  curtain: (
    <>
      <path d="M4 4h16M6 4c0 5 2 5 2 16m10-16c0 5-2 5-2 16M8 4h8v16H8z" />
    </>
  ),
  wall: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M4 10h16M10 4v6m4 0v10M4 15h10" />
    </>
  ),
  floor: (
    <>
      <path d="m3 17 9-12 9 12-9 4-9-4Z" />
      <path d="m7 15 5-7 5 7-5 2-5-2Z" />
    </>
  ),
  wood: (
    <>
      <path d="M4 3h5v18H4zM9 3h6v18H9zM15 3h5v18h-5z" />
      <path d="M6.5 7h.01M12 12h.01M17.5 8h.01" />
    </>
  ),
  decor: (
    <>
      <path d="M12 3v18M3 12h18" />
      <path d="M5.6 5.6c3.5 3.5 9.3 3.5 12.8 0M5.6 18.4c3.5-3.5 9.3-3.5 12.8 0" />
    </>
  ),
  cabinet: (
    <>
      <path d="M5 3h14v18H5zM12 3v18M8.5 11h.01M15.5 11h.01" />
    </>
  ),
};

const images = [
  completeInterior,
  bedroom,
  wardrobe,
  wallDecoration,
  carpet,
  bedFlooring,
  curtains,
  curvedSofa,
  majlisFlooring,
  livingRoom,
];

export default function App() {
  const [lang, setLang] = useState<Language>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const t = content[lang];
  const rtl = lang === "ar";
  const links = ["home", "services", "projects", "about", "contact"];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang, rtl]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox, menuOpen]);

  const switchLanguage = () => setLang((value) => (value === "ar" ? "en" : "ar"));

  return (
    <div className={rtl ? "font-arabic" : "font-english"}>
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/15 text-white">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#home" className="group flex items-center gap-3" aria-label={t.brand}>
            <span className="grid size-11 place-items-center border border-[#cdbb8b]/70 text-[#e4d3a6] transition-colors group-hover:bg-[#cdbb8b] group-hover:text-[#173d35]">
              <svg
                viewBox="0 0 44 44"
                className="size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M22 6v32M10 13c7 0 12 4 12 9-6 0-10-3-12-9Zm24 0c-7 0-12 4-12 9 6 0 10-3 12-9ZM11 31c5-4 9-4 11-1m11 1c-5-4-9-4-11-1" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-semibold tracking-wide">{t.brand}</span>
              <span className="block text-[10px] tracking-[.16em] text-white/65">{t.brandSub}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <a
                key={label}
                href={`#${links[index]}`}
                className="nav-link text-[13px] font-medium text-white/80 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={switchLanguage}
              className="flex h-10 items-center gap-2 border border-white/25 px-3 text-xs font-semibold transition hover:border-[#d6c38c] hover:text-[#ead9aa]"
              aria-label="Switch language"
            >
              <Icon className="size-4">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
              </Icon>
              {rtl ? "EN" : "ع"}
            </button>
            <a
              href="https://wa.me/97477797456"
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center gap-2 bg-[#cdbb8b] px-4 text-xs font-bold text-[#173d35] transition hover:bg-[#e0cf9f] sm:flex"
            >
              <WhatsAppIcon className="size-4" />
              {t.whatsapp}
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="grid size-10 place-items-center border border-white/25 lg:hidden"
              aria-label="Open menu"
            >
              <Icon className="size-5">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </Icon>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-[#13352f] p-6 text-white transition-transform duration-500 lg:hidden ${menuOpen ? "translate-x-0" : rtl ? "translate-x-full" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">{t.brand}</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="grid size-11 place-items-center border border-white/20"
            aria-label="Close menu"
          >
            <Icon className="size-6">
              <path d="m6 6 12 12M18 6 6 18" />
            </Icon>
          </button>
        </div>
        <nav className="mt-20 flex flex-col">
          {t.nav.map((label, index) => (
            <a
              key={label}
              href={`#${links[index]}`}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/15 py-5 text-2xl"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <section
          id="home"
          className="relative min-h-[760px] overflow-hidden bg-[#173d35] text-white lg:min-h-screen"
        >
          <img
            src={completeInterior}
            alt="Jahan-ara complete living room project"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,29,25,.92)_0%,rgba(8,29,25,.72)_42%,rgba(8,29,25,.22)_75%,rgba(8,29,25,.38)_100%)] rtl:bg-[linear-gradient(270deg,rgba(8,29,25,.92)_0%,rgba(8,29,25,.72)_42%,rgba(8,29,25,.22)_75%,rgba(8,29,25,.38)_100%)]" />
          <div className="absolute inset-0 opacity-[.055] texture-overlay" />
          <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-5 pt-24 sm:px-8 lg:min-h-screen lg:px-14">
            <div className="max-w-3xl py-28">
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[.25em] text-[#d7c794]">
                <span className="h-px w-10 bg-[#d7c794]" />
                {t.heroKicker}
              </div>
              <h1 className="hero-title text-[clamp(3.1rem,7.4vw,7rem)] font-medium leading-[.98] tracking-[-.035em]">
                {t.heroTitle}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                {t.heroText}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex h-14 items-center gap-3 bg-[#cdbb8b] px-7 text-sm font-bold text-[#173d35] transition hover:bg-[#e3d29f]"
                >
                  {t.explore}
                  <ArrowIcon rtl={rtl} />
                </a>
                <a
                  href="https://wa.me/97477797456"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center gap-3 border border-white/35 px-7 text-sm font-bold transition hover:border-white hover:bg-white hover:text-[#173d35]"
                >
                  <WhatsAppIcon className="size-5" />
                  {t.quote}
                </a>
              </div>
              <div className="mt-12 flex gap-8 border-t border-white/15 pt-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <span className="text-[#d7c794]">◆</span>
                  {t.stat1}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#d7c794]">◆</span>
                  {t.stat2}
                </span>
              </div>
            </div>
          </div>
          <a
            href="#services"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[.2em] text-white/55 md:flex"
          >
            {t.scroll}
            <span className="h-10 w-px bg-gradient-to-b from-[#d7c794] to-transparent" />
          </a>
        </section>

        <section id="services" className="bg-[#f4f0e8] py-24 sm:py-28">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">{t.servicesKicker}</p>
              <h2 className="section-title">{t.servicesTitle}</h2>
              <p className="section-copy mx-auto">{t.servicesText}</p>
            </div>
            <div className="mt-16 grid border-x border-t border-[#d9d1c2] sm:grid-cols-2 lg:grid-cols-4">
              {t.services.map(([title, text, icon], index) => (
                <article
                  key={title}
                  className="service-card group relative min-h-64 border-b border-[#d9d1c2] p-7 transition-colors duration-500 hover:bg-[#173d35] sm:border-e lg:[&:not(:nth-child(4n))]:border-e"
                >
                  <span className="mb-9 grid size-12 place-items-center border border-[#b99f62]/55 text-[#9b8047] transition-colors group-hover:border-[#d7c794]/50 group-hover:text-[#d7c794]">
                    <Icon className="size-6">{servicePaths[icon]}</Icon>
                  </span>
                  <span className="absolute end-6 top-5 text-xs text-[#b8ad9b] transition group-hover:text-white/35">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-[#163d35] transition group-hover:text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#756f64] transition group-hover:text-white/65">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#143830] py-24 text-white sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="section-kicker !text-[#d2bd81]">{t.portfolioKicker}</p>
                <h2 className="section-title !mt-3 !text-white">{t.portfolioTitle}</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/55">{t.portfolioText}</p>
            </div>
            <div className="mt-14 grid auto-rows-[270px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setLightbox(index)}
                  className={`gallery-item group relative overflow-hidden text-start ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""} ${index === 1 || index === 6 ? "lg:row-span-2" : ""}`}
                  aria-label={`${t.viewProject}: ${t.projectLabels[index]}`}
                >
                  <img
                    src={image}
                    alt={t.projectLabels[index]}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80 transition group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <span>
                      <span className="mb-1 block text-[10px] tracking-[.18em] text-[#e0cc91]">
                        {String(index + 1).padStart(2, "0")} / 10
                      </span>
                      <span className="text-lg font-medium">{t.projectLabels[index]}</span>
                    </span>
                    <span className="grid size-10 translate-y-2 place-items-center border border-white/40 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon className="size-5">
                        <path d="m9 18 6-6-6-6" />
                      </Icon>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="overflow-hidden bg-[#f4f0e8]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="relative min-h-[520px] lg:min-h-[720px]">
              <img
                src={curvedSofa}
                alt={t.projectLabels[7]}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute bottom-6 end-6 border border-white/30 bg-[#153b33]/95 p-6 text-white sm:bottom-10 sm:end-10">
                <span className="block text-4xl text-[#d7c794]">10+</span>
                <span className="mt-1 block text-xs tracking-wide">
                  {rtl ? "حلول للمنزل تحت سقف واحد" : "home solutions under one roof"}
                </span>
              </div>
            </div>
            <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20">
              <div className="max-w-xl">
                <p className="section-kicker">{t.aboutKicker}</p>
                <h2 className="section-title">{t.aboutTitle}</h2>
                <p className="mt-7 text-base leading-8 text-[#6f6a60]">{t.aboutText}</p>
                <div className="mt-10 grid gap-8 border-t border-[#d7cfc0] pt-9 sm:grid-cols-2">
                  <div>
                    <span className="mb-4 grid size-11 place-items-center bg-[#e8e0cf] text-[#806b3b]">
                      <Icon className="size-5">
                        <path d="m5 12 4 4L19 6" />
                      </Icon>
                    </span>
                    <h3 className="font-semibold text-[#173d35]">{t.quality}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#777166]">{t.qualityText}</p>
                  </div>
                  <div>
                    <span className="mb-4 grid size-11 place-items-center bg-[#e8e0cf] text-[#806b3b]">
                      <Icon className="size-5">
                        <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
                        <path d="m4 7 8 4 8-4M12 11v10" />
                      </Icon>
                    </span>
                    <h3 className="font-semibold text-[#173d35]">{t.custom}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#777166]">{t.customText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[#d1bd83] py-24 text-[#153a32]"
        >
          <div className="absolute inset-0 opacity-[.09] texture-overlay" />
          <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-[.24em]">{t.contactKicker}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
                {t.contactTitle}
              </h2>
              <p className="mx-auto mt-6 max-w-xl leading-8 text-[#153a32]/70">{t.contactText}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/97477797456"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center gap-3 bg-[#153a32] px-7 text-sm font-bold text-white transition hover:bg-[#0b2a24]"
                >
                  <WhatsAppIcon className="size-5" />
                  {t.whatsapp}
                </a>
                <a
                  href="tel:+97477797456"
                  className="inline-flex h-14 items-center gap-3 border border-[#153a32]/40 px-7 text-sm font-bold transition hover:bg-[#153a32] hover:text-white"
                >
                  <Icon className="size-5">
                    <path d="M6.6 3h3l1.5 4-2 1.4a15.5 15.5 0 0 0 6.5 6.5l1.4-2 4 1.5v3a3 3 0 0 1-3 3A15 15 0 0 1 3.6 6a3 3 0 0 1 3-3Z" />
                  </Icon>
                  +974 7779 7456
                </a>
              </div>
            </div>
            <div className="mt-16 grid border border-[#153a32]/20 md:grid-cols-3">
              <a
                href="https://www.google.com/maps?q=25.27836799621582,51.40788650512695&z=17&hl=en"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <Icon className="size-6">
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </Icon>
                <span>
                  <strong>{t.visit}</strong>
                  <small>{t.location}</small>
                </span>
              </a>
              <a href="tel:+97477797456" className="contact-card">
                <Icon className="size-6">
                  <path d="M6.6 3h3l1.5 4-2 1.4a15.5 15.5 0 0 0 6.5 6.5l1.4-2 4 1.5v3a3 3 0 0 1-3 3A15 15 0 0 1 3.6 6a3 3 0 0 1 3-3Z" />
                </Icon>
                <span>
                  <strong>{t.call}</strong>
                  <small dir="ltr">+974 7779 7456</small>
                </span>
              </a>
              <a href="mailto:jahanaradecoration456@gmail.com" className="contact-card">
                <Icon className="size-6">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </Icon>
                <span>
                  <strong>{t.email}</strong>
                  <small>jahanaradecoration456@gmail.com</small>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d2b25] px-5 py-10 text-white/65 sm:px-8">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-7 md:flex-row">
          <div className="text-center md:text-start">
            <span className="block text-xl font-semibold text-white">{t.brand}</span>
            <span className="mt-1 block text-xs">{t.footerText}</span>
          </div>
          <div className="flex gap-5 text-xs">
            {t.nav.slice(1).map((label, index) => (
              <a key={label} href={`#${links[index + 1]}`} className="hover:text-[#d8c68d]">
                {label}
              </a>
            ))}
          </div>
          <p className="text-center text-[11px]">
            © {new Date().getFullYear()} Jahan-ara. {t.rights}
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/97477797456"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 end-5 z-30 grid size-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-[0_8px_30px_rgba(0,0,0,.3)] transition hover:scale-105"
        aria-label={t.whatsapp}
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#071b17]/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute end-5 top-5 grid size-11 place-items-center border border-white/25 text-white transition hover:bg-white hover:text-[#173d35]"
            aria-label={t.close}
          >
            <Icon className="size-6">
              <path d="m6 6 12 12M18 6 6 18" />
            </Icon>
          </button>
          <button
            onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)}
            className="absolute start-4 z-10 grid size-11 place-items-center bg-white/10 text-white hover:bg-white hover:text-[#173d35]"
            aria-label="Previous"
          >
            <Icon className="size-5">
              <path d="m15 18-6-6 6-6" />
            </Icon>
          </button>
          <figure className="max-h-[85vh] max-w-6xl">
            <img
              src={images[lightbox]}
              alt={t.projectLabels[lightbox]}
              className="max-h-[78vh] max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-white">
              {t.projectLabels[lightbox]} <span className="mx-2 text-white/30">—</span>{" "}
              <span className="text-white/50">{lightbox + 1} / 10</span>
            </figcaption>
          </figure>
          <button
            onClick={() => setLightbox((lightbox + 1) % images.length)}
            className="absolute end-4 z-10 grid size-11 place-items-center bg-white/10 text-white hover:bg-white hover:text-[#173d35]"
            aria-label="Next"
          >
            <Icon className="size-5">
              <path d="m9 18 6-6-6-6" />
            </Icon>
          </button>
        </div>
      )}
    </div>
  );
}
