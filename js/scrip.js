// Shift + and -
$(".expand").click(function(){
    $(this).removeClass('is-active');
    var ct = $(this).text();
    if (ct == "+") {
        $(this).text("-");
        $(this).addClass('is-active');
    } else {
        $(this).text("+");
        $(this).removeClass('is-active');
    };
});

// Expand div on click - work experience
$(".expand").click(function () {
    const myDescription = document.getElementsByClassName("job-description");
        $(this).next('div').next().slideToggle(500, function () {
        });
});

// portfolio menu
$('ul li a').click(function() {
    $('ul li').removeClass('is-active');
    $(this).closest('li').addClass('is-active');
});

//portfolio menu
$(".port-item").click(function(){
    $(".port-item").removeClass('is-active');
    $(this).addClass('is-active');
});