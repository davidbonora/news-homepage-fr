$(document).ready(function () {
    console.log("loaded");
    $("#js-btn").click(function () {
        // Al hacer click...
        $("body").toggleClass("visible");
        // Añadimos o eliminamos la clase 'visible_menu' al menú
    });
});
