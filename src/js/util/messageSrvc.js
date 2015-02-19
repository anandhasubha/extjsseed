/**
 * @fileoverview
 * <p>
 * Define application wide validations,exceptions & error messages.
 * </p>
 * @project ExtJS Seed
 * @Date
 * @version 1.0
 * @author Advanced Javascript Solutions COE
 */
Ext.ns('ExtJSSeed.Messages');

ExtJSSeed.Messages.DisplayErrorMessage = function(message) {
	if (Ext.isEmpty(message)) {
		message = ExtJSSeed.Messages.SYSTEM_GENERIC_ERROR;
	}

	Ext.Msg.show({
		title : 'An Error has occurred',
		msg : message,
		modal : true,
		icon : Ext.Msg.ERROR,
		buttons : Ext.Msg.OK
	});
};

ExtJSSeed.Messages.DisplaySuccessMessage = function(message, fnCallback) {
	if (Ext.isEmpty(message)) {
		message = ExtJSSeed.Messages.SUCCESS;
	}

	Ext.Msg.show({
		title : 'Success',
		INFO : 'ext-mb-info',
		msg : message,
		buttons : Ext.Msg.OK,
		listeners : {
			'beforeclose' : fnCallback
		}
	});
};
