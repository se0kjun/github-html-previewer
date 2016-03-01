'use strict';

(function() {
	var fileActions = document.querySelector('.file-actions > .btn-group');
	var previewComp = document.createElement('button');
	var previewCompClass = document.createAttribute('class');
	previewCompClass.value = 'btn btn-sm';
	var previewCompId = document.createAttribute('id');
	previewCompId.value = 'preview_comp';
	previewComp.innerText = 'Preview';

	previewComp.setAttributeNode(previewCompClass);
	previewComp.setAttributeNode(previewCompId);
	fileActions.appendChild(previewComp);

	previewComp.addEventListener('click', function(e) {
		var sourceContent = document.querySelectorAll('.js-file-line');
		var sourceString = '';
		var forEach = Array.prototype.forEach;

		forEach.call(sourceContent, function(elem){
			sourceString += elem.innerText;
		});

		chrome.runtime.sendMessage({source: sourceString, url: document.URL});
	});
})();
