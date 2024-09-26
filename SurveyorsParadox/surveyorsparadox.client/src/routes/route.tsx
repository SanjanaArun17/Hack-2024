
import {HomePageComponent ,Layout, FormComponent, CalendarComponent, ReportsListComponent} from "../components"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<HomePageComponent/>}/>
            <Route path="form" element={ <FormComponent/> } />
            <Route path="calendar" element ={ <CalendarComponent/>} />
            <Route path="reports" element={ <ReportsListComponent/> } />
        </Route>

    )
)

export {router}
