# Harsh Thakur - Full-Stack Developer Portfolio

![Portfolio Banner](public/profile-photo.jpg)

A modern, responsive portfolio built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). Showcasing projects, skills, achievements, and contact information.

---

## 🚀 Features

- **Single Page Application:** Smooth navigation between sections.
- **Responsive Design:** Optimized for all devices.
- **Modern UI:** Uses Tailwind CSS and custom animations.
- **Contact Form:** EmailJS integration for direct messages.
- **Project Showcase:** Highlighted projects with live demos and GitHub links.
- **Achievements & Education:** Academic and extracurricular highlights.
- **Downloadable Resume:** Quick access to resume.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15, React 19
- **Styling:** Tailwind CSS 4, tw-animate-css
- **UI Components:** Radix UI, Lucide Icons
- **Email:** EmailJS
- **TypeScript:** Type safety throughout

---

## 📦 Folder Structure

```
my-app/
├── app/                # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # All React components
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions
├── public/             # Static assets (images, SVGs)
├── .env                # Environment variables
├── package.json        # Project metadata & scripts
├── tsconfig.json       # TypeScript config
├── postcss.config.mjs  # PostCSS config
├── next.config.ts      # Next.js config
└── README.md           # Project documentation
```

---

## 🖥️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure EmailJS:**
   - Create a `.env.local` file with:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view.

---

## ✨ Customization

- **Profile Photo:** Replace `public/profile-photo.jpg` with your own.
- **Resume:** Link your resume in [`components/about.tsx`](components/about.tsx).
- **Projects:** Edit [`components/projects.tsx`](components/projects.tsx) to add or update projects.
- **Contact Info:** Update email and LinkedIn in [`components/contact.tsx`](components/contact.tsx).

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with
