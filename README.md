# Data Science Club Event Website

A modern, responsive event website built for the Data Science Club's upcoming event. This website provides comprehensive information about the event, speakers, schedule, and registration details with an interactive and engaging user experience.

## Features

### Core Features
- **Hero Section**: Eye-catching landing area with event name, compelling tagline, and prominent "Register Now" call-to-action
- **Navigation Bar**: Intuitive navbar for seamless navigation across all sections
- **About the Event**: Detailed information about the event purpose, goals, and reasons to attend
- **Speakers & Guests**: Professional profiles showcasing keynote speakers, mentors, and judges
- **Schedule & Agenda**: Comprehensive timeline of event sessions and activities
- **Registration Section**: User-friendly registration form and join process
- **Venue & Contact**: Complete location details with maps (offline events) or platform information (online events)
- **Footer**: Social media links and essential contact information

### Enhanced Features
- **Interactive Elements**: Hover effects, smooth animations, and engaging micro-interactions
- **Collapsible Schedule**: Expandable session details for better content organization
- **Speaker Cards**: Interactive speaker profile cards with detailed information
- **Countdown Timer**: Real-time countdown to build event anticipation
- **Responsive Design**: Optimized viewing experience across desktop, tablet, and mobile devices
- **Modern Framework Integration**: Built with contemporary front-end technologies

## Tech Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Version Control**: Git
- **Deployment**: Vercel

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/data-science-event-website.git
   cd data-science-event-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open browser**
   Navigate to `http://localhost:8080` to view the website

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
DataScienceTask/
├── .gitignore
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── placeholder.svg
│   └── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Registration.tsx
│   │   ├── Schedule.tsx
│   │   ├── Speakers.tsx
│   │   ├── ThreeBackground.tsx
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   └── Venue.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── vite-env.d.ts
├── static-event-website.html
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Usage

### Customization

1. **Event Information**: Update event details in the configuration files or component props
2. **Speakers**: Add speaker information and photos in the speakers section
3. **Schedule**: Modify the agenda timeline and session details
4. **Styling**: Customize colors, fonts, and animations in the CSS/SCSS files
5. **Content**: Update all text content to match your specific event

### Key Sections

- **Hero**: Modify the main headline, tagline, and CTA button text
- **About**: Update event description, objectives, and benefits
- **Speakers**: Add speaker bios, photos, and social links
- **Schedule**: Configure event timeline and session descriptions
- **Registration**: Connect to your registration platform or form handler
- **Venue**: Update location details, maps, or online platform information

## Live Demo

https://data-science-task-virid.vercel.app

## Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Interactive Features

- **Smooth Scrolling**: Navigate seamlessly between sections
- **Hover Effects**: Interactive buttons and cards
- **Animations**: Entrance animations using CSS/JavaScript
- **Countdown Timer**: Dynamic countdown to event date
- **Collapsible Content**: Expandable schedule and FAQ sections
- **Form Validation**: Client-side validation for registration forms
