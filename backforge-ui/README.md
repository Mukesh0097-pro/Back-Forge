# BackForge - Futuristic Backend Template Marketplace

A production-ready, futuristic frontend for BackForge built with React, Vite, TailwindCSS, and React Three Fiber.

## 🎨 Features

- **Futuristic Neon UI** - Blue-themed cyberpunk design with neon glows and gradients
- **3D Animations** - Interactive 3D scenes with rotating cubes, floating particles, and API lines
- **Responsive Design** - Mobile-first approach with smooth animations
- **Production Ready** - Optimized build with code splitting and lazy loading
- **Type Safe** - Built with TypeScript for better developer experience

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **React Three Fiber** - 3D graphics with Three.js
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **PrismJS** - Syntax highlighting for code blocks

## 📂 Project Structure

```
backforge-ui/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── NeonCube.tsx
│   │   │   ├── FloatingParticles.tsx
│   │   │   ├── APILines.tsx
│   │   │   └── HeroScene.tsx
│   │   ├── cards/
│   │   │   └── TemplateCard.tsx
│   │   ├── code/
│   │   │   └── CodeSnippet.tsx
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   ├── pricing/
│   │   │   └── PricingSection.tsx
│   │   └── ui/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── TemplatesPage.tsx
│   │   ├── TemplateDetailPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── sections/
│   │   ├── FeaturesSection.tsx
│   │   ├── TemplatesShowcase.tsx
│   │   └── CTASection.tsx
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Color Palette

```css
Primary Blue: #3B82F6
Royal Blue: #1D4ED8
Neon Cyan: #22D3EE
Sky Glow: #60A5FA
Purple Accent: #A78BFA
Background Deep: #0B0B0D
Card Background: #15151A
Primary Text: #F8FAFC
Secondary Text: #94A3B8
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Pages

### Home Page (`/`)
- Hero section with 3D scene
- Features grid
- Template showcase
- Pricing section
- CTA section

### Templates Page (`/templates`)
- Search and filter functionality
- Template cards grid
- Language filtering

### Template Detail Page (`/template/:id`)
- Detailed template information
- Code examples with syntax highlighting
- Feature list
- Tech stack display
- Purchase sidebar

### Pricing Page (`/pricing`)
- Three-tier pricing
- FAQ section
- Feature comparison

### About Page (`/about`)
- Mission statement
- Company stats
- Team information

### Contact Page (`/contact`)
- Contact form
- Contact information
- Email integration

## 🎯 Custom Components

### 3D Components
- `NeonCube` - Rotating neon cube with glow effects
- `FloatingParticles` - Particle system for backgrounds
- `APILines` - Animated API route visualization
- `HeroScene` - Complete 3D scene composition

### UI Components
- `TemplateCard` - Template display card with hover effects
- `CodeSnippet` - Syntax-highlighted code blocks
- `PricingSection` - Pricing tier cards
- `Navbar` - Transparent navbar with blur effect
- `Footer` - Minimal footer with neon accent

## 🎨 Custom CSS Classes

### Neon Effects
- `.neon-border-blue` - Blue neon border with glow
- `.neon-border-cyan` - Cyan neon border with glow
- `.glow-text-blue` - Blue glowing text
- `.glow-text-cyan` - Cyan glowing text

### Buttons
- `.btn-primary` - Primary blue button
- `.btn-secondary` - Outlined button
- `.btn-neon` - Neon cyan button

### Cards
- `.card-neon` - Card with neon border
- `.card-glass` - Glass morphism card

### Utilities
- `.glass` - Glass morphism effect
- `.text-gradient-blue` - Blue gradient text
- `.text-gradient-cyber` - Cyberpunk gradient text
- `.cyber-grid` - Cyber grid background

## 🚀 Performance

- Code splitting with React.lazy
- Optimized 3D scenes with React Three Fiber
- Lazy loading for images
- Minified production build
- Tree shaking for unused code

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎭 Animations

- Framer Motion for page transitions
- Smooth hover effects
- 3D scene animations
- Scroll-triggered animations
- Micro-interactions

## 🔧 Configuration

### Tailwind Config
Custom theme with brand colors, shadows, animations, and utilities.

### Vite Config
Optimized build settings with React plugin.

### TypeScript Config
Strict mode enabled for better type safety.

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, reach out at hello@backforge.dev

---

Built with ❤️ by the BackForge team
