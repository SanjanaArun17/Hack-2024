import React from 'react';
import { FC } from 'react';

import {router} from "./routes/route"
import { RouterProvider } from 'react-router-dom';

const App : FC = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;