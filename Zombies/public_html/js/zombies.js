$(document).ready(function() {
    zombie_startup();
});

function zombie_startup() {
    $('#lFoot').click(function() {
        $('#lFoot').off();
        $("#lFoot").animate({
            left: "+=50",
            top: "-=50"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = -(600 - now) / 6;
                console.log(now);
                $(this).css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });

    $('#rFoot').click(function() {
        $('#rFoot').off();
        $("#rFoot").animate({
            left: "+=50",
            top: "-=50"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = -(600 - now) / 6;
                console.log(now);
                $(this).css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });

    $('#head').click(function() {
        $('#head').off();
        $("#head").animate({
            left: "-=40",
        });
    });

    $('#lArm').click(function() {
        $('#lArm').off();
        $("#lArm").animate({
            left: "+=40",
            top: "-=50"
        });
    });

    $('#rArm').click(function() {
        $('#rArm').off();
        $("#rArm").animate({
            left: "+=40",
            top: "+=50"
        });
    });

    $('#lLeg').click(function() {
        $('#llf').off();
        $("#llf").animate({
            left: "+=50",
            top: "-=50"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = -(600 - now) / 6;
                console.log(now);
                $("#llf").css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });

    $('#rLeg').click(function() {
        $('#rlf').off();
        $("#rlf").animate({
            left: "+=50",
            top: "-=50"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = -(600 - now) / 6;
                console.log(now);
                $(this).css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });
}

function zombie_teardown() {

}