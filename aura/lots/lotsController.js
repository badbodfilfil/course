({
    
    handleCreateLot: function(component, event, helper) {
        var lot = event.getParam("lot");
        helper.createLot(component, lot);
    },
    
    
})