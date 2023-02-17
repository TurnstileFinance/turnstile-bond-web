import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export enum ButtonVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { text, className, variant, ...rest } = props;
  return (
    <button
      type="button"
      {...rest}
      className={twMerge(
        'rounded-full py-3 px-6 transition-all disabled:border-none disabled:bg-slate-100 disabled:text-slate-400',
        variant === ButtonVariant.SOLID && 'bg-brand-1 text-brand-black',
        variant === ButtonVariant.OUTLINE &&
          'border border-brand-1 text-brand-1 hover:bg-brand-1 hover:text-brand-black hover:shadow-[0_0_50px_rgba(188,255,160,0.5)] active:bg-brand-1',
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
