export type CSSModule = {[key: string]: string};

export class CN {
	private readonly _name: string;

	protected _style: CSSModule = null;

	constructor(name: string, style: CSSModule = null) {
		this._name = name;
		this._style = style;
	}

	public static create(name: string, module: CSSModule = null): CN {
		return new CN(name, module);
	}

	public static join(...names: (string | boolean | (string | boolean)[])[]): string {
		return (Array.isArray(names[0]) ? names[0] : names).filter(Boolean).join(' ');
	}

	public get(...args: (string | (string | boolean)[])[]): string {
		const chain = args.filter(arg => typeof arg === 'string');
		const modifiers = Array.isArray(args[args.length - 1])
			? Array.from(args[args.length - 1]).filter(Boolean)
			: null;

		const base = [this._name, ...chain].join('__');

		return (this.constructor as typeof CN).join(
			[base, ...(Array.isArray(modifiers) ? modifiers : []).map(modifier => `${base}__m-${modifier}`)]
				.map(name => !!this._style ? this._style[name] : name)
		);
	}
}
