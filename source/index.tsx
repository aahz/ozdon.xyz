import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Application} from './application';

import 'normalize.css/normalize.css';

import './style.less';

(function (window, document) {
	ReactDOM.render(
		<Application/>,
		document.getElementById('oz-root')
	);
}(window, window.document));
