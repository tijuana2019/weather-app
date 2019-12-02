import 'raf/polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { location, forecasts } from './data/forecast.json';

render(<App location={location} forecasts={forecasts} />, global.document.getElementById('root'));
