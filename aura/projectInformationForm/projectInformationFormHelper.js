({
    saveLot: function(component) {
        var action = component.get("c.updateLots");
        action.setParams({"lots":component.get("v.lots"),
                          "project":component.get("v.newProject")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("Success savelot: " + state);
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
        action.setParams({"project": component.get("v.newProject"),
                          "name": component.get("v.fileName"),
                          "contentType": component.get("v.contentType"),
                          "data": component.get("v.data"),
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
    
    handleFinished: function(component, event){
        var fileName, p;
        var reader = new FileReader();
        reader.onload = function(e) {
            p =  reader.result.match(/data:(.+);base64,(.+)/);
            if(p[1] && p[2]) {
                fileName = '' + event.getSource().get("v.files")[0].name;
               component.set("v.type", p[1]);
               component.set("v.data", p[2]);
               component.set("v.fileName", fileName);
            }
        };
        reader.readAsDataURL(event.getSource().get("v.files")[0]);
    },
})