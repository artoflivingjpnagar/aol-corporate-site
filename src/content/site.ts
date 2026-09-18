/**
 * ALL site copy, prices, contact details and photos live here.
 * Edit this file to change what the site says — components only handle layout.
 */
import type { ImageMetadata } from 'astro';

import logo from '../assets/brand/aol-logo.png';
import stockCalm from '../assets/photos/stock-calm.jpg';
import stockStress from '../assets/photos/stock-stress.jpg';
import centreConversation from '../assets/photos/centre-conversation.jpg';
import centreBreathing from '../assets/photos/centre-breathing.jpg';
import centreMeditation from '../assets/photos/centre-meditation.jpg';
import centreCircle from '../assets/photos/centre-circle.jpg';
import centreWelcome from '../assets/photos/centre-welcome.jpg';

// ---------------------------------------------------------------- types

/** A line with a bold lead-in, e.g. "**Sleeping less**, and waking up tired". */
export interface BoldLine {
  bold: string;
  rest: string;
}

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export type IconName = 'moon' | 'pulse' | 'alert' | 'people' | 'info';

// ---------------------------------------------------------------- contact

export const contact = {
  phoneDisplay: '+91-9985951691',
  phoneTel: '+919985951691',
  /** Country code + number, digits only: used for WhatsApp links. */
  whatsapp: '919985951691',
  email: 'artofliving.jpnagar@gmail.com',
  centreName: 'Art of Living Center of Happiness',
  area: 'BTM Layout',
  landmark: 'near Vega City Mall',
  city: 'Bengaluru',
  mapsLink: 'https://maps.app.goo.gl/evToxBL9TFpjGjU58',
  /** Exact pin: embedding by coordinates avoids Google guessing a different "Art of Living". */
  mapEmbed: 'https://maps.google.com/maps?q=12.9109034,77.6012008&z=16&output=embed',
} as const;

// ---------------------------------------------------------------- page meta

export const meta = {
  title: 'Happiness at Work — Art of Living BTM Layout',
  description:
    "A structured, proven program for your people's sleep, stress, focus and relationships. Corporate offering from the Art of Living centre in BTM Layout, Bengaluru.",
};

// ---------------------------------------------------------------- nav

export const nav = {
  logo: { src: logo, alt: 'The Art of Living' } satisfies Photo,
  tag: contact.area,
  links: [
    { label: 'Why', href: '#why' },
    { label: 'The Program', href: '#program' },
    { label: 'The Centre', href: '#centre' },
    { label: 'How to Engage', href: '#engage' },
  ] satisfies LinkItem[],
  cta: { label: 'Book an intro session', href: '#contact' } satisfies LinkItem,
};

// ---------------------------------------------------------------- hero

export const hero = {
  eyebrow: 'A proposal for HR leaders & business owners',
  headline: { plain: 'Health is more than the', accent: 'absence of disease.' },
  lead: "Those of us who hustle at work know the feeling. We're often:",
  pains: [
    { bold: 'Sleeping less', rest: ', and waking up tired' },
    { bold: 'Stretched thin', rest: ', with little time left for the goals we care about beyond work' },
    { bold: 'Easily distracted', rest: ", and getting less done than we'd like" },
    { bold: "Carrying the day's stress", rest: ' home to the people we love' },
    { bold: 'Running on empty', rest: ', yet still showing up every day' },
  ] satisfies BoldLine[],
  closing: `Nobody ever taught us how to handle this. There's a structured, proven way to learn, right here in ${contact.area}, ${contact.landmark}.`,
  primaryCta: { label: 'Book a free 1-hour intro session', href: '#contact' } satisfies LinkItem,
  secondaryCta: { label: 'See how it works', href: '#engage' } satisfies LinkItem,
  photo: { src: stockCalm, alt: 'A relaxed professional leaning back at his desk' } satisfies Photo,
};

// ---------------------------------------------------------------- 01 · the gap

