/*<p>
* View defining the header section
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/
Ext.define('EmployeeApp.view.appHeader',{
	extend:'Ext.panel.Panel',
	alias : 'widget.appHeader',
	width : 150,
	height : 100,
	border : 4,
	title : 'Page Header Region',
	items : [ {
		xtype : 'image',
		src : '/src/images/emp.jpg',
		//width : 100,
		height : 40,
		margin : '1 30 100 1310',
		align: 'right',
		toFrontOnShow : true
	}],	
	dockedItems: [{
	    xtype: 'toolbar',
	    items: [
	    { xtype: 'tbfill'},
	    {
	        text: 'Logout',
	        action: 'logout'
	    }]
    }],

    //***** Custom functions *****//
    hideLogoutButton : function(){
    	console.log('hi');
    }
});