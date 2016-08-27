var todos = [],
    hidden = [];

function add () {
    var task = document.getElementById('task').value;

    if (task != '') {
        todos.push(task);
    } else {
        alert('Please, write something');
    }
    show();
}

function show () {
    var i = 0, j = 0, k = 0;
    var ul = '<ul>';

    for (i; i < todos.length; i++) {
        if (todos[i] != undefined) {
            ul += '<li>' + todos[i] + '<button class="remove" name="' + i + '">x</button>' + '<button class="hide" id="' + i + '">Done</button></li>';
        }
    }
    ul += '</ul>';

    document.getElementById('todos').innerHTML = ul;

    var removeButtons = document.getElementsByClassName('remove');
    for (j; j < removeButtons.length; j++) {
        removeButtons[j].addEventListener('click', remove);
    }

    var hideButtons = document.getElementsByClassName('hide');
    for (k; k < removeButtons.length; k++) {
        hideButtons[k].addEventListener('click', hide);
    }
}

function remove () {
    var name = this.getAttribute('name');
    todos.splice(name, 1);

    show();
}

function hide () {
    var id = this.getAttribute('id');
    var obj = document.getElementById(id);

    todos.splice(id, 1, undefined);
    hidden.push(obj.parentElement);

    show();
}

function showHidden () {
    if (hidden.length) {
        var ul = document.getElementsByTagName('ul')[0];
        for (var i = 0; i < hidden.length; i++) {
            ul.appendChild(hidden[i]).style.textDecoration = 'line-through';
        }
    }
}

document.getElementById('add').addEventListener('click', add);
show();