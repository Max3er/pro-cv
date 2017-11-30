
// Shift + and -

$("#expand").click(function(){
    var ct = $(this).text();
    if (ct == "+") {
        $(this).text("-");
    } else {
        $(this).text("+");
    };
    
});

// Expand div on click - work experience

$("#expand").click(function () {
   // $expand = $(this);
   // $content = $(".job-description");
   // $content.slideToggle(500, function () {
    $(this).closest(".job-description").slideToggle(500, function () {
    });
});

// portfolio menu

$('ul li a').click(function() {
    $('ul li').removeClass('is-active');
    $(this).closest('li').addClass('is-active');
});