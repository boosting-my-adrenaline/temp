import { Hotels } from './components/Hotels';
// import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export const App = () => {
    return (
        <div>
            <div className="flex w-screen flex-col items-center ">
                <Navbar />
                <Hotels />
            </div>
        </div>
    );
};
