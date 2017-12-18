({
    doInit: function(component, event, helper) {
        console.log("INITSUKA");
        //var action = component.get("c.getFile");
        var action1 = component.get("c.getLots");
        action1.setParams({"pr":component.get("v.project")});
       // action.setParams({"pr":component.get("v.project")});
        console.log("ДУИНИТ");
       // action.setCallback(this, function(response) {
         //   console.log("КАЛБЭКrfhnsd");
           // var state = response.getState();
           // if (state === "SUCCESS") {
            //    var attachment =response.getReturnValue()[0];
             //   component.set("v.imageSrc", "/servlet/servlet.FileDownload?file=" + attachment.Id);
                // console.log("RETURN"+response.getReturnValue());
                //console.log("ID"+attachment.Id);
                //console.log("IMAGE"+componetn.get("v.imageSrc"));
              //  console.log("SUCCEEEESSSSS");
           // }
          //  else {
          //      console.log("Failed with statesuka: " + state);
           // }
        //});
        action1.setCallback(this, function(response) {
            console.log("КАЛБЭК");
            console.log("КАЛБЭКw222");
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("ACTION LOTS"+ response.getReturnValue());
                component.set("v.lots", response.getReturnValue());
            }
            else {
                console.log("Failed with stateblyar: " + state);
            }
        });
      //  $A.enqueueAction(action);
        $A.enqueueAction(action1);
    },
    handleDonate: function(component, event, helper) {
        var donate = event.getParam("donate");
        helper.donate(component, donate);
    },
})