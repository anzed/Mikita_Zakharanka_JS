'use strict';

function add() {
    var task = document.getElementsByClassName('task')[0].value;
    var list = document.getElementsByClassName('todos-list')[0];
    
    if (task !== '') {
        var todo = task + '<button class="remove">x</button><button class="hide">Done</button>';
        var li = list.appendChild(document.createElement('li'));
        li.innerHTML = todo;
    } else {
        alert('Write something, please');
    }
    
    var removeButtons = document.getElementsByClassName('remove');
    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', remove);
    }
    
    var hideButtons = document.getElementsByClassName('hide');
    for (var j = 0; j < removeButtons.length; j++) {
        hideButtons[j].addEventListener('click', hide);
    }
}

function remove() {
    var self = this;
    
    self.parentElement.remove();
}

function hide() {
    var self = this;
    
    this.parentElement.className = 'hidden-todo';
}

function show() {
    var hiddenTodos = document.getElementsByClassName('hidden-todo');
    
    do {
        hiddenTodos[0].className = 'completed-todo';
    } while (hiddenTodos.length > 0);
}

document.getElementsByClassName('add')[0].addEventListener('click', add);
document.getElementsByClassName('show')[0].addEventListener('click', show);
