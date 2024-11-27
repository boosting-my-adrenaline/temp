import React from 'react';
import { createRoot } from 'react-dom/client';

import { Persons } from './React/Persons';
import { Search } from './React/Search';
import { Input } from './React/Input';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
    return <Persons />;
    // return <Search />;
    // return <Input />;
};

root.render(<App />);
