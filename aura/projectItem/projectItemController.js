({
    doInit: function(component, event, helper) {
        component.set('v.progress', component.get("v.project.Donations__c")/component.get("v.project.Budget__c")*100);
    },
    openProjectInformation: function(component, event, helper) {
        console.log("in projectitem controller before fire evt");
        var evt = $A.get("e.force:navigateToComponent");
        var project = component.get("v.project");
        evt.setParams({
            componentDef: "c:projectInformation",
            componentAttributes: {
                project : project
            }
        });
        evt.fire();  
    },
})