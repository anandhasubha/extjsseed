/**
* @fileoverview
*<p>
* Defines ExtJS configuration file to load all the dependencies
*  <ul>
*   <li> Loads all the extjs core libraries,3rd party libraries and its dependencies 
*   <li> Use shim to add AMD module behaviour to Non-AMD libraries
*   <li> Initialize & kick starts the angular application.
* </ul>
* Read More : http://www.devbridge.com/articles/understanding-amd-requirejs/
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

require.config({ 
	paths: { 
		ext: '/vendor/js/extjs/ext-all', 
		log4js: '/vendor/js/log4js-ext/log4js-ext-all-dev',
		StatusBar: '/vendor/js/extjs/src/ux/statusbar/StatusBar', 
		RowExpander: '/vendor/js/extjs/src/ux/RowExpander', 
		extthemeneptune: '/vendor/js/extjs/ext-theme-neptune',
		app: 'app',
		appConfig: 'config/appConfig',
		exceptionSrvc: 'util/exceptionSrvc',
		logger: 'util/logger',
		messageSrvc: 'util/messageSrvc',
		restClient: 'util/restClient'
	}, 
  	shim: { 
	  	appConfig: { deps: ['ext'], exports: 'ext' },
	  	messageSrvc: { deps: ['ext'], exports: 'ext' },
	  	restClient: { deps: ['ext'], exports: 'ext' },
	  	exceptionSrvc: { deps: ['ext'], exports: 'ext' },
	  	StatusBar: { deps: ['ext'], exports: 'ext' },
	  	RowExpander: { deps: ['ext'], exports: 'ext' },
	  	log4js: { deps: ['ext','StatusBar','RowExpander'], exports: 'ext' },
	  	logger: { deps: ['ext','log4js'], exports: 'ext' },
	  	extthemeneptune: { deps: ['ext'], exports: 'ext' },
	  	app: { deps: ['appConfig', 'restClient','exceptionSrvc','logger','messageSrvc', 'extthemeneptune'], exports: 'ext'},
	},

	// define application bootstrap in deps (smiliar to main method in Java )
	deps: [
		// Finally load the app.js to kick start the angular application main module
		'./app'
	]
});