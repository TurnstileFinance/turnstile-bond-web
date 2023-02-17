import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface RowTextContentsProps {
  children: React.ReactNode;
}

/**
 * @example
 * <RowTextContents>
 *   <RowTextContents.Text contents="컨텐츠" / >
 * </RowTextContents>
 */

const RowTextContents = (props: RowTextContentsProps) => {
  const { children } = props;
  return (
    <div className="flex items-center bg-black/60 px-10 py-5">{children}</div>
  );
};

export interface RowTextContentsAreaProps {
  contents: string | number;
  className?: string;
}

const RowTextContentsArea = (props: RowTextContentsAreaProps) => {
  const { contents, className } = props;
  return <h4 className={twMerge('flex-1', className)}>{contents}</h4>;
};

RowTextContents.Text = RowTextContentsArea;

export { RowTextContents };
