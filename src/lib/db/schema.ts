import { pgTable, serial, text, integer, boolean, timestamp, jsonb } from 'drizzle-orm/pg-core';

// Projects tablosu
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  longDescription: text('long_description'),
  image: text('image'),
  category: text('category').notNull(),
  tags: jsonb('tags').$type<string[]>().default([]),
  technologies: jsonb('technologies').$type<string[]>().default([]),
  liveUrl: text('live_url'),
  githubUrl: text('github_url'),
  status: text('status').notNull().default('active'),
  featured: boolean('featured').default(false),
  date: text('date').notNull(),
  client: text('client'),
  duration: text('duration'),
  views: integer('views').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Blog Posts tablosu
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  image: text('image'),
  category: text('category').notNull(),
  tags: jsonb('tags').$type<string[]>().default([]),
  author: text('author').notNull(),
  date: text('date').notNull(),
  readTime: text('read_time'),
  published: boolean('published').default(false),
  views: integer('views').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Testimonials tablosu
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  position: text('position').notNull(),
  company: text('company').notNull(),
  content: text('content').notNull(),
  rating: integer('rating').notNull(),
  image: text('image'),
  date: text('date').notNull(),
  featured: boolean('featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Services tablosu
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  icon: text('icon'),
  features: jsonb('features').$type<string[]>().default([]),
  price: text('price'),
  duration: text('duration'),
  featured: boolean('featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Profile Data tablosu
export const profileData = pgTable('profile_data', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  location: text('location'),
  website: text('website'),
  bio: text('bio'),
  avatar: text('avatar'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Hero Data tablosu
export const heroData = pgTable('hero_data', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  subtitle: text('subtitle').notNull(),
  description: text('description').notNull(),
  skills: jsonb('skills').$type<string[]>().default([]),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Contact Data tablosu
export const contactData = pgTable('contact_data', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  phone: text('phone'),
  website: text('website'),
  location: text('location'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Site Settings tablosu
export const siteSettings = pgTable('site_settings', {
  id: serial('id').primaryKey(),
  siteTitle: text('site_title').notNull(),
  siteDescription: text('site_description').notNull(),
  darkTheme: boolean('dark_theme').default(true),
  animationsEnabled: boolean('animations_enabled').default(true),
  performanceMonitor: boolean('performance_monitor').default(false),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Users tablosu (Admin authentication için)
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  name: text('name').notNull(),
  role: text('role').notNull().default('admin'),
  isActive: boolean('is_active').default(true),
  lastLogin: timestamp('last_login'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;
export type Testimonial = typeof testimonials.$inferSelect;
export type NewTestimonial = typeof testimonials.$inferInsert;
export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;