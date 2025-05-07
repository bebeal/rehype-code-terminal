import { memo } from "react";
import { TerminalProps } from "./Terminal";

export const InlineTerminal = memo((props: TerminalProps) => {
  const { children = '', className = '' } = props;

  return (
    <span className={`inline-terminal ${className}`}>
      <span className="inline-terminal-text">{children}</span>
    </span>
  );
});
