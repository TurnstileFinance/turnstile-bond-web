import React, { ButtonHTMLAttributes, FC } from 'react';

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  text: string;
}

export const Tab: FC<TabProps> = ({ selected, text, ...props }) => {
  return (
    <button
      {...props}
      className={`h5 rounded-full px-10 py-1 font-bold shadow-md transition-all hover:bg-brand-1 hover:text-brand-black ${
        selected
          ? ' tab_shadow bg-brand-1 text-brand-black shadow-brand-1'
          : 'bg-brand-black text-brand-1 shadow-brand-1'
      } `}
    >
      {text}
    </button>
  );
};
