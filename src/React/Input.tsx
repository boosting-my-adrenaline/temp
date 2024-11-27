import React, { useRef, useState } from 'react';
import '../styles.css';

export const Input = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLInputElement | null>(null);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
        if (ref.current) {
            ref.current.focus();
        }
    };

    return (
        <div className="container">
            <button onClick={toggleVisibility}>Toggle</button>
            {isVisible && (
                <input
                    ref={ref}
                    type="text"
                    placeholder="Search"
                    className="input"
                />
            )}
        </div>
    );
};
