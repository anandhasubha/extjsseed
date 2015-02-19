/*<p>
* Application viewport file. 
* According to ExtJS MVC convention, this is the default file which takes control of the 
* html <body> section. 
* 'autoLoadViewport' in the 'app' should be set to true, for the application to load this 
* view automatically 
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.view.Viewport', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.employee-viewport',

	//Layout type is 'border', which places items in 
	//all four directions w.r.t the center of the page
	layout : 'border',
	
	items : [ {
			xtype : 'appHeader',
			region : 'north'
		},  {
			region : 'center',
			autoScroll : true,
			width : 100
		},
		{
			xtype : 'appFooter',
			region : 'south'
		} ],

	//*** Custom functions ***//
	getCenterRegion : function(){
		return this.layout.centerRegion();
	},
	setCenterRegionContent : function(el){
		this.layout.centerRegion.removeAll(true);
		this.layout.centerRegion.add(el);
	}
});