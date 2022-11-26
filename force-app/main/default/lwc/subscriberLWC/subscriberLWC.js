import { LightningElement,track, wire } from 'lwc';
import NAME_FLD from '@salesforce/schema/Account.Name';
import TYPE_FLD from '@salesforce/schema/Account.Type';
import REVENUE_FLD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FLD from '@salesforce/schema/Account.Industry';
import WEBSITE_FLD from '@salesforce/schema/Account.Website';
import ACCOUNTLMC from "@salesforce/messageChannel/AccountMessageChannel__c";
import {subscribe, MessageContext,APPLICATION_SCOPE} from 'lightning/messageService';

// import { APPLICATION_SCOPE, createMessageContext,subscribe } from 'lightning/messageService';
// import ACCOUNTLMC from '@salesforce/messageChannel/AccountMessageChannel__c';

export default class SubscriberLWC extends LightningElement {
    @track additionalInfo='';
    accountId;
    @track objectApiName='Account';
    @wire(MessageContext)
    messageContext;
    // context = createMessageContext();
    fields=[NAME_FLD,TYPE_FLD,REVENUE_FLD,INDUSTRY_FLD,WEBSITE_FLD];
    connectedCallback(){
        this.subscribeLMS();
    }
    subscribeLMS(){
        subscribe(this.messageContext,ACCOUNTLMC,(message)=>{
            console.log('message',message);
            this.handleMessage(message);
        });
        
        // subscribe(this.context,ACCOUNTLMC,(message)=>{
        //     this.handleMessage(message);
        // },{scope: APPLICATION_SCOPE})
    }
    handleMessage(message){
        this.additionalInfo = message.AdditionalInfo;        
        this.accountId = message.AccountId;
        
        
    }
}