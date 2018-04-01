/* $('#fullpage').fullPage({
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(index, nextIndex, direction){
        console.log("Leaving section " + index);
    }
}); */

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        anchors:['Intro', '2016', '2017', '2018'],
        parallax: true
    });
});

$(".arrow-down").each(function(k, v){
    $(v).on('click', function(){
        $.fn.fullpage.moveSectionDown();
    });
});