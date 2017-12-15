({
    doInit: function(component, event, helper) {
        var action = component.get("c.getCategories");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.categories", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    selectCategory: function(component, event, helper) {
        var action = component.get("c.getProjectsByCategory");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.categories", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
})