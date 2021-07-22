console.log('getting ready to jquery');

// THE INCANTATION
// Wait for the DOM to load
$(document).ready(onReady); // onReady is a "callback"

// Function to call when the DOM is loaded
function onReady() {
    console.log('so ready');

    // jQuery (aka "$") is a function
    // in the string is called a "selector"
    // the output is an element
    let h1 = $('h1');
    console.log('h1', h1);

    // change the text of our h1 element
    h1.text('jQuery FTW');
    // h1.css('transform', 'rotate(180deg)');
    h1.css('color', 'green');
    
    // grab by id
    let yoloImg = $('#yoloImg');
    console.log('yoloImg', yoloImg);
    
    // grab by class name
    let fancyImages = $('.fancyImg');
    console.log('fancyImgs', fancyImages);
    // hides the image with fancyImg class then fades in over 4,000 milliseconds
    fancyImages.hide().fadeIn(4000);

    // complex selectors
    // just like css
    let lotsOfThings = $('li > button, th');
    lotsOfThings.css('background', 'lightblue');

    let yoloDiv = $('#yoloDiv');
    yoloDiv.hide().slideDown(2000);

    // text setter
    let em = yoloDiv.find('em');
    em.text('You only linguini once');

    // text getter
    let emText = em.text();  // now a string
    console.log('emText', emText);

    // if (emText === 'You Only Levitate Once'){
    //     em.slideUp();
    // }
    // else{
    //     em.css('font-size', '100px');
    // }

    // traversing the DOM
    let input = em.parent().siblings('input');
    console.log('input', input);

    let inputText = input.val();
    
    let fancyUl = $('#fancyUl');
    let button = fancyUl.find('li > button');
    // let button = li.child('button');
    button.slideUp(4000);

    console.log('fancyUl', fancyUl);

    // add a new list item
    $('ul').append(`<li>Item D</li>`)

    // add a bunch of items to the list
    let items = [
        { name: 'Item A' },
        { name: 'Item B' },
        { name: 'Item C' },
        { name: 'Item D' },
        { name: 'Item E' },
        { name: 'Item F' },
    ];
    // empty the list, before adding new items to it
    $('ul').empty();
    for (let item of items) {
        $('ul').append(`
            <li>
                ${item.name}
                <button>Click me!</button>
            </li>
        
        `)
    }

}
