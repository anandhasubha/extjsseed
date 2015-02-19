/*<p>
* View defining the layout and contents of the tabs
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/
Ext.define('EmployeeApp.view.mainTabs', {
	extend : 'Ext.TabPanel',
	alias : 'widget.mainTabs',
	cls : 'x-btn-text-icon',
	activeTab : 0,
	items : [ {
		xtype : 'listEmployees',
		autoScroll : true,
		title : 'Employee Details'
	}, {
		title : 'Create-Edit',
		xtype : 'editEmployee'
	} ]
});