$('#drop').click(function() {
    $('.dropDown').toggleClass('show');
});

$('#drop1').click(function() {
    if ($('#drop1').hasClass('show')) {
        $('dropDown').toggleClass('show');
        $('deepDropDown').toggleClass('show');
    } else {
        $('.deepDropDown').toggleClass('show');
    }

});

$('li' & ':not(ul)').click(function() {
    $('.dropDown').toggleClass('show');

})