# Premium Editorial Portfolio — Shahanwaj Khan

A modern, high-end, editorial-style personal portfolio website built with semantic HTML5, vanilla CSS3, and modern vanilla JavaScript. The aesthetic focuses on sleek typography, generous whitespace, overlapping layers, and smooth micro-interactions inspired by Awwwards-style developer portfolios.

## 🚀 Live Demo & Local Launch

Since this portfolio utilizes modular structures and custom cursor/interactive elements, it is recommended to run the project using a local development server to ensure all transitions and resources render correctly.

### Method 1: Node.js (serve) - Recommended
Run the local server using npm in the project directory:
```bash
npx serve .
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Method 2: Python HTTP Server
If Python is installed on your machine, launch a quick server:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Method 3: VS Code Live Server Extension
If you are using Visual Studio Code, right-click `index.html` and select **"Open with Live Server"**.

---

## 📂 Project Directory Structure

```
MyPortfolio/
│
├── index.html            # Main markup page containing semantic layout sections
├── css/
│   └── style.css         # Typography, layout grids, responsive design variables
├── js/
│   └── script.js         # Interactive scroll events, preloader, counters, validation
├── assets/
│   ├── profile.jpg       # Main profile picture (copied from public/images/portrait.jpg)
│   ├── resume.pdf        # Downloadable resume placeholder
│   ├── project-1.jpg     # Mockup for SkillGuard AI
│   ├── project-2.jpg     # Mockup for University Management System
│   ├── project-3.jpg     # Mockup for Cricket Management System
│   └── project-4.jpg     # Mockup for AI Smart Parking Assistant
│
└── README.md             # Project documentation (this file)
```

---

## ✨ Features & Interactions

1. **Elegant Typography & Layout**: Combined styling using *Cormorant Garamond* (elegant serif italics), *Bebas Neue* (bold display headings), and *Inter* (modern, readable body copy) over a warm off-white cream canvas.
2. **Preloader Animation**: A custom preloader that simulates a loading timeline and slides out gracefully.
3. **Cursor Parallax**: The hero profile picture reacts subtly to mouse-coordinates on desktop viewports.
4. **Interactive Custom Cursor**: A dual-ring cursor tracking system that reacts dynamically with click animations and enlarges when hovering over clickable elements.
5. **Active Link Indicator & Scroll Progress**: Sticky navbar link updates dynamically based on the section currently visible in the viewport, coupled with a top progress bar.
6. **Animated Statistics Counter**: Intersection-observer triggers count-up animations for key metrics (completed projects, technologies, certifications, problems solved) when they enter the screen.
7. **Magnetic Button Hover**: Hovering over core CTA buttons applies a magnetic pull toward the user's cursor.
8. **Contact Form Validation**: Full front-end verification checking email structures, empty inputs, displaying clean real-time errors and successful prompt banners.
9. **Responsive Grid Layouts**: Responsive grids that wrap and align seamlessly from wide-screen desktops down to mobile screens.
10. **A11y & Motion Reduction**: Built with accessibility in mind (ARIA labels, keyboard-navigable links) and honors the OS setting `prefers-reduced-motion` to disable heavier animations.
