var adminManager = new ActiveXObject('Microsoft.ApplicationHost.WritableAdminManager');
adminManager.CommitPath = "MACHINE/WEBROOT/APPHOST";

var sitesSection = adminManager.GetAdminSection("system.applicationHost/sites", "MACHINE/WEBROOT/APPHOST");
var siteDefaultsElement = sitesSection.ChildElements.Item("siteDefaults");
var ftpServerElement = siteDefaultsElement.ChildElements.Item("ftpServer");

var logFileElement = ftpServerElement.ChildElements.Item("logFile");
   logFileElement.Properties.Item("period").Value = "Daily";
   logFileElement.Properties.Item("enabled").Value = true;

adminManager.CommitChanges();