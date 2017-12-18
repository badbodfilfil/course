({
    doInit: function(component, event, helper) {
        var action = component.get("c.getProjects");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.projects", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state in proj Controller: " + state);
            }
        });
        var action1 = component.get("c.getCategories");
        action1.setCallback(this, function(response) {
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
        $A.enqueueAction(action1);
    },
})