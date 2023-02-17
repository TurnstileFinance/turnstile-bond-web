import Card from 'public/assets/svg/credit-card.svg';
import React, { FC } from 'react';

import { Icon } from '../Icon';

interface GNBProps {}

export const GNB: FC<GNBProps> = ({}) => {
  return (
    <div className=" sticky top-0 z-20 h-20">
      <div className="relative mx-auto flex h-full w-full max-w-screen-2xl items-center justify-end px-4">
        <Icon.Logo className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="prh-4 flex w-40 items-center space-x-3 rounded-full bg-[#202020] px-6 py-2 text-[#D4D4D4]">
          <Card className="flex-shrink-0 stroke-current" />
          <p className="truncate">asdf1zd8dasdsdkn9nk</p>
        </div>
      </div>
    </div>
  );
};
