/**
* @fileoverview
* <p>
* Define application wide constants and Configuration values in the Ext namespace.
* </p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/
Ext.ns('ExtJSSeed.Config');

/*** REST related constants - BEGIN ***/
//The base url for all the rest based services in employee module
ExtJSSeed.Config.EMPLOYEE_BASE_URL = 'https://api.mongolab.com/api/1/databases/extjsseed/collections/Employee';
//The auth token to access the rest based services hosted in mongo lab
ExtJSSeed.Config.EMPLOYEE_API_KEY = 'CGV_RvPQP_sJ1IIcZXZoaZlLuRkufdmP';
/*** REST related constants - END ***/


/*** REST related constants - BEGIN ***/
// App folder - this folder reference is required by ExtJS MVC archittecture
ExtJSSeed.Config.EMPLOYEE_APP_FOLDER = '/src/js/employee';