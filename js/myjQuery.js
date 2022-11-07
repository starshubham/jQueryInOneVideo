$(document).ready(function () {
    console.log('I am in a new file now');

    // Your jquery code here
    console.log("We are using jQuery");
    // jQuery Syntax looks like this
    // $('selector').action()

    //clicks on all the p elements.
    // $('p').click();   // click on p

    // $('p').click(function () {
    //     console.log('you clicked on p', this);
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });  // do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });

    // $('p').mouseenter(function () {
    //     console.log('you entered: ', this);
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });

    // $('p').mouseleave(function () {
    //     console.log('you leave mouse: ', this);
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });

    // $('p').mousedown(function () {
    //     console.log('you click using mouse(mousedown event): ', this);
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });

    // $('p').hover(function () {
    //     console.log('you hovered on: ', this);
    //     // $('#id').hide();
    //     // $('.class').hide();
    // },
    // function () {
    //     console.log('Thanks for coming');
    // });

    // there are three main types of selectors in jQuery 
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector -  This is an example of element selector which clicks on all p
    // $('p').click();

    // 2. Id selector - this is an example of id selector
    // $('#second').click();

    // 3. Class selector - this is an example of class selector
    // $('.odd').click();

    // other selectors
    // $('*').click() // clicks on all the elements
    // $('p:odd').click() // clicks on only odd elements
    // $('p:first').click() // clicks on first element of p

    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // demoing the on method
    // $('p').on({
    //     click: function () {
    //         console.log('Thanks for clicking', this);
    //     },
    //     mouseleave: function () {
    //         console.log("mouseleave");

    //     }
    // })

    // $('#wiki').hide(2000, function () {
    //     console.log("hidden");
    // }) 
    // $('#wiki').show(2000, function () {
    //     console.log("show");
    // })  

    // $('#but').click(function () {
    //     $('#wiki').toggle(1000);
    // })  

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // $('#but').click(function () {
    //     $('#wiki').fadeOut(5000);
    // }) 
    // $('#but').click(function () {
    //     $('#wiki').fadeIn(5000);
    // }) 
    // $('#but').click(function () {
    //     $('#wiki').fadeToggle(5000);
    // })
    // $('#but').click(function () {
    //     $('#wiki').fadeTo(2000,0.4);           // Gradually change the opacity of all <p> elements
    // })

    // Slide methods - speed and callback parameters are optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })

    // $('#wiki').slideDown(1000)

    // $('#but').click(function () {
    //     $('#wiki').slideToggle(1000)
    // })

    // // Animate function in jQuery
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'
    // }, "slow")

    $('#wiki').animate({ opacity: 0.3 }, 4000);
    $('#wiki').animate({ opacity: 0.9 }, 1000);
    $('#wiki').animate({ width: '350px' }, 12000);
    
    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    // $('#wiki').remove()
    // $('#wiki').stop()

    // $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').toggleClass('myclass')  // It will remove the 'myclass' if present or add 'myclass' if not present.
    // $('#wiki').css('background-color', 'red')  // Change bg-color to red
    // $('#wiki').css('background-color')        // To know about the bg-color

    // Ajax -- Art of exchanging data with server without reloading the page.
    // What is AJAX ?
    // AJAX = Asynchronous JavaScript And XML.

    // AJAX is not a programming language.

    // AJAX just uses a combination of:

    //     A browser built -in XMLHttpRequest object(to request data from a web server)
    //     JavaScript and HTML DOM(to display or use the data)

    // AJAX is a misleading name.AJAX applications might use XML to transport data, 
    // but it is equally common to transport data as plain text or JSON text.

    // AJAX allows web pages to be updated asynchronously by exchanging data with a web server 
    // behind the scenes.This means that it is possible to update parts of a web page, 
    // without reloading the whole page.

    // AJAX Using jQuery
    // $.get('js/jquery-3.6.1.min.js', function (data, status) { alert(data); })

    // $.get('js/jquery-3.6.1.min.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.6.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });       // Not Allowed
});