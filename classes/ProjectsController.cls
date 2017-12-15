public with sharing class ProjectsController {
    @AuraEnabled
    public static List<Project__c> getProjects(){
        return [SELECT Id, Budget__c, Category__c, Days__c, Description__c, Information__c, Location__c, Name, Video__c, Wallet__c FROM Project__c];
    }
    @AuraEnabled
    public static List<Category__c> getCategories(){
        return [SELECT Id, Name FROM Category__c];
    }
    @AuraEnabled
    public static List<Attachment> getFile(Project__c pr){
        system.debug('Proj' + pr);
        
        List<Attachment> atts =[SELECT Id, Name, Body, ParentId FROM Attachment WHERE ParentId=:pr.Id];
        system.debug('atttta' + atts);
        return atts;
    }
}