var targetNode1 = document.getElementById('language-en-main');
var targetNode2 = document.getElementById('language-ru-header');
var targetNode3 = document.getElementById('language-ru-main');
var targetNode4 = document.getElementById('language-en-footer');
var targetNode5 = document.getElementById('language-ru-footer');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type == 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode1, config);
observer.observe(targetNode2, config);
observer.observe(targetNode3, config);
observer.observe(targetNode4, config);
observer.observe(targetNode5, config);

// Later, you can stop observing
observer.disconnect();
