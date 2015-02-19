/*<p>
* View for the contents of the listing grid in the first tab 
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.view.listEmployees' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.listEmployees',

    title : 'All Employees',
    loadMask : true,
    store: 'employeesStore',

    stripeRows: true,
    columnLines: true,
    columns: [
        {header: 'Employee ID',  dataIndex: '_id'},
        {header: 'First Name',  dataIndex: 'firstName'},
        {header: 'Last Name', dataIndex: 'lastName'},
        {header: 'Date Of Birth', dataIndex: 'dateOfBirth'},
        {header: 'Gender', dataIndex: 'gender'},
        {header: 'Department', dataIndex: 'department'}
    ]
});
