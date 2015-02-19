/**
 * @fileoverview
 * <p>
 * Module defines logging mechanism as a factory service implemented using
 * JavaScript logging framework log4js-ext.js Read
 * More:https://code.google.com/p/log4js-ext/
 * </p>
 * @project ExtJS Seed
 * @Date
 * @version 1.0
 * @author Advanced Javascript Solutions COE
 */

Ext.define('ExtJSSeed.logger', {
	config : {
		loglevel : 'Sm.log.Level.ALL'
	},

	loglevels : {
    "ALL" : 'Sm.log.Level.ALL',
		"TRACE" : 'Sm.log.Level.TRACE',
		"DEBUG" : 'Sm.log.Level.DEBUG',
		"INFO" : 'Sm.log.Level.INFO',
		"WARN" : 'Sm.log.Level.WARN',
		"ERROR" : 'Sm.log.Level.ERROR',
		"FATAL" : 'Sm.log.Level.FATAL'
	},

	constructor : function(config) {
		this.initConfig(config);
		this.logger = Sm.log.Logger.getLogger('AppLogger');
		return this;
	}, 

  log : function(message) {
    this.logger.log(this.config.loglevel, message);
  },

  log : function(message) {
    this.logger.all(message);
  },

  trace : function(message) {
    this.logger.trace(message);
  },

  debug : function(message) {
    this.logger.debug(message);
  },

  info : function(message) {
    this.logger.info(message);
  },

	warn : function(message) {
		this.logger.warn(message);
	},

  error : function(message) {
    this.logger.error(message);
  },

  fatal : function(message) {
    this.logger.fatal(message);
  }
});

var logger = Ext.create('ExtJSSeed.logger', {
  loglevel : 'Sm.log.Level.INFO'
});