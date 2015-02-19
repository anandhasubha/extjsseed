/*
* <p>
* View defining the contents of the edit tab.
* The fields are placed inside a form.
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.view.editEmployee', {
	extend : 'Ext.form.Panel',
	alias : 'widget.editEmployee',
	title : 'Create-Edit Employee',
	bodyPadding : 5,
	items : [ {
            xtype : 'hidden',  
            name  : '_id'
    }, {
        xtype: 'textfield',
		fieldLabel : 'First Name',
		name : 'firstName',
		maxLength : '25',
		allowBlank : false,
		tooltip : "Enter your First Name here"
	}, {
        xtype: 'textfield',
		fieldLabel : 'Last Name',
		name : 'lastName',
		maxLength : '25',
		allowBlank : false,
		tooltip : "Enter your Last Name here"
	}, {
        xtype: 'datefield',
		fieldLabel : 'Date of Birth',
		name : 'dateOfBirth',
		format : 'd/m/Y',
		submitFormat : 'd/m/Y',
		tooltip : "Enter your Date of Birth here"
	},  {
        xtype: 'textfield',
		fieldLabel : 'Email',
		name : 'email',
		allowBlank : false,
		// /vtype: email,
		tooltip : "Enter your Email here"
	}, {
		xtype : 'radiogroup',
		width : 270,
		fieldLabel : 'Gender',
		name : 'genderOption',
		items : [  {
        	xtype: 'radiofield',
			fieldLabel : '',
			name : 'gender',
			boxLabel : 'Male',
			checked : true,
			inputValue : 'Male'
		},  {
        	xtype: 'radiofield',
			fieldLabel : '',
			name : 'gender',
			boxLabel : 'Female',
			inputValue : 'Female'
		} ]
	},  {
        xtype: 'combo',
		name : 'department',
		fieldLabel : 'Department',
		store :  {
        	xtype: 'store',
			fields : [ 'key', 'label' ],
			data : [ {
				key : 'hr',
				label : 'Human Resources'
			}, {
				key : 'finance',
				label : 'Finance'
			}, {
				key : 'admin',
				label : 'Admin'
			}, {
				key : 'project',
				label : 'Project'
			} ]
		},
		displayField : 'label',
		valueField : 'key'
	} ],

	bbar : [{
		text : 'Save',
		action : 'save'
	}, {
		text : 'Delete',
		action : 'delete'
	}, {
		text : 'Reset',
		action : 'reset'
	}  ],

	listeners : {
		'beforeadd' : function(me, field) {
			if (!field.allowBlank)
				field.labelSeparator += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
		}
	}
});