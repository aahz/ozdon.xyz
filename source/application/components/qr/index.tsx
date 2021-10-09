import * as React from 'react';

import {CN} from '../../../libs/cn';

import style from './style.less';

export interface IQRPropTypes {}

interface IQRStateTypes {}

const cn = CN.create('qr', style);

export class QR extends React.Component<IQRPropTypes, IQRStateTypes> {
	public render(): React.ReactElement {
		return (
			<div
				className={cn.get()}>
				<img
					className={cn.get('image')}
					src={require('./images/qr-code.png').default}
					alt="Contact information" />
			</div>
		);
	}
}
