import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Router } from "./router/Router";

import Example from "./components/Example"

const App: React.FC = () => {
    return (
        <RecoilRoot>
            <Router />
        </RecoilRoot>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
