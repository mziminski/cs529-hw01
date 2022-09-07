$(function () {

    $("#c1").click(function () {
        $(this).hide();
        clearInterval(id_c);
        alert("Circle will be removed!");
    });

    $("#r1").click(function () {
        $(this).hide();
        clearInterval(id_r);
        alert("Rectangle will be removed!");
    });

    $("#e1").click(function () {
        $(this).hide();
        clearInterval(id_e);
        alert("Ellipse will be removed!");
    });
});