export const gap = {
  eyebrow: '01 · The gap',
  title: "A clean health check-up doesn't mean a healthy employee.",
  intro:
    'Real wellbeing shows up in four places every day at work. Each one affects focus, attendance and how people treat each other.',
  photo: { src: stockStress, alt: 'A stressed employee holding their head at a laptop' } satisfies Photo,
  pillars: [
    { icon: 'moon', title: 'Sleep', text: 'Waking up rested, not wired. Tired people make more mistakes and have shorter fuses.' },
    { icon: 'pulse', title: 'Anxiety', text: 'Staying steady when deadlines, targets and pressure pile up.' },
    { icon: 'alert', title: 'Uncertainty', text: 'Handling change, restructuring and the unknown without freezing up.' },
    { icon: 'people', title: 'Relationships', text: 'Getting along with colleagues, managers and family, both at work and at home.' },
  ] satisfies { icon: IconName; title: string; text: string }[],
  punchline: 'We were taught maths, science and spreadsheets. Nobody taught us how to handle our own minds.',
};

// ---------------------------------------------------------------- 02 · the program

export const program = {
  eyebrow: '02 · The answer',
  title: 'The Art of Living Happiness Program',
  /** `highlight` is rendered in bold inside the intro. */
  intro: {
    before: 'A structured, experiential program built around ',
    highlight: 'Sudarshan Kriya',
    after:
      ", a rhythmic breathing technique. It has been taught to millions of people in over 180 countries and has been studied in independent research. People don't just hear about it; they practise it and take it home.",
  },
  learn: [
    {
      title: 'Sudarshan Kriya™',
      text: "The world's most effective breathing technique. Feel your mind become calm and present, instantly. Backed by science.",
      link: { label: 'Read the research →', href: 'https://www.artofliving.org/research-sudarshan-kriya' },
    },
    { title: 'Breathing techniques for the moment', text: 'Quick tools to calm down before a tough meeting, call or conversation.' },
    { title: 'Guided meditation', text: 'Easy to learn, even for people who "can\'t sit still."' },
    {
      title: 'Practical wisdom for daily life',
      text: 'Simple ideas for handling emotions, conflict and difficult people, taught through fun, interactive, hands-on group processes rather than lectures.',
    },
  ] satisfies { title: string; text: string; link?: LinkItem }[],
  facts: [
    {
      label: 'Format',
      value: 'Taught over Fri · Sat · Sun',
      text: `In person at the ${contact.area} centre. We sometimes also run longer courses with more modules.`,
    },
    {
      label: 'After the program',
      value: 'Free follow-ups for life',
      text: `Every Sunday at our ${contact.area} centre, and at any Art of Living centre in India.`,
    },
    {
      label: 'Who can join',
      value: 'Anyone 18+',
      text: 'Best suited to the young, and the young at heart. No upper age limit, and no flexibility, experience or equipment needed.',
    },
  ] satisfies { label: string; value: string; text: string }[],
};

// ---------------------------------------------------------------- glimpses of the centre

/** `ratio` = width / height of the photo; tiles in a row share a height and grow by ratio. */
export interface GalleryPhoto extends Photo {
  ratio: number;
  /** Mobile mosaic slot: "wide" spans both columns, "tall" spans two rows, "half" fills one cell. */
  slot: 'wide' | 'tall' | 'half';
  /** Position in the 2-column mobile mosaic (the video is always first). */
  mobileOrder: number;
}

export const gallery = {
  eyebrow: 'Glimpses of the centre',
  title: 'Where your people will learn.',
  intro: `Real sessions at our Art of Living centre in ${contact.area}, ${contact.landmark}. It is a short drive from most offices in South ${contact.city}.`,
  video: {
    src: '/media/centre-session.mp4',
    poster: '/media/centre-session-poster.jpg',
    ratio: 848 / 478,
    label: 'A group session in progress at the centre',
  },
  /** Desktop: row 1 sits beside the video, row 2 is its own row. */
  rowOne: [
    { src: centreConversation, alt: 'A teacher chatting with participants', ratio: 0.8, slot: 'tall', mobileOrder: 1 },
    { src: centreBreathing, alt: 'Participants doing a breathing practice', ratio: 1280 / 960, slot: 'half', mobileOrder: 2 },
  ] satisfies GalleryPhoto[],
  rowTwo: [
    { src: centreMeditation, alt: 'A group meditating with eyes closed', ratio: 1600 / 898, slot: 'wide', mobileOrder: 4 },
    { src: centreCircle, alt: 'Participants talking and laughing during a session', ratio: 1600 / 864, slot: 'wide', mobileOrder: 5 },
    { src: centreWelcome, alt: 'Participants gathering in the hall', ratio: 1280 / 720, slot: 'half', mobileOrder: 3 },
  ] satisfies GalleryPhoto[],
};

