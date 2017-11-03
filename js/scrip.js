$("#expand").click(function(){

    var ct = $(this).text();
    if (ct == "+") {

            $(this).text("-");
            
    } else {

            $(this).text("+");
    };
});