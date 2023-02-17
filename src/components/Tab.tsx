import React, { ButtonHTMLAttributes, FC } from 'react';

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  text: string;
}

export const Tab: FC<TabProps> = ({ selected, text, ...props }) => {
  return (
    <button
      {...props}
      className={`px-3 py-1 ${
        selected
          ? 'border-b-2 border-brand-1 font-semibold text-brand-1'
          : 'text-gray-400'
      } `}
    >
      {text}
    </button>
  );
};
