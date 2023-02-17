import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import BGSVG from 'public/assets/svg/main-bg.svg';
import Button, { ButtonVariant } from 'src/components/Button';
import { GNB } from 'src/components/nav/GNB';
import { Tab } from 'src/components/Tab';

const TAB_DATA = [
  { id: 1, text: 'Dashboard', path: '/dashboard' },
  { id: 2, text: 'Lend', path: '/lend' },
  { id: 3, text: 'Borrow', path: '/borrow' },
  { id: 4, text: 'About', path: '/about' },
  { id: 5, text: 'Connect', path: '/connect' },
];

export default function HomePage() {
  const { push, pathname } = useRouter();
  return (
    <>
      <GNB />
      <motion.div layout className="flex h-full flex-1 flex-col px-4 py-10">
        <BGSVG className="fixed inset-x-0 top-1/2 -z-10 mx-auto -translate-y-1/2 md:w-full xl:w-2/3" />
        <div className="mx-auto flex space-x-5">
          {TAB_DATA.map((tab) => (
            <Tab
              key={tab.id}
              text={tab.text}
              onClick={() => push(tab.path)}
              selected={pathname === tab.path}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
          <Button
            text="CONNECT  >"
            className="h1 px-10 tracking-[0.2em] "
            onClick={() => push('/connect')}
            variant={ButtonVariant.OUTLINE}
          />
        </div>
      </motion.div>
    </>
  );
}
