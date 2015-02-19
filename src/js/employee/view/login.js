/*<p>
* View defining the login component
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.view.login', {
	extend : 'Ext.Panel',
	alias : 'widget.login',
	title : " ",
	items : [ {
		xtype : 'form',
		frame : false,
		bodyPadding : 15,
		defaults : {
			xtype : 'textfield',
			labelWidth : 60,
			allowBlank : false,
			vtype : 'alphanum',
			minLength : 3,
			msgTarget : 'under'
		},
		items : [ {
			name : 'user',
			fieldLabel : "User",
			maxLength : 25,
			tooltip : 'User name is manadatory!'
		}, {
			inputType : 'password',
			name : 'password',
			fieldLabel : "Password",
			maxLength : 15,
			tooltip : 'Password is manadatory!'
		} , {
			xtype : 'toolbar',
			items : [ {
				xtype : 'button',
				itemId : 'reset',
				text : 'Reset'
			}, {
				xtype : 'button',
				itemId : 'submit',
				formBind : true,
				text : "Login"
			} ]
		} ]
	} ]
});
