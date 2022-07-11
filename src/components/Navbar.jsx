import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="flex h-[50px] w-full justify-center bg-sky-300 text-[20px]">
            <div className="flex w-full max-w-[1400px] items-center justify-between border border-sky-300 px-[20px] sm:px-[40px]">
                <div className="flex gap-[60px]">
                    <Link to="/"> ## LOGO ##</Link>
                    <div className="hidden gap-[60px] sm:flex">
                        <Link to="/"> Hotels</Link>
                        <Link to="/city1"> Card 1</Link>
                        <Link to="/hotel1"> hotel 1</Link>
                    </div>
                </div>
                <div className="border border-sky-600 bg-sky-400 p-[2px_6px]">
                    EN
                </div>
            </div>
        </div>
    );
};
