'use strict';

function getData(filename, areaNum) {
    var xhr = new XMLHttpRequest();
    var path = 'data/';
    
    path += filename;

    xhr.open('POST', path, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            var parsedJson = JSON.parse(xhr.responseText);
            
            for (var i = 0; i < parsedJson.length; i++) {
                var list = document.getElementsByClassName(areaNum)[0];
                var li = list.appendChild(document.createElement('li'));
                li.innerHTML = parsedJson[i].task;
            }
        }
    };
};

setTimeout(function() {getData('data[1].json', 'first-list')}, 1000);
setTimeout(function() {getData('data[2].json', 'second-list')}, 2000);
setTimeout(function() {getData('data[3].json', 'third-list')}, 3000);
setTimeout(function() {getData('data[4].json', 'fourth-list')}, 4000);
