
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import depositicon from "../../assets/deposit.svg"
import jemiwilson from "../../assets/jemiwilson.svg"
import paypal from "../../assets/PayPal.svg"
import Image, { StaticImageData } from 'next/image';


type transactionProps = {
    iconbg: string,
    images: StaticImageData,
    heading: string,
    dummydates: string,
    amounts: string,
    amountColor: string
}

const RecentTransactionCardComponent = ({iconbg, images, heading, dummydates,amountColor, amounts}: transactionProps) => {
  return (
 
   
    <CardContent className="flex items-center justify-between">
      <div className="flex items-center lg:gap-4">
        <Image src={images} alt="icon" className={`${iconbg} w-10 h-10 rounded-full p-2`} />
        <div>
          <p className="text-sm text-[#232323] font-normal">{heading}</p>
          <p className="text-xs text-gray-500 font-normal">{dummydates}</p>
        </div>
      </div>
      <Typography
        sx={{
          color: amountColor,
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        {amounts}
      </Typography>
    </CardContent>



  )
}

const RecentTransactionCard =() =>{
    return(
        <div>
             <h1 className="mb-5 font-semibold text-2xl">Recent Transaction</h1>
      <div style={{ color: '#232323', borderRadius: '16px', backgroundColor:'white' }}>
       
        <RecentTransactionCardComponent 
        iconbg='bg-yellow-100' 
        dummydates='28th January 2021' 
        images={depositicon} 
        heading='Deposit from my Card' 
        amountColor='#FF4B4A' 
        amounts='-$850'
        />
        <RecentTransactionCardComponent 
        iconbg='bg-indigo-100' 
        dummydates='25th January 2021' 
        images={paypal} 
        heading='Deposit from my Paypal' 
        amountColor='#41D4A8' 
        amounts='+$2,500'
        />
        <RecentTransactionCardComponent 
        iconbg='bg-teal-100' 
        dummydates='21th January 2021' 
        images={jemiwilson} 
        heading='Jemi Wilson' 
        amountColor='#41D4A8' 
        amounts='+$5,400'
        />
        </div>
        </div>
    )
}

export default RecentTransactionCard