'use strict';

var githubConverter = require('github-url-converter');
var $ = require('jquery');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var content = document.body;
    var scriptcontent = $('head');
    var doc = githubConverter(request.source, request.url);
    // $(content).append(doc);
    // $('script', doc).appendTo('head');
    // scriptcontent.append($('script', doc));
    // $('script', doc).appendTo('head');
    console.log(doc);
    console.log($(doc));
    console.log($(doc).text());
    // $(doc).appendTo('body');
    $(document.body).append(doc.body);
    $(document.head).append(doc.head);
    // content.innerHTML = doc;
});
// var nodeVal = node.value || node.nodeValue;