$(function () {

    $("#click-me-clap").click(function () {
        console.log("clap");
        $("#clap")[0].play();
    });

    $("#click-me-crash").click(function () {
        console.log("crash");
        $("#crash")[0].play();
    });

    $(document).keyup(function (e) {
        console.log(e.which);
        switch (e.which) {
            case 65:
                $("#clap")[0].play();
                break;
            case 90:
                $("#crash")[0].play();
                break;
            case 69:
                $("#hihat")[0].play();
                break;
            case 82:
                $("#kick")[0].play();
                break;
            case 84:
                $("#snare")[0].play();
                break;
            case 89:
                $("#stick")[0].play();
                break;
            case 85:
                $("#shaker")[0].play();
                break;
            case 73:
                $("#snap")[0].play();
                break;
            case 79:
                $("#tom")[0].play();
                break;

        }
    });

//    $("#click-me").click( function () {
//        console.log("clicked");
//        $("#audio")[0].play();
//    });

//    $("#hover-me").hover(
//        function () {
//            console.log("hover start");
//            $("#audio")[0].play();
//        }, function () {
//            console.log("hover stop");
//        });
});


