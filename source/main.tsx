import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Application} from "./application";

import './style.less';

(function (window, document, undefined) {
	ReactDOM.render(
		<Application/>,
		document.getElementById('oz-root')
	);
})(window, window.document);
