import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export const HotelsSearch = () => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const URL = 'https://jsonplaceholder.typicode.com/users';
        const loadUsers = async () => {
            const response = await axios.get(URL);
            setUsers(response.data);
        };
        loadUsers();
    }, []);

    const handleInputChange = (text) => {
        let matches = [];
        // if (text.length > 0) {
        //     matches = user.filter();
        // }
    };

    const [arrivalDate, setArrivalDate] = useState();
    const [departureDate, setDepartureDate] = useState();
    const [isArrivalOpen, setIsArrivalOpen] = useState(false);
    const [isDepartureOpen, setIsDepartureOpen] = useState(false);

    const handleArrivalChange = (e) => {
        setIsArrivalOpen(false);
        setArrivalDate(e);
    };

    const handleDepartureChange = (e) => {
        setIsDepartureOpen(false);
        setDepartureDate(e);
    };

    const handleArrivalClick = (e) => {
        e.preventDefault();
        setIsArrivalOpen((prev) => !prev);
    };

    const handleDepartureClick = (e) => {
        e.preventDefault();
        setIsDepartureOpen((prev) => !prev);
    };

    const formatDate = (date) => moment(date).format('ddd, MMM D YYYY');

    const addDays = (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const clearButton = (onClick) => (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] border border-black"
        >
            <div className="absolute h-[2px] w-[16px] rotate-45 rounded-full bg-black"></div>
            <div className="absolute h-[2px] w-[16px] -rotate-45 rounded-full bg-black"></div>
        </button>
    );

    const dateButton = (onClick, date, title) => (
        <button className="whitespace-nowrap" onClick={onClick}>
            {date ? (
                <span className="font-[500]">{formatDate(date)}</span>
            ) : (
                <span className="text-gray-600"> {title}</span>
            )}
        </button>
    );

    return (
        <div className="my-[20px] w-full rounded-[8px] bg-emerald-900 p-[20px] text-white sm:p-[40px]">
            <div className="mb-[50px] text-[34px]">City Hotels Title</div>

            <div className="mb-[10px] flex w-full gap-[4px]">
                <input
                    className="w-full rounded-[8px] px-[10px] text-black"
                    onChange={(e) => setInput(e.currentTarget.value)}
                    value={input}
                    type={'text'}
                />{' '}
                <div className="texxt-black rounded-[8px] bg-emerald-200 p-[8px_10px] text-black">
                    Search
                </div>
            </div>
            <div className="mb-[40px] flex flex-col gap-[6px] md:flex-row">
                <div
                    className={`flex h-full max-h-[40px] w-full justify-between rounded-[8px] md:w-[50%] ${
                        arrivalDate ? 'bg-emerald-300' : 'bg-emerald-100'
                    } cursor-pointer p-[8px_8px] text-black`}
                    onClick={() => {
                        if (!isArrivalOpen) setIsArrivalOpen(true);
                    }}
                >
                    {dateButton(
                        handleArrivalClick,
                        arrivalDate,
                        'Arrival Date',
                    )}
                    {isArrivalOpen && (
                        <DatePicker
                            inline
                            selected={arrivalDate}
                            onChange={handleArrivalChange}
                            placeholderText="Arrival Date"
                            closeOnScroll={(e) => e.target === document}
                            selectsStart
                            minDate={new Date()}
                            startDate={arrivalDate}
                            endDate={departureDate}
                            dateFormat="MMM d, yyyy"
                            formatWeekDay={(nameOfDay) =>
                                nameOfDay.substr(0, 3)
                            }
                            isClearable
                            maxDate={
                                departureDate
                                    ? addDays(departureDate, -1)
                                    : null
                            }
                        />
                    )}
                    {arrivalDate &&
                        !isArrivalOpen &&
                        clearButton(() => setArrivalDate())}
                </div>
                <div
                    className={`flex h-full max-h-[40px] w-full justify-between rounded-[8px] md:w-[50%] ${
                        departureDate ? 'bg-emerald-300' : 'bg-emerald-100'
                    } cursor-pointer p-[8px_10px] text-black`}
                    onClick={() => {
                        if (!isDepartureOpen) setIsDepartureOpen(true);
                    }}
                >
                    {dateButton(
                        handleDepartureClick,
                        departureDate,
                        'Departure Date',
                    )}
                    {isDepartureOpen && (
                        <DatePicker
                            inline
                            selected={departureDate}
                            onChange={handleDepartureChange}
                            placeholderText="Departure Date"
                            closeOnScroll={(e) => e.target === document}
                            formatWeekDay={(nameOfDay) =>
                                nameOfDay.substr(0, 3)
                            }
                            selectsEnd
                            startDate={arrivalDate}
                            endDate={departureDate}
                            minDate={arrivalDate}
                        />
                    )}
                    {departureDate &&
                        !isDepartureOpen &&
                        clearButton(() => setDepartureDate())}
                </div>
            </div>

            <div> City Hotels Title</div>
        </div>
    );
};
