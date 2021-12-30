import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return(
        <p>It is display?</p>
    )
}

if(document.getElementsById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
