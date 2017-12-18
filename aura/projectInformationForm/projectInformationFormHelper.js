({
    saveLot: function(component) {
        var action = component.get("c.updateLots");
        action.setParams({"lots":component.get("v.lots"),
                          "project":component.get("v.newProject")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var evt = $A.get("e.force:navigateToComponent");
                var project = component.get("v.newProject");
                evt.setParams({
                    componentDef: "c:projectInformation",
                    componentAttributes: {
                        project : project
                    }
                });
                evt.fire(); 
            }
            else {
                console.log("Failed with state savelot: " + state);
            }
        });
        
        $A.enqueueAction(action);
    },
    
    
    
    createProject: function(component) {
        var action = component.get("c.createProject");
        component.set("v.newProject.Category__c" , component.get("v.newProject.Category__c.Name.Id"));
        action.setParams({"project": component.get("v.newProject")
                         });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("Success createproject: " + state);
                this.saveLot(component);
            }
            else {
                console.log("Failed with state createproject: " + state);
            }
        });
        
        $A.enqueueAction(action);
        
    },
    
    
})