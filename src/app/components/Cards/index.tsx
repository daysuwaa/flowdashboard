"use client"
import React from 'react';
import ChipCardsB from "../../assets/ChipCardBlack.png";
import ChipCardsW from "../../assets/ChipCardWhite.png";
import mastercard from "../../assets/mastercard.png";
import CreditCardComponent from './CardItem';
import RecentTransactionCard from './RecentTransactionCard';

const CardComponent = () => {
  const cardConfigs = {
    darkCard: {
      headingText: 'My Cards',
      headingTextSize: 'text-[22px]',
      headingTextPosition: 'text-start',
      background: 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
      mastercardImage: mastercard,
      chipcardImage: ChipCardsW,
      text1color: 'text-gray-400',
      text2color: 'white',
      cardNumberBg: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      cardnumbercolor: '#fff'
    },
    lightCard: {
      headingText: 'See all',
      headingTextSize: 'text-[17px]',
      headingTextPosition: 'text-end',
      background: 'white',
      mastercardImage: mastercard,
      chipcardImage: ChipCardsB,
      text1color: 'text-gray-400',
      text2color: 'black',
      cardNumberBg: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      cardnumbercolor: '#343C6A'
    }
  };

  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-9">
        <CreditCardComponent {...cardConfigs.darkCard} />
        <CreditCardComponent {...cardConfigs.lightCard} />
        <RecentTransactionCard />
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden  m-0 p-0">
        <div className="space-x-4 overflow-auto flex  pb-4">
          <div className="w-[80%]  flex-shrink-0">
            <CreditCardComponent {...cardConfigs.darkCard} />
          </div>
          <div className="w-[80%] flex-shrink-0">
            <CreditCardComponent {...cardConfigs.lightCard} />
          </div>
        </div>

        <div className="mt-6">
          <RecentTransactionCard />
        </div>
      </div>
      
    </div>
  );
};

export default CardComponent;