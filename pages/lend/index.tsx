import { motion } from 'framer-motion';
import React, { useState } from 'react';
import BgMotion from 'src/components/BgMotion';
import Button, { ButtonVariant } from 'src/components/Button';
import { RowTextContents } from 'src/components/card/RowTextContents';
import { RowTextHead } from 'src/components/card/RowTextHead';
import { ClaimModal } from 'src/components/modal/ClaimModal';
import { FundModal } from 'src/components/modal/FundModal';
import { GNB } from 'src/components/nav/GNB';
import MainTabs from 'src/components/nav/MainTabs';
import {
  CLOSED_BONDS_CONTAENT_KEYS,
  CLOSED_BONDS_CONTAENTS_DUMMY,
  CLOSED_BONDS_DUMMY,
  CURRENT_BONDS_CONTAENTS_DUMMY,
  CURRENT_BONDS_CONTENT_KEYS,
  CURRENT_BONDS_DUMMY,
} from 'src/dummies';

export const LendPage = () => {
  const [fundOpen, setFundOpen] = useState<boolean>(false);
  const [claimMOpen, setClaimMOpen] = useState<boolean>(false);
  return (
    <>
      <FundModal isOpen={fundOpen} onClose={() => setFundOpen(false)} />
      <ClaimModal isOpen={claimMOpen} onClose={() => setClaimMOpen(false)} />
      <GNB />
      <motion.div
        layout
        className="mx-auto flex h-full w-full max-w-screen-lg flex-1 flex-col space-y-10 px-4 py-10"
      >
        <MainTabs />
        <BgMotion />

        <div className="pt-10">
          <div className="mb-5 flex items-end justify-between">
            <h3>Current Bonds</h3>
            <div>
              <p className="prh-1 text-gray-500">Your Balance</p>
              <div className="flex items-end space-x-1 text-brand-1">
                <h3>12,000</h3>
                <h5 className="">CANTO</h5>
              </div>
            </div>
          </div>
          <RowTextHead>
            {CURRENT_BONDS_DUMMY.map((current) => (
              <RowTextHead.Text
                key={current.id}
                contents={current.contents}
                description={current.description}
              />
            ))}
          </RowTextHead>

          <div className="mt-3 divide-y divide-zinc-800 overflow-hidden rounded-md border border-zinc-800">
            {CURRENT_BONDS_CONTAENTS_DUMMY.length === 0 ? (
              <div className="mt-3 grid w-full place-content-center rounded-md border border-zinc-700 bg-black/60 px-10 py-5 text-zinc-500">
                No current
              </div>
            ) : (
              CURRENT_BONDS_CONTAENTS_DUMMY.map((cr_contents) => {
                return (
                  <RowTextContents key={cr_contents.id}>
                    {CURRENT_BONDS_CONTENT_KEYS.map((key) => (
                      <RowTextContents.Text
                        key={cr_contents.id + key}
                        contents={cr_contents[key]}
                        className={key === 'id' ? 'text-zinc-400' : ''}
                      />
                    ))}
                    <Button
                      text="Fund"
                      variant={ButtonVariant.OUTLINE}
                      className="flex-1 px-0"
                      onClick={() => setFundOpen(true)}
                    />
                  </RowTextContents>
                );
              })
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-5">Closed Bonds</h3>
          <RowTextHead>
            {CLOSED_BONDS_DUMMY.map((closed) => (
              <RowTextHead.Text
                key={closed.id}
                contents={closed.contents}
                description={closed.description}
              />
            ))}
          </RowTextHead>
          {CLOSED_BONDS_CONTAENTS_DUMMY.length === 0 ? (
            <div className="mt-3 grid w-full place-content-center rounded-md border border-zinc-700 bg-black/60 px-10 py-5 text-zinc-500">
              No current
            </div>
          ) : (
            CLOSED_BONDS_CONTAENTS_DUMMY.map((cr_contents) => {
              return (
                <RowTextContents key={cr_contents.id}>
                  {CLOSED_BONDS_CONTAENT_KEYS.map((key) => (
                    <RowTextContents.Text
                      key={cr_contents.id + key}
                      contents={cr_contents[key]}
                      className={
                        key === 'id'
                          ? 'text-zinc-400'
                          : key === 'claimableAmount'
                          ? 'text-brand-1'
                          : ''
                      }
                    />
                  ))}
                  <Button
                    text="Claim"
                    variant={ButtonVariant.OUTLINE}
                    className="flex-1 px-0"
                    onClick={() => setClaimMOpen(true)}
                  />
                </RowTextContents>
              );
            })
          )}
        </div>
      </motion.div>
    </>
  );
};

export default LendPage;
