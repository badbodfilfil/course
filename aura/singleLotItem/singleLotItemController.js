({
	donate : function(component, event, helper) {
		 var createLot = component.getEvent("donate");
        createLot.setParams({ "donate": component.get("v.lot.Money__c") });
        createLot.fire();
	}
})