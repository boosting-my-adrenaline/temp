import React from 'react';
import { Hotel } from './Hotel';
import { HotelsSearch } from './HotelsSearch';

export const Hotels = () => {
    return (
        <div className="flex w-full flex-col items-center bg-emerald-100 px-[20px] sm:px-[40px]">
            <HotelsSearch />
            <div className="flex w-full justify-between p-[8px_20px] text-[18px]">
                <div>Hotel</div>
                <div>price</div>
            </div>
            <div className="flex w-full flex-col gap-[20px]">
                {Array.from({ length: 15 }, (_, i) => i + 1).map((hotel) => (
                    <Hotel hotel={hotel} />
                ))}
            </div>
        </div>
    );
};
