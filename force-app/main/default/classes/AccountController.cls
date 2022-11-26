public without sharing class AccountController {
    public String vfParam{get; set;}
    // public ApexParamController(){
        
    // }
    public PageReference doActionFunction(){
        // Do Something...
        System.debug('vfParam : ' + vfParam);
        return null;
    }




    public Boolean accDisplay{get;set;}
    public String accountId{get;set;}
    // public String valueThree{get;set;}
    public String additionalInfo{get;set;}
    public Account accObj{get;set;}
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [SELECT Id,Name,Type,Phone,Industry,Website FROM Account LIMIT 20];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    public PageReference retrieveAccountDetail(){
        System.debug('retrieveAccountDetail');
        accDisplay = false;
        if(AccountId != null){
            accObj = [SELECT Id,Type,Name,Phone,AnnualRevenue,Industry,Website FROM Account Where Id=:accountId];
            System.debug(accObj);
            accDisplay= true;
        } 
        return null;
    }
}
