# Manav Kumar Jha - Portfolio Website

A modern, responsive portfolio website built for Manav Kumar Jha, showcasing his expertise as a Data Analyst and Machine Learning Engineer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Working contact form with validation
- **Resume Download**: Direct download functionality for resume
- **Smooth Navigation**: Smooth scrolling between sections
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Radix UI** components with shadcn/ui
- **React Hook Form** with Zod validation
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Express.js** with TypeScript
- **Node.js** runtime
- **Zod** for request validation
- **Custom middleware** for logging

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── navigation.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── certifications.tsx
│   │   │   ├── achievements.tsx
│   │   │   └── contact.tsx
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared TypeScript types
└── configuration files   # Various config files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/manav-portfolio.git
   cd manav-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema (if using database)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your_database_url_here (optional)
```

### Customization

1. **Personal Information**: Update the content in each component file
2. **Styling**: Modify colors in `client/src/index.css`
3. **Resume**: Replace `client/public/resume.pdf` with your resume
4. **Contact Form**: Update the contact form handler in `server/routes.ts`

## 🌟 Sections

1. **Hero Section** - Introduction and CTA buttons
2. **About** - Education and objective
3. **Skills** - Technical and soft skills
4. **Experience** - Professional experience
5. **Projects** - Featured projects
6. **Certifications** - Professional certifications
7. **Achievements** - Notable achievements
8. **Contact** - Contact form and information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Optimized images and assets

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve the files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Manav Kumar Jha**
- Email: meekermanav@gmail.com
- LinkedIn: [linkedin.com/in/manav79](https://linkedin.com/in/manav79)
- GitHub: [github.com/Manavjha20](https://github.com/Manavjha20)
- Phone: +91 8541935212
- Location: Bihar, India

---

Made with ❤️ by Manav Kumar Jha