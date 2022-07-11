import React from 'react';
import { useParams } from 'react-router-dom';
import { CardPresentation } from './CardPresentation';

export const CardsPresentation = () => {
    const { number } = useParams();
    return (
        <div className=" flex w-full flex-col items-center bg-fuchsia-300 px-[20px] sm:px-[40px]">
            <div className="p-[100px_40px_200px]">
                <h1 className="bg-fuchsia-400 p-[16px_50px] text-[40px] font-bold">
                    Luxury Hotels {number}
                </h1>
            </div>
            <div className="bg-fuchsia-700 p-[20px] text-[20px] text-white sm:p-[40px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                voluptates, aliquam voluptatibus ratione aspernatur temporibus
                minima ducimus iste? Necessitatibus incidunt corporis sequi
                ullam maiores quae illo reprehenderit et, distinctio non. Veniam
                quos illum, repellendus quae maiores odio accusamus libero,
                temporibus totam dolorem ex? Harum eum fuga numquam, animi
                libero beatae! Sed ipsam exercitationem numquam! Nostrum fugiat
                earum cum libero voluptas! Voluptatum, tempore minus placeat
                laboriosam voluptatibus amet harum similique, facilis ullam
                molestiae quod! Aliquam soluta veritatis est enim impedit, eius
                amet repellendus commodi reiciendis quasi iste suscipit nihil,
                nesciunt nostrum.
            </div>
            <div>
                {Array.from({ length: 16 }, (_, i) => i + 1).map((card) => (
                    <CardPresentation card={card} />
                ))}
            </div>
        </div>
    );
};
