import React from "react";
import ReactDOM from "react-dom";

import Example from "./components/Example"

const App: React.FC = () => {
    return (
        <div>
            <p>こんにちは</p>
            <Example/>
        </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
