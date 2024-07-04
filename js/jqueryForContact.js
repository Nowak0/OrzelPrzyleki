$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "lightskyblue");
        $(this).css("color", "white");
    });
    $("input").blur(function() {
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    });
});