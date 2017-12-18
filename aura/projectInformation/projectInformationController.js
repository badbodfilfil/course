({
    doInit: function(component, event, helper) {
        helper.initLots(component);
        component.set('v.progress', component.get("v.project.Donations__c")/component.get("v.project.Budget__c")*100);
    },
    
    handleDonate: function(component, event, helper) {
        var donate = event.getParam("donate");
        helper.donate(component, donate);
    },
})