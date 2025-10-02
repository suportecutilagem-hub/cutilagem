# Replit.md

## Overview

This is a Brazilian Portuguese landing page for an online Russian manicure course ("Cutilagem Russa"). The application is built as a modern full-stack web application using React with TypeScript for the frontend and Express.js for the backend. The landing page is designed to be a high-conversion sales page with animated elements, testimonials, and strong call-to-action buttons directing users to a checkout URL. The page emphasizes scarcity marketing (only 8 spots available) and promotional pricing (R$ 19.90 instead of R$ 297.00).

**Status**: Successfully imported and configured for Replit environment (October 2, 2025)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Extensive use of Radix UI primitives wrapped in shadcn/ui components
- **Animations**: Custom intersection observer-based animations for scroll-triggered effects
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Architecture  
- **Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Hot reloading with Vite integration for development
- **Storage Layer**: Interface-based storage system with in-memory implementation (MemStorage)
- **API Structure**: RESTful API endpoints prefixed with `/api`
- **Error Handling**: Centralized error handling middleware

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Basic user schema with username/password fields
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL connection

### Styling and Design System
- **Theme**: Rose (#BF1E58) and white color scheme as specified in requirements
- **Typography**: Inter font family for clean, professional appearance
- **Icons**: Font Awesome 6 for iconography
- **CSS Variables**: Custom CSS properties for consistent theming
- **Component Library**: shadcn/ui "new-york" style variant

### Development and Build Process
- **Module System**: ES modules throughout the application
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Concurrent development server with hot reloading
- **Production**: Optimized builds with static asset serving

### Replit Environment Setup
- **Port Configuration**: Application runs on port 5000 (mapped to external port 80)
- **Host Configuration**: Server configured to bind to 0.0.0.0 for Replit proxy compatibility
- **Vite Proxy**: Configured with `allowedHosts: true` for iframe preview support
- **Workflow**: "Start application" workflow configured with `npm run dev` on port 5000
- **Deployment**: Autoscale deployment configured with proper build and run scripts
- **Node.js Version**: Node.js 20 module installed

## External Dependencies

### Third-Party Services
- **Payment Processing**: Integration with `pay.cutilagemrussa.com` checkout system
- **Database**: Neon Database serverless PostgreSQL hosting
- **Image CDN**: Unsplash for placeholder testimonial images

### Key Libraries
- **UI Components**: Extensive Radix UI ecosystem for accessible components
- **Form Handling**: React Hook Form with Zod validation
- **Date Management**: date-fns for date formatting and manipulation  
- **Animations**: Embla Carousel for testimonial carousels
- **Development Tools**: Replit-specific plugins for enhanced development experience

### External APIs and Integrations
- **Checkout System**: Direct integration with external payment processor
- **Font Loading**: Google Fonts for Inter typography
- **Icon Library**: Font Awesome CDN integration