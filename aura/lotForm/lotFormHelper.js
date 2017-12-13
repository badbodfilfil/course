({
	createLot : function(component, newLot) {
        var createLot = component.getEvent("createLot");
        createLot.setParams({ "lot": newLot });
        createLot.fire();
	}
})