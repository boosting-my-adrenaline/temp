import React from 'react';
import { CardsGridElement } from './CardsGridElement';
import { Link } from 'react-router-dom';

export const CardsGrid = () => {
    return (
        <div className=" grid w-full grid-cols-1 gap-[20px] p-[12px_20px] sm:grid-cols-2 sm:p-[20px_40px] lg:grid-cols-3">
            {Array.from({ length: 18 }, (_, i) => i).map((card, i) => (
                <Link to={'city' + card}>
                    <CardsGridElement card={card} key={card} />
                </Link>
            ))}
        </div>
    );
};
