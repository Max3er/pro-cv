
// Shift + and -

$("#expand").click(function(){
    var ct = $(this).text();
    if (ct == "+") {
        $(this).text("-");
    } else {
        $(this).text("+");
    };
});

// Expand div on click

$("#expand").click(function () {
        $expand = $(this);
            $content = $(".job-description");
            $content.slideToggle(500, function () {
        });
});