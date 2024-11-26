import React from 'react';
import { createRoot } from 'react-dom/client';

import { Persons } from './Persons';
import { Search } from './Search';
import { Input } from './Input';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
    // return <Persons />;
    // return <Search />;
    return <Input />;
};

root.render(<App />);
