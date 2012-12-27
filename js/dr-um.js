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

    $(document).keyup(function (e) {
        console.log(e.which);
        switch (e.which) {
            case 188:
                snd("#tz");
                uglyFeedback("#ugly-hihat");
//                $("#tz")[0].play();
                break;
            case 84:
                snd("#tchk");
                uglyFeedback("#ugly-snare");
//                $("#tchk")[0].play();
                break;
            case 32:
                snd("#poom");
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


            case 71:
                snd("#snare2");
                break;
            case 72:
                snd("#snare3");
                break;

        }
    });
});


