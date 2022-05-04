import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import axios from "axios";

const App: React.FC = () => {
    const getTasks = async () => {
        const data = await axios.get('task/list')
        console.log(data)
    }

    useEffect(() => {
        getTasks()
    })

    return (
    <div>
        <Router />
    </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
