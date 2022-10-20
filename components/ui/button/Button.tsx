import { FunctionComponent, forwardRef, ForwardedRef } from 'react';

export interface IButton {
  color?: 'primary' | 'secondary' | 'outline';
  className?: string;
  label: string;
}

const Button: FunctionComponent<IButton> = forwardRef(
  (
    { color, label, className, ...props },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        type="button"
        className={['btn', `btn--${color}`, className].join(' ')}
        {...props}
        ref={ref}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
