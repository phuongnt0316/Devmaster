$(document).ready(function(){
    $("#content").load("html.html");
    $("#main ul li a").click(function(event){
        $('a').removeClass('selected');
        id=event.target.id;
        $("#"+id).addClass('selected');
        $("#content").load(id+".html");
    })
    //

})