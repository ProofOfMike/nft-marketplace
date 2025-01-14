import HeaderMain from '@/components/Shared/HeaderMain';
import Withdrawal from '@/components/Pages/Withdrawal/Withdrawal';
import WithdrawalSlider from '@/components/Pages/Withdrawal/WithdrawalSlider';
export default function page() {
  return (
    <>
      <HeaderMain />
      <WithdrawalSlider />
      <Withdrawal />
    </>
  );
}
