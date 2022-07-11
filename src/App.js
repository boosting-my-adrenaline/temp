import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardsPresentation } from './components/CardsPresentation';
import { Hotels } from './components/Hotels';
// import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

export const App = () => {
    return (
        <div>
            <div className="flex w-screen flex-col items-center">
                <BrowserRouter>
                    <Navbar />
                    <div className="w-full max-w-[1400px] shrink-0 bg-sky-100 ">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route
                                path="city:number"
                                element={<CardsPresentation />}
                            />
                            <Route path="hotel:number" element={<Hotels />} />
                        </Routes>
                    </div>
                    {/* <Footer /> */}
                </BrowserRouter>
            </div>
        </div>
    );
};
