import axios from 'axios';

export const loadSuggestions = async (input, setSuggestions) => {
    const URL =
        'https://travel-us.save70.com/mv/marvel?f=j&v=v1&lc=us&lc_cc=EN&s=50&where=';

    if (!input) return setSuggestions([]);
    const response = await axios.get(URL + input);
    setSuggestions(response.data.map((el) => el.displayname));
};
