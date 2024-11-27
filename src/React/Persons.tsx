import React, { useState } from 'react';

import '../styles.css';

export const Persons = () => {
    const [persons, setPersons] = useState([
        { id: 1, name: 'John Locke', age: 56 },
        { id: 2, name: 'James Ford', age: 40 },
        { id: 3, name: 'Jack Shepard', age: 38 },
        { id: 4, name: 'Kate Austin', age: 37 },
    ]);

    const reverse = () => {
        setPersons(persons.reverse());
    };

    return (
        <div className="container">
            {persons.map((person, index) => (
                <Person key={index} {...person} />
            ))}
            <button onClick={reverse}>Reverse</button>
        </div>
    );
};

interface PersonProps {
    id: number;
    name: string;
    age: number;
}

const Person = ({ id, name, age }: PersonProps) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="person">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                    setIsChecked((prev) => !prev);
                }}
            />
            <label>
                {id}. {name} {age} y.o.
            </label>
        </div>
    );
};
