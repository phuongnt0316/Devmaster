function check(){
    var username= document.getElementById("name").value;
    var age=document.getElementById("age").value;
    if(age<18){
        document.writeln('Bạn chưa đủ 18 tuổi');
    }
    else{
        document.writeln(username);
    }
    //console.log(username,age);
}
function clear1(){
    document.getElementById("name").value='';
    document.getElementById("age").value='';
}