({
    doInit : function(component, event, helper) {
        var action = component.get("c.getAccounts");
        action.setCallback(this,function(response){
            var accResult = response.getReturnValue();
            component.set("v.accountResults",accResult)
        });
        $A.enqueueAction(action);
    },
    handleClick:function(component,event,helper){
        event.preventDefault();
        const payload = {
            AccountId:event.target.dataset.value,
            AdditionalInfo:'This is published from AURA Component'
        }
        component.find('ACCOUNTLMC').publish(payload);
        // const payload = {
        //     AccountId : event.target.dataset.value,
        //     AdditionalInfo:"This is published from Aura Component"
        // }
        // component.find("accountMessageChannel").publish(payload);
    }
})
