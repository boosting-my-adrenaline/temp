import React from 'react';
import { Search } from './Search';

export const Header = () => {
    return (
        <div className="flex w-full flex-col items-center bg-sky-200 p-[30px_20px] sm:p-[60px_40px]">
            <div className="mb-[40px]">
                <h1 className="text-[30px] font-semibold">
                    The Best Luxury Hotels
                </h1>
            </div>
            <div className="mb-[60px] w-full">
                <Search />
            </div>
            <div className=" max-w-[500px] bg-sky-300 p-[30px_50px] text-center">
                <h2 className="text-lg">Block with information</h2>
                <h3>
                    Block with information Block with information Block with
                    information Block with information
                </h3>
            </div>
        </div>
    );
};
