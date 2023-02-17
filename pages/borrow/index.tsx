import { motion } from 'framer-motion';
import BGSVG from 'public/assets/svg/main-bg.svg';
import { useState } from 'react';
import { NFTCard } from 'src/components/card/NFTCard';
import { BorrowFundModal } from 'src/components/modal/BorrowFundModal';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { NFT_DUMMY } from 'src/dummies';

export default function BorrowPage() {
  const isConnectCard = true;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <BorrowFundModal isOpen={open} onClose={() => setOpen(false)} />
      <GNB />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col px-4 py-10"
      >
        <BGSVG className="fixed inset-x-0 top-1/2 -z-10 mx-auto -translate-y-1/2 opacity-25 md:w-full xl:w-2/3" />
        <MainTabs />

        {isConnectCard ? (
          <div className="mt-20 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            <NFTCard
              items={NFT_DUMMY[0]}
              buttonText="Cancel Funding 🔥"
              isCancel
            />
            {NFT_DUMMY.map(
              (card) =>
                card.id !== 1 && (
                  <NFTCard
                    key={card.id}
                    items={card}
                    buttonText="Start Funding →"
                    onClick={() => setOpen(true)}
                  />
                )
            )}
          </div>
        ) : (
          <h1 className="grid flex-1 place-content-center text-center text-brand-1 shadow-brand-1 drop-shadow-lg">
            You do not have any CSR NFT...
          </h1>
        )}
      </motion.div>
    </>
  );
}
