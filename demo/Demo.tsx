import { MDXProvider } from '@mdx-js/react';
import React, { useEffect, useState } from 'react';
import { InlineTerminal, Terminal } from '../src/index';
import Content from './Content.md';

import '@wooorm/starry-night/style/both';
import '../dist/assets/rehype-code-terminal.css';
import './assets/styles.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="theme-toggle"
      type="button"
      aria-label={`Toggle theme`}
    >
      {isDarkMode ? (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  )
};

export const Demo = () => {
  return (
    <MDXProvider components={{ Terminal, InlineTerminal }}>
      <div className="demo-container">
        <ThemeToggle />
        <div className="demo-display">
          <Content />
        </div>
      </div>
    </MDXProvider>
  );
}
