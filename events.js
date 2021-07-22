console.log('in events.js');

// THE INCANTATION
$(document).ready(onReady);

// event handlers need to be in onReady
function onReady() {
    console.log('so ready');
    
    // event handler
    // event listener
    // event registration
    $('#addBtn').on('click', addToList)
}

function addToList() {
    console.log('button got clicked');
    let input = $('input');
    let inputText = input.val()
    console.log('inputText', inputText);

    $('ul').append(`
        <li>
            ${input.val()}
        </li>
    `);
}