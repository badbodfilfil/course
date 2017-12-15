({
	doInit: function(component, event, helper) {
        var action = component.get("c.getFile");
        action.setParams({"pr":component.get("v.project")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var attachment =response.getReturnValue()[0];
                component.set("v.imageSrc", "/servlet/servlet.FileDownload?file=" + attachment.Id);
                console.log("RETURN"+response.getReturnValue());
               	console.log("ID"+attachment.Id);
                console.log("IMAGE"+componetn.get("v.imageSrc"));
                console.log("SUCCEEEESSSSS");
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
})