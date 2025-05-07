import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

export interface TooltipProps extends TooltipPrimitive.TooltipProps {
  content?: string | React.ReactNode;
  sideOffset?: number;
  className?: string;
}

export const Tooltip = memo((props: TooltipProps) => {
  const { children, content = '', delayDuration = 10, sideOffset = 4, className = '', ...rest } = props;
  const [tooltipContent, setTooltipContent] = useState<string | React.ReactNode>(content);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTooltipContent(content);
  }, [content]);

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root {...rest}>
        <TooltipPrimitive.Trigger ref={triggerRef} asChild className={className} onPointerDown={onPointerDown}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={sideOffset}
            sticky="always"
            className="tooltip-content"
          >
            <TooltipPrimitive.Arrow className="tooltip-arrow" />
            <div className="tooltip-text">{tooltipContent}</div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
});
