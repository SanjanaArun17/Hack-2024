import React from 'react';
import HomePageComponent from './components/HomePageComponent';
import FormComponent from './components/FormComponent';
import CalendarComponent from './components/CalendarComponent';
import ReportsListComponent from './components/ReportsListComponent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePageComponent/>} />
                <Route path="/form" element={ <FormComponent/> } />
                <Route path="/page1" element={ <CalendarComponent/>} />
                <Route path="/page2" element={ <ReportsListComponent/> } />
            </Routes>
        </Router>
    );
};

export default App;