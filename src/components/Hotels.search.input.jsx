import useElementSize from '../hooks/useElementSize';
export const HotelsSearchInput = ({
    input,
    setInput,
    suggestions,
    hideSuggestions,
    setHideSuggestions,
    inputFocus,
    setInputFocus,
}) => {
    const clearInput = () => setInput('');
    const handleInput = (e) => setInput(e.currentTarget.value);

    const [squareRef, { width }] = useElementSize();

    const handleSuggestion = (suggestion) => {
        console.log(suggestion);
        setInput(suggestion);
    };

    const handleSubmit = () => {
        console.log(input);
    };

    return (
        <div className="pb-![12px] relative mt-[0.8rem] w-full">
            <div className="mx-auto lg:max-w-[980px]">
                <form>
                    <div className="mb-[30px] flex justify-center">
                        <div className="relative z-[9996] flex w-full max-w-[580px] shrink-0 justify-center">
                            <input
                                className="h-[56px] w-full  rounded-[8px] border border-[#d2d2d7] px-[43px] text-[18px] font-[300] leading-[22.23px] tracking-[-.396] text-dark outline-none outline outline-offset-[-1px] focus:border-[#0071e3] focus:outline-[4px] focus:outline-[#67a9f5]"
                                placeholder="Search hotels"
                                type="text"
                                value={input}
                                onChange={handleInput}
                                ref={squareRef}
                                onFocus={() => setInputFocus(true)}
                                onBlur={() =>
                                    setTimeout(() => setInputFocus(false))
                                }
                            />
                            <div
                                className="absolute top-[17px] left-[16px]"
                                onClick={handleSubmit}
                            >
                                <button className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 18 25"
                                        width="20px"
                                        fill="rgb(134,134,139)"
                                    >
                                        <g transform="translate(0, -2.75)">
                                            <rect
                                                width="18"
                                                height="25"
                                                fill="none"
                                            />
                                            <path d="M17.512,20.113l-4.786-4.788a7.068,7.068,0,1,0-.777.778l4.785,4.788a.55.55,0,1,0,.777-.777ZM1.427,10.75A5.946,5.946,0,1,1,7.373,16.7,5.957,5.957,0,0,1,1.427,10.75Z" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            {!!input.length && (
                                <div
                                    className="absolute top-[17px] right-[16px]"
                                    onClick={clearInput}
                                >
                                    <button className="">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 19 19"
                                            width="19"
                                            fill="rgb(134,134,139)"
                                        >
                                            <g transform="translate(-0.5, -3)">
                                                <path d="M10,3a9.5,9.5,0,1,0,9.5,9.5A9.5,9.5,0,0,0,10,3Zm3.889,12.611a.55.55,0,1,1-.777.777L10,13.277,6.889,16.389a.55.55,0,0,1-.777-.777L9.223,12.5,6.111,9.389a.55.55,0,0,1,.777-.777L10,11.723l3.111-3.111a.55.55,0,0,1,.777.777L10.777,12.5Z" />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                        {!!suggestions.length && inputFocus && (
                            <div
                                className="absolute top-[50px] z-[9995] w-[10px] cursor-default bg-white shadow-custom1"
                                style={{ width: width }}
                            >
                                <div>
                                    <p className=" p-[20px_0_0_24px] text-[12px] font-[300] uppercase leading-[1.33337] text-[#6e6e73]">
                                        Suggested Searches
                                    </p>
                                </div>
                                <ul className="top-[52px] z-[6000] pt-[10px] pb-[20px] text-left">
                                    {suggestions.map((sug, i) => (
                                        <li
                                            key={i}
                                            className="cursor-pointer bg-white p-[6px_10px_6px_50px] text-[#1d1d1f] hover:bg-[#f5f5f7] hover:text-[#0071e3]"
                                            onClick={() => console.log('zzz')}
                                            // onClick={(e) => {
                                            //     e.preventDefault();
                                            //     console.log('test');
                                            //     handleSuggestion(sug);
                                            // }}
                                        >
                                            {sug}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
