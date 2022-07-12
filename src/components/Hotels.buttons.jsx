import moment from 'moment';

export const DateButton = ({ onClick, date, title }) => {
    const formatDate = (date) => moment(date).format('ddd, MMM D YYYY');

    return (
        <button className="whitespace-nowrap" onClick={onClick}>
            {date ? (
                <span className="font-[500]">{formatDate(date)}</span>
            ) : (
                <span className="text-gray-600"> {title}</span>
            )}
        </button>
    );
};

export const ClearButton = ({ onClick }) => {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] border border-black"
        >
            <svg viewBox="0 0 24 24">
                <path d="M19.6 6.2 6.2 19.6c-.5.5-1.3.5-1.8 0s-.5-1.3 0-1.8L17.8 4.4c.5-.5 1.3-.5 1.8 0s.5 1.3 0 1.8z" />
                <path d="M17.8 19.6 4.4 6.2c-.5-.5-.5-1.3 0-1.8s1.3-.5 1.8 0l13.4 13.4c.5.5.5 1.3 0 1.8s-1.3.5-1.8 0z" />
            </svg>
        </button>
    );
};
