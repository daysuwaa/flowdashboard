import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type CardComponentProps = {
    background: string,
    mastercardImage: StaticImageData,
    chipcardImage: StaticImageData
    text1color: string
    text2color: string
    cardNumberBg: string
    cardnumbercolor: string
    headingText: string
    headingTextSize: string
    headingTextPosition: string
}

const CreditCardComponent = ({background, mastercardImage, chipcardImage, text1color, text2color, cardNumberBg, cardnumbercolor, headingText, headingTextPosition, headingTextSize}: CardComponentProps) => {
    return(
        <div className='w-full '>
            <h1 className={`${headingTextPosition} ${headingTextSize} text-[#343C6A] mb-5 max-h-7 font-semibold`}>{headingText}</h1>
            <Card sx={{ 
                borderRadius: '25px', 
                backgroundImage: `${background}`, 
                color: 'white', 
            }}>
                <CardContent>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                            <p className={`text-[10px] ${text1color}`}>Balance</p>
                            <Typography variant="h6" component="div" sx={{fontSize:'20px', color: `${text2color}` }}>
                                $5,756
                            </Typography>
                        </div>
                        <Image src={chipcardImage} alt="chipcard" className="w-10 h-auto" />
                    </div>

                    <div className="flex mt-8 items-start">
                        <div className="flex flex-col">
                            <p className={`text-[10px] ${text1color}`}>CARD HOLDER</p>
                            <Typography variant="h6" component="div" sx={{fontSize:'12px', color: `${text2color}` }}>
                                Eddy Cusuma
                            </Typography>
                        </div>
                        <div className="flex flex-col ml-auto">
                            <p className={`text-[10px] ${text1color}`}>VALID THRU</p>
                            <Typography variant="h6" component="div" sx={{fontSize:'12px', color: `${text2color}` }}>
                                12/22
                            </Typography>
                        </div>
                    </div>
                </CardContent>
                <div className="flex items-center justify-between px-4 py-7 w-full" style={{backgroundImage:`${cardNumberBg}`}}>
                    <div className="flex-1">
                        <CardActions sx={{ padding: 0 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: cardnumbercolor,
                                    fontSize: {
                                        xs: "14px",
                                        sm: "16px",
                                        md: "18px",
                                    },
                                }}
                            >
                                3778 **** **** 1234
                            </Typography>
                        </CardActions>
                    </div>
                    <div className="ml-4">
                        <Image
                            src={mastercardImage}
                            alt="mastercard"
                            // className="w-auto h-6 sm:h-7 md:h-8"
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CreditCardComponent;