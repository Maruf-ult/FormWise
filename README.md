# 🚀 FormWise — Intelligent Form Automation Extension

FormWise is a high-performance, context-aware Chrome Extension built using **React 18**, **Vite**, and **Faker.js**.  
It streamlines development and QA workflows by instantly populating complex web forms with realistic data, eliminating the limitations of basic “lorem ipsum” generators.

---

## 🚀 Tech Stack

### Core Framework
- **React 18** — Powers a reactive and modular popup UI  
- **Vite** — Optimized build tool producing a clean, lightweight extension bundle  
- **TypeScript 5** — Strict type safety across UI, content scripts, and background logic  

---

## 🧩 Main Dependencies

### UI & Styling
- **Tailwind CSS 4** — Utility-first styling for a modern extension interface  
- **Lucide React** — Minimalist icon set for improved UX  
- **Radix UI** — Accessible, unstyled UI primitives  

### Data Generation
- **Faker.js v9** — Generates realistic names, emails, phone numbers, addresses, and more  

### Chrome Integration
- **Chrome Extension API (Manifest V3)** — Secure and performant extension architecture  
- **@types/chrome** — Full TypeScript support for Chrome APIs  

---

## ⚙️ Development Tools
- **ESLint 9** — Enforces clean, strict TypeScript (no `any` usage)  
- **PostCSS** — Advanced CSS processing for Tailwind  
- **Rollup** — Handles multiple entry points (Popup, Content, Background)  

---

## 🧠 Scripts

| Command | Description |
|------|------------|
| `npm run dev` | Run Vite in watch mode |
| `npm run build` | Build the optimized `dist` folder |
| `npm run lint` | Run TypeScript and ESLint checks |
| `npm run preview` | Preview built assets |

---

## 🛠️ Features & Implementation

### Smart Context Detection
FormWise analyzes `id`, `name`, and `placeholder` attributes to automatically detect the expected input type (email, name, phone number, address, etc.) and fills it with realistic data.

### Framework Compatibility
To support modern frameworks such as **React**, **Vue**, and **Angular**, FormWise manually dispatches DOM events so that internal state managers remain in sync:

```ts
element.dispatchEvent(new Event('input', { bubbles: true }));
element.dispatchEvent(new Event('change', { bubbles: true }));
This ensures values are correctly registered by controlled components and form libraries.
```

### ⚙️Installation  
 1. **Clone the repository**  
   ```bash
  git clone https://github.com/Maruf-ult/formwise.git
  cd formwise

2. Install Dependencies

   ```bash
      npm install
   ```

3. Build the Extension

   ```bash
     npm run build
   ```

4. Install frontend dependencies:
   
   ```bash
   cd frontend
   npm install
   ```

### Load the Extension into Chrome
 1. Open Chrome and navigate to chrome://extensions/
 2. Enable Developer Mode (toggle in the top-right corner).
 3. Click Load unpacked.
 4. Select the generated dist folder in your project directory.

  

