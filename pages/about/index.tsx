import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import BGSVG from 'public/assets/svg/main-bg.svg';
import TelegramSVG from 'public/assets/svg/telegram.svg';
import TwitterSVG from 'public/assets/svg/twitter.svg';
import { useState } from 'react';
import { BorrowFundModal } from 'src/components/modal/BorrowFundModal';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';

export default function AboutPage() {
  const { push } = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <BorrowFundModal isOpen={open} onClose={() => setOpen(false)} />
      <GNB hasCard={false} />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col px-4 py-10"
      >
        <BGSVG className="fixed inset-x-0 top-1/2 -z-10 mx-auto -translate-y-1/2 opacity-25 md:w-full xl:w-2/3" />
        <MainTabs />

        <div className="my-36 space-y-16">
          <h1 className="text-center uppercase tracking-widest text-brand-1 shadow-brand-1 drop-shadow-lg">
            We canto do it alone.
          </h1>
          <div className="flex justify-center space-x-10">
            <div
              className="grid cursor-pointer place-content-center space-y-3 text-center opacity-80 transition-all hover:opacity-100"
              onClick={() => window.open('https://twitter.com/turnstile_fi')}
            >
              <TwitterSVG />
              <p className="prh-1 text-brand-1">Twitter</p>
            </div>
            <div
              className="grid cursor-pointer place-content-center space-y-3 text-center opacity-80 transition-all hover:opacity-100"
              onClick={() => window.open('https://t.me/turnstile_finance')}
            >
              <TelegramSVG />
              <p className="prh-1 text-brand-1">Telegram</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
