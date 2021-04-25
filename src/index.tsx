import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importando biblioteca do boostrap para o reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './utils/fontawesome';

// Importando estilo global
import './styles/global.scss';

ReactDOM.render(<App />, document.getElementById('root'));
