import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css"
import Counter from "./components/counter"
import "./static/css/index.css"

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
