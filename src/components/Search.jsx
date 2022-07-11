import React from 'react';

export const Search = () => {
    return (
        <div className="flex ">
            <input
                className="w-full  px-[8px]"
                placeholder="Enter Your Destination"
            />
            <div className="bg-sky-300 px-[8px]">Search</div>
        </div>
    );
};
