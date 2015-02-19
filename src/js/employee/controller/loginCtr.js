/*<p>
* Controller file for the login module
*  <ul>
*   <li> Stores all reference to the stores, models and views for login module
*   <li> Authenticates the user
*   <li> Displays main page on successful login and a warning page on failure login
* </ul>
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.controller.loginCtr', {
	extend : 'Ext.app.Controller',
	views : [ 'login'],

	init : function(application) {
		this.control({
			"login form button#submit" : {
				click : this.onButtonClickSubmit
			},
			"login form button#reset" : {
				click : this.onButtonClickCancel
			}
		});
	},

	//*** Custom functions ***//
	
	onButtonClickSubmit : function(button, e, options) {
		var formPanel = button.up('form'), login = button.up('login'), user = formPanel.down('textfield[name=user]')
				.getValue(), pass = formPanel.down('textfield[name=password]').getValue();

		if (user === 'john' && pass == 'john') {
			var expiry = new Date(new Date().getTime() + (1000 * 60 * 60));
			var myCookie = Ext.util.Cookies.set('session_token', "429842", expiry);						
			this.getApplication().showMainTabs();
		} else {
			logger.warn("In valid username password...");
			Ext.MessageBox.show({
				title : 'Warning',
				msg : 'Invalid Username and password',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNING
			});
			Ext.fly('warning').dom.value = Ext.MessageBox.WARNING;
		}
	},
	onButtonClickCancel : function(button, e, options) {
		button.up('form').getForm().reset();
	}
});