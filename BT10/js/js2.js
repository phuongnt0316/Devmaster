//cach 1:
// b1 bat event tu button để lấy được value id (eg:id=red->get value=red)
//b2 lay duocj value=red, gan #content co style color bang value (color=red=id)
$(document).ready(function(){
    $(".btn-color").click(function(){
        // b1
        var valueId = $(this).attr('id');
        // b2
        $("#content").css("color",valueId)
    })
})