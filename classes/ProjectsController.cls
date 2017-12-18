public with sharing class ProjectsController {
    @AuraEnabled
    public static List<Project__c> getProjects(){
        return [SELECT Id, Budget__c, Category__c, Image__c, Days__c, Days_Left__c, Donations__c, Description__c, Information__c, Location__c, Name, Video__c, Wallet__c FROM Project__c];
    }
    @AuraEnabled
    public static List<Project__c> getProjectsByCategory(Id catId){
        return [SELECT Id, Budget__c, Category__c, Image__c, Days__c, Days_Left__c, Description__c, Donations__c, Information__c, Location__c, Name, Video__c, Wallet__c FROM Project__c WHERE Category__r.Id=:catId];
    }
    @AuraEnabled
    public static List<Category__c> getCategories(){
        return [SELECT Id, Name FROM Category__c];
    } 
    @AuraEnabled
    public static Project__c saveProject(Project__c pr){
        system.debug(pr);
        update pr;
        return pr;
    }
    @AuraEnabled
    public static List<Lot__c> getLots(Project__c pr){
        system.debug('YASUKAVGETLOTS');
        List<Lot__c> lots =[SELECT Id, Name, Money__c, Description__c, Project__c FROM Lot__c WHERE Project__c=:pr.Id];
        system.debug('lots' + lots);
        return lots;
    }
}