({
    doInit: function(component, event, helper) {
        console.log("INITSUKA");
        helper.initLots(component);
    },
    
    handleDonate: function(component, event, helper) {
        var donate = event.getParam("donate");
        helper.donate(component, donate);
    },
})