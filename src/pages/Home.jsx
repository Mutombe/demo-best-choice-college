import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  GraduationCap,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  Phone,
  WhatsappLogo,
  MapPin,
  Clock,
  CheckCircle,
  CurrencyDollar,
  Lightbulb,
  Briefcase,
  Heart,
  ChartLineUp,
  Trophy,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  return (
    <span ref={ref}>
      {inView ? count.toLocaleString() : '0'}{suffix}
    </span>
  );
}


/* ================================================================
   1. HERO — Bright & Confident Split Layout
   ================================================================ */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = hero.backgroundImages || [];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-navy-950">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]?.url}
            alt={heroImages[currentSlide]?.alt}
            className="absolute inset-0 w-full h-[130%] object-cover object-center"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/30 z-[1]" />
      </motion.div>

      {/* Decorative amber bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent z-30" />

      {/* Slide dots — bottom left */}
      <div className="absolute bottom-8 sm:bottom-12 left-5 sm:left-8 lg:left-12 z-30 flex items-center gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentSlide ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ y: textY, opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2 rounded-full mb-8 w-fit"
        >
          <Star size={14} weight="fill" className="text-gold-500" />
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
            {hero.badge}
          </span>
        </motion.div>

        {/* Giant title */}
        <div className="overflow-hidden">
          {['MAKE THE', 'BEST CHOICE', 'FOR YOUR CAREER.'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading font-bold leading-[0.9] tracking-tight ${
                  word === 'BEST CHOICE' ? 'text-gold-500' : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 9vw, 7.5rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-white/50 text-sm sm:text-base lg:text-lg max-w-xl mt-8 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-wrap gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold-500 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold rounded-full transition-all duration-300 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/20"
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 border border-white/30 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold rounded-full transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 right-5 sm:right-8 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-heading">Discover</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}


/* ================================================================
   2. COURSES SPOTLIGHT — 6 cards with hover effects
   ================================================================ */
function CoursesSpotlight() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  const courseImages = [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600',
  ];

  const iconMap = {
    CurrencyDollar: CurrencyDollar,
    Lightbulb: Lightbulb,
    Briefcase: Briefcase,
    Heart: Heart,
    GraduationCap: GraduationCap,
    ChartLineUp: ChartLineUp,
  };

  return (
    <section ref={ref} className="bg-navy-900 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="w-10 h-[3px] bg-gold-500 mx-auto mb-6" />
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            COURSES THAT <span className="text-gold-500">BUILD CAREERS</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Industry-accredited, practically taught, and laser-focused on making you job-ready from day one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {servicesPreview.map((service, i) => {
            const Icon = iconMap[service.iconName] || GraduationCap;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
              >
                <Link
                  to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                  className="group relative block bg-navy-950 border border-white/5 overflow-hidden hover:border-gold-500/20 transition-all duration-500"
                >
                  {/* Image strip */}
                  <div className="h-44 sm:h-48 overflow-hidden">
                    <img
                      src={courseImages[i]}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 relative">
                    <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                      <Icon size={20} className="text-gold-500" weight="duotone" />
                    </div>
                    <h3 className="font-heading text-white text-base sm:text-lg font-bold uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-3">{service.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold-500 text-xs uppercase tracking-wider font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>View Course</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-gold-500 font-heading text-sm uppercase tracking-wider font-semibold hover:text-gold-400 transition-colors"
          >
            View All Courses
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   3. STATS BAND — Amber accent counters
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { stats } = siteData;

  return (
    <section ref={ref} className="relative bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <AnimatedCounter target={stat.number.replace(/[^0-9]/g, '')} duration={2} />
                {stat.number.includes('+') && <span className="text-gold-500">+</span>}
                {stat.number.includes('%') && <span className="text-gold-500">%</span>}
              </div>
              <div className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. ABOUT SPLIT — College Story
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
                alt="Best Choice College students collaborating"
                className="w-full aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-5 sm:p-6 rounded-lg shadow-2xl">
              <div className="text-center">
                <div className="font-heading text-3xl sm:text-4xl font-bold leading-none">95%</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 text-white/80">
                  Pass Rate
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] bg-gold-500 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              YOUR BRIGHTEST<br />
              FUTURE <span className="text-gold-500">STARTS HERE.</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Best Choice College was founded in 2012 with a simple but powerful belief: every Zimbabwean
              deserves access to quality, affordable, career-focused education. What started as a small
              institution has grown into Harare's most trusted college.
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-lg">
              Our approach is different. We do not teach for exams. We teach for careers. Every programme
              is designed in consultation with employers, ensuring our graduates possess the exact skills
              the market demands.
            </p>

            <div className="w-full h-px bg-white/10 my-8" />

            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold">2012</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Founded</div>
              </div>
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold">8K+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Graduates</div>
              </div>
              <div>
                <div className="text-gold-500 font-heading text-3xl sm:text-4xl font-bold">25+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Courses</div>
              </div>
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mt-8 text-gold-500 font-heading text-sm uppercase tracking-wider font-semibold hover:text-gold-400 transition-colors"
            >
              Our Full Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. WHY BEST CHOICE — Feature grid
   ================================================================ */
function WhyBestChoiceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { whyChooseUs } = siteData;

  return (
    <section ref={ref} className="bg-navy-900 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="w-10 h-[3px] bg-gold-500 mx-auto mb-6" />
          <h2
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            THE <span className="text-gold-500">BEST</span> CHOICE IS CLEAR
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {whyChooseUs.points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-navy-950 border border-white/5 p-6 sm:p-8 hover:border-gold-500/10 transition-colors duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <CheckCircle size={24} weight="fill" className="text-gold-500" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-base sm:text-lg font-bold uppercase tracking-wide mb-2">
                    {point.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. TESTIMONIALS — Carousel with large quote
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="w-10 h-[3px] bg-gold-500 mx-auto mb-6" />
          <h2
            className="font-heading font-bold text-white leading-tight mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}
          >
            STUDENT <span className="text-gold-500">VOICES</span>
          </h2>

          <Quotes size={40} weight="fill" className="text-gold-500/20 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[2px] bg-gold-500 mb-2" />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="text-gold-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors" aria-label="Previous">
              <CaretLeft size={16} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-gold-500' : 'w-2 bg-white/15 hover:bg-white/30'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors" aria-label="Next">
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   7. CTA — Full-width background
   ================================================================ */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={homeCta.backgroundImage}
          alt={homeCta.backgroundAlt}
          className="w-full h-[130%] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-white leading-[0.9] mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            YOUR CAREER<br />
            <span className="text-gold-500">DESERVES THE BEST.</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            {homeCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold rounded-full transition-all duration-300 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/20"
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold rounded-full transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/60"
            >
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME — Assembled
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <CoursesSpotlight />
      <StatsBand />
      <AboutSplit />
      <WhyBestChoiceSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
