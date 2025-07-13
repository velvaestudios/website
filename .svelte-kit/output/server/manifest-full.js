export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/blatant.png","assets/brand.png","assets/icon-flames.png","assets/icon-white.png","assets/Léa Garault Ryuu Fanart.png","assets/raoronia-map.png","assets/ryuu_wave.png","assets/velvet-bg.png","assets/VelvetSakura-Black.ttf","assets/VelvetSakura-Bold.ttf","assets/VelvetSakura-ExtraBold.ttf","assets/VelvetSakura.ttf","favicon.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DdkIjKeD.js",app:"_app/immutable/entry/app.DTOro-Yl.js",imports:["_app/immutable/entry/start.DdkIjKeD.js","_app/immutable/chunks/CR58w8SF.js","_app/immutable/chunks/C3XjNUEP.js","_app/immutable/chunks/B2xklluZ.js","_app/immutable/entry/app.DTOro-Yl.js","_app/immutable/chunks/B2xklluZ.js","_app/immutable/chunks/C3XjNUEP.js","_app/immutable/chunks/NZTpNUN0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
