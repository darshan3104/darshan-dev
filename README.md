# 🚀 Darshan's Portfolio Website

A modern, interactive portfolio website built with Next.js 16, featuring stunning animations, 3D effects, and a seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Interactive Components** - Engaging visual effects using Framer Motion and GSAP
- **3D Graphics** - Powered by Three.js for immersive experiences
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Performance Optimized** - Built with Next.js 16 and React 19
- **Fully Responsive** - Works flawlessly on all devices

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.0.3
- **UI Library:** React 19.2.0
- **Styling:** TailwindCSS 4.0
- **Animations:** Framer Motion, GSAP
- **3D Graphics:** Three.js
- **Icons:** Lucide React

### UI Components
- **Component Library:** Radix UI
- **Utilities:** clsx, tailwind-merge, class-variance-authority

### Additional Features
- **Email Service:** EmailJS
- **Face Detection:** face-api.js

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/darshan-dev.git
   cd darshan-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > **Note:** Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deployment

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/darshan-dev)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📁 Project Structure

```
darshan-dev/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
├── public/                # Static assets
├── .env                   # Environment variables (not in git)
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Key Components

- **Hero Section** - Eye-catching landing with animated background
- **About Section** - Personal introduction and skills
- **Projects Section** - Portfolio showcase
- **Skills Section** - Technical expertise with visual effects
- **Contact Section** - Interactive contact form with EmailJS integration

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Copy your Service ID, Template ID, and Public Key to `.env`

### Customization

- **Colors:** Edit `app/globals.css` for theme colors
- **Content:** Update components in `components/sections/`
- **Fonts:** Modify font settings in `app/layout.js`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Darshan**

- Website: [darshan.dev](https://darshan.dev)
- GitHub: [@darshan3104](https://github.com/darshan3104)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting Platform
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Three.js](https://threejs.org/) - 3D Graphics Library

---

<div align="center">
  Made with ❤️ by Darshan
  
  ⭐ Star this repo if you like it!
</div>
