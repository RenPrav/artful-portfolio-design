# Artful Portfolio Design

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases a professional portfolio with sections for about, experience, projects, skills, certifications, and contact information.

## 🚀 Features

- **Modern UI/UX** - Built with shadcn/ui components and Tailwind CSS
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Animations** - Powered by Framer Motion
- **Dark/Light Theme** - Theme switching support via next-themes
- **Single Page Application** - Built with React Router for navigation
- **TypeScript** - Full TypeScript support for type safety
- **Form Validation** - Built with React Hook Form and Zod
- **Testing** - Configured with Vitest and Playwright for E2E testing

## 🛠️ Tech Stack

- **Framework:** React 18.3.1
- **Language:** TypeScript 5.8.3
- **Build Tool:** Vite 5.4.19
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router DOM 6.30.1
- **State Management:** TanStack Query 5.83.0
- **Animations:** Framer Motion 12.38.0
- **Forms:** React Hook Form 7.61.1 with Zod validation
- **Testing:** Vitest (unit tests) + Playwright (E2E tests)

## 📦 Project Structure

```
artful-portfolio-design/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── sections/    # Portfolio section components
│   │   └── art/         # Artistic/visual components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   └── test/            # Test files
├── public/              # Static assets
├── .github/             # GitHub workflows and configs
└── ...config files
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd artful-portfolio-design
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |

## 🧪 Testing

Run unit tests:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🎨 Customization

### Updating Content

Edit the section components in `src/components/sections/`:

- `HeroSection.tsx` - Hero/intro section
- `AboutSection.tsx` - About me section
- `ExperienceSection.tsx` - Work experience
- `ProjectsSection.tsx` - Project showcase
- `SkillsSection.tsx` - Skills display
- `CertificationsSection.tsx` - Certifications
- `ContactSection.tsx` - Contact form

### Styling

- Modify `tailwind.config.ts` for theme customization
- Edit `src/index.css` for global styles
- Update `components.json` for shadcn/ui configuration

## 📱 Portfolio Sections

1. **Hero** - Eye-catching introduction with name and title
2. **About** - Personal bio and background
3. **Experience** - Professional work history
4. **Projects** - Showcase of personal/professional projects
5. **Skills** - Technical skills and competencies
6. **Certifications** - Professional certifications
7. **Contact** - Contact form and social links

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

Connect your repository to Netlify and use the following build settings:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Praveen S - [Your Email]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
