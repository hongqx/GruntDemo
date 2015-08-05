requirejs.config({
	baseUrl:"/js",
	paths:{
		app:"app",
		jquery:"lib/jquery/jquery",
		angular:"lib/dist/angular.min"
	},
	shim:{
        angular:{exports:"angular"}//在全局中添加一个angular的变量，在shim中显示的暴露出来才能使用它
	}
});
requirejs(['app']);