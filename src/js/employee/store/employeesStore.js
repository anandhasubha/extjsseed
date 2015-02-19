/*<p>
* The store or the data container that serves the content to populate the views
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/
Ext.define('EmployeeApp.store.employeesStore', {
	extend : 'Ext.data.Store',
	model : 'EmployeeApp.model.employeeModel',
    autoLoad: true,
    autoSync: true,
	proxy: ExtJSSeed.EmployeeApp.RestClient,

    listener : {
            exception : ExtJSSeed.Exception.StoreExceptionHandler
    },

    onCreateRecords: function(records, operation, success) {
    	this.storeSyncCallback(records, operation, success);
    },

    onUpdateRecords: function(records, operation, success) {
        this.storeSyncCallback(records, operation, success);
    },

    onDestroyRecords: function(records, operation, success) {
        this.storeSyncCallback(records, operation, success);
    },

    storeSyncCallback : function(records, operation, success) {
        if(!success){
  		  	ExtJSSeed.Exception.StoreOperationFailureHandler(operation);
        }
    }

});