({
    
     openProjectInformation: function(component, event, helper) {
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