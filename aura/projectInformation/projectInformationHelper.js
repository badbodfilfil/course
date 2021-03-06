({
    donate: function(component, donate) {
        var mon = component.get("v.project.Donations__c");
        component.set("v.project.Donations__c", mon+donate);
        this.saveProject(component);
    },
    initLots: function(component) {
        var action = component.get("c.getLots");
        action.setParams({"pr":component.get("v.project")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.lots", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    saveProject: function(component){
        var action = component.get("c.saveProject");
        action.setParams({"pr":component.get("v.project")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.project", response.getReturnValue());        
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})