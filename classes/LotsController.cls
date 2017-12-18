public with sharing class LotsController {
    
    @AuraEnabled
    public static List<Lot__c> getLots() {
        return [SELECT Id, Name, Description__c, Money__c, Project__c 
                FROM Lot__c];
    }
    @AuraEnabled
    public static Project__c createProject(Project__c project) {
        upsert project;
        return project;
    }
    @AuraEnabled
    public static Lot__c saveLot(Lot__c lot) {
        upsert lot;
        return lot;
    }
    @AuraEnabled
    public static Lot__c[] updateLots(Lot__c[] lots, Project__c project) {
        Project__c[] projects =[SELECT Id, Name FROM Project__c WHERE Name= :project.Name];
        for(Lot__c lot: lots){
            lot.Project__c=projects[0].Id;
        }
        update lots;
        return lots;
    }
}