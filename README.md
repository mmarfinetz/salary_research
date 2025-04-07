# Crypto Industry Salary Report Dashboard

A modern, responsive dashboard showcasing salary and compensation data for various roles in the cryptocurrency industry, based on 2025 market data.

## 🚀 

View the live website [[Crypto Salary Report Dashboard](https://same-9hh93wyvoc8-latest.netlify.app/)](https://crypto-salary-report.vercel.app/)

## 📊 Features

- **Executive Summary**: Overview of compensation trends in the crypto industry
- **Role Comparison**: Detailed salary analysis across different roles
- **Salary Ranges**: Breakdown of total compensation packages
- **Experience Impact**: Salary scales based on experience levels
- **Regional Differences**: Geographic salary variations and top-paying locations
- **Works Cited**: Data sources and methodology information

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices

## 🛠️ Tech Stack

- **React**: Frontend library
- **TypeScript**: Type-safe coding
- **Vite**: Fast development environment and build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Custom charts**: Hand-crafted data visualizations

## 🔧 Development Setup

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/mmarfinetz/salary_research.git
cd salary_research
```

2. Install dependencies
```bash
# Using npm
npm install

# Using Bun (recommended)
bun install
```

3. Start the development server
```bash
# Using npm
npm run dev

# Using Bun
bun run dev
```

4. Open your browser and navigate to http://localhost:5173

## 🏗️ Build

To build the project for production:

```bash
# Using npm
npm run build

# Using Bun
bun run build
```

The build output will be in the `dist` directory.

## 🧪 Future Enhancements

- Dark mode toggle
- Interactive salary comparison calculator
- Collapsible navigation menu for mobile devices
- Animated chart transitions

## 📄 License

MIT

## 🙏 Acknowledgments

Data for this dashboard is synthesized from multiple authoritative sources in the cryptocurrency industry, including CryptoJobsList, Web3.career, BeInCrypto, and Glassdoor.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
