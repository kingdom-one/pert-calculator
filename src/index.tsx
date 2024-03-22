import './styles/main.scss';

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './js/App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
