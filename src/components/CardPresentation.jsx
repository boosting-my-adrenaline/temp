import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CardPresentation = ({ card }) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const { number } = useParams();
    return (
        <div className=" flex w-full flex-col items-center bg-fuchsia-100 pt-[20px]">
            <div className="mb-[20px] mt-[10px] flex h-[70px] w-full items-center text-[36px]">
                <div className="flex h-full w-[70px] items-center justify-center bg-emerald-700 text-white">
                    {card}
                </div>
                <div className="flex h-full w-full items-center bg-fuchsia-300 px-[50px]">
                    Hotel Title {card}
                </div>
            </div>
            <div className="flex h-[400px]">
                <div className="bg-fuchsia-200 p-[20px] sm:p-[40px] ">
                    <div className="mb-[20px] text-[20px] ">
                        Necessitatibus incidunt corporis sequi ullam maiores
                        quae illo reprehenderit et, distinctio non. Veniam quos
                        illum, repellendus quae maiores odio accusamus libero,
                        temporibus totam dolorem ex? Harum eum fuga numquam,
                        animi libero beatae! Sed ipsam exercitationem numquam!
                        Nostrum fugiat earum cum libero voluptas! Voluptatum,
                        tempore minus placeat laboriosam voluptatibus amet harum
                        similique, facilis ullam molestiae quod! Aliquam soluta
                        veritatis est enim impedit, eius amet repellendus
                        commodi reiciendis quasi iste suscipit nihil, nesciunt
                        nostrum.
                    </div>
                    <Link to={'/hotel' + card}>
                        <div className="flex gap-[10px]">
                            <div className="bg-emerald-400 p-[6px_14px] text-[22px]">
                                Button 1
                            </div>
                            <div className=" bg-yellow-300 p-[6px_14px] text-[22px]">
                                Button 2
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="h-full w-[50%] shrink-0 bg-fuchsia-800"></div>
            </div>
        </div>
    );
};
