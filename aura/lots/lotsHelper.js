({
	saveLot: function(component, lot, callback) {
    var action = component.get("c.saveLot");
    action.setParams({
        "lot": lot
    });
    if (callback) {
        action.setCallback(this, callback);
    }
    $A.enqueueAction(action);
},
createLot: function(component, lot) {
    this.saveLot(component, lot, function(response){
        var state = response.getState();
        if (state === "SUCCESS") {
            var lots = component.get("v.lots");
            lots.push(response.getReturnValue());
            component.set("v.lots", lots);
        }
    });
},
})