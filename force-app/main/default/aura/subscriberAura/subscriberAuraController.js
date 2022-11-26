({
    handleLMSMessage : function(component, message, helper) {
        console.log('event received');
        console.log(message);
        component.set("v.accountIDFromLMS",message.getParam("AccountId"));
        component.set("v.AdditionalInfo",message.getParam("AdditonalInfo"));
    }
})
