import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { HotelsSearchInput } from './Hotels.search.input';
import DatePicker, { Calendar } from 'react-multi-date-picker';
import { useDebounce } from '../hooks/useDebounce';
import { loadSuggestions } from '../utils/loadSuggestions';

export const HotelsSearch = ({ inputFocus, setInputFocus }) => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [hideSuggestions, setHideSuggestions] = useState(false);

    const debouncedSearch = useDebounce(
        () => loadSuggestions(input, setSuggestions),
        350,
    );

    useEffect(() => {
        debouncedSearch();
        setHideSuggestions(false);
    }, [input]);

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

    const updateDataStates = (values) => {
        values[0] &&
            setArrivalDate(
                new Date(
                    values[0].year +
                        '-' +
                        values[0].month.number +
                        '-' +
                        values[0].day,
                ).toDateString(),
            );

        values[1] &&
            setDepartureDate(
                new Date(
                    values[1].year +
                        '-' +
                        values[1].month.number +
                        '-' +
                        values[1].day,
                ).toDateString(),
            );
    };

    const [initialForCalendar, _] = useState([null, null]);

    return (
        <div className="flex w-full flex-col items-center bg-[#f2f2f2] p-[20px] pt-[0] sm:rounded-[8px] md:p-[40px] md:pt-[0]">
            <div className="p-[75px_0_12px] text-center">
                <span className="text-[32px] font-[500] leading-[1.125] tracking-[.004em] text-dark">
                    Find the hotels you’re looking for.
                </span>
            </div>

            <HotelsSearchInput
                input={input}
                setInput={setInput}
                suggestions={suggestions}
                hideSuggestions={hideSuggestions}
                setHideSuggestions={setHideSuggestions}
                inputFocus={inputFocus}
                setInputFocus={setInputFocus}
            />

            <div className="mx-auto hidden w-full max-w-[580px] md:flex">
                <Calendar
                    value={initialForCalendar}
                    onChange={updateDataStates}
                    range
                    numberOfMonths={2}
                    minDate={new Date()}
                    showOtherDays
                    className="multi-locale-days custom-calendar"
                />
            </div>

            <div className="mx-auto flex w-full max-w-[580px] flex-wrap text-center md:hidden">
                {/* <div className="flex-grow bg-red-200">
                    <DatePicker
                        value={initialForCalendar}
                        onChange={updateDataStates}
                        minDate={new Date()}
                        showOtherDays
                        className="multi-locale-days custom-calendar"
                    />
                </div>
                <div className="flex-grow bg-red-200">
                    <DatePicker
                        value={initialForCalendar}
                        onChange={updateDataStates}
                        minDate={new Date()}
                        showOtherDays
                        className="multi-locale-days custom-calendar"
                    />
                </div> */}
            </div>
        </div>
    );
};
