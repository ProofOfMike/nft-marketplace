import Image from 'next/image';
import React from 'react';
import NoBet from '@/public/images/no_bet.png';

interface NoBetProps {
    title: string
}

const NoBetComponent: React.FC<NoBetProps> = ({title}) => {
  return (
    <>
      <div className="col-10 mx-auto mt-5 d-flex flex-column justify-content-center align-items-center">
        <Image src={NoBet} alt={'NoBet'} width={500} height={500} />
        <p className="mt-4">
          {title}
        </p>
      </div>
    </>
  );
};

export default NoBetComponent;
