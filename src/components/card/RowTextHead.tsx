import React from 'react';

export interface RowTextHeadProps {
  children: React.ReactNode;
}

/**
 * @example
 * <RowTextHead>
 *   <RowTextHead.Text contents="컨텐츠" description="설명" / >
 * </RowTextHead>
 */

const RowTextHead = (props: RowTextHeadProps) => {
  const { children } = props;
  return (
    <div className="flex rounded-md bg-zinc-900 px-10 py-5">
      {children}
      <div className="flex-1" />
    </div>
  );
};

export interface RowTextHeadAreaProps {
  contents: string;
  description: string;
}

const RowTextHeadArea = (props: RowTextHeadAreaProps) => {
  const { contents, description } = props;
  return (
    <div className="flex-1">
      <p className="prh-1 text-zinc-300">{contents}</p>
      <p className="prh-3 text-zinc-400">{description}</p>
    </div>
  );
};

RowTextHead.Text = RowTextHeadArea;

export { RowTextHead };
