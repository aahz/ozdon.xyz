import * as React from 'react';

import {CN} from '../libs/cn';

import {Logo} from "./components/logo";
import {QR} from "./components/qr";

import style from './style.less';

export interface IApplicationPropTypes {}

interface IApplicationStateTypes {}

const cn = CN.create('application', style);

export class Application extends React.Component<IApplicationPropTypes, IApplicationStateTypes> {
	public render(): React.ReactElement {
		return (
			<div className={cn.get()}>
				<Logo />
				<QR />
			</div>
		)
	}
}
