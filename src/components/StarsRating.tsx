'use client';
import React, {FC} from 'react';
import { RatingStar } from 'react-ts-rating-star';

type Props = {
    rate: number;
}
const StarsRating:FC<Props> = ({rate}) => {
    rate = rate / 2 ;
        return (
            <RatingStar
                iconColor='#fdcb6e'
                backgroundColor='#dfe6e9'
                iconWidth='2em'
                iconHeight='2em'
                averageRating={rate}
                iconHoverEffect='animated-twinkling'
            />
        )
};
export default StarsRating;