// ---------------------------------------------------------------- 03 · how to engage

export const engage = {
  eyebrow: '03 · How your organisation engages',
  title: 'Three simple steps. No long contracts, no lock-in.',
  intro: 'Start with one hour and zero cost. Only people who are genuinely interested go further.',
  steps: [
    {
      title: 'Free intro session',
      text: 'We come to your office (or host your team) for a 1-hour session. Your people experience a guided breathing practice and learn what the program offers.',
      tag: '1 hour · no cost',
    },
    {
      title: 'Interested people register',
      text: 'No pressure and no quotas. Anyone who wants to continue signs up on our registration portal for an upcoming batch.',
      tag: 'Opt-in only',
    },
    {
      title: 'Program + lifelong support',
      text: 'Participants complete the Happiness Program and can attend Sunday follow-up sessions at the centre for life.',
      tag: 'Free follow-ups for life',
    },
  ] satisfies { title: string; text: string; tag: string }[],
  options: [
    {
      label: 'Option A',
      title: 'Employee-funded',
      price: { amount: '₹2,500', unit: 'per participant' },
      points: [
        'Zero cost to the company',
        'You host the intro session; we handle everything else',
        'Includes free Sunday follow-ups for life',
      ],
    },
    {
      label: 'Option B · Recommended',
      title: 'Co-invest in your people',
      featured: true,
      split: [
        { amount: '₹1,250', who: 'paid by the company' },
        { amount: '₹1,250', who: 'paid by the employee' },
      ],
      points: [
        'A visible wellbeing benefit at half the cost',
        'Both sides chip in, so people are more likely to show up and keep practising',
        'Includes free Sunday follow-ups for life',
      ],
    },
  ] satisfies PricingOption[],
  note: {
    bold: 'every participant registers individually on our portal',
    before: 'In both options, ',
    after:
      ". Under Option B, your team decides how the company's share is paid (reimbursement, payroll or sponsorship). We keep our side simple.",
  },
  audiences: [
    {
      title: 'For HR & People teams',
      text: 'A credible wellbeing initiative you can launch in a week: one intro session, an opt-in sign-up and no vendor overhead. You get a benefit employees actually use after the launch week.',
    },
    {
      title: 'For MSME founders & owners',
      text: "In a small team, every person counts. When one person is stressed or burnt out, everyone feels it. For as little as ₹1,250 per person, give your team a skill they'll use for life, just a short drive from your office.",
    },
  ] satisfies { title: string; text: string }[],
};

export interface PricingOption {
  label: string;
  title: string;
  featured?: boolean;
  price?: { amount: string; unit: string };
  split?: { amount: string; who: string }[];
  points: string[];
}

// ---------------------------------------------------------------- contact section + form

export const contactSection = {
  eyebrow: 'Talk to us',
  title: 'Book your free intro session.',
  intro: "Tell us a little about your team and we'll get back within one working day to fix a date.",
  form: {
    teamSizes: ['Under 25', '25–100', '100–500', '500+'],
    interests: ['Free intro session', 'Option A · Employee-funded', 'Option B · Co-invest', 'Just exploring'],
    submitLabel: 'Send on WhatsApp',
    hint: 'Opens WhatsApp with your details pre-filled. Just press Send.',
    /** Opening line of the WhatsApp message the visitor sends you. */
    greeting: "Hi, I'd like to book a Happiness Program intro session.",
  },
};

// ---------------------------------------------------------------- footer

export const footer = {
  left: `© Art of Living · ${contact.area} Centre, ${contact.city}`,
  right: 'Happiness Program · Corporate Engagement',
};
