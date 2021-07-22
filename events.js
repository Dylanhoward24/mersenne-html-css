console.log('in events.js');

// THE INCANTATION
$(document).ready(onReady);

// event handlers need to be in onReady
function onReady() {
    console.log('so ready');
    
    // handle add button events
    // event handler
    // event listener
    // event registration
    $('#addBtn').on('click', addToList);
}

    // handle delete button events
    console.log('.deleteBtn', $('.deleteBtn'));
    // $('.deleteBtn').on('click', deleteItem);
    // this won't work because it isn't there when page loads

    // use a trick to work around this
    // "event delegation"
    $(document).on('click', '.deleteBtn', deleteItem);


function addToList() {
    console.log('button got clicked');

    // grab the value of my form input
    let inputValue = $('#aboutYou').val();
    console.log('inputValue', inputValue);


    $('#listOfThings').append(`
        <li>
            ${inputValue}
            <button class="deleteBtn">Delete Me</button>
        </li>
    `);

    // clear my input
    $('#aboutYou').val('')
}

function deleteItem(){
    console.log('in delete item');
    
    // this is the button that was clicked
    console.log('this is', $(this));

    // remove the parent <li> element
    $(this).parent().remove();
}