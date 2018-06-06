import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './components/App';


const Index = () =>{
    return (<App />);
}

ReactDOM.render(<Index />, document.getElementById('index'));