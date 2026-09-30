export type Locale = 'fr' | 'en';

export interface NavLink {
  label: string;
  path: string;
  externalUrl?: string;
  children?: NavLink[];
}

export interface UiStrings {
  tagline: string;
  nav: NavLink[];
  languageSwitchLabel: string;
  footer: {
    orgTitle: string;
    addressLines: string[];
    hoursTitle: string;
    hoursLines: string[];
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
    socialTitle: string;
    copyright: string;
  };
  common: {
    readMore: string;
    submit: string;
    submitSuccess: string;
    requiredField: string;
    invalidEmail: string;
    backToList: string;
  };
  notFound: {
    title: string;
    message: string;
    homeLink: string;
  };
}

export interface RichSection {
  heading?: string;
  paragraphs: string[];
}

export interface HomeContent {
  heroTitle: string;
  heroImage: string;
  heroTagline: string;
  aboutTeaser: RichSection;
  aboutLinks: NavLink[];
  hoursNotice: string;
  hoursTitle: string;
  hours: { day: string; time: string }[];
}

export interface AboutIndexContent {
  title: string;
  intro: RichSection;
  links: NavLink[];
}

export interface OrganizationContent {
  title: string;
  body: RichSection;
}

export interface TeamMember {
  name: string;
  image?: string;
  role: string;
  quote: string;
  attribution?: string;
}

export interface TeamContent {
  title: string;
  members: TeamMember[];
}

export interface BoardMember {
  name: string;
  role: string;
  quote?: string;
  attribution?: string;
}

export interface BoardContent {
  title: string;
  members: BoardMember[];
}

export interface CareerContent {
  title: string;
  body: RichSection;
  form: {
    nameLabel: string;
    emailLabel: string;
    positionLabel: string;
    messageLabel: string;
    submitLabel: string;
  };
}

export interface ServicesIndexContent {
  title: string;
  services: { title: string; excerpt: string; path: string }[];
}

export interface Testimonial {
  title: string;
  body: string;
  attribution: string;
}

export interface ServiceDetailContent {
  title: string;
  intro: string[];
  serviceDescription: string;
  serviceItems: string[];
  eligibility: string;
  frequency: string;
  duration: string;
  ctaLabel?: string;
  ctaPath?: string;
  testimonials?: Testimonial[];
  fundedBy?: string;
}

export interface ResourcesIndexContent {
  title: string;
  intro?: string;
  links: NavLink[];
}

export interface ResourceLink {
  label: string;
  url: string;
  description?: string;
  address?: string;
}

export interface ResourceListContent {
  title: string;
  intro?: string[];
  groups: { heading?: string; items: ResourceLink[] }[];
}

export interface PolicyArticle {
  number?: string;
  heading?: string;
  paragraphs: string[];
}

export interface PolicyChapter {
  heading: string;
  articles: PolicyArticle[];
}

export interface PolicyContent {
  title: string;
  adoptedNote?: string;
  chapters: PolicyChapter[];
  downloadLabel?: string;
  downloadUrl?: string;
  contactNote?: string[];
}

export interface ContactContent {
  title: string;
  orgName: string;
  addressLines: string[];
  phoneLabel: string;
  emailLabel: string;
  hoursTitle: string;
  hours: { day: string; time: string }[];
  form: {
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitLabel: string;
    mailInstructions: string;
    mailNotice: string;
  };
}

export interface BlogPostSummary {
  slug: string;
  title: string;
  author?: string;
  excerpt: string;
}

export interface BlogPost extends BlogPostSummary {
  paragraphs: string[];
}

export interface BlogListContent {
  title: string;
  posts: BlogPostSummary[];
}
