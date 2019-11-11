$(document).ready(function(){
    $('svg').on('mouseover', function () {
        $('#arm1').attr('y1', 150);
        $('#arm2').attr('y1', 150);
    });

    $('svg').on('mouseout', function () {
        $('#arm1').attr('y1', 200);
        $('#arm2').attr('y1', 200);
    });

});