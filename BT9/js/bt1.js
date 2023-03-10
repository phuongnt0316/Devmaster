// function login(){
//     var username=document.getElementById("userName").value;
//     var password=document.getElementById("passWord").value;
//     if(username==''){
//         alert("Bạn chưa nhập tài khoản");
//         return false;
//     }
//     if(password==''){
//         alert("Bạn chưa nhập mật khẩu");
//         return;
//     }
//     alert("Đăng nhập thành công");
// }
function reset(){
    document.getElementById("userName").value='';
    document.getElementById("passWord").value='';
    //thêm báo lỗi màu đỏ vào dưới các dòng inputs/ nếu thiếu value ở input thì focus con trỏ vào thẻ input/khi đeiền đầy đủ thông tin thì  thông báo thành công và báo các thông báo lỗi màu đỏ
}
function login(){
    let error1=document.getElementById("er1");
    let error2=document.getElementById("er2");
    var username=document.getElementById("userName");
    var password=document.getElementById("passWord").value;  
    // if(username==''){
    //     error1.innerHTML="Lỗi";
    // }
    // else{
    //     error1.innerHTML="";
    // }
    // if(password==''){
    //     error2.innerHTML="Lỗi";
    // }
    // else{
    //     error2.innerHTML="";
    // }
    // if(username!=''&&password!=''){
    //     alert('Thành công');
    // }

    if(username.value==''){
        error1.style.display='block';
        username.focus();
    }
    

}
