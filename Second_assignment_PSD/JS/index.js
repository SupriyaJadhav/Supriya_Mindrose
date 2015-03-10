/**
 * Created by Mindrose-1 on 3/3/2015.
 */
$(window).load(function() {
    $('.images_div').nivoSlider();
    $('#L32').click(function(){
        $('#L32').css("color","#766953");
        setInterval(function(){
            $('#L32').css("color","#797877");
        },5000);
    });
    $('#event_btn').click(function(){
        $('.information').show();
        $('.news_information').hide();
        $('#event_btn').css('backgroundColor','#5a5a5a');
        $('#news_btn').css('backgroundColor','#8c8c8c');
    });
    $('#news_btn').click(function(){
        $('.information').hide();
        $('.news_information').show();
        $('#news_btn').css('backgroundColor','#5a5a5a');
        $('#event_btn').css('backgroundColor','#8c8c8c');

    });
});