import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

interface Advice {
    id: number;
    date: string;
    advice: string;
}

export const Search = () => {
    const [query, setQuery] = useState('');
    const [advices, setAdvices] = useState<Advice[]>([]);

    const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setQuery(value);

        const results = await fetchAdvice(value);
        setAdvices(results);
    };

    return (
        <div className="container">
            <input
                type="text"
                value={query}
                onChange={onInputChange}
                placeholder="Search"
                className="input"
            />
            <ul className="advices">
                {advices.map(({ advice }, index) => (
                    <li key={index}>{advice}</li>
                ))}
            </ul>
            {advices.length === 0 && <p className="placeholder">No results</p>}
        </div>
    );
};

async function fetchAdvice(query: string): Promise<Advice[]> {
    try {
        const response = await axios.get(
            `https://api.adviceslip.com/advice/search/${query}`
        );

        if (!response.data.slips) {
            throw new Error('Failed to fetch advice');
        }

        return response.data.slips;
    } catch (error) {
        console.error(error);
        return [];
    }
}
