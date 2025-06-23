import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root {
    /* Dark Theme Colors */
    --bg-primary: #0a0a15;
    --bg-secondary: #0f0f20;
    --card-bg: rgba(15, 15, 35, 0.8);
    --card-bg-dark: rgba(8, 8, 20, 0.9);
    --input-bg: rgba(0, 0, 0, 0.3);
    
    /* Text Colors */
    --text-primary: #1920e6;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-muted: rgba(255, 255, 255, 0.5);
    
    /* Accent Colors */
    --accent-color: #31332f;
    --accent-hover: #e91e63;
    --accent-light: #31332f;
    
    /* Status Colors */
    --color-green: #00d4aa;
    --color-warning: #ff9800;
    --color-delete: #f44336;
    --color-info: #2196f3;
    
    /* Border & Shadow */
    --border-color: rgba(255, 255, 255, 0.1);
    --border-hover: rgba(255, 255, 255, 0.2);
    --shadow-light: rgba(0, 0, 0, 0.1);
    --shadow-medium: rgba(0, 0, 0, 0.2);
    --shadow-heavy: rgba(0, 0, 0, 0.4);
    
    /* Legacy support */
    --primary-color: #31332f;
    --primary-color2: rgba(255, 255, 255, 0.7);
    --primary-color3: rgba(255, 255, 255, 0.5);
    --color-grey: rgba(255, 255, 255, 0.4);
    --color-accent: #f56692;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    font-size: clamp(0.9rem, 1.2vw, 1.1rem);
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Custom scrollbar */
    scrollbar-width: thin;
    scrollbar-color: var(--accent-color) var(--bg-secondary);
  }

  /* Custom Scrollbar for Webkit */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, var(--accent-color), var(--accent-hover));
    border-radius: 10px;
    border: 2px solid var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, var(--accent-hover), var(--accent-color));
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2.2rem);
  }

  h3 {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }

  a:hover {
    color: var(--accent-hover);
  }

  a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }

  /* Button focus override */
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(245, 102, 146, 0.3);
  }

  /* Error animations */
  .error {
    color: var(--color-delete);
    animation: shake 0.5s ease-in-out;
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-10px); }
      75% { transform: translateX(10px); }
    }
  }

  /* Success animation */
  .success {
    color: var(--color-green);
    animation: pulse 0.6s ease-in-out;
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  }

  /* Loading animation */
  .loading {
    animation: fadeInOut 1.5s ease-in-out infinite;
    
    @keyframes fadeInOut {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  }

  /* Slide in animations */
  .slide-in-left {
    animation: slideInLeft 0.5s ease-out;
    
    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .slide-in-right {
    animation: slideInRight 0.5s ease-out;
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out;
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  }

  /* Utility classes */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  .flex { display: flex; }
  .flex-column { flex-direction: column; }
  .flex-center { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }
  .flex-between { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
  }
  
  .grid { display: grid; }
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
  
  .gap-1 { gap: 0.5rem; }
  .gap-2 { gap: 1rem; }
  .gap-3 { gap: 1.5rem; }
  .gap-4 { gap: 2rem; }
  
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  
  .p-1 { padding: 0.5rem; }
  .p-2 { padding: 1rem; }
  .p-3 { padding: 1.5rem; }
  .p-4 { padding: 2rem; }
  
  .rounded { border-radius: 8px; }
  .rounded-lg { border-radius: 12px; }
  .rounded-xl { border-radius: 16px; }
  .rounded-full { border-radius: 50%; }
  
  .shadow { box-shadow: 0 4px 6px var(--shadow-light); }
  .shadow-lg { box-shadow: 0 10px 15px var(--shadow-medium); }
  .shadow-xl { box-shadow: 0 20px 25px var(--shadow-heavy); }
  
  /* Responsive utilities */
  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .grid-2, .grid-3, .grid-4 { 
      grid-template-columns: 1fr; 
    }
  }
  
  @media (min-width: 769px) {
    .hide-desktop { display: none !important; }
  }

  /* Selection styling */
  ::selection {
    background: var(--accent-color);
    color: white;
  }

  ::-moz-selection {
    background: var(--accent-color);
    color: white;
  }

  /* Improved form elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Enhanced table styling */
  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
  }

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }

  th {
    background: rgba(245, 102, 146, 0.1);
    color: var(--accent-color);
    font-weight: 600;
  }

  tr:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  /* Code styling */
  code {
    background: var(--card-bg);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    color: var(--accent-color);
  }

  pre {
    background: var(--card-bg);
    padding: 1rem;
    border-radius: 12px;
    overflow-x: auto;
    border: 1px solid var(--border-color);
  }

  pre code {
    background: none;
    padding: 0;
    color: var(--text-primary);
  }
`;