({
    clickCreate : function(component, event, helper) {
        helper.createProject(component);
    },
    handleUploadFinished : function(component, event, helper) {
       helper.handleFinished(component, event);        
    },
    doInit: function(component, event, helper) {
        component.set("v.myRecordId",component.get("v.recordId"));
    },
})