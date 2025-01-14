import HeaderMain from '@/components/Shared/HeaderMain';
import Bet from '@/components/Pages/Bets/Bet';
import BetSlider from '@/components/Pages/Bets/BetSlider';
export default function page() {
  return (
    <>
      <HeaderMain />
      <BetSlider />
      <Bet />
    </>
  );
}
