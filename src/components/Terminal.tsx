import { memo } from 'react';
import { CopyButton } from './CopyButton';
import { CodeLanguageAliases, CodeLanguageProperties } from './LanguageIcons';

export interface TerminalProps {
  children: string;
  language?: string;
  className?: string;
}

export const Terminal = memo((props: TerminalProps) => {
  const { children = '', language, className } = props;
  const id = `terminal-${language}`;
  const codeLanguage: CodeLanguageProperties = CodeLanguageAliases[language || 'jsx'];

  return (
    <section id={id} className={`terminal-root ${className}`}>
      <div className="terminal-header">
        <div className="terminal-header-left">
        {codeLanguage?.Icon && codeLanguage?.href && codeLanguage?.name && (
            <a
              href={codeLanguage.href}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-language-link"
            >
              <codeLanguage.Icon className="terminal-language-icon" />
              <span className="terminal-language-name">{codeLanguage.name}</span>
            </a>
          )}
        </div>
        <div className="terminal-header-title">
          Terminal.<span className="terminal-header-extension">{codeLanguage?.extensions?.[0] || 'jsx'}</span>
        </div>
        <div className="terminal-header-right">
          <CopyButton value={children} />
        </div>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </section>
  );
});
