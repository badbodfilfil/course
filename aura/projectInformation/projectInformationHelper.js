({
	donate : function(controller, donate) {
		var mon = component.get("v.project.Donations__c");
        component.set("v.project.Donations__c", mon+donate);
        this.saveProject(controller);
	},
    saveProject: function(controller){
        var action = component.get("c.saveProject");
        action.setParams({"pr":component.get("v.project")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.project", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})