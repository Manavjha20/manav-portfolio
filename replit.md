# Portfolio Website - replit.md

## Overview

This is a modern, responsive portfolio website built for Manav Kumar Jha, a Data Analyst and Machine Learning Engineer. The application showcases professional experience, skills, projects, and achievements in a clean, professional design. It's built as a full-stack application with a React frontend and Express backend, featuring a contact form and smooth scrolling navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: Radix UI components with shadcn/ui for consistent, accessible UI
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Build Process**: esbuild for efficient production builds
- **Request Logging**: Custom middleware for API request logging

## Key Components

### Frontend Structure
- **Single Page Application**: All content on one scrollable page with smooth navigation
- **Responsive Design**: Mobile-first approach with breakpoint-based styling
- **Component Organization**: Modular components for each section (Hero, About, Skills, Experience, Projects, etc.)
- **UI Components**: Comprehensive set of reusable components from shadcn/ui
- **Accessibility**: Built-in accessibility features from Radix UI primitives

### Backend Structure
- **API Routes**: RESTful endpoints for contact form submission
- **Validation**: Zod schema validation for incoming requests
- **Error Handling**: Centralized error handling middleware
- **Development Server**: Vite integration for seamless development experience

## Data Flow

### Contact Form Flow
1. User fills out contact form with name, email, and message
2. Frontend validates data using Zod schema
3. Form data is sent to `/api/contact` endpoint
4. Backend validates data again and logs the submission
5. Success/error response is returned to frontend
6. User sees toast notification with result

### Static Content
- All portfolio content is statically defined in React components
- No external data fetching required for main content
- Images and assets served from public directory

## External Dependencies

### Frontend Dependencies
- **UI/UX**: Radix UI primitives, Tailwind CSS, Lucide React icons
- **Forms**: React Hook Form, Zod validation
- **State**: TanStack React Query for server state
- **Routing**: Wouter for client-side navigation
- **Utilities**: clsx, class-variance-authority for styling utilities

### Backend Dependencies
- **Server**: Express.js with CORS and body parsing
- **Database**: Drizzle ORM with PostgreSQL support (configured but not actively used)
- **Validation**: Zod for request validation
- **Development**: tsx, esbuild for TypeScript compilation

### Database Configuration
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Basic user schema defined in shared directory
- **Connection**: Neon Database serverless connection configured
- **Storage**: In-memory storage implementation for development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Frontend assets served by Express in production

### Environment Configuration
- **Development**: Vite dev server with HMR and Express API
- **Production**: Express serves both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `dev`: Start development server with hot reload
- `build`: Build both frontend and backend for production
- `start`: Start production server
- `db:push`: Push database schema changes

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (optional, currently using in-memory storage)
- Environment variables for database connection
- Static file serving capability

## Technical Decisions

### Why React with TypeScript
- **Type Safety**: TypeScript provides compile-time error checking
- **Developer Experience**: Excellent tooling and IDE support
- **Component Reusability**: React's component model fits portfolio structure well

### Why Vite
- **Fast Development**: Instant server start and HMR
- **Optimized Builds**: Efficient production bundles
- **Modern Tooling**: ESM support and plugin ecosystem

### Why Tailwind CSS
- **Utility-First**: Rapid styling without custom CSS
- **Consistency**: Design system through utility classes
- **Responsive**: Mobile-first responsive design patterns

### Why Express.js
- **Simplicity**: Minimal setup for API endpoints
- **Flexibility**: Easy to extend with additional features
- **Integration**: Works well with Vite development server

### Why Radix UI + shadcn/ui
- **Accessibility**: Built-in ARIA compliance and keyboard navigation
- **Customization**: Unstyled primitives allow custom styling
- **Quality**: Well-tested, production-ready components