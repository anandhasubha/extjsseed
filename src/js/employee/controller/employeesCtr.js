/*<p>
* Controller file for the employee moduel
*  <ul>
*   <li> Stores all reference to the stores, models and views for employee module
*   <li> Houses all the logic related to display and data retrieval
* </ul>
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.controller.employeesCtr', {
    extend: 'Ext.app.Controller',

    stores: [
        'employeesStore@EmployeeApp.store'
    ],

    models : [
        'employeeModel@EmployeeApp.model'
    ],

    views : [
        'mainTabs',
        'listEmployees',
        'editEmployee'
    ],

    refs : [{
        ref: 'empViewport',
        selector: 'employee-viewport'
    }],

    // Attach event to button click during the init phase of controller
    init: function() { 
        this.control({            
            'editEmployee button[action=save]': {
                click: this.updateStore
            },          
            'editEmployee button[action=delete]': {
                click: this.updateStore
            },
            'editEmployee button[action=reset]': {
                click: function(button){     
                    var form = button.up('form');
                    form.getForm().reset();
                }
            },
            'listEmployees': {
                'itemclick':  this.displayEditForm
           }
        });
        logger.debug('Initialized Controller');
    },

    //Custom functions
    updateStore: function(button) {    
        var mainTabs = button.up('tabpanel');
        var form = button.up('form');
        var values = form.getValues();
        var remoteStore =  this.getEmployeesStoreStore();

        if(button.action == 'save') {
                //Create the model record
            var addRecord = Ext.create('EmployeeApp.model.employeeModel', {
                'firstName' : values.firstName,
                'lastName' : values.lastName,
                'dateOfBirth' : values.dateOfBirth,
                'email' : values.email,
                'gender' : values.gender,
                'department' : values.department,
            });

            //Is new record? - check if id is 'undefined'
            if( !values._id ){
                //Set the id for the new record
                //TODO temp logic remove later
                values._id = remoteStore.max('_id') + 1;
                addRecord.setId(values._id);
                addRecord.phantom = true;
                addRecord.save();
                remoteStore.load();
            } else {
                //record.setId(values._id);
                var updateRecord = remoteStore.findRecord('_id', values._id);
                updateRecord.set('firstName', 'updated');
                //updateRecord.save();
            } 
        } else if (button.action == 'delete') {
                var record = remoteStore.findRecord('_id', values._id);
                remoteStore.remove(record);
        }

        form.getForm().reset();
        this.displayMainTabs(mainTabs);
    },

    displayEditForm : function( item, record, item, index, e, eOpts){
        var tabs = Ext.ComponentQuery.query('mainTabs')[0]; //.setActiveTab(1);
        tabs.setActiveTab(1);
        
        var form = tabs.down('form');
        form.loadRecord(record);
    },

    displayMainTabs : function(mainTabs) {
        mainTabs.setActiveTab(0);
    }
});
