$(document).ready(function() {
    zombie_startup();
});

function zombie_startup() {
    registerDeviceMotion();
    
    $('#lFoot').click(function() {
        $('#lFoot').off();
        var lf = $('#lFoot');
        registerElement(lf);
        lf.remove();
        $('#thebody').append(lf);
//          margin-left: 616px;
//  margin-top: 285px;
        lf.css("margin-left", "646px");
        lf.css("margin-top", "185px");
        $("#lFoot").animate({
            left: "+=30",
            top: "-=140"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = -(600 - now) / 7;
                console.log(now);
                $(this).css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });

    $('#rFoot').click(function() {
        $('#rFoot').off();
        var rf = $('#rFoot');
        registerElement(rf);
        rf.remove();
        $('#thebody').append(rf);
        rf.css("margin-left", "663px");
        rf.css("margin-top", "358px");
        $("#rFoot").animate({
            left: "+=40",
            top: "+=100"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = (600 - now) / 18;
                console.log(now);
                $(this).css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });

    $('#head').click(function() {
        registerElement($('#head'));
        $('#head').off();
        $("#head").animate({
            left: "-=90"
        });
    });

    $('#lArm').click(function() {
        registerElement($('#lArm'));
        $('#lArm').off();
        $("#lArm").animate({
            left: "+=40",
            top: "-=70"
        });
    });

    $('#rArm').click(function() {
        registerElement($('#rArm'));
        $('#rArm').off();
        $("#rArm").animate({
            left: "+=40",
            top: "+=110"
        });
    });

    $('#rHand').click(function() {
        registerElement($('#rHand'));
        $('#rHand').off();
        $("#rHand").animate({
            left: "+=40",
            top: "+=90"
        });
    });

    $('#lLeg').click(function() {
        registerElement($('#lLeg'));
        $('#lLeg').off();
        $('#lFoot').off();
        $("#llf").animate({
            left: "+=30",
            top: "-=190"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = -(600 - now) / 20;
                console.log(now);
                $("#llf").css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });

    $('#rLeg').click(function() {
        registerElement($('#rLeg'));
        $('#rLeg').off();
        $('#rFoot').off();
        $("#rlf").animate({
            left: "+=30",
            top: "+=140"
        }, {
            duration: 600,
            step: function(now, fx) {
                var deg = (600 - now) / 24;
                console.log(now);
                $(this).css({"transform": "rotate(" + deg + "deg)"});
            }
        });
    });
}

function zombie_teardown() {

}

function registerDeviceMotion() {
	if(window.DeviceMotionEvent) {
		window.addEventListener('deviceorientation', function(oe) {			
//			oHandler.update(oe.gamma);
                        console.log(oe.gamma);
                        updateOrientation(oe.gamma);
		}, false);

	}else{
		alert('Sorry your device does not support motion events');
	}
};

var elementsArray = [];

function registerElement(element){
    elementsArray.push(element);   
}

function updateOrientation(gamma){
    for (i=0; i<=elementsArray.length(); i++){
        elementsArray[i].left(gamma);
    }
}