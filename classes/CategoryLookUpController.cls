public class CategoryLookUpController {
	@AuraEnabled
	public static List <Category__c> fetchLookUpValues(String searchKeyWord) {
		String searchKey = searchKeyWord + '%';
		return Database.query('SELECT id, Name FROM Category__c WHERE Name LIKE: searchKey ORDER BY createdDate DESC');
	}
}