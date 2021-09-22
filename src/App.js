import React from 'react';
import HomePage from './page/HomePage/HomePage.js';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {
    render() {
        return (
            <div id="App_Conponent" className="Application">
                <HomePage></HomePage>
            </div>
        );
    }
}


export default App; 
