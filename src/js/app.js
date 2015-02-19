/*<p>
* Controller file for the employee moduel
*  <ul>
*   <li> Stores all reference to the stores, models and views for employee module
*   <li> Houses all the logic related to display and data retrieval
*   <li> Validates the cookie and routes the user accordingly
* </ul>
*</p>
* @project ExtJS Seed 
* @Date
* @version 1.0
* @author Advanced Javascript Solutions COE
*/
Ext.ns('ExtJSSeed.EmployeeApp');

//Init statements
ExtJSSeed.EmployeeApp.RestClient = Ext.create('ExtJSSeed.proxy.RestClient',{
    baseUrl : ExtJSSeed.Config.EMPLOYEE_BASE_URL,
    apiKey : ExtJSSeed.Config.EMPLOYEE_API_KEY
    //url: this.baseUrl + 'apiKey=' + this.apiKey
});

Ext.application({
	name : 'EmployeeApp',
	appFolder : ExtJSSeed.Config.EMPLOYEE_APP_FOLDER,
	autoCreateViewport : true,
    views : [
        'appHeader',
        'appFooter',
        'login',
        'mainTabs'
    ],
    controllers : [ 'loginCtr', 'employeesCtr' ],

	init: function() {
        this.control({
            'appHeader button[action=logout]' : {
                click : this.logout
            },
        });

        logger.debug('Initialized Application');
    },
    launch:function () {
        this.viewport = Ext.ComponentQuery.query('viewport')[0];

        //check if login cookie is set and if so, bypass login page
        if (Ext.util.Cookies.get('session_token') != null) {
            this.showMainTabs();
        } else {
            this.showLoginForm();
        }
    	logger.debug('Launched Application');
    },

    /******* Custom functions *******/
    showLoginForm : function() {
        this.viewport.setCenterRegionContent(this.getLoginView());
    },

    logout : function() {
        Ext.util.Cookies.clear('session_token');
        this.viewport.setCenterRegionContent(this.getLoginView());
    },

    showMainTabs : function() {
        this.viewport.setCenterRegionContent(this.getMainTabsView());
    }
});

