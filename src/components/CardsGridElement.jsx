import React from 'react';

export const CardsGridElement = ({ card }) => {
    return (
        <div className="flex h-[170px] w-full  min-w-[200px] items-end rounded-[10px] border border-sky-600 bg-sky-400">
            <div className="w-full p-[20px]">
                <div className="font-semibold">
                    <h3 className="text-[16px]">
                        {card} Title Title Title Title
                    </h3>
                </div>
                <div>
                    <h5 className="text-[12px]">
                        Subtitle Subtitle Subtitle Subtitle
                    </h5>
                </div>
            </div>
        </div>
    );
};
