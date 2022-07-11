import React from 'react';
import { CardsGrid } from './CardsGrid';
import { Header } from './Header';

export const Main = () => {
    return (
        <div className="">
            <Header />
            <div className="w-full p-[20px] sm:p-[40px]">
                <h2 className="text-center text-[22px]">
                    Discover the Best Hotels with our Handpicked Hotel Guides.
                </h2>
            </div>
            <CardsGrid />
            <div className="w-full p-[20px] sm:p-[40px]">
                <h2 className="mb-[14px] text-[22px] sm:mb-[20px]">
                    Some kind of title Some kind of title{' '}
                </h2>
                <h4 className="mb-[14px] text-[14px] sm:mb-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt at ratione nihil molestiae sed facere dignissimos
                    cum eveniet, accusantium sunt impedit pariatur dolores
                    itaque illo veritatis veniam asperiores atque eum.
                    Provident, illo nulla ipsa eveniet eum mollitia quis placeat
                    possimus odit labore fuga consequuntur praesentium harum
                    consequatur blanditiis.
                </h4>
                <h4 className="text-[14px]">
                    voluptatibus libero autem iusto illum vero recusandae
                    reprehenderit! Quidem nulla veniam maxime.
                </h4>
            </div>
        </div>
    );
};
