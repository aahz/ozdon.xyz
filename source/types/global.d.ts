declare type CSSModule = {[key: string]: string};

declare module '*.css' {
	const resource: CSSModule;
	export = resource;
}

declare module '*.less' {
	const resource: CSSModule;
	export = resource;
}
