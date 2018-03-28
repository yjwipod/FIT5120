window.onload = function () {
    function initPos() {
        $("#imgHest").animate({
            left: '+=' + Math.random() * 500,
            top: '+=' + Math.random() * 300
        });
        $("#imgHeal").animate({
            left: '+=' + Math.random() * 500,
            top: '+=' + Math.random() * 300
        });
        $("#imgNorm").animate({
            left: '+=' + Math.random() * 500,
            top: '+=' + Math.random() * 300
        });
        $("#imgUnh").animate({
            left: '+=' + Math.random() * 500,
            top: '+=' + Math.random() * 300
        });
        $("#imgUnhest").animate({
            left: '+=' + Math.random() * 500,
            top: '+=' + Math.random() * 300
        });
    };

    //var imgs;
    //imgs = $("#images li");
    ////$(document).ready(function () {
    ////    var drag = {};
    ////    imgs = $("#images li");
    ////    imgs.draggable({
    ////        stack: { group: '#images li', min: 1 },
    ////        start: function () {
    ////            $this = $(this);
    ////            if ($this.attr('id') === 'instructions') { $this.fadeOut().remove(); }
    ////            drag.startTime = new Date();
    ////            drag.startPos = $this.position();
    ////        }
    ////    });
    ////});



    //$(window).load(function initPos () {
    //    $w = $(window);
    //    imgs.css({
    //        position: 'absolute',
    //        left: $w.width() / 2 - imgs.width(),
    //        top: $w.height() / 2 - imgs.height()

    //    });
    //    for (var i = 0; imgs[i]; i++) {
    //        $(imgs[i]).animate({
    //            left: '+=' + Math.random() * 1500,
    //            top: '+=' + Math.random() * 1500
    //        });
    //    }
    //});

    $(document).ready(function () {
        initPos();
        $("#foodLevel").droppable($("#imgHest, #imgHeal, #imgNorm, #imgUnh, #imgUnhest").draggable({ revert: "valid" }));
        $("#slotHest").droppable({
            accept: "#imgHest",
            drop: function (event, ui) {
                $(this).css("background", "greenyellow");
                $("#imgHest").draggable({ revert: "invalid" });
            },
            out: function (event, ui) {
                $(this).css("background", "transparent");
                $("#imgHest").draggable({ revert: "valid" });
            }
        });

        $("#slotHeal").droppable({
            accept: "#imgHeal",
            drop: function (event, ui) {
                $(this).css("background", "greenyellow");
                $("#imgHeal").draggable({ revert: "invalid" });
            },
            out: function (event, ui) {
                $(this).css("background", "transparent");
                $("#imgHeal").draggable({ revert: "valid" });
            }
        });

        $("#slotNorm").droppable({
            accept: "#imgNorm",
            drop: function (event, ui) {
                $(this).css("background", "greenyellow");
                $("#imgNorm").draggable({ revert: "invalid" });
            },
            out: function (event, ui) {
                $(this).css("background", "transparent");
                $("#imgNorm").draggable({ revert: "valid" });
            }
        });

        $("#slotUnh").droppable({
            accept: "#imgUnh",
            drop: function (event, ui) {
                $(this).css("background", "greenyellow");
                $("#imgUnh").draggable({ revert: "invalid" });
            },
            out: function (event, ui) {
                $(this).css("background", "transparent");
                $("#imgUnh").draggable({ revert: "valid" });
            }
        });

        $("#slotUnhest").droppable({
            accept: "#imgUnhest",
            drop: function (event, ui) {
                $(this).css("background", "greenyellow");
                $("#imgUnhest").draggable({ revert: "invalid" });
            },
            out: function (event, ui) {
                $(this).css("background", "transparent");
                $("#imgUnhest").draggable({ revert: "valid" });
            }
        });
    });
};

//window.onload
//    = function () {

//        $(document).ready(function () {

//            $("#food1").draggable();
//            $("#food2").draggable();
//            $("#food3").draggable();
//            $("#food4").draggable();
//            $("#food5").draggable();
//            window.onload = function () {
//                for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
//                    document.getElementsByTagName("div")[i].onmousedown = function () {
//                        this.style.zIndex = 5;
//                    }
//                    document.getElementsByTagName("div")[i].onmouseout = function () {
//                        this.style.zIndex = 1;
//                    }
//                }
//            }

//        });
//    };

