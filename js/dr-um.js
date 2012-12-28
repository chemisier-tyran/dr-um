$(function () {

    var i = 0;
// allows to play HTML5 sounds ASYNCHRONOUSLY (for crash and crush..)
    function snd(soundname){
        if(soundname != null){
            $(soundname).clone()
                .attr('id', 'audio_clone_'+i)
                .appendTo('#audio-div');
            var elem = document.getElementById('audio_clone_'+i);
            setTimeout("$('#audio_clone_"+i+"').remove();",5000);
            i++;
            if(elem){
                elem.play();
            }
        }
    }

    function uglyFeedback(uglyElement) {
        $(".ugly-element").css("color", "black");
        $(uglyElement).css("color", "red");
    }

    $(".ugly-element").mouseover( function(e) {
        var elementSelected = $(e.target).text();
        var sndSelected = $("#" + elementSelected + "-selector").val();

        snd(sndSelected);
        uglyFeedback("#ugly-" + elementSelected);

    });

//    TODO refactor it like the hover one
    $(document).keyup(function (e) {
        console.log(e.which);
        switch (e.which) {
            case 77:
//                snd("#tz");
                var hihatSelected = $("#hihat-selector").val();
                snd(hihatSelected);
                uglyFeedback("#ugly-hihat");
//                $("#tz")[0].play();
                break;
            case 84:
//                snd("#tchk");
                var snareSelected = $("#snare-selector").val();
                snd(snareSelected);
                uglyFeedback("#ugly-snare");
//                $("#tchk")[0].play();
                break;
            case 32:
                var kickSelected = $("#kick-selector").val();
                snd(kickSelected);
//                snd("#poom");
                uglyFeedback("#ugly-kick");
//                $("#poom")[0].play();
                break;
            case 86:
                snd("#stick");
                uglyFeedback("#ugly-stick");
//                $("#stick")[0].play();
                break;
            case 190:
                snd("#shaker");
                uglyFeedback("#ugly-shaker");
//                $("#shaker")[0].play();
                break;
            case 65:
                snd("#crash");
                uglyFeedback("#ugly-crash");
//                $("#crash")[0].play();
                break;
            case 90:
                snd("#crush");
                uglyFeedback("#ugly-crush");
                break;
            case 85:
                snd("#tom1");
                uglyFeedback("#ugly-tom1");
                break;
            case 73:
                snd("#tom2");
                uglyFeedback("#ugly-tom2");
                break;
            case 79:
                snd("#tom3");
                uglyFeedback("#ugly-tom3");
                break;
            case 80:
                snd("#tom4");
                uglyFeedback("#ugly-tom4");
                break;


            case 67:
                snd("#clap");
//                uglyFeedback("#ugly-tom4");
                break;

//
//            case 71:
//                snd("#snare2");
//                break;
//            case 72:
//                snd("#snare3");
//                break;

        }
    });
});


