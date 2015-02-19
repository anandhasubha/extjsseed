/**
 * @fileoverview
 * <p>
 * Single REST client to serve the ajax calls
 * </p>
 * @project ExtJS Seed
 * @Date
 * @version 1.0
 * @author Advanced Javascript Solutions COE
 */
Ext.ns('ExtJSSeed.proxy');

Ext.define('ExtJSSeed.proxy.RestClient', {
	extend : 'Ext.data.proxy.Rest',
	alias : 'proxy.restclient',
	
	constructor:function (config) {
	    config = config || {};
	    this.callParent([config]);
	    this.url = config.baseUrl,
	    this.apiKey = config.apiKey;
	    this.timeout = config.timeout || 30000;
	    this.config = config;
  	},

    actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'PUT',
        destroy: 'DELETE'
    },

    reader: {
        type: 'json',
	    idProperty: '_id',
	    root: 'data'
    },

    writer: {
        type: 'json',
	    //root: 'data',
	    writeAllFields : true
    },

    buildUrl: function(request) {
	    var me      = this;
	    if (request.action  == 'create') {
        	this.appendId = false;  
        }
        var url = me.callParent(arguments);
	    if(!Ext.isEmpty(this.apiKey)){
	        url = Ext.urlAppend(url, "apiKey="+this.apiKey);
	    }
		logger.debug(request.action + ' url : ' + url); 
	    return url;
	},


    exception : function(proxy, response, operation, eOpts){
    	console.log('proxy' + response);
    }
});