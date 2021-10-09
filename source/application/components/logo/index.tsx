import * as React from 'react';

import {CN} from '../../../libs/cn';

import style from './style.less';

export interface ILogoPropTypes {}

interface ILogoStateTypes {}

const cn = CN.create('logo', style);

export class Logo extends React.Component<ILogoPropTypes, ILogoStateTypes> {
	private _renderName(): React.ReactElement {
		return (
			<span className={cn.get('name')}>
				<span className={cn.get('name', 'regular')}>OZD</span>
				<span className={cn.get('name', 'accent')}>ON</span>
			</span>
		);
	}

	private _renderPosition(): React.ReactElement {
		return (
			<span className={cn.get('position')}>
				// Software developer
			</span>
		);
	}

	public render(): React.ReactElement {
		return (
			<a
				className={cn.get()}
				href="/">
				{this._renderName()}
				{this._renderPosition()}
			</a>
		);
	}
}
