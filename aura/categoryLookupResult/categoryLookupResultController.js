({
    selectRecord : function(component, event, helper){   
        var getSelectRecord = component.get("v.oRecord");
        component.set("v.project.Category__c" , getSelectRecord);
        console.log(component.get("v.oRecord"));
        console.log(component.get("v.project"));
        var compEvent = component.getEvent("oSelectedRecordEvent");
        compEvent.setParams({"recordByEvent" : getSelectRecord });
        compEvent.fire();
        
    },
})