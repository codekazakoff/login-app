import { render } from 'react-dom';
import App from './App';
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom"
render( < > < Router >
    <
    App / > < /Router> < / > , document.getElementById('root'));