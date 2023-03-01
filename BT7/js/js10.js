//giải phương trình bậc 1(sonsole.log)
//giải trên html->input từ text
//a=0;b=0;
//a=0;b=123;
//a=12;b=3;
const fn_ptb1=(a,b)=>{
    console.log("giải phương trình ",a,"x+",b+"=0");
if(a==0){
    if(b==0){
        console.log("PT vô số nghiệm");
    }
    else{
        console.log("PT vô nghiệm");
    }

}
else{
    console.log("PT có nghiệm x= ",-b/a);

}
}
// fn_ptb1(0,0);
// fn_ptb1(0,3);
// fn_ptb1(2,3);