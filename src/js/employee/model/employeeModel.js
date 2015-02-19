/*<p>
* The model - this holds the definition of the 'Employee' entity
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/

Ext.define('EmployeeApp.model.employeeModel', {
    extend: 'Ext.data.Model',
	idProperty: "_id",
	fields: [
		{name: "_id", type: "int"},
		{name: "email", type: "string"},
		{name: "firstName", type: "string"},
		{name: "lastName", type: "string"},
		{name: "dateOfBirth", type: "string"},
		{name: "gender", type: "string"},
		{name: "department", type: "string"}
	],
	proxy: ExtJSSeed.EmployeeApp.RestClient
});
