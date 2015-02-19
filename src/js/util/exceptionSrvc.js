/**
* @fileoverview
* <p>
* This service is to simplify debugging and troubleshooting and notify the errors.
* </p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/
Ext.ns('ExtJSSeed.Exception');

ExtJSSeed.Exception.ErrorHandler = function(err){
	if (err.errorcode===103)
	{
		Ext.Msg.alert("Message", err.msg);
	}
	else
	{
		console.log(err);
	}
	return true;
};

ExtJSSeed.Exception.DataConnectionFailureHandler = function(response, options) {
	if (Ext.isEmpty(response.status)) {
		response = options.response;
	}
	if (response.status === 200) {
		if (!Ext.isEmpty(response.responseText)) {
			jsonResponse = Ext.util.JSON.decode(response.responseText);
		}
		displayMessage = jsonResponse.msg;
	} else if (response.status !== 200 && response.status !== undefined
			&& response.status !== null) {
		displayMessage = response.statusText;
	}
	// Display a message to the user
	ExtJSSeed.Messages.DisplayErrorMessage(displayMessage);
};

ExtJSSeed.Exception.StoreExceptionHandler = function(proxy, response,
operation, eOpts) {
	logger.error("Error with store operation");
	if (response.status !== 200) {
		// call the AJAX Error Handler
		ExtJSSeed.Exception.DataConnectionFailureHandler(response, null);
	} else {
		// Read the contents of the "msg" returned from the server
		var displayMessage = response.raw.msg;
		ExtJSSeed.Messages.DisplayErrorMessage(displayMessage);
	}
};

ExtJSSeed.Exception.StoreOperationFailureHandler = function(operation) {
	//TODO - Translate all status text from server - http://docs.mongolab.com/restapi/#html-codes

	var error = operation.getError();
	ExtJSSeed.Messages.DisplayErrorMessage(error.statusText);
	logger.error('Store operation ' + operation.request.action + ' failed with error ' + error.statusText);
};

ExtJSSeed.DirectExceptionHandler = function(eventException) {
	// call the Display Response Handler
	ExtJSSeed.Messages.DisplayErrorMessage(eventException.message);
};

Ext.Direct.on('exception', ExtJSSeed.Exception.DirectExceptionHandler);
Ext.Error.handle = ExtJSSeed.Exception.ErrorHandler;