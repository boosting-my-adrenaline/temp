import React from 'react';

export const Hotel = ({ hotel }) => {
    return (
        <div className="flex h-[200px] w-full gap-[20px] rounded-[10px] bg-emerald-200 p-[10px]">
            <div className="h-full w-full max-w-[180px] rounded-[8px] bg-emerald-900"></div>
            <div className="flex-grow">
                <div className="mb-[4px] text-[22px] font-semibold">
                    Hotel {hotel}
                </div>
                <div className="mb-[10px] text-[14px]">*rating*</div>
                <div className="text-[14px]">
                    Hotel Address Hotel Address Hotel Address
                </div>
            </div>
            <div className="text-[20px]"> 999 USD</div>
        </div>
    );
};
