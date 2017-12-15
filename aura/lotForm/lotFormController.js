({
	clickCreate: function(component, event, helper) {
        var validLot = component.find('lotform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validLot){
            var newLot = component.get("v.newLot");
            helper.createLot(component, newLot);
        }
    },
})