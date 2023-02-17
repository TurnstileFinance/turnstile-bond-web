import Card from 'public/assets/svg/credit-card.svg';
import React from 'react';
import { useWeb3 } from 'src/hook/web3';

import { Icon } from '../Icon';

export const GNB = () => {
  const { account } = useWeb3();
  return (
    <div className=" sticky top-0 z-20 h-20 bg-black">
      <div className="relative mx-auto flex h-full w-full max-w-screen-2xl items-center justify-end px-4">
        <Icon.Logo className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        {account && (
          <div className="prh-4 flex w-40 items-center space-x-3 rounded-full bg-[#202020] px-6 py-2 text-[#D4D4D4]">
            <Card className="flex-shrink-0 stroke-current" />
            <p className="truncate">{account}</p>
          </div>
        )}
      </div>
    </div>
  );
};
