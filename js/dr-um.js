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

    $(document).keyup(function (e) {
        console.log(e.which);
        switch (e.which) {
            case 188:
                snd("#tz");
//                $("#tz")[0].play();
                break;
            case 84:
                snd("#tchk");
//                $("#tchk")[0].play();
                break;
            case 32:
                snd("#poom");
//                $("#poom")[0].play();
                break;
            case 86:
                snd("#stick");
//                $("#stick")[0].play();
                break;
            case 190:
                snd("#shaker");
//                $("#shaker")[0].play();
                break;
            case 65:
                snd("#crash");
//                $("#crash")[0].play();
                break;
            case 90:
                snd("#crush");
                break;
            case 85:
                snd("#tom1");
                break;
            case 73:
                snd("#tom2");
                break;
            case 79:
                snd("#tom3");
                break;
            case 80:
                snd("#tom4");
                break;

        }
    });
});


