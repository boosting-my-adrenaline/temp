import React from 'react';
import { useState } from 'react';
import { HotelsResult } from './Hotels.result';
import { HotelsSearch } from './Hotels.search';

export const Hotels = () => {
    const [inputFocus, setInputFocus] = useState(false);
    return (
        <>
            <div className="bg!-[#fbfbfd] flex w-full max-w-content flex-col items-center sm:p-[20px] md:p-[40px] ">
                <HotelsSearch
                    inputFocus={inputFocus}
                    setInputFocus={setInputFocus}
                />
                <HotelsResult />
            </div>
            {inputFocus && (
                <div className="absolute z-[5598] h-[100vh] w-full min-w-[100vh] bg-[#d2d2d7] opacity-[.35]"></div>
            )}
        </>
    );
};
