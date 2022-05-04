import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import Router from "./router/Router";

import Example from "./components/Example"

const App: React.FC = () => {
    return (
    <div>
        <Router />
        <Example />
    </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
