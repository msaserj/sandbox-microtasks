import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";
import {carsType, TopCars} from "./components/Body/TopCars/TopCars";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Buttons} from "./components/Body/Buttons/Buttons";
import {Counter} from "./components/Body/useState/Counter";
import {Babki} from "./components/Body/Babki/Babki";
import {Input} from "./components/Body/Input/Input";
import {DoubleRange} from "./components/Body/DoubleRange/DoubleRange";
import {Icons} from "./components/Body/Icons/Icons";
import {KworkCards} from "./components/Body/kwork-cards/KworkCards";




function App() {
    const topCars: Array<carsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
    <HashRouter >
        <div className="App">
            <Header titleForHeader={"New Header"} />
            <div>
                <Routes>
                    <Route path="/" element={<Body  titleForBody={"New Body"}/>} />
                    <Route path="/topcars" element={<TopCars  cars={topCars}/>} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/babki" element={<Babki />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/doublerange" element={<DoubleRange />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/kwork-cards" element={<KworkCards />} />
                </Routes>
            </div>
            <Footer titleForFooter={"New Footer"}/>
        </div>
    </HashRouter>

    );
}

export default App;
