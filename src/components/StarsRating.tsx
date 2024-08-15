'use client';
import React from 'react';
import { RatingStar } from 'react-ts-rating-star';

const StarsRating = ({rate}) => {
    rate = rate / 2 ;
        return (
            <RatingStar
                iconColor='#fdcb6e'
                backgroundColor='#dfe6e9'
                iconWidth='2em'
                iconHeight='2em'
                averageRating={rate}
                iconHoverEffect='scaling'
            />
        )
};

export default StarsRating;

