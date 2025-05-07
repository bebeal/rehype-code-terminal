import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { CarbonIcons } from './CarbonIcons';
import { Tooltip } from './Tooltip';

interface CopyButtonProps {
  value: string;
  tooltip?: string;
  tooltipSuccess?: string;
  className?: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo(({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={`copy-button-base ${className}`} {...props}>
      {children}
    </button>
  );
});

export const CopyButton = memo(({ value, tooltip = 'Copy', tooltipSuccess = 'Copied!', className, ...rest }: CopyButtonProps) => {
  const [tooltipMessage, setTooltipMessage] = useState<string>(tooltip);
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    if (hasCopied) {
      timeout = setTimeout(() => {
        setHasCopied(false);
        setTooltipMessage(tooltip);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [hasCopied, tooltip]);

  const onClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (!navigator.clipboard) {
        console.error('Clipboard API not available');
        return;
      }
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
      setTooltipMessage(tooltipSuccess);
      setAnimationKey((prev) => prev + 1);
    },
    [tooltipSuccess, value],
  );

  const CopyButton = useMemo(() => {
    return (
      <Button className={`copy-button ${className || ''}`} onClick={onClick} {...rest}>
        <div key={animationKey} className={`copy-button-inner ${hasCopied ? 'copied' : ''}`}>
          {hasCopied ?
            <CarbonIcons.CopySuccess className="copy-icon copy-icon-success" /> :
            <CarbonIcons.Copy className="copy-icon" />
          }
        </div>
      </Button>
    );
  }, [animationKey, className, hasCopied, onClick, rest]);

  return tooltip ? <Tooltip content={tooltipMessage}>{CopyButton}</Tooltip> : CopyButton;
});
