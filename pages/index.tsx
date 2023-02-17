import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import BGSVG from 'public/assets/svg/main-bg.svg';
import Button, { ButtonVariant } from 'src/components/Button';
import { NFTCard } from 'src/components/card/NFTCard';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import { NFT_DUMMY } from 'src/dummies';

export default function HomePage() {
  const { push } = useRouter();
  const isConnectCard = true;
  const isLogin = true;
  return (
    <>
      <GNB hasCard={false} />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col px-4 py-10"
      >
        <BGSVG className="fixed inset-x-0 top-1/2 -z-10 mx-auto -translate-y-1/2 opacity-25 md:w-full xl:w-2/3" />
        <MainTabs />

        {!isLogin && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
            <Button
              text="CONNECT  >"
              className="h1 px-10 tracking-[0.2em] "
              onClick={() => push('/connect')}
              variant={ButtonVariant.OUTLINE}
            />
          </div>
        )}

        {isConnectCard ? (
          <div className="mt-20 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {NFT_DUMMY.map((card) => (
              <NFTCard key={card.id} items={card} />
            ))}
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
