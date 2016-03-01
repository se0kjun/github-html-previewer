'use strict';

chrome.runtime.onMessage.addListener(function(message){
    chrome.tabs.create({'url': chrome.extension.getURL("html/preview.html"), 
                        'active': false}, function(tab){
        var selfTabId = tab.id;
        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
            if (changeInfo.status == "complete" && tabId == selfTabId){
                // send the data to the page's script:
                var tabs = chrome.extension.getViews({type: "tab"});
                // tabs[0].parserPreview(message.source, message.url);
                chrome.tabs.sendMessage(tabId, {source: message.source, url: message.url}); 
                // tabs[0].chrome.extension.sendMessage({source: message.source, url: message.url});
            }
        });
    });
});

// Github uses HTML5's pushState for page transitions.
// So the content script is forced to execute using webNavigation.
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"js/contentscript.js"});
});
