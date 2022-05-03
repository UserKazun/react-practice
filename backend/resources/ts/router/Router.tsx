import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskList from '../pages/TaskList'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/task/list'>
                <TaskList />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};
