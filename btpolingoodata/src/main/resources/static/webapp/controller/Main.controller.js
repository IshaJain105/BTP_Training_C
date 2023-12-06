sap.ui.define([
    'sap/ui/model/odata/v2/ODataModel',
    'sap/ui/core/mvc/Controller'
], function(Controller,ODataModel) {
    'use strict';
    return Controller.extend("donald.controller.Main",{
        //Constructor
        onInit: function(){
            //create our Model object of type odata based on current relative path
            var oDataModel=new ODataModel("/isha.svc");
            //set the model obj at application level
            sap.ui.getCore().setModel(oDataModel);
        }
    });
    
});