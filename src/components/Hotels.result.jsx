import React from 'react';
import { Hotel } from './Hotel';

export const HotelsResult = () => {
    return (
        <div className="flex w-full flex-col items-center ">
            <div className="flex w-full justify-between p-[8px_20px] text-[18px]">
                <div>Hotel</div>
                <div>price</div>
            </div>
            <div className="flex w-full flex-col gap-[20px]">
                {Array.from({ length: 15 }, (_, i) => i + 1).map(
                    (hotel, index) => (
                        <Hotel hotel={hotel} key={index} />
                    ),
                )}
            </div>
        </div>
    );
};
