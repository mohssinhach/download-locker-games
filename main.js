(function () {
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
        $("#modal1").modal("show");
    }

    $("#modal2").on('show.bs.modal', function (e) {
        $("#modal1").modal("hide");
    });

    $("#closeBtn").on('click', function (e) {
        $(".info").fadeIn(800);
        $("#modal2").modal("hide");
         $('div').removeClass("blurit");
    });
    $("#modal2").on('click', function (e) {
         $('div').removeClass("blurit");
         $(".info").fadeIn(800);
        $("#modal2").modal("hide");
    });
    

})();

function modal2Closed() {
    $("#modal2").modal("hide");
} 
