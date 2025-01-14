"use client"
import HeaderMain from '@/components/Shared/HeaderMain';
import Coin from '@/components/Pages/Coins/Coin';
import CoinSlider from '@/components/Pages/Coins/CoinSlider';
import PurchaseCoinComponent from '@/components/Pages/Coins/purchase-coin';
import { useState } from 'react';
export default function Page() {
  const [isCoins, setIsCoins] = useState(false);
  return (
    <>
      <HeaderMain />
      {!isCoins ? (
        <>
          <CoinSlider />
          <Coin setIsCoins={setIsCoins} />
        </>
      ) : (
        <PurchaseCoinComponent />
      )}
    </>
  );
}
