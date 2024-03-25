$(document).ready(function() {
    // Attaching click event handlers to div elements
    for (var i = 1; i <= 5; i++) {
        $('#div_' + i).click(function() {
            var timestamp = new Date().toLocaleString('en-US', { timeZone: 'EST' });
            console.log('At ' + timestamp + ' ' + this.id);
        });
    }

    // Attaching mouseover event handler to div elements to display title in the #messages div
    $('div[id^="div_"]').mouseover(function() {
        $('#messages').text($(this).attr('title'));
    });
});
