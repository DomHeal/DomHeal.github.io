$(document).ready(function() {
    $("#main").load('portfolio.html #main');

    $("#blog").click(function() {
        $("#main").load('blog.html #main');
    });
    $("#home").click(function() {
        $("#main").load('portfolio.html #main');
    });

    $("#about").click(function() {
        $("#main").load('about.html #main');
    });

